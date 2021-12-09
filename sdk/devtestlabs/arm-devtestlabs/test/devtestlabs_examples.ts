/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { DevTestLabsClient } from "../src/devTestLabsClient";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("DevTestLabs test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: DevTestLabsClient;
  let location: string;
  let resourceGroup: string;
  let name: string;


  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new DevTestLabsClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    name = "mylabsxxx";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("labs create test", async function() {
    const res = await client.labs.beginCreateOrUpdateAndWait(resourceGroup,name,{location: location});
    assert.equal(res.name,name);
  });

  it("labs get test", async function() {
    const res = await client.labs.get(resourceGroup,name);
    assert.equal(res.name,name);
  });

  it("labs list test", async function() {
    const resArray = new Array();
    for await (let item of client.labs.listByResourceGroup(resourceGroup)){
        resArray.push(item);
    }
    assert.equal(resArray.length,1);
  });

  it("labs update test", async function() {
    const res = await client.labs.update(resourceGroup,name,{
        tags: {
            tag1: "vaue1"
        }
    });
    assert.equal(res.type,"Microsoft.DevTestLab/labs");
  });

  it("labs delete test", async function() {
    const res = await client.labs.beginDeleteAndWait(resourceGroup,name);
    const resArray = new Array();
    for await (let item of client.labs.listByResourceGroup(resourceGroup)){
        resArray.push(item);
    }
    assert.equal(resArray.length,0);
  });
});