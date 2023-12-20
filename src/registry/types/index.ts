import React from "react";
import {FlatPageProcessorInterface, ListPageProcessorInterface} from "../../processors";

export type ScreenRegistryInfo = {
    screen: React.FC | React.FC<any>,
    key: string,
    options?: any
}

export type FlatPageProcessorRegistryInfo = {
    componentProcessor: FlatPageProcessorInterface
}

export type ListPageProcessorRegistryInfo = {
    componentProcessor: ListPageProcessorInterface
}