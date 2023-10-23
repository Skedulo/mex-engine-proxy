import {APIResult} from "../models";
import {Options} from "axios-hooks";
import {AxiosRequestConfig} from "axios";

export interface IAPIHooks {
    useSkedAPI<TResponse = any, TBody = any>(
        config: AxiosRequestConfig<TBody> | string,
        options?: Options
    ): APIResult<TResponse>
}

export interface INativeHooks {
    useAccessToken: () => string|null
    useBaseUrl: () => string|null
}
