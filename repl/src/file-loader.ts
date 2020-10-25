import { assert } from "console";
import { readFileSync, existsSync } from "fs-extra";
import { EOL } from "os";
import { isAbsolute } from "path";

export function loadFile(filePath: string): string[] {
    assert(isAbsolute(filePath), `File path must be absolute (you know, for security): ${filePath}`);
    assert(existsSync(filePath), `File '${filePath}' does not exist`);
    return readFileSync(filePath, { encoding: "utf-8" }).split(EOL).map(l => l.trim()).filter(l => l.length > 0);
}