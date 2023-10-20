import {Token, token} from "brandi";
import {IExpressionFunctions} from "./interfaces";

export * from './interfaces'
export * from './models'

export const ExpressionProxy = {
    /*          ↓ Creates a typed token. */
    ExpressionFunctions: token<IExpressionFunctions>('ExpressionFunctions')  as Token<IExpressionFunctions>,
};
