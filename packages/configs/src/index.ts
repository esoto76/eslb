import { ESLBuildOptions } from "./types";
import {
  BDir as bDir,
  EntryFileName as entryFileName,
  Extensions as extensions,
  Formats as formats,
  Input as input,
  ModFileExt as modFileExt,
  ModFileName as modFileName,
} from "./core";
import { Output as output } from "./output";

const BuildOptions: ESLBuildOptions = {
  bDir,
  entryFileName,
  extensions,
  formats,
  input,
  modFileExt,
  modFileName,
  output,
};

export default BuildOptions;

export * from "./types";
export * from "./core";
export * from "@output";
