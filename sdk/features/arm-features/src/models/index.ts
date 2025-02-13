/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list Microsoft.Features operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** List of Microsoft.Features operations. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** Microsoft.Features operation */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Microsoft.Features */
  provider?: string;
  /** Resource on which the operation is performed: Profile, endpoint, etc. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
}

/** Error response indicates that the service is not able to process the incoming request. */
export interface ErrorResponse {
  /** The error details. */
  error?: ErrorDefinition;
}

/** Error definition. */
export interface ErrorDefinition {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Description of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** Internal error details. */
  details?: ErrorDefinition[];
}

/** List of previewed features. */
export interface FeatureOperationsListResult {
  /** The array of features. */
  value?: FeatureResult[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** Previewed feature information. */
export interface FeatureResult {
  /** The name of the feature. */
  name?: string;
  /** Properties of the previewed feature. */
  properties?: FeatureProperties;
  /** The resource ID of the feature. */
  id?: string;
  /** The resource type of the feature. */
  type?: string;
}

/** Information about feature. */
export interface FeatureProperties {
  /** The registration state of the feature for the subscription. */
  state?: string;
}

export interface SubscriptionFeatureRegistrationProperties {
  /**
   * The tenantId.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /**
   * The subscriptionId.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptionId?: string;
  /**
   * The featureName.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly featureName?: string;
  /**
   * The featureDisplayName.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly displayName?: string;
  /**
   * The providerNamespace.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly providerNamespace?: string;
  /** The state. */
  state?: SubscriptionFeatureRegistrationState;
  /** Authorization Profile */
  authorizationProfile?: AuthorizationProfile;
  /** Key-value pairs for meta data. */
  metadata?: { [propertyName: string]: string };
  /**
   * The feature release date.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly releaseDate?: Date;
  /**
   * The feature registration date.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registrationDate?: Date;
  /**
   * The feature documentation link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly documentationLink?: string;
  /**
   * The feature approval type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly approvalType?: SubscriptionFeatureRegistrationApprovalType;
  /** Indicates whether feature should be displayed in Portal. */
  shouldFeatureDisplayInPortal?: boolean;
  /** The feature description. */
  description?: string;
}

/** Authorization Profile */
export interface AuthorizationProfile {
  /**
   * The requested time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requestedTime?: Date;
  /**
   * The requester
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requester?: string;
  /**
   * The requester object id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requesterObjectId?: string;
  /**
   * The approved time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly approvedTime?: Date;
  /**
   * The approver
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly approver?: string;
}

/** An Azure proxy resource. */
export interface ProxyResource {
  /**
   * Azure resource Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Azure resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Azure resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The list of subscription feature registrations. */
export interface SubscriptionFeatureRegistrationList {
  /** The link used to get the next page of subscription feature registrations list. */
  nextLink?: string;
  /** The list of subscription feature registrations. */
  value?: SubscriptionFeatureRegistration[];
}

/** Subscription feature registration details */
export type SubscriptionFeatureRegistration = ProxyResource & {
  properties?: SubscriptionFeatureRegistrationProperties;
};

/** Known values of {@link SubscriptionFeatureRegistrationState} that the service accepts. */
export enum KnownSubscriptionFeatureRegistrationState {
  NotSpecified = "NotSpecified",
  NotRegistered = "NotRegistered",
  Pending = "Pending",
  Registering = "Registering",
  Registered = "Registered",
  Unregistering = "Unregistering",
  Unregistered = "Unregistered"
}

/**
 * Defines values for SubscriptionFeatureRegistrationState. \
 * {@link KnownSubscriptionFeatureRegistrationState} can be used interchangeably with SubscriptionFeatureRegistrationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **NotRegistered** \
 * **Pending** \
 * **Registering** \
 * **Registered** \
 * **Unregistering** \
 * **Unregistered**
 */
export type SubscriptionFeatureRegistrationState = string;

/** Known values of {@link SubscriptionFeatureRegistrationApprovalType} that the service accepts. */
export enum KnownSubscriptionFeatureRegistrationApprovalType {
  NotSpecified = "NotSpecified",
  ApprovalRequired = "ApprovalRequired",
  AutoApproval = "AutoApproval"
}

/**
 * Defines values for SubscriptionFeatureRegistrationApprovalType. \
 * {@link KnownSubscriptionFeatureRegistrationApprovalType} can be used interchangeably with SubscriptionFeatureRegistrationApprovalType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **ApprovalRequired** \
 * **AutoApproval**
 */
export type SubscriptionFeatureRegistrationApprovalType = string;

/** Optional parameters. */
export interface ListOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperations operation. */
export type ListOperationsResponse = OperationListResult;

/** Optional parameters. */
export interface ListOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperationsNext operation. */
export type ListOperationsNextResponse = OperationListResult;

/** Optional parameters. */
export interface FeaturesListAllOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAll operation. */
export type FeaturesListAllResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type FeaturesListResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FeaturesGetResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesRegisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the register operation. */
export type FeaturesRegisterResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesUnregisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the unregister operation. */
export type FeaturesUnregisterResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesListAllNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllNext operation. */
export type FeaturesListAllNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type FeaturesListNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SubscriptionFeatureRegistrationsGetResponse = SubscriptionFeatureRegistration;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Subscription Feature Registration Type details. */
  subscriptionFeatureRegistrationType?: SubscriptionFeatureRegistration;
}

/** Contains response data for the createOrUpdate operation. */
export type SubscriptionFeatureRegistrationsCreateOrUpdateResponse = SubscriptionFeatureRegistration;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type SubscriptionFeatureRegistrationsListBySubscriptionResponse = SubscriptionFeatureRegistrationList;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllBySubscription operation. */
export type SubscriptionFeatureRegistrationsListAllBySubscriptionResponse = SubscriptionFeatureRegistrationList;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type SubscriptionFeatureRegistrationsListBySubscriptionNextResponse = SubscriptionFeatureRegistrationList;

/** Optional parameters. */
export interface SubscriptionFeatureRegistrationsListAllBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllBySubscriptionNext operation. */
export type SubscriptionFeatureRegistrationsListAllBySubscriptionNextResponse = SubscriptionFeatureRegistrationList;

/** Optional parameters. */
export interface FeatureClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
