import { EOL } from "os";
import colors from "colors";
import { createInterface, Interface } from "readline";
import { DiceRollEngine } from "./engine";

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
    if (line.toLowerCase().trim() === "exit") {
        console.log("exiting...");
        rl.close();
        return;
    }
    try {
        const diceRolled = engine.execute(line);
        if (diceRolled) {
            const dice = engine.getDice();
            console.log(`[${dice.join(", ")}]`);
            const result = engine.getResult();
            const outputHits = (hits: number) => `${hits} hit${hits !== 1 ? "s" : ""}`;
            if (result.criticalGlitch) {
                console.log(colors.red(`CRITICAL GLITCH`));
            } else if (result.glitch) {
                console.log(colors.yellow(`GLITCH with ${outputHits(result.hits)}`));
            } else {
                console.log(colors.green(outputHits(result.hits)));
            }
            console.log();
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