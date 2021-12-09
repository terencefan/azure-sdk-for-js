/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ArtifactSource,
  ArtifactSourcesListOptionalParams,
  ArtifactSourcesGetOptionalParams,
  ArtifactSourcesGetResponse,
  ArtifactSourcesCreateOrUpdateOptionalParams,
  ArtifactSourcesCreateOrUpdateResponse,
  ArtifactSourcesDeleteOptionalParams,
  ArtifactSourceFragment,
  ArtifactSourcesUpdateOptionalParams,
  ArtifactSourcesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ArtifactSources. */
export interface ArtifactSources {
  /**
   * List artifact sources in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    options?: ArtifactSourcesListOptionalParams
  ): PagedAsyncIterableIterator<ArtifactSource>;
  /**
   * Get artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the artifact source.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ArtifactSourcesGetOptionalParams
  ): Promise<ArtifactSourcesGetResponse>;
  /**
   * Create or replace an existing artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the artifact source.
   * @param artifactSource Properties of an artifact source.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    artifactSource: ArtifactSource,
    options?: ArtifactSourcesCreateOrUpdateOptionalParams
  ): Promise<ArtifactSourcesCreateOrUpdateResponse>;
  /**
   * Delete artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the artifact source.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ArtifactSourcesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of artifact sources. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the artifact source.
   * @param artifactSource Properties of an artifact source.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    artifactSource: ArtifactSourceFragment,
    options?: ArtifactSourcesUpdateOptionalParams
  ): Promise<ArtifactSourcesUpdateResponse>;
}