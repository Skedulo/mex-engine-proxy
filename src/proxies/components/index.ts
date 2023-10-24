import {Token, token} from "brandi";
import React from "react";
import {
    CaptureSignatureViewProps,
    DividerProps,
    MexAsyncProps,
    SearchBarProps,
    SkedButtonProps,
    SkedIconProps, SkedImageProps
} from "./models";

export const ComponentsProxy = {
    /*          ↓ Creates a typed token. */
    SkedButton: token<React.FC<SkedButtonProps>>('SkedButton') as Token<React.FC<SkedButtonProps>>,
    CaptureSignatureView: token<React.FC<CaptureSignatureViewProps>>('CaptureSignatureView') as Token<React.FC<CaptureSignatureViewProps>>,
    Divider: token<React.FC<DividerProps>>('Divider') as Token<React.FC<DividerProps>>,
    MexAsyncText: token<React.FC<MexAsyncProps>>('MexAsyncText') as Token<React.FC<MexAsyncProps>>,
    SearchBar: token<React.FC<SearchBarProps>>('SearchBar') as Token<React.FC<SearchBarProps>>,
    SkedIcon: token<React.FC<SkedIconProps>>('SkedIcon') as Token<React.FC<SkedIconProps>>,
    SkeduloImage: token<React.FC<SkedImageProps>>('SkeduloImage') as Token<React.FC<SkedImageProps>>,
};

export * from './models'
