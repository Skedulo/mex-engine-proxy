import {PromiseFn} from "react-async";
import {SkedButtonTheme} from "@skedulo/mex-types";
import {StyleProp, ViewStyle} from "react-native";

export enum SkedButtonSize {
    SMALL = 'small',
    LARGE = 'large',
}

export type SkedButtonProps = {
    textPromiseFn: PromiseFn<string>
    onPress?: (() => void) | undefined;
    theme?: SkedButtonTheme,
    disabled?: boolean | undefined
    size?: SkedButtonSize
    style: StyleProp<ViewStyle>
}
