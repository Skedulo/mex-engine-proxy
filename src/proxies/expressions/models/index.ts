import {FunctionExpressionType, ValueExpressionType} from "@skedulo/mex-types";
import {ExtHelper} from "../../utils";

export type BaseExpressionArgs = {
    dataContext: any
    extras?: {
        extHelper: ExtHelper
    }
}

export type ExpressionArgs = BaseExpressionArgs & {
    expressionStr : string
}

export type DataValueExpressionArgs = BaseExpressionArgs & {
    valueDef: ValueExpressionType
}

export type FunctionExpressionArgs = BaseExpressionArgs & {
    functionExpression: FunctionExpressionType
}
