import {TimezoneMetadata} from "../../services";

export interface ExtHelper {
    data: ExtHelperData
    date: ExtHelperDate
    ui: ExtHelperUI
}

interface ExtHelperData {
    getTimezonesData(): TimezoneMetadata|undefined
    changeData(fn: () => void):any /* Change data in data context */
    submit(options?: ExtHelperSubmitOptions): Promise<boolean> /* Submit/Save data from current page, and automatically close page */
    translate(key: string, args?: any[]): string /* translate key from localization keys */
}

type ExtHelperSubmitOptions = {
    stopWhenInvalid?: Boolean
}

interface ExtHelperDate {
    getNowDateTime(): string /* get current date time */
}

interface ExtHelperUI {
    alert(message: string): void /* make an alert UI */
}
