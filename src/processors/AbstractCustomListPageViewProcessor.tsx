import {BaseListPageViewComponentModel} from "@skedulo/mex-types";
import {
    ListPageProcessorInterface, ListPageViewArgs,
    ListPageViewProps
} from "./models";
import {AbstractProcessor} from "./AbstractProcessor";

export abstract class AbstractCustomListPageViewProcessor<TComponentDefinitionModel extends BaseListPageViewComponentModel>
    extends AbstractProcessor<
        ListPageViewProps<TComponentDefinitionModel>,
        ListPageViewArgs<TComponentDefinitionModel>,
        TComponentDefinitionModel> implements ListPageProcessorInterface{

    moduleName: string

    protected constructor(moduleName: string) {
        super();
        this.moduleName = moduleName
    }

    override getTypeName(): string {
        return this.moduleName + "_" + this.getCustomProcessorTypeName();
    }

    abstract getCustomProcessorTypeName(): string
}