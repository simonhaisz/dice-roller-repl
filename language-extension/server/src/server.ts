import {
    CompletionItem,
    createConnection, Diagnostic, DidChangeConfigurationNotification, InitializeParams, InitializeResult, ProposedFeatures, TextDocuments, TextDocumentSyncKind
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { DiceParseEngine } from "./engine";

let connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params) => {
    let capabilities = params.capabilities;

    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log("Workspace folder change event received");
        });
    }
});

interface D6LanguageSettings {
    nameCaseRule: "off" | "lowercase" | "uppercase" | "camelcase";
};

const defaultSettings: D6LanguageSettings = {
    nameCaseRule: "off"
};
let globalSettings: D6LanguageSettings = defaultSettings;

let documentSettings: Map<string, Thenable<D6LanguageSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        documentSettings.clear();
    } else {
        globalSettings = <D6LanguageSettings>(change.settings.d6language || defaultSettings);
    }

    documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<D6LanguageSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (result === undefined) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: "d6language"
        });
        documentSettings.set(resource, result);
    }
    return result;
}

documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});

documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
})

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    let settings = await getDocumentSettings(textDocument.uri);

    // do some antlr stuff
    const text = textDocument.getText();

    const engine = new DiceParseEngine(text);

    const diagnostics = engine.getDiagnostics();

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
    connection.console.log("Received a file chagne event");
});

connection.onCompletion((textDocumentPosition) => {
    const completionItems: CompletionItem[] = [];

    // do some antlr stuff

    return completionItems;
});

connection.onCompletionResolve((item) => {
    item.detail = "Some detail";
    item.documentation = "Here is some documentation";
    return item;
});

documents.listen(connection);

connection.listen();