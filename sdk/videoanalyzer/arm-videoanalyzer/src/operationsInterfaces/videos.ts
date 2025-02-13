/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VideoEntity,
  VideosListOptionalParams,
  VideosGetOptionalParams,
  VideosGetResponse,
  VideosCreateOrUpdateOptionalParams,
  VideosCreateOrUpdateResponse,
  VideosDeleteOptionalParams,
  VideosUpdateOptionalParams,
  VideosUpdateResponse,
  VideosListContentTokenOptionalParams,
  VideosListContentTokenResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Videos. */
export interface Videos {
  /**
   * Retrieves a list of video resources that have been created, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): PagedAsyncIterableIterator<VideoEntity>;
  /**
   * Retrieves an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosGetOptionalParams
  ): Promise<VideosGetResponse>;
  /**
   * Creates a new video resource or updates an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosCreateOrUpdateOptionalParams
  ): Promise<VideosCreateOrUpdateResponse>;
  /**
   * Deletes an existing video resource and its underlying data. This operation is irreversible.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates individual properties of an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosUpdateOptionalParams
  ): Promise<VideosUpdateResponse>;
  /**
   * Generates a streaming token which can be used for accessing content from video content URLs, for a
   * video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  listContentToken(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosListContentTokenOptionalParams
  ): Promise<VideosListContentTokenResponse>;
}
