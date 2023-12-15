import {ScreenRegistryInfo} from "../types";
import {
    FlatPageProcessorInterface, ListPageProcessorInterface
} from "../../proxies";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: FlatPageProcessorInterface) => CustomComponentRegistry
    getRegisteredFlatPageComponentProcessors: () => FlatPageProcessorInterface[]
    registerListPageItemComponentProcessor: (listPageItemComponentProcessor: ListPageProcessorInterface) => CustomComponentRegistry
    getRegisteredListPageItemComponentProcessors: () => ListPageProcessorInterface[]

    getRegisteredScreens(): ScreenRegistryInfo[]

    resolveScreenKey(screen: ScreenRegistryInfo): string
}
