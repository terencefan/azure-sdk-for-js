/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  UserIdentityContract,
  UserIdentitiesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a UserIdentities. */
export interface UserIdentities {
  /**
   * List of all user identities.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    options?: UserIdentitiesListOptionalParams
  ): PagedAsyncIterableIterator<UserIdentityContract>;
}