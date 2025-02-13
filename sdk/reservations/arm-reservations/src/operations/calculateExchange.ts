/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CalculateExchange } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPI } from "../azureReservationAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CalculateExchangeRequest,
  CalculateExchangePostOptionalParams,
  CalculateExchangePostResponse
} from "../models";

/** Class containing CalculateExchange operations. */
export class CalculateExchangeImpl implements CalculateExchange {
  private readonly client: AzureReservationAPI;

  /**
   * Initialize a new instance of the class CalculateExchange class.
   * @param client Reference to the service client
   */
  constructor(client: AzureReservationAPI) {
    this.client = client;
  }

  /**
   * Calculates price for exchanging `Reservations` if there are no policy errors.
   *
   * @param body Request containing purchases and refunds that need to be executed.
   * @param options The options parameters.
   */
  async beginPost(
    body: CalculateExchangeRequest,
    options?: CalculateExchangePostOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CalculateExchangePostResponse>,
      CalculateExchangePostResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CalculateExchangePostResponse> => {
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
      { body, options },
      postOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Calculates price for exchanging `Reservations` if there are no policy errors.
   *
   * @param body Request containing purchases and refunds that need to be executed.
   * @param options The options parameters.
   */
  async beginPostAndWait(
    body: CalculateExchangeRequest,
    options?: CalculateExchangePostOptionalParams
  ): Promise<CalculateExchangePostResponse> {
    const poller = await this.beginPost(body, options);
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Capacity/calculateExchange",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CalculateExchangeOperationResultResponse
    },
    201: {
      bodyMapper: Mappers.CalculateExchangeOperationResultResponse
    },
    202: {
      bodyMapper: Mappers.CalculateExchangeOperationResultResponse
    },
    204: {
      bodyMapper: Mappers.CalculateExchangeOperationResultResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
