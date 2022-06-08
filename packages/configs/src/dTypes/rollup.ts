import type { ModuleFormat } from "rollup";

export type ESLBFormats = ModuleFormat | ModuleFormat[];

export type ESLBInputObjOption = { [entryAlias: string]: string };
