## API Report File for "@azure/arm-healthcareapis"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface CheckNameAvailabilityParameters {
    name: string;
    type: string;
}

// @public
export type CreatedByType = string;

// @public
export interface ErrorDetails {
    error?: ErrorDetailsInternal;
}

// @public
export interface ErrorDetailsInternal {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
}

// @public (undocumented)
export class HealthcareApisManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: HealthcareApisManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    operationResults: OperationResults;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    privateEndpointConnections: PrivateEndpointConnections;
    // (undocumented)
    privateLinkResources: PrivateLinkResources;
    // (undocumented)
    services: Services;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface HealthcareApisManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type Kind = "fhir" | "fhir-Stu3" | "fhir-R4";

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownManagedServiceIdentityType {
    // (undocumented)
    None = "None",
    // (undocumented)
    SystemAssigned = "SystemAssigned"
}

// @public
export enum KnownOperationResultStatus {
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Requested = "Requested",
    // (undocumented)
    Running = "Running",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export enum KnownPrivateEndpointConnectionProvisioningState {
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export enum KnownPrivateEndpointServiceConnectionStatus {
    // (undocumented)
    Approved = "Approved",
    // (undocumented)
    Pending = "Pending",
    // (undocumented)
    Rejected = "Rejected"
}

// @public
export enum KnownProvisioningState {
    // (undocumented)
    Accepted = "Accepted",
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Deprovisioned = "Deprovisioned",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Updating = "Updating",
    // (undocumented)
    Verifying = "Verifying"
}

// @public
export enum KnownPublicNetworkAccess {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Enabled = "Enabled"
}

// @public
export type ManagedServiceIdentityType = string;

// @public
export interface Operation {
    display?: OperationDisplay;
    readonly name?: string;
    readonly origin?: string;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface OperationResults {
    get(locationName: string, operationResultId: string, options?: OperationResultsGetOptionalParams): Promise<OperationResultsGetResponse>;
}

// @public
export interface OperationResultsDescription {
    readonly id?: string;
    readonly name?: string;
    properties?: any;
    readonly startTime?: string;
    readonly status?: OperationResultStatus;
}

// @public
export interface OperationResultsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationResultsGetResponse = OperationResultsDescription;

// @public
export type OperationResultStatus = string;

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface PrivateEndpoint {
    readonly id?: string;
}

// @public
export type PrivateEndpointConnection = Resource & {
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

// @public
export type PrivateEndpointConnectionDescription = PrivateEndpointConnection & {
    readonly systemData?: SystemData;
};

// @public
export interface PrivateEndpointConnectionListResultDescription {
    value?: PrivateEndpointConnectionDescription[];
}

// @public
export type PrivateEndpointConnectionProvisioningState = string;

// @public
export interface PrivateEndpointConnections {
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>, PrivateEndpointConnectionsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    listByService(resourceGroupName: string, resourceName: string, options?: PrivateEndpointConnectionsListByServiceOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnectionDescription>;
}

// @public
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnectionDescription;

// @public
export interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnectionDescription;

// @public
export interface PrivateEndpointConnectionsListByServiceOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsListByServiceResponse = PrivateEndpointConnectionListResultDescription;

// @public
export type PrivateEndpointServiceConnectionStatus = string;

// @public
export type PrivateLinkResource = Resource & {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
};

// @public
export type PrivateLinkResourceDescription = PrivateLinkResource & {
    readonly systemData?: SystemData;
};

// @public
export interface PrivateLinkResourceListResultDescription {
    value?: PrivateLinkResourceDescription[];
}

// @public
export interface PrivateLinkResources {
    get(resourceGroupName: string, resourceName: string, groupName: string, options?: PrivateLinkResourcesGetOptionalParams): Promise<PrivateLinkResourcesGetResponse>;
    listByService(resourceGroupName: string, resourceName: string, options?: PrivateLinkResourcesListByServiceOptionalParams): Promise<PrivateLinkResourcesListByServiceResponse>;
}

// @public
export interface PrivateLinkResourcesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateLinkResourcesGetResponse = PrivateLinkResourceDescription;

// @public
export interface PrivateLinkResourcesListByServiceOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateLinkResourcesListByServiceResponse = PrivateLinkResourceListResultDescription;

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description?: string;
    status?: PrivateEndpointServiceConnectionStatus;
}

// @public
export type ProvisioningState = string;

// @public
export type PublicNetworkAccess = string;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ServiceAccessPolicyEntry {
    objectId: string;
}

// @public
export interface ServiceAcrConfigurationInfo {
    loginServers?: string[];
}

// @public
export interface ServiceAuthenticationConfigurationInfo {
    audience?: string;
    authority?: string;
    smartProxyEnabled?: boolean;
}

// @public
export interface ServiceCorsConfigurationInfo {
    allowCredentials?: boolean;
    headers?: string[];
    maxAge?: number;
    methods?: string[];
    origins?: string[];
}

// @public
export interface ServiceCosmosDbConfigurationInfo {
    keyVaultKeyUri?: string;
    offerThroughput?: number;
}

// @public
export interface ServiceExportConfigurationInfo {
    storageAccountName?: string;
}

// @public
export type ServiceNameUnavailabilityReason = "Invalid" | "AlreadyExists";

// @public
export interface Services {
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, serviceDescription: ServicesDescription, options?: ServicesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServicesCreateOrUpdateResponse>, ServicesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, resourceName: string, serviceDescription: ServicesDescription, options?: ServicesCreateOrUpdateOptionalParams): Promise<ServicesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, resourceName: string, options?: ServicesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, resourceName: string, options?: ServicesDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, resourceName: string, servicePatchDescription: ServicesPatchDescription, options?: ServicesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServicesUpdateResponse>, ServicesUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, resourceName: string, servicePatchDescription: ServicesPatchDescription, options?: ServicesUpdateOptionalParams): Promise<ServicesUpdateResponse>;
    checkNameAvailability(checkNameAvailabilityInputs: CheckNameAvailabilityParameters, options?: ServicesCheckNameAvailabilityOptionalParams): Promise<ServicesCheckNameAvailabilityResponse>;
    get(resourceGroupName: string, resourceName: string, options?: ServicesGetOptionalParams): Promise<ServicesGetResponse>;
    list(options?: ServicesListOptionalParams): PagedAsyncIterableIterator<ServicesDescription>;
    listByResourceGroup(resourceGroupName: string, options?: ServicesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ServicesDescription>;
}

// @public
export interface ServicesCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesCheckNameAvailabilityResponse = ServicesNameAvailabilityInfo;

// @public
export interface ServicesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServicesCreateOrUpdateResponse = ServicesDescription;

// @public
export interface ServicesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServicesDescription = ServicesResource & {
    properties?: ServicesProperties;
    readonly systemData?: SystemData;
};

// @public
export interface ServicesDescriptionListResult {
    nextLink?: string;
    value?: ServicesDescription[];
}

// @public
export interface ServicesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesGetResponse = ServicesDescription;

// @public
export interface ServicesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesListByResourceGroupNextResponse = ServicesDescriptionListResult;

// @public
export interface ServicesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesListByResourceGroupResponse = ServicesDescriptionListResult;

// @public
export interface ServicesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesListNextResponse = ServicesDescriptionListResult;

// @public
export interface ServicesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServicesListResponse = ServicesDescriptionListResult;

// @public
export interface ServicesNameAvailabilityInfo {
    message?: string;
    readonly nameAvailable?: boolean;
    readonly reason?: ServiceNameUnavailabilityReason;
}

// @public
export interface ServicesPatchDescription {
    publicNetworkAccess?: PublicNetworkAccess;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface ServicesProperties {
    accessPolicies?: ServiceAccessPolicyEntry[];
    acrConfiguration?: ServiceAcrConfigurationInfo;
    authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
    corsConfiguration?: ServiceCorsConfigurationInfo;
    cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
    exportConfiguration?: ServiceExportConfigurationInfo;
    privateEndpointConnections?: PrivateEndpointConnection[];
    readonly provisioningState?: ProvisioningState;
    publicNetworkAccess?: PublicNetworkAccess;
}

// @public
export interface ServicesResource {
    etag?: string;
    readonly id?: string;
    identity?: ServicesResourceIdentity;
    kind: Kind;
    location: string;
    readonly name?: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface ServicesResourceIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ManagedServiceIdentityType;
}

// @public
export interface ServicesUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServicesUpdateResponse = ServicesDescription;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// (No @packageDocumentation comment for this package)

```
