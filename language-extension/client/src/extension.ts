import path from "path";
import { ExtensionContext, workspace } from "vscode";
import { LanguageClient, LanguageClientOptions,	ServerOptions, TransportKind } from "vscode-languageclient";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    let serverModule = context.asAbsolutePath(path.join("server", "dist", "server.js"));

    let debugOptions = {
        execArgv: [
            "--nolazy",
            "--inspect=6009"
        ]
    };

    let serverOptions: ServerOptions = {
        run: {
            module: serverModule,
            transport: TransportKind.ipc
        },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    let clientOptions: LanguageClientOptions = {
        documentSelector: [
            {
                scheme: "file",
                language: "d6"
            }
        ],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher("**/.clientrc")
        }
    };

    client = new LanguageClient(
        "d6language",
        "D6 Language Tools",
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
