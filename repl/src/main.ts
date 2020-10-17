import { EOL } from "os";
import colors from "colors";
import { createInterface } from "readline";
import { DiceRollEngine } from "./engine";

const engine = new DiceRollEngine();

const rl = createInterface({
    input: process.stdin
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
    engine.execute(line);
    const dice = engine.getDice();
    console.log(`[${dice.join(", ")}]`);
    const result = engine.getResult();
    const outputHits = (hits: number) => `${hits} hit${hits !== 1 ? "s" : ""}`;
    if (result.criticalGlitch) {
        console.log(colors.red(`CRITICAL GLITCH`));
    } else if (result.glitch) {
        console.warn(colors.yellow(`GLITCH with ${outputHits(result.hits)}`));
    } else {
        console.log(colors.green(outputHits(result.hits)));
    }
    console.log();
});