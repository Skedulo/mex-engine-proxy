import {Token, token} from "brandi";
import {IStylesManager, IThemeManager} from "./interfaces";

export * from './models'
export * from './interfaces'

export const StylesProxy = {
    ThemeManager: token<IThemeManager>('ThemeManager') as Token<IThemeManager>,
    StylesManager: token<IStylesManager>('StylesManager') as Token<IStylesManager>,
};
