import {PromiseFn} from "react-async";
import {SkedButtonTheme} from "@skedulo/mex-types";
import {ColorValue, StyleProp, ViewProps, ViewStyle} from "react-native";
import {ImageStyle, ResizeMode} from "react-native-fast-image";

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
    style?: StyleProp<ViewStyle>
}

export type OnSignatureSavedResult = {
    imageUrl: string
}

export type OnSignatureChangedResult = {
    hasDrawing: boolean
}

export type CaptureSignatureViewProps = ViewProps & {
    onSignatureSaved: (data:OnSignatureSavedResult) => void,
    onSignatureChanged: (data:OnSignatureChangedResult) => void,
}

export type DividerProps = {
    color?: ColorValue
    style?: ViewStyle
} | undefined

export type MexAsyncProps = {
    children: (text: string) => JSX.Element|null
    promiseFn: PromiseFn<string>
}

export type SearchBarProps = {
    style?: StyleProp<ViewStyle>
    placeholder: string|undefined,
    onChangeText: (value: string) => void
}

export type SkedIconDef = {
    ios: string,
    android: string
}

export const IconTypes: {
    ChevronRight: SkedIconDef,
    BackArrow: SkedIconDef,
    Cross: SkedIconDef,
    DownArrow: SkedIconDef,
    DatePicker: SkedIconDef,
} = {
    ChevronRight: {
        ios: "ChevronRight",
        android: "ic_cell_chevron_right_2"
    },
    BackArrow: {
        ios: "Back",
        android: "ic_arrow_back"
    },
    Cross: {
        ios: "cross",
        android: "ic_cross_white"
    },
    DownArrow: {
        ios: "arrow_down",
        android: "ic_arrow_down"
    },
    DatePicker: {
        ios: 'datepicker',
        android: 'ic_date_gray',
    }
}

export interface SkedIconProps {
    iconType: SkedIconDef,
    style: any
}

export interface SkedImageProps extends ViewProps{
    uri: string
    resizeMode?: ResizeMode,
    imageStyles?: StyleProp<ImageStyle>
}
