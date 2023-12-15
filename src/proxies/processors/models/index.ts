import {
    BaseComponentModel,
    BaseFlatPageViewComponentModel,
    BaseListPageViewComponentModel,
    ListPageComponentModel
} from "@skedulo/mex-types";
import {NavigationContext, PageLevelDataContext} from "../../services";
export type StandardComponentArgs<TComponentDefinitionModel extends BaseComponentModel> = {
    dataContext: PageLevelDataContext
    jsonDef: TComponentDefinitionModel
    navigationContext: NavigationContext
}

export type StandardComponentProps<TComponentArgs extends StandardComponentArgs<TComponentDefinitionModel>, TComponentDefinitionModel extends BaseComponentModel> = {
    args: TComponentArgs
}

export type FlatPageViewProps<
    TComponentArgs extends FlatPageViewArgs<TComponentDefinitionModel>,
    TComponentDefinitionModel extends BaseFlatPageViewComponentModel>
    = StandardComponentProps<TComponentArgs, TComponentDefinitionModel>

export type FlatPageViewArgs<TComponentDefinitionModel extends BaseFlatPageViewComponentModel> =
    StandardComponentArgs<TComponentDefinitionModel>
    & {}

export type ListPageViewProps<TComponentDefinitionModel extends BaseListPageViewComponentModel> = StandardComponentProps<ListPageViewArgs<TComponentDefinitionModel>, TComponentDefinitionModel>

export type ListPageViewArgs<TComponentDefinitionModel extends BaseListPageViewComponentModel> =
    StandardComponentArgs<TComponentDefinitionModel>
    & {
    listPageJsonDef: ListPageComponentModel
}

export interface ProcessorInterface {
    getTypeName(): string
}

export interface ListPageProcessorInterface extends ProcessorInterface {
}

export interface FlatPageProcessorInterface extends ProcessorInterface{
}