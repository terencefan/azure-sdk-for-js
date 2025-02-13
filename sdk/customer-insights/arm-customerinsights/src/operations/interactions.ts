/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Interactions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClient } from "../customerInsightsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  InteractionResourceFormat,
  InteractionsListByHubNextOptionalParams,
  InteractionsListByHubOptionalParams,
  InteractionsCreateOrUpdateOptionalParams,
  InteractionsCreateOrUpdateResponse,
  InteractionsGetOptionalParams,
  InteractionsGetResponse,
  InteractionsListByHubResponse,
  InteractionsSuggestRelationshipLinksOptionalParams,
  InteractionsSuggestRelationshipLinksResponse,
  InteractionsListByHubNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Interactions operations. */
export class InteractionsImpl implements Interactions {
  private readonly client: CustomerInsightsManagementClient;

  /**
   * Initialize a new instance of the class Interactions class.
   * @param client Reference to the service client
   */
  constructor(client: CustomerInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets all interactions in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  public listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: InteractionsListByHubOptionalParams
  ): PagedAsyncIterableIterator<InteractionResourceFormat> {
    const iter = this.listByHubPagingAll(resourceGroupName, hubName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByHubPagingPage(resourceGroupName, hubName, options);
      }
    };
  }

  private async *listByHubPagingPage(
    resourceGroupName: string,
    hubName: string,
    options?: InteractionsListByHubOptionalParams
  ): AsyncIterableIterator<InteractionResourceFormat[]> {
    let result = await this._listByHub(resourceGroupName, hubName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHubNext(
        resourceGroupName,
        hubName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHubPagingAll(
    resourceGroupName: string,
    hubName: string,
    options?: InteractionsListByHubOptionalParams
  ): AsyncIterableIterator<InteractionResourceFormat> {
    for await (const page of this.listByHubPagingPage(
      resourceGroupName,
      hubName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates an interaction or updates an existing interaction within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param parameters Parameters supplied to the CreateOrUpdate Interaction operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    hubName: string,
    interactionName: string,
    parameters: InteractionResourceFormat,
    options?: InteractionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<InteractionsCreateOrUpdateResponse>,
      InteractionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InteractionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, hubName, interactionName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates an interaction or updates an existing interaction within a hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param parameters Parameters supplied to the CreateOrUpdate Interaction operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hubName: string,
    interactionName: string,
    parameters: InteractionResourceFormat,
    options?: InteractionsCreateOrUpdateOptionalParams
  ): Promise<InteractionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      hubName,
      interactionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified interaction.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    interactionName: string,
    options?: InteractionsGetOptionalParams
  ): Promise<InteractionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, interactionName, options },
      getOperationSpec
    );
  }

  /**
   * Gets all interactions in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  private _listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: InteractionsListByHubOptionalParams
  ): Promise<InteractionsListByHubResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, options },
      listByHubOperationSpec
    );
  }

  /**
   * Suggests relationships to create relationship links.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param interactionName The name of the interaction.
   * @param options The options parameters.
   */
  suggestRelationshipLinks(
    resourceGroupName: string,
    hubName: string,
    interactionName: string,
    options?: InteractionsSuggestRelationshipLinksOptionalParams
  ): Promise<InteractionsSuggestRelationshipLinksResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, interactionName, options },
      suggestRelationshipLinksOperationSpec
    );
  }

  /**
   * ListByHubNext
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param nextLink The nextLink from the previous successful call to the ListByHub method.
   * @param options The options parameters.
   */
  private _listByHubNext(
    resourceGroupName: string,
    hubName: string,
    nextLink: string,
    options?: InteractionsListByHubNextOptionalParams
  ): Promise<InteractionsListByHubNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, nextLink, options },
      listByHubNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InteractionResourceFormat
    },
    201: {
      bodyMapper: Mappers.InteractionResourceFormat
    },
    202: {
      bodyMapper: Mappers.InteractionResourceFormat
    },
    204: {
      bodyMapper: Mappers.InteractionResourceFormat
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.interactionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InteractionResourceFormat
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.interactionName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InteractionListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const suggestRelationshipLinksOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}/suggestRelationshipLinks",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SuggestRelationshipLinksResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.interactionName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InteractionListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
