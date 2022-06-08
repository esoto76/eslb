import { ESBuildFormats, ESBuildInputObjOption } from "@dTypes";

export const BDIR: string = "src";

export const EXTENSIONS: string[] = [
  ".mjs",
  ".js",
  ".jsx",
  ".json",
  ".sass",
  ".scss",
  ".ts",
  ".tsx",
  ".vue",
];

export const FNAME: string = "index.ts";

export const FORMATS: ESBuildFormats = ["cjs", "es"];

export const INPUT: ESBuildInputObjOption = { index: `${BDIR}/${FNAME}` };
