import {ScreenRegistryInfo} from "../types";

export interface CustomComponentRegistry {
    registerScreen: (screen: ScreenRegistryInfo) => CustomComponentRegistry
    registerFlatPageComponentProcessor: (flatPageProcessor: any) => CustomComponentRegistry /* Not doing it right now */
    registerListPageItemComponentProcessor: (flatPageProcessor: any) => CustomComponentRegistry /* Not doing it right now */
    getRegisteredScreens():ScreenRegistryInfo[]
    resolveScreenKey(screen: ScreenRegistryInfo): string
}
