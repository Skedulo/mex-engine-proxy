import React from "react";

export type ScreenRegistryInfo = {
    screen: React.FC | React.FC<any>,
    key: string,
    options?: any
}
