import type { InputOptions } from "rollup";

export type ESRInputOptions = Partial<
  Omit<
    InputOptions,
    "inlineDynamicImports" | "manualChunks" | "preserveModules"
  >
>;
