import {ScreenRegistryInfo} from "../types";
import {
    AbstractFlatPageViewProcessor,
    AbstractProcessor
} from "../../proxies";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: AbstractFlatPageViewProcessor<any, any, any>) => CustomComponentRegistry
    getRegisteredFlatPageComponentProcessors: () => AbstractFlatPageViewProcessor<any, any, any>[]
    registerListPageItemComponentProcessor: (listPageItemComponentProcessor: AbstractProcessor<any, any, any>) => CustomComponentRegistry
    getRegisteredListPageItemComponentProcessors: () => AbstractProcessor<any, any, any>[]

    getRegisteredScreens(): ScreenRegistryInfo[]

    resolveScreenKey(screen: ScreenRegistryInfo): string
}
