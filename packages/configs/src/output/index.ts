import { ESLBOutputOptions } from "@/types";
import {
  OutputChunkFileNames as chunkFileNames,
  OutputDir as dir,
  OutputEntryFileNames as entryFileNames,
  OutputExports,
  OutputExternalLiveBindings as externalLiveBindings,
  OutputFormat as format,
  OutputFreeze as freeze,
  OutputGeneratedCode as generatedCode,
} from "./core";

export const Output: ESLBOutputOptions = {
  chunkFileNames,
  dir,
  entryFileNames,
  exports: OutputExports,
  externalLiveBindings,
  format,
  freeze,
  generatedCode,
};

export * from "./core";
export * from "./generated-code";
