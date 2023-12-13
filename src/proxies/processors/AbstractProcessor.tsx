import {observer} from "mobx-react-lite";
import {FC} from "react";
import {BaseComponentModel} from "@skedulo/mex-types";
import {StandardComponentArgs, StandardComponentProps} from "./models";

export abstract class AbstractProcessor<
    TComponentProps extends StandardComponentProps<TComponentArgs,TComponentDefinitionModel>,
    TComponentArgs extends StandardComponentArgs<TComponentDefinitionModel>,
    TComponentDefinitionModel extends BaseComponentModel> {
    VirtualComponent: FC<TComponentProps> | null = null;

    /**
     * @returns function(*): JSX.Element
     */
    generateComponent(): FC<TComponentProps> {

        if (this.VirtualComponent) {
            return this.VirtualComponent;
        }

        if (this.useObservable()) {
            // only render observable component if the component using expression
            this.VirtualComponent = observer<TComponentProps>(({args}: TComponentProps) => {
                return this.generateInnerComponent(args);
            });
        } else {
            // just render a pure component that won't have any observer
            this.VirtualComponent = ({args}) => {
                return this.generateInnerComponent(args)
            }
        }

        return this.VirtualComponent;

    }

    /**
     * This method will generate component base on which dataContext passed on and jsonDef
     * @returns JSX.Element
     */
    abstract generateInnerComponent(args: TComponentArgs): JSX.Element;

    /**
     * @returns {string}
     */
    abstract getTypeName(): string

    useObservable(): boolean {
        return false;
    }
}