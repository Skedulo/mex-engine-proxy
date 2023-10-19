import {DataExpressionType, RoutingType} from "@skedulo/mex-types";
import {NavigationContext} from "../models";

export interface IAssetsManager {
    cachedPackageId: string | null
    cachedFormName: string | null
    cachedContextId: string | null
    cachedStaticResourcesId: string | null
    cachedCustomFunction: string | null
    instanceDataChangedCallbacks: any[]
    cachedToken: string | null
    cachedAPIUrl: string | null

    getResources(): any
    getInstanceData(): any
    getCustomFunction(): string | null
}

export interface INavigationProcessManager {
    addTrack(pageId: string): Promise<any>

    resolveTrack(pageId:string, value:any): void

    navigate(routing: RoutingType, pageData: any, navigationContext?: NavigationContext|undefined, currentDataContext?: any|undefined): Promise<any>

    goBack(output?: any|undefined): void
}

export type InternalUtilsType =  {
    data: {
        getMandatoryExpressionValue: (def: boolean|DataExpressionType|undefined, dataContext: any) => boolean
    },
    navigation: {
        exit: () => {}
    },
    misc: {}
}
