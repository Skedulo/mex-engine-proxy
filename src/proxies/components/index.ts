import {Token, token} from "brandi";
import React from "react";
import {SkedButtonProps} from "./models";

export const ComponentsProxy = {
    /*          ↓ Creates a typed token. */
    SkedButton: token<React.FC<SkedButtonProps>>('SkedButton') as Token<React.FC<SkedButtonProps>>
};

export * from './models'
