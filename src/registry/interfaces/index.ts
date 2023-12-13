import {ScreenRegistryInfo} from "../types";
import {FlatPageComponentProcessor, ListPageItemComponentProcessor} from "../../proxies";
import {BaseFlatPageViewComponentModel, BaseListPageViewComponentModel} from "@skedulo/mex-types";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: FlatPageComponentProcessor<BaseFlatPageViewComponentModel>) => CustomComponentRegistry
    getRegisteredFlatPageComponentProcessors: () => FlatPageComponentProcessor<BaseFlatPageViewComponentModel>[]
    registerListPageItemComponentProcessor: (listPageItemComponentProcessor: ListPageItemComponentProcessor<BaseListPageViewComponentModel>) => CustomComponentRegistry
    getRegisteredListPageItemComponentProcessors: () => ListPageItemComponentProcessor<BaseListPageViewComponentModel>[]

    getRegisteredScreens():ScreenRegistryInfo[]
    resolveScreenKey(screen: ScreenRegistryInfo): string
}
