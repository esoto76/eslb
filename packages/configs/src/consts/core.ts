import { ESLBFormats, ESLBInputObjOption } from "@dTypes";

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

export const FORMATS: ESLBFormats = ["cjs", "es"];

export const INPUT: ESLBInputObjOption = { index: `${BDIR}/${FNAME}` };
