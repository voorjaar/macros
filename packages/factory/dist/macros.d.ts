import type { ArrayExpression, BooleanLiteral, Expression, NullLiteral } from "@swc/core";
export declare const createAst: (type: string, props?: Record<string, Expression>) => Expression;
export declare const $True: BooleanLiteral;
export declare const $False: BooleanLiteral;
export declare const $Null: NullLiteral;
export declare const $Void: ArrayExpression;
export declare const $Identifier: import("@macro-plugin/core").MacroPlugin & ((value: string, optional?: boolean | undefined) => import("@swc/core").Identifier);
export declare const $StringLiteral: import("@macro-plugin/core").MacroPlugin & ((value: string, raw?: string | undefined) => import("@swc/core").StringLiteral);
export declare const $NumericLiteral: import("@macro-plugin/core").MacroPlugin & ((value: number, raw?: string | undefined) => import("@swc/core").NumericLiteral);
export declare const $BigIntLiteral: import("@macro-plugin/core").MacroPlugin & ((value: bigint, raw?: string | undefined) => import("@swc/core").BigIntLiteral);
export declare const $BooleanLiteral: import("@macro-plugin/core").MacroPlugin & ((value: boolean) => BooleanLiteral);
export declare const $RegExpLiteral: import("@macro-plugin/core").MacroPlugin & ((pattern: string, flags: string) => import("@swc/core").RegExpLiteral);
export declare const $Argument: import("@macro-plugin/core").MacroPlugin & ((expression: Expression, spread?: boolean | undefined) => import("@swc/core").Argument);
export declare const $CallExpression: import("@macro-plugin/core").MacroPlugin & ((callee: Expression | import("@swc/core").Super | import("@swc/core").Import, args?: import("@swc/core").Argument[] | undefined, typeArguments?: import("@swc/core").TsTypeParameterInstantiation | undefined) => import("@swc/core").CallExpression);
export declare const $Param: import("@macro-plugin/core").MacroPluginWithProxy;
export declare const $Invalid: import("@macro-plugin/core").MacroPlugin & (() => {
    type: string;
    span: {
        start: number;
        end: number;
        ctxt: number;
    };
});
