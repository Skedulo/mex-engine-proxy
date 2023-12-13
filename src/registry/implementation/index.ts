import {CustomComponentRegistry} from "../interfaces";
import {ScreenRegistryInfo} from "../types";
import {FlatPageComponentProcessor, ListPageItemComponentProcessor} from "../../proxies";
import {BaseFlatPageViewComponentModel, BaseListPageViewComponentModel} from "@skedulo/mex-types";

export class CustomComponentRegistryImpl implements CustomComponentRegistry {

    registeredScreens: ScreenRegistryInfo[] = []
    registeredFlatPageComponentProcessors: FlatPageComponentProcessor<BaseFlatPageViewComponentModel>[] = []
    listPageItemComponentProcessors: ListPageItemComponentProcessor<BaseListPageViewComponentModel>[] = []
    moduleName: string

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    registerFlatPageComponentProcessor(flatPageComponentProcessor: FlatPageComponentProcessor<BaseFlatPageViewComponentModel>): CustomComponentRegistry {
        this.registeredFlatPageComponentProcessors.push(flatPageComponentProcessor)
        return this
    }

    getRegisteredFlatPageComponentProcessors(): FlatPageComponentProcessor<BaseFlatPageViewComponentModel>[] {
        return this.registeredFlatPageComponentProcessors
    }

    registerListPageItemComponentProcessor(listPageItemComponentProcessor: ListPageItemComponentProcessor<BaseListPageViewComponentModel>): CustomComponentRegistry {
        this.listPageItemComponentProcessors.push(listPageItemComponentProcessor)
        return this
    }

    getRegisteredListPageItemComponentProcessors(): ListPageItemComponentProcessor<BaseListPageViewComponentModel>[] {
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
