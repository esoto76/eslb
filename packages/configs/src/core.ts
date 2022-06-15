import { ESLBExtension, ESLBFormats, ESLBInputOption } from "./types";

export const BDir: string = "src";

export const Extensions: string[] = [
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

export const ModFileExt: ESLBExtension = ".ts";

export const ModFileName: string = "index";

export const EntryFileName: string = `${ModFileName}${ModFileExt}`;

export const Formats: ESLBFormats = ["cjs", "es"];

export const Input: ESLBInputOption = {
  index: `${BDir}/${EntryFileName}`,
};
