import {Token, token} from "brandi";
import {IAPIHooks, INativeHooks} from "./interfaces";

export * from './interfaces'
export * from './models'

export const HooksProxy = {
    APIHooks: token<IAPIHooks>('APIHooks')  as Token<IAPIHooks>,
    NativeHooks: token<INativeHooks>('NativeHooks') as Token<INativeHooks>
};
