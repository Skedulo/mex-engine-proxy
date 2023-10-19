import {DataValueExpressionArgs, ExpressionArgs, FunctionExpressionArgs} from "../models"

export interface IExpressionFunctions  {
    getValueExpression(args: ExpressionArgs): Promise<any>|any
    runFunctionExpression(args : FunctionExpressionArgs): Promise<any>|any
    setDataValueExpression(args: ExpressionArgs, value: any):void
    getRawDataValueExpression(args: ExpressionArgs):any
    getValueFromDollarSignExpression(args: ExpressionArgs): Promise<string>|string
    scanValueFromDollarSignExpression(args: ExpressionArgs): void
    getDataFromValueExpression(args : DataValueExpressionArgs): Promise<any>|any
    getValueFromLocalizedKey (args: ExpressionArgs): Promise<string>|string
    generateGetValueFromLocalizationExpressionFunc(args: ExpressionArgs): () => Promise<string>
}
