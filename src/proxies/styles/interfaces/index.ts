import {ColorSchemeName} from "react-native";
import {SkedColorSet, StyleConstant} from "../models";

export interface IThemeManager{
    registerThemeChangedCallback(callback:(colorScheme:ColorSchemeName) => void): void
    removeThemeChangedCallBack(callback:(colorScheme:ColorSchemeName) => void): void
    getTheme(): ColorSchemeName
    getColorSet(): SkedColorSet
}

export interface IStylesManager {
    getStyleConst(): StyleConstant
}
