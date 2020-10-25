import { EOL } from "os";
import colors from "colors";
import { createInterface, Interface } from "readline";
import { DiceRollEngine, isRollResult, isTestResult } from "./engine";
import { fail } from "assert";
import { loadFile } from "./file-loader";

let rl: Interface | undefined;

const engine = new DiceRollEngine();

const completer = (line: string): any => {
    if (rl === undefined) {
        return [[], line];
    }
    const completions = engine.getCompletions(line, rl.cursor);

    return[completions.matches, completions.sourceSymbol];
};

rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
    completer
});

rl.on("line", (line) => {
    if (line.length === 0 || line === EOL) {
        // ignore empty input
        return;
    }
    if (/^\s*exit\s*$/i.test(line)) {
        console.log("exiting...");
        rl.close();
        return;
    }
    if (/^\s*load-file\s+/i.test(line)) {
        const match = /^\s*load-file\s+(?<filepath>.*)\s*$/i.exec(line);
        if (match == undefined) {
            fail(`Line matched with the test regex but not the exec regex: ${line}`);
        }
        const filePath = match.groups["filepath"];
        if (filePath === undefined || filePath.length === 0) {
            console.log(colors.red(`no file specified to be loaded: ${line}`));
            return;
        }
        const lines = loadFile(filePath);
        engine.loadLines(lines);
        return;
    }
    try {
        const result = engine.execute(line);
        if (result === undefined) {
            return;
        }
        const hitsOuput = outputHits(result.hits);
        if (isTestResult(result)) {
            if (result.success) {
                if (result.glitch) {
                    if (result.criticalSuccess) {
                        console.log(colors.yellow(`${hitsOuput} GLITCH CRITICAL SUCCESS`));
                    } else {
                        console.log(colors.yellow(`${hitsOuput} GLITCH SUCCESS`));
                    }
                } else {
                    if (result.criticalSuccess) {
                        console.log(colors.green(`${hitsOuput} CRITICAL SUCCESS`));
                    } else {
                        console.log(colors.green(`${hitsOuput} SUCCESS`));
                    }
                }
            } else {
                if (result.criticalGlitch) {
                    console.log(colors.red(`${hitsOuput} CRITICAL GLITCH FAILURE`));
                } else if (result.glitch) {
                    console.log(colors.yellow(`${hitsOuput} GLITCH FAILURE`));
                } else {
                    console.log(colors.yellow(`${hitsOuput} FAILURE`));
                }
            }
            console.log();
        } else if (isRollResult(result)) {
            if (result.criticalGlitch) {
                console.log(colors.red(`${hitsOuput} CRITICAL GLITCH`));
            } else if (result.glitch) {
                console.log(colors.yellow(`${hitsOuput} GLITCH`));
            } else {
                console.log(colors.green(hitsOuput));
            }
            console.log();
        } else {
            fail(`Unknown result: ${JSON.stringify(result)}`);
        }
    } catch (error) {
        if (error.message.startsWith("No declaration found with name")) {
            console.log(error.message);
            console.log();
        } else {
            throw error;
        }
    }
});

function outputHits(hits: number): string {
    return `${hits} hit${hits !== 1 ? "s" : ""}`;
}