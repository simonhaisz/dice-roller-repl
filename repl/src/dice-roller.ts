import { assert } from "console";

export function rollDice(count: number): number[] {
    const dice: number[] = [];
    for (let i = 0; i < count; i++) {
        dice.push(rollDie());
    }
    return dice;
}

export function rollDie(): number {
    const die = Math.floor(Math.random() * 6) + 1;
    assert(die >= 1 && die <= 6, `A D6 roll must fall within the range [1..6] - found ${die}`);
    return die;
}