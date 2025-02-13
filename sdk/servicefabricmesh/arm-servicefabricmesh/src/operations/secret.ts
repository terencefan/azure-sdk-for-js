/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Secret } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricMeshManagementClient } from "../serviceFabricMeshManagementClient";
import {
  SecretResourceDescription,
  SecretListByResourceGroupNextOptionalParams,
  SecretListByResourceGroupOptionalParams,
  SecretListBySubscriptionNextOptionalParams,
  SecretListBySubscriptionOptionalParams,
  SecretCreateOptionalParams,
  SecretCreateResponse,
  SecretGetOptionalParams,
  SecretGetResponse,
  SecretDeleteOptionalParams,
  SecretListByResourceGroupResponse,
  SecretListBySubscriptionResponse,
  SecretListByResourceGroupNextResponse,
  SecretListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Secret operations. */
export class SecretImpl implements Secret {
  private readonly client: ServiceFabricMeshManagementClient;

  /**
   * Initialize a new instance of the class Secret class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceFabricMeshManagementClient) {
    this.client = client;
  }

  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the Secret.
   * @param resourceGroupName Azure resource group name
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SecretListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SecretResourceDescription> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SecretListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SecretResourceDescription[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SecretListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SecretResourceDescription> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the secret.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SecretListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SecretResourceDescription> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SecretListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SecretResourceDescription[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SecretListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SecretResourceDescription> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates a secret resource with the specified name, description and properties. If a secret resource
   * with the same name exists, then it is updated with the specified description and properties.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretResourceDescription Description for creating a secret resource.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    secretResourceName: string,
    secretResourceDescription: SecretResourceDescription,
    options?: SecretCreateOptionalParams
  ): Promise<SecretCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        secretResourceDescription,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Gets the information about the secret resource with the given name. The information include the
   * description and other properties of the secret.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    secretResourceName: string,
    options?: SecretGetOptionalParams
  ): Promise<SecretGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, secretResourceName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the secret resource identified by the name.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    secretResourceName: string,
    options?: SecretDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, secretResourceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the Secret.
   * @param resourceGroupName Azure resource group name
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SecretListByResourceGroupOptionalParams
  ): Promise<SecretListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the secret.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SecretListBySubscriptionOptionalParams
  ): Promise<SecretListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Azure resource group name
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SecretListByResourceGroupNextOptionalParams
  ): Promise<SecretListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SecretListBySubscriptionNextOptionalParams
  ): Promise<SecretListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescription
    },
    201: {
      bodyMapper: Mappers.SecretResourceDescription
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.secretResourceDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
