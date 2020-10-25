import colors from "colors";

export function outputDiceRoll(diceRoll: number[], prefix: string = "") {
    console.log(`${prefix}${diceRoll.length} dice [${diceRoll.map(colorDie).join(", ")}]`);
}

function colorDie(die: number): string {
    if (die >= 5) {
        return colors.green(die.toString());
    } else if (die > 1) {
        return colors.white(die.toString());
    } else {
        return colors.red(die.toString());
    }
}