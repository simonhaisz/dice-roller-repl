import { EOL } from "os";
import colors from "colors";
import { createInterface } from "readline";
import { DiceRollEngine } from "./engine";

const engine = new DiceRollEngine();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
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