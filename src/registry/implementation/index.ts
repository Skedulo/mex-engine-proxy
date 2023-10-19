import {CustomComponentRegistry} from "../interfaces";
import {ScreenRegistryInfo} from "../types";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens:ScreenRegistryInfo[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: any): CustomComponentRegistry {
        console.log("not support yet", flatPageComponentProcessor)

        return this
    }

    registerListPageItemComponentProcessor(listPageComponentProcessor: any): CustomComponentRegistry {
        console.log("not support yet", listPageComponentProcessor)

        return this
    }

    registerScreen(screen: ScreenRegistryInfo): CustomComponentRegistry {
        this.registeredScreens.push(screen)

        return this
    }

    getRegisteredScreens():ScreenRegistryInfo[] {
        return this.registeredScreens
    }

    resolveScreenKey(screen: ScreenRegistryInfo) {
        return this.moduleName + "_" + screen.key
    }
}
