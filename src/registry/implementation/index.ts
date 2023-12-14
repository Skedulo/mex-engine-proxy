import {CustomComponentRegistry} from "../interfaces";
import {ScreenRegistryInfo} from "../types";
import {
    AbstractFlatPageViewProcessor,
    AbstractProcessor
} from "../../proxies";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens: ScreenRegistryInfo[] = []
    registeredFlatPageComponentProcessors: AbstractFlatPageViewProcessor<any, any, any>[] = []
    listPageItemComponentProcessors: AbstractProcessor<any, any, any>[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: AbstractFlatPageViewProcessor<any, any, any>): CustomComponentRegistry {
        this.registeredFlatPageComponentProcessors.push(flatPageComponentProcessor)
        return this
    }
    getRegisteredFlatPageComponentProcessors(): AbstractFlatPageViewProcessor<any, any, any>[] {
        return this.registeredFlatPageComponentProcessors
    }

    registerListPageItemComponentProcessor(listPageItemComponentProcessor: AbstractProcessor<any, any, any>): CustomComponentRegistry {
        this.listPageItemComponentProcessors.push(listPageItemComponentProcessor)
        return this
    }

    getRegisteredListPageItemComponentProcessors(): AbstractProcessor<any, any, any>[] {
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
