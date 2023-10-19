import React from 'react'
import {token} from "brandi";
import {ColorSchemeName} from "react-native";

export const ContextProxy = {
    /*          ↓ Creates a typed token. */
    InstanceContext: token<React.Context<any>>('InstanceContext'),
    ThemeContext: token<React.Context<ColorSchemeName>>('ThemeContext'),
};
