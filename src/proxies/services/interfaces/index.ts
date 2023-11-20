import {DataExpressionType, RoutingType} from "@skedulo/mex-types";
import {
    AttachmentMetadata,
    AttachmentSetting,
    Metadatacontext,
    NavigationContext,
    PageLevelDataContext
} from "../models";

export interface IAssetsManager {
    cachedPackageId: string | null
    cachedFormName: string | null
    cachedContextId: string | null
    cachedStaticResourcesId: string | null
    cachedCustomFunction: string | null
    instanceDataChangedCallbacks: any[]
    cachedToken: string | null
    cachedAPIUrl: string | null

    getResources(): any
    getInstanceData(): any
    getCustomFunction(): string | null
    getAccessToken(): Promise<string>
    getAPIUrl(): Promise<string>
    getPageLevelData(route: any): PageLevelDataContext
    getMetadata(): Metadatacontext
    sync(forceSync: boolean): Promise<boolean>
}

export interface INavigationProcessManager {
    addTrack(pageId: string): Promise<any>
    resolveTrack(pageId:string, value:any): void
    navigate(routing: RoutingType, pageData: any, navigationContext?: NavigationContext|undefined, currentDataContext?: any|undefined): Promise<any>
    goBack(output?: any|undefined): void
}

export interface IAttachmentsManager {
    getAttachmentSettings(): Promise<AttachmentSetting>
    getAttachmentDisplayUrl(downloadUrl: string): string
    addAttachments(addAttachmentRequest: any, parentContextId: string, attachmentCategoryName: string) : Promise<any>
    addSignature(addSignatureRequest: any, parentContextId: string, attachmentCategoryName: string) : Promise<any>
    deleteAttachment(deleteAttachmentUId: string): Promise<any>
    observeAttachmentsChangeForContext(
        ref: any,
        parentContextId: string,
        attachmentTypeCategoryName: "ATTACHMENT" | "SIGNATURE",
        attachmentCategoryName: string,
        action: (attachments: AttachmentMetadata[]) => void): void
    unsubscribeAttachmentsChangeForContext(
        ref: any,
        parentContextId: string,
        attachmentTypeName: "ATTACHMENT"|"SIGNATURE",
        attachmentCategoryName: string): void
}

export type InternalUtilsType =  {
    data: {
        getMandatoryExpressionValue: (def: boolean|DataExpressionType|undefined, dataContext: any) => boolean
        generateUniqSerial(tempName?: string|undefined): string
    },
    navigation: {
        exit: () => {}
    },
    misc: {}
}

export interface ILogManager {
    logError(e: Error, stack: string): Promise<void>
    trackEvent(eventName: String, properties: any): Promise<void>
}
