import {DataExpressionType} from "@skedulo/mex-types";

export class NavigationContext {
    constructor() { }

    // This variable behaves as an additional instruction for upsert for letting the Form know where to add to the object to for the prevPageNavigationContext
    sourceExpression: string|undefined

    prevPageNavigationContext: NavigationContext|undefined

    currentDataContext:PageLevelDataContext|undefined
}

export type AttachmentMetadata = {
    uid: string
    fileName: string
    downloadURL: string
    localFileURL: string
    status: string,
    description?: string
    uploadDate: string
}

export type Metadatacontext = {
    contextObjectId: string|null,
    packageId: string
    userMetadata?: UserMetadata
    formMetadata?: FormMetadata,
    timezones?: TimezoneMetadata,
    orgPreferences?: OrgPreferences,
}

export type OrgPreferences = Record<string, any>

export type FormMetadata = {
    summary: string|undefined
    email: string|undefined
    contextObject: "Jobs"|"Resources"|undefined
    revision: number|undefined
    displayOrder: number|undefined
    mandatoryExpression: DataExpressionType|undefined
    showIf: boolean|undefined
    hasAttachments: string[]|undefined
    references: any|undefined
}

export type UserMetadata = {
    userId: string
    resourceId: string
    fullName: string
    firstName?: string
    lastName: string
    email: string
    mobilePhone?: string
    avatarUrl?: string
    address?: string
    tenantId: string
    orgName: string
    timezone: string
}

export type TimezoneMetadata = {
    local: string,
    job?: string
}

export type PageLevelDataContext = {
    pageData: any,
    formData: any,
    sharedData: any,
    originalPageData?: any,
    metadata: Metadatacontext
    item?: any
    sectionTitle?: any
    attachments?: AttachmentMetadata[]
    filter?: any
}

export type AttachmentSetting = {
    saveOriginalPhotos: boolean
}

