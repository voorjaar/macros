import { MacroOptions, createSwcPlugin, getSpanOffset, transform } from "@macro-plugin/core"
import { ParserConfig, transformSync as swcTransform } from "@swc/core"
import { addHook, buildTransformOptionsSync } from "@macro-plugin/shared"

import type { Options } from "@swc/core"

var CURRENT_CONFIG: [Options, MacroOptions, string | undefined]

function getConfig () {
  if (!CURRENT_CONFIG) CURRENT_CONFIG = buildTransformOptionsSync({})
  return CURRENT_CONFIG
}

function transformJS (src: string) {
  const macroOptions = getConfig()[1]
  return transform(src, macroOptions).code
}

function transformTS (src: string, filename: string) {
  const [swcOptions, macroOptions] = getConfig()
  const plugin = createSwcPlugin(macroOptions, src, getSpanOffset())
  const options: Options = {
    ...swcOptions,
    module: {
      ...swcOptions.module,
      // async transform is always ESM
      type: ("es6" as any)
    },
    plugin,
    filename
  }
  const isJsx = /\.(js|ts)x$/.test(filename)
  const parser: ParserConfig = /\.tsx?$/.test(filename)
    ? {
      syntax: "typescript",
      tsx: isJsx,
    }
    : {
      syntax: "ecmascript",
      jsx: isJsx
    }

  if (options.jsc) {
    options.jsc.parser = parser
  } else {
    options.jsc = {
      parser
    }
  }
  return swcTransform(src, options).code
}

addHook(
  transformJS,
  { extensions: [".js"] }
)

addHook(
  transformTS,
  { extensions: [".jsx", ".tsx", ".ts"] }
)
