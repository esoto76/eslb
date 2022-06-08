import type { ModuleFormat } from "rollup";

export type ESBuildFormats = ModuleFormat | ModuleFormat[];

export type ESBuildInputObjOption = { [entryAlias: string]: string };
