export type DiceRollResult = {
    hits: number;
    glitch: boolean;
    criticalGlitch: boolean;
}

export function getDiceRollResult(dice: number[]): DiceRollResult {
    let hits = 0;
    let ones = 0;
    let glitch = false;
    let criticalGlitch = false;
    for (const d of dice) {
        if (d >= 5) {
            hits++;
        } else if (d === 1) {
            ones++;
        }
    }
    if (ones >= Math.ceil(dice.length / 2)) {
        glitch = true;
        criticalGlitch = hits === 0;
    }
    return {
        hits,
        glitch,
        criticalGlitch
    };
}