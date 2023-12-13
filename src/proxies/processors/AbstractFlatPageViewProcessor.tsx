import {BaseFlatPageViewComponentModel} from "@skedulo/mex-types";
import {FlatPageViewArgs, FlatPageViewProps} from "./models";
import {AbstractProcessor} from "./AbstractProcessor";
import {ExpressionProxy} from "../expressions";
import {CoreContainer} from "../Container";

export abstract class AbstractFlatPageViewProcessor<
    TComponentProps extends FlatPageViewProps<TComponentArgs, TComponentDefinitionModel>,
    TComponentArgs extends FlatPageViewArgs<TComponentDefinitionModel>,
    TComponentDefinitionModel extends BaseFlatPageViewComponentModel>
    extends AbstractProcessor<TComponentProps, TComponentArgs, TComponentDefinitionModel> {

    isFullWidthLayout() {
        return false
    }

    hasTopMargin() {
        return true
    }

    /**
     * Check if the component is suitable to show
     * @param args
     */
    checkVisibility(args: TComponentArgs): boolean {
        if (!args.jsonDef.showIfExpression)
            return true /* Return true if no showIf is defined */

        const Expressions = CoreContainer.get(ExpressionProxy.ExpressionFunctions)
        return Expressions.getValueExpression({ expressionStr: args.jsonDef.showIfExpression, dataContext: args.dataContext });
    }
}