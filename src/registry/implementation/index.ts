import {CustomComponentRegistry} from "../interfaces";
import {ScreenRegistryInfo} from "../types";
import { FlatPageProcessorInterface, ListPageProcessorInterface } from "../../proxies";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens: ScreenRegistryInfo[] = []
    registeredFlatPageComponentProcessors: FlatPageProcessorInterface[] = []
    listPageItemComponentProcessors: ListPageProcessorInterface[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: FlatPageProcessorInterface): CustomComponentRegistry {
        this.registeredFlatPageComponentProcessors.push(flatPageComponentProcessor)
        return this
    }
    getRegisteredFlatPageComponentProcessors(): FlatPageProcessorInterface[] {
        return this.registeredFlatPageComponentProcessors
    }

    registerListPageItemComponentProcessor(listPageItemComponentProcessor: ListPageProcessorInterface): CustomComponentRegistry {
        this.listPageItemComponentProcessors.push(listPageItemComponentProcessor)
        return this
    }

    getRegisteredListPageItemComponentProcessors(): ListPageProcessorInterface[] {
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
