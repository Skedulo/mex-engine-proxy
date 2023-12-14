import {ScreenRegistryInfo} from "../types";
import {
    AbstractFlatPageViewProcessor,
    AbstractProcessor
} from "../../proxies";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: (typeof AbstractFlatPageViewProcessor)) => CustomComponentRegistry
    getRegisteredFlatPageComponentProcessors: () => (typeof AbstractFlatPageViewProcessor)[]
    registerListPageItemComponentProcessor: (listPageItemComponentProcessor: (typeof AbstractProcessor)) => CustomComponentRegistry
    getRegisteredListPageItemComponentProcessors: () => (typeof AbstractProcessor)[]

    getRegisteredScreens(): ScreenRegistryInfo[]

    resolveScreenKey(screen: ScreenRegistryInfo): string
}
