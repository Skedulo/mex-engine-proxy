import {BaseFlatPageViewComponentModel} from "@skedulo/mex-types";
import {FlatPageProcessorInterface, FlatPageViewArgs, FlatPageViewProps} from "./models";
import {AbstractFlatPageViewProcessor} from "./AbstractFlatPageViewProcessor";

export abstract class AbstractCustomFlatPageViewProcessor<
    TComponentProps extends FlatPageViewProps<TComponentArgs, TComponentDefinitionModel>,
    TComponentArgs extends FlatPageViewArgs<TComponentDefinitionModel>,
    TComponentDefinitionModel extends BaseFlatPageViewComponentModel>
    extends AbstractFlatPageViewProcessor<TComponentProps, TComponentArgs, TComponentDefinitionModel> implements FlatPageProcessorInterface<TComponentProps>{

    moduleName: string

    constructor(moduleName: string) {
        super();
        this.moduleName = moduleName
    }

    override getTypeName(): string {
        return this.moduleName + "_" + this.getCustomProcessorTypeName();
    }

    abstract getCustomProcessorTypeName(): string
}