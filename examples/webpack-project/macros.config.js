import { $Ast, $Eval, $Quote, createLitMacro, defineConfig, macro } from "@macro-plugin/core"

export default defineConfig({
  macros: [
    macro,
    $Eval,
    $Ast,
    $Quote,
    createLitMacro({
      __DEV__: false
    })
  ],
  jsc: {
    parser: {
      syntax: "typescript"
    }
  }
})
