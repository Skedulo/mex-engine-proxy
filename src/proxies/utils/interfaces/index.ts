import {TimezoneMetadata} from "../../services";
import {TimeZoneType} from "../models";

export interface ExtHelper {
    data: ExtHelperData
    date: ExtHelperDate
    ui: ExtHelperUI
}

export interface ExtHelperData {
    getTimezonesData(): TimezoneMetadata|undefined
    changeData(fn: () => void):any /* Change data in data context */
    submit(options?: ExtHelperSubmitOptions): Promise<boolean> /* Submit/Save data from current page, and automatically close page */
    translate(key: string, args?: any[]): string /* translate key from localization keys */
}

export type ExtHelperSubmitOptions = {
    stopWhenInvalid?: Boolean
}

export interface ExtHelperDate {
    getNowDateTime(): string /* get current date time */

    getLocaleDateDisplay(value: string, type: "date" | "datetime" | "time", timezone: TimeZoneType): Promise<string|undefined>
}

export interface ExtHelperUI {
    alert(message: string): void /* make an alert UI */
}
