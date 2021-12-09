/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OutboundNetworkDependenciesEndpointsListByServiceOptionalParams,
  OutboundNetworkDependenciesEndpointsListByServiceResponse
} from "../models";

/** Interface representing a OutboundNetworkDependenciesEndpoints. */
export interface OutboundNetworkDependenciesEndpoints {
  /**
   * Gets the network endpoints of all outbound dependencies of a ApiManagement service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: OutboundNetworkDependenciesEndpointsListByServiceOptionalParams
  ): Promise<OutboundNetworkDependenciesEndpointsListByServiceResponse>;
}