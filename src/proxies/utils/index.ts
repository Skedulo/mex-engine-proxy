import {ExtHelper} from "./interfaces";

export * from './interfaces'
import {Token, token} from "brandi";

export * from './models'
export * from './interfaces'

export const UtilsProxy = {
    /*          ↓ Creates a typed token. */
    ExtHelper: token<ExtHelper>('ExtHelper') as Token<ExtHelper>,
};
