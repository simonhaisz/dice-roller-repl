import { count } from "console";
import { DicePool } from "./dice-pool";
import { DiceRollResult, getDiceRollResult } from "./dice-roll-result";
import { rollDie } from "./dice-roller";

export enum TestType {
    Success,
    Opposed,
    Extended
}

export type TestResult = DiceRollResult & {
    threshold: number;
    netHits: number;
    success: boolean;
    criticalSuccess: boolean;
    rolls?: number;
}

export function makeSuccessTest(dicePool: DicePool, count: number, threshold: number): TestResult {
    const diceRoll = dicePool.roll(count);
    const rollResult = getDiceRollResult(diceRoll);
    return getTestResult(rollResult.hits, rollResult.glitch, rollResult.criticalGlitch, threshold);
}

export function makeOpposedTest(leftDicePool: DicePool, leftCount: number, rightDicePool: DicePool, rightCount: number): TestResult {
    const leftDiceRoll = leftDicePool.roll(leftCount, `Attacker: `);
    const leftRollResult = getDiceRollResult(leftDiceRoll);
    const rightDiceRoll = rightDicePool.roll(rightCount, `Defender: `);
    const rightRollResult = getDiceRollResult(rightDiceRoll);

    return getTestResult(leftRollResult.hits, leftRollResult.glitch, leftRollResult.criticalGlitch, rightRollResult.hits);
}

export function makeExtendedTest(dicePool: DicePool, count: number, threshold: number): TestResult {
    let hits = 0;
    let glitch = false;
    let criticalGlitch = false;
    let rollCount = 0;
    while (count > 0 && hits < threshold) {
        const diceRoll = dicePool.roll(count, `Roll ${++rollCount}: `);
        const rollResult = getDiceRollResult(diceRoll);
        if (rollResult.criticalGlitch) {
            criticalGlitch = true;
            // critical glitch on any roll automatically fails the extended test
            break;
        }
        hits += rollResult.hits;
        if (rollResult.glitch) {
            glitch = true;
            // glitch on any roll reduces the total hits by 1D6
            // if it reduces the total to zero automatically fail the extended test
            hits -= rollDie();
            if (hits <= 0) {
                break;
            }
        }
        count--;
    }
    return getTestResult(hits, glitch, criticalGlitch, threshold)
}

function getTestResult(hits: number, glitch: boolean, criticalGlitch: boolean, threshold: number): TestResult {
    const netHits = hits - threshold;
    const success = netHits >= 0;
    const criticalSuccess = netHits >= 4;
    return {
        hits,
        glitch,
        criticalGlitch,
        threshold,
        netHits,
        success,
        criticalSuccess
    };
}