import {FlatPageProcessorRegistryInfo, ListPageProcessorRegistryInfo, ScreenRegistryInfo} from "../types";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: FlatPageProcessorRegistryInfo) => CustomComponentRegistry
    getRegisteredFlatPageComponentProcessors: () => FlatPageProcessorRegistryInfo[]
    registerListPageItemComponentProcessor: (listPageItemComponentProcessor: ListPageProcessorRegistryInfo) => CustomComponentRegistry
    getRegisteredListPageItemComponentProcessors: () => ListPageProcessorRegistryInfo[]

    getRegisteredScreens(): ScreenRegistryInfo[]

    resolveScreenKey(screen: ScreenRegistryInfo): string
}
