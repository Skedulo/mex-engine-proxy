import {CustomComponentRegistry} from "../interfaces";
import {FlatPageProcessorRegistryInfo, ListPageProcessorRegistryInfo, ScreenRegistryInfo} from "../types";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens: ScreenRegistryInfo[] = []
    registeredFlatPageComponentProcessors: FlatPageProcessorRegistryInfo[] = []
    listPageItemComponentProcessors: ListPageProcessorRegistryInfo[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: FlatPageProcessorRegistryInfo): CustomComponentRegistry {
        this.registeredFlatPageComponentProcessors.push(flatPageComponentProcessor)
        return this
    }
    getRegisteredFlatPageComponentProcessors(): FlatPageProcessorRegistryInfo[] {
        return this.registeredFlatPageComponentProcessors
    }

    registerListPageItemComponentProcessor(listPageItemComponentProcessor: ListPageProcessorRegistryInfo): CustomComponentRegistry {
        this.listPageItemComponentProcessors.push(listPageItemComponentProcessor)
        return this
    }

    getRegisteredListPageItemComponentProcessors(): ListPageProcessorRegistryInfo[] {
        return this.listPageItemComponentProcessors
    }

    registerScreen(screen: ScreenRegistryInfo): CustomComponentRegistry {
        this.registeredScreens.push(screen)
        return this
    }

    getRegisteredScreens(): ScreenRegistryInfo[] {
        return this.registeredScreens
    }

    resolveScreenKey(screen: ScreenRegistryInfo) {
        return this.moduleName + "_" + screen.key
    }
}
