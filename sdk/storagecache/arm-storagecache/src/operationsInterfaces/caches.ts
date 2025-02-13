/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Cache,
  CachesListOptionalParams,
  CachesListByResourceGroupOptionalParams,
  CachesDeleteOptionalParams,
  CachesGetOptionalParams,
  CachesGetResponse,
  CachesCreateOrUpdateOptionalParams,
  CachesCreateOrUpdateResponse,
  CachesUpdateOptionalParams,
  CachesUpdateResponse,
  CachesDebugInfoOptionalParams,
  CachesFlushOptionalParams,
  CachesStartOptionalParams,
  CachesStopOptionalParams,
  CachesUpgradeFirmwareOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Caches. */
export interface Caches {
  /**
   * Returns all Caches the user has access to under a subscription.
   * @param options The options parameters.
   */
  list(options?: CachesListOptionalParams): PagedAsyncIterableIterator<Cache>;
  /**
   * Returns all Caches the user has access to under a resource group.
   * @param resourceGroupName Target resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CachesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cache>;
  /**
   * Schedules a Cache for deletion.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Schedules a Cache for deletion.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns a Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesGetOptionalParams
  ): Promise<CachesGetResponse>;
  /**
   * Create or update a Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CachesCreateOrUpdateResponse>,
      CachesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesCreateOrUpdateOptionalParams
  ): Promise<CachesCreateOrUpdateResponse>;
  /**
   * Update a Cache instance.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesUpdateOptionalParams
  ): Promise<CachesUpdateResponse>;
  /**
   * Tells a Cache to write generate debug info for support to process.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginDebugInfo(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesDebugInfoOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Tells a Cache to write generate debug info for support to process.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginDebugInfoAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesDebugInfoOptionalParams
  ): Promise<void>;
  /**
   * Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see
   * errors returned until the flush is complete.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginFlush(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesFlushOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see
   * errors returned until the flush is complete.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginFlushAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesFlushOptionalParams
  ): Promise<void>;
  /**
   * Tells a Stopped state Cache to transition to Active state.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Tells a Stopped state Cache to transition to Active state.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesStartOptionalParams
  ): Promise<void>;
  /**
   * Tells an Active Cache to transition to Stopped state.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Tells an Active Cache to transition to Stopped state.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesStopOptionalParams
  ): Promise<void>;
  /**
   * Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginUpgradeFirmware(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesUpgradeFirmwareOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  beginUpgradeFirmwareAndWait(
    resourceGroupName: string,
    cacheName: string,
    options?: CachesUpgradeFirmwareOptionalParams
  ): Promise<void>;
}
