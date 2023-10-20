import React from 'react'
import { Token, token} from "brandi";
import {ColorSchemeName} from "react-native";

export const ContextProxy = {
    /*          ↓ Creates a typed token. */
    InstanceContext: token<React.Context<any>>('InstanceContext') as Token<React.Context<any>>,
    ThemeContext: token<React.Context<ColorSchemeName>>('ThemeContext') as Token<React.Context<ColorSchemeName>>,
};
