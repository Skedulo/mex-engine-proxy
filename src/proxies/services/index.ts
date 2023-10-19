import {token} from "brandi";
import {IAssetsManager, INavigationProcessManager, InternalUtilsType} from "./interfaces";

export * from './models'
export * from './interfaces'

export const ServicesProxy = {
    /*          ↓ Creates a typed token. */
    AssetsManager: token<IAssetsManager>('AssetsManager'),
    NavigationProcessManager: token<INavigationProcessManager>('NavigationProcessManager'),
    InternalUtils: token<InternalUtilsType>('InternalUtils')
};
