import { assert } from "console";

export function rollDice(count: number): number[] {
    const dice: number[] = [];
    for (let i = 0; i < count; i++) {
        dice.push(rollDie());
    }
    return dice;
}

export function rollExplodingDice(count: number): number[] {
    const dice: number[] = [];
    let poolCount = count;
    while (poolCount > 0) {
        const pool = rollDice(poolCount);
        dice.push(...pool);
        poolCount = pool.filter(d => d === 6).length;
    }
    return dice;
}

export function rollDie(): number {
    const die = Math.floor(Math.random() * 6) + 1;
    assert(die >= 1 && die <= 6, `A D6 roll must fall within the range [1..6] - found ${die}`);
    return die;
}