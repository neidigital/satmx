import fs from "fs";
import path from "path";

export const buildFolder = "./output";

export function catalogList() {
    const catalog = fs.readdirSync(buildFolder);
    return catalog.map((file) => {
        return {
            name: path.basename(file, ".json")
        };
    });
}

