import { rollDice, rollDie, rollExplodingDice } from "./dice-roller";

export class DicePool {
    private dice: number[];
    private explodeDice: boolean;

    constructor() {
        this.dice = [];
        this.explodeDice = false;
    }

    roll(count: number) {
        if (this.explodeDice) {
            this.dice = rollExplodingDice(count);
        } else {
            this.dice = rollDice(count);
        }
    }

    reRollFailures() {
        this.reRoll(d => d < 5);
    }

    private reRoll(predicate: (die: number) => boolean) {
        for (let i = 0; i < this.dice.length; i++) {
            const d = this.dice[i];
            if (predicate(d)) {
                this.dice[i] = rollDie();
            }
        }
    }

    toggleExplodingDice(toggle: boolean) {
        this.explodeDice = toggle;
    }

    getDice(): number[] {
        return this.dice;
    }
}