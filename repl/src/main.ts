import { EOL } from "os";
import { createInterface } from "readline";
import { DiceRollEngine } from "./engine";

const engine = new DiceRollEngine();

const rl = createInterface({
    input: process.stdin
});

rl.on("line", (line) => {
    if (line.toLowerCase().trim() === "exit") {
        console.log("exiting...");
        rl.close();
        return;
    }
    engine.execute(line);
    const dice = engine.getResult();
    console.log(`[${dice.join(", ")}]`);
});