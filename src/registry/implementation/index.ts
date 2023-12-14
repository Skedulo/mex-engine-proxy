import {CustomComponentRegistry} from "../interfaces";
import {ScreenRegistryInfo} from "../types";
import {
    AbstractFlatPageViewProcessor,
    AbstractProcessor
} from "../../proxies";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens: ScreenRegistryInfo[] = []
    registeredFlatPageComponentProcessors: (typeof AbstractFlatPageViewProcessor)[] = []
    listPageItemComponentProcessors: (typeof AbstractProcessor)[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: (typeof AbstractFlatPageViewProcessor)): CustomComponentRegistry {
        this.registeredFlatPageComponentProcessors.push(flatPageComponentProcessor)
        return this
    }
    getRegisteredFlatPageComponentProcessors(): (typeof AbstractFlatPageViewProcessor)[] {
        return this.registeredFlatPageComponentProcessors
    }

    registerListPageItemComponentProcessor(listPageItemComponentProcessor: (typeof AbstractProcessor)): CustomComponentRegistry {
        this.listPageItemComponentProcessors.push(listPageItemComponentProcessor)
        return this
    }

    getRegisteredListPageItemComponentProcessors(): (typeof AbstractProcessor)[] {
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
