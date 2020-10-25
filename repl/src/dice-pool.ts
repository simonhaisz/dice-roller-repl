import { assert } from "console";
import { rollDice, rollDie, rollExplodingDice } from "./dice-roller";
import { outputDiceRoll } from "./output";

export class DicePool {
    private diceRolls: number[][];
    private explodeDice: boolean;
    private rolling: boolean;

    constructor() {
        this.diceRolls = [];
        this.explodeDice = false;
        this.rolling = false;
    }

    roll(count: number, outputPrefix: string = ""): number[] {
        if (!this.rolling) {
            // clear previous dice from the previous roll
            this.diceRolls.length = 0;
            this.rolling = true;
        }
        let diceRoll: number[];
        if (this.explodeDice) {
            diceRoll = rollExplodingDice(count);
            // using edge should only apply to the current roll
            this.explodeDice = false;
        } else {
            diceRoll = rollDice(count);
        }
        outputDiceRoll(diceRoll, outputPrefix);
        // add to the current dice
        this.diceRolls.push(diceRoll);
        return diceRoll;
    }

    reRollFailures() {
        this.reRoll(d => d < 5);
    }

    private reRoll(predicate: (die: number) => boolean) {
        assert(this.diceRolls.length > 0, `Must have made at least one roll in order to re-roll`);
        const diceRoll = this.diceRolls[this.diceRolls.length - 1];
        for (let i = 0; i < diceRoll.length; i++) {
            const d = diceRoll[i];
            if (predicate(d)) {
                diceRoll[i] = rollDie();
            }
        }
        outputDiceRoll(diceRoll, `Re-roll: `);
    }

    toggleExplodingDiceOn() {
        this.explodeDice = true;
    }

    completedRoll() {
        this.explodeDice = false;
        this.rolling = false;
    }

    getDiceRolls(): number[][] {
        return this.diceRolls;
    }
}