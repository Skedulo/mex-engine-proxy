export type APIResult<T> = {
    isLoading: boolean,
    error?: Error,
    data?: T
}
