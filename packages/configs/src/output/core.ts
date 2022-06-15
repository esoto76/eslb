import type { GeneratedCodeOptions, ModuleFormat } from "rollup";
import { OutputGeneratedCodeConstBindings as constBindings } from "./generated-code";

export const OutputChunkFileNames: string = "[name].js";

export const OutputDir: string = "dist";

export const OutputEntryFileNames: string = OutputChunkFileNames;

export const OutputExports: "default" | "named" | "none" | "auto" = "named";

export const OutputExternalLiveBindings: boolean = false;

export const OutputFormat: ModuleFormat = "cjs";

export const OutputFreeze: boolean = false;

export const OutputGeneratedCode: GeneratedCodeOptions = { constBindings };
