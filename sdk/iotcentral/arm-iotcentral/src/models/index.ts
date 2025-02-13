/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Information about the SKU of the IoT Central application. */
export interface AppSkuInfo {
  /** The name of the SKU. */
  name: AppSku;
}

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (either system assigned, or none). */
  type: SystemAssignedServiceIdentityType;
}

/** The common properties of an ARM resource. */
export interface Resource {
  /**
   * The ARM resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The ARM resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource location. */
  location: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Error details. */
export interface CloudError {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** Details of error response. */
export interface CloudErrorBody {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The description of the IoT Central application. */
export interface AppPatch {
  /** Instance tags */
  tags?: { [propertyName: string]: string };
  /** A valid instance SKU. */
  sku?: AppSkuInfo;
  /** The managed identities for the IoT Central application. */
  identity?: SystemAssignedServiceIdentity;
  /**
   * The ID of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly applicationId?: string;
  /** The display name of the application. */
  displayName?: string;
  /** The subdomain of the application. */
  subdomain?: string;
  /** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
  template?: string;
  /**
   * The current state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: AppState;
}

/** A list of IoT Central Applications with a next link. */
export interface AppListResult {
  /** The link used to get the next page of IoT Central Applications. */
  nextLink?: string;
  /** A list of IoT Central Applications. */
  value?: App[];
}

/** Input values. */
export interface OperationInputs {
  /** The name of the IoT Central application instance to check. */
  name: string;
  /** The type of the IoT Central resource to query. */
  type?: string;
}

/** The properties indicating whether a given IoT Central application name or subdomain is available. */
export interface AppAvailabilityInfo {
  /**
   * The value which indicates whether the provided name is available.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason for unavailability.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reason?: string;
  /**
   * The detailed reason message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** A list of IoT Central Application Templates with a next link. */
export interface AppTemplatesResult {
  /** The link used to get the next page of IoT Central application templates. */
  nextLink?: string;
  /**
   * A list of IoT Central Application Templates.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: AppTemplate[];
}

/** IoT Central Application Template. */
export interface AppTemplate {
  /**
   * The ID of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manifestId?: string;
  /**
   * The version of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manifestVersion?: string;
  /**
   * The name of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The title of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly title?: string;
  /**
   * The order of the template in the templates list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly order?: number;
  /**
   * The description of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The industry of the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly industry?: string;
  /**
   * A list of locations that support the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly locations?: AppTemplateLocations[];
}

/** IoT Central Application Template Locations. */
export interface AppTemplateLocations {
  /**
   * The ID of the location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The display name of the location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly displayName?: string;
}

/** A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** The link used to get the next page of IoT Central description objects. */
  nextLink?: string;
  /**
   * A list of operations supported by the Microsoft.IoTCentral resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
}

/** IoT Central REST API operation */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: string;
  /**
   * Additional descriptions for the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: Record<string, unknown>;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft IoT Central
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource Type: IoT Central
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** The IoT Central application. */
export type App = Resource & {
  /** A valid instance SKU. */
  sku: AppSkuInfo;
  /** The managed identities for the IoT Central application. */
  identity?: SystemAssignedServiceIdentity;
  /**
   * The ID of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly applicationId?: string;
  /** The display name of the application. */
  displayName?: string;
  /** The subdomain of the application. */
  subdomain?: string;
  /** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
  template?: string;
  /**
   * The current state of the application.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: AppState;
};

/** Known values of {@link AppState} that the service accepts. */
export enum KnownAppState {
  Created = "created",
  Suspended = "suspended"
}

/**
 * Defines values for AppState. \
 * {@link KnownAppState} can be used interchangeably with AppState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **created** \
 * **suspended**
 */
export type AppState = string;

/** Known values of {@link AppSku} that the service accepts. */
export enum KnownAppSku {
  ST0 = "ST0",
  ST1 = "ST1",
  ST2 = "ST2"
}

/**
 * Defines values for AppSku. \
 * {@link KnownAppSku} can be used interchangeably with AppSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ST0** \
 * **ST1** \
 * **ST2**
 */
export type AppSku = string;

/** Known values of {@link SystemAssignedServiceIdentityType} that the service accepts. */
export enum KnownSystemAssignedServiceIdentityType {
  None = "None",
  SystemAssigned = "SystemAssigned"
}

/**
 * Defines values for SystemAssignedServiceIdentityType. \
 * {@link KnownSystemAssignedServiceIdentityType} can be used interchangeably with SystemAssignedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned**
 */
export type SystemAssignedServiceIdentityType = string;

/** Optional parameters. */
export interface AppsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AppsGetResponse = App;

/** Optional parameters. */
export interface AppsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AppsCreateOrUpdateResponse = App;

/** Optional parameters. */
export interface AppsUpdateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AppsUpdateResponse = App;

/** Optional parameters. */
export interface AppsDeleteOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface AppsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AppsListBySubscriptionResponse = AppListResult;

/** Optional parameters. */
export interface AppsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AppsListByResourceGroupResponse = AppListResult;

/** Optional parameters. */
export interface AppsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type AppsCheckNameAvailabilityResponse = AppAvailabilityInfo;

/** Optional parameters. */
export interface AppsCheckSubdomainAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkSubdomainAvailability operation. */
export type AppsCheckSubdomainAvailabilityResponse = AppAvailabilityInfo;

/** Optional parameters. */
export interface AppsListTemplatesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listTemplates operation. */
export type AppsListTemplatesResponse = AppTemplatesResult;

/** Optional parameters. */
export interface AppsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AppsListBySubscriptionNextResponse = AppListResult;

/** Optional parameters. */
export interface AppsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AppsListByResourceGroupNextResponse = AppListResult;

/** Optional parameters. */
export interface AppsListTemplatesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listTemplatesNext operation. */
export type AppsListTemplatesNextResponse = AppTemplatesResult;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface IotCentralClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
