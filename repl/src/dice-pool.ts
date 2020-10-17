import { rollDice, rollDie } from "./dice-roller";

export class DicePool {
    private dice: number[];

    constructor() {
        this.dice = [];
    }

    roll(count: number) {
        this.dice = rollDice(count);
    }

    reRoll(predicate: (die: number) => boolean) {
        for (let i = 0; i < this.dice.length; i++) {
            const d = this.dice[i];
            if (predicate(d)) {
                this.dice[i] = rollDie();
            }
        }
    }

    getDice(): number[] {
        return this.dice;
    }
}