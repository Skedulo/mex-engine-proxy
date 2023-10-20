import {Token, token} from "brandi";
import {IAssetsManager, INavigationProcessManager, InternalUtilsType} from "./interfaces";

export * from './models'
export * from './interfaces'

export const ServicesProxy = {
    /*          ↓ Creates a typed token. */
    AssetsManager: token<IAssetsManager>('AssetsManager') as Token<IAssetsManager>,
    NavigationProcessManager: token<INavigationProcessManager>('NavigationProcessManager') as Token<INavigationProcessManager>,
    InternalUtils: token<InternalUtilsType>('InternalUtils') as Token<InternalUtilsType>
};
