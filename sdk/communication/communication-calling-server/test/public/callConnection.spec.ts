// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { env, record, Recorder, RecorderEnvironmentSetup } from "@azure-tools/test-recorder";
import { CallingServerClient, CreateCallConnectionOptions, PlayAudioOptions } from "../../src";
import { TestUtils } from "./utils/testUtils";
import { Context } from "mocha";
import { assert } from "chai";
import * as Constants from "./utils/constants";
import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CommunicationUserIdentifier, PhoneNumberIdentifier } from "@azure/communication-common";
const replaceableVariables: { [k: string]: string } = {
  COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING: "endpoint=https://endpoint/;accesskey=banana",
  COMMUNICATION_LIVETEST_STATIC_RESOURCE_IDENTIFIER: "016a7064-0581-40b9-be73-6dde64d69d72",
  AZURE_PHONE_NUMBER: "+15551234567",
  ALTERNATE_CALLERID: "+18445764430"
};

const environmentSetup: RecorderEnvironmentSetup = {
  replaceableVariables,
  customizationsOnRecordings: [
    (recording: string): string => recording.replace(/(https:\/\/)([^/',]*)/, "$1endpoint"),
    (recording: string): string => recording.replace("endpoint:443", "endpoint")
  ],
  queryParametersToSkip: []
};

describe("Call Connection Live Test", function() {
  describe("Call Automation Operations", function() {
    let recorder: Recorder;
    let connectionString: string;

    beforeEach(async function(this: Context) {
      recorder = record(this, environmentSetup);
      /* Place your code here*/
      connectionString = env.COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING;
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending()) {
        await recorder.stop();
      }
    });

    it("Run create_play_cancel_hangup scenario", async function(this: Context) {
      this.timeout(0);
      const to_phone_number = env.AZURE_PHONE_NUMBER;
      const callingServer = new CallingServerClient(connectionString);
      const identityClient = new CommunicationIdentityClient(connectionString);
      const from_user = await identityClient.createUser();
      const to_user: PhoneNumberIdentifier = {
        phoneNumber: to_phone_number
      };
      const from_phone_number = env.ALTERNATE_CALLERID;
      // create call option
      const createCallOptions: CreateCallConnectionOptions = {
        callbackUrl: Constants.CALLBACK_URL,
        requestedMediaTypes: ["audio"],
        requestedCallEvents: ["participantsUpdated", "toneReceived"],
        alternateCallerId: { phoneNumber: from_phone_number }
      };
      const callConnection = await callingServer.createCallConnection(
        from_user,
        [to_user],
        createCallOptions
      );
      try {
        // create PlayAudio option
        const playAudioOptions: PlayAudioOptions = {
          loop: true,
          audioFileId: recorder.getUniqueName("audioFileId"),
          callbackUrl: Constants.CALLBACK_URL,
          operationContext: recorder.getUniqueName("operationContext")
        };

        // Play Audio
        await TestUtils.delayIfLive();
        await callConnection.playAudio(Constants.Audio_File_Url, playAudioOptions);

        // Cancel Media
        await TestUtils.delayIfLive();
        await callConnection.cancelAllMediaOperations();
      } finally {
        // Hangup call
        await TestUtils.delayIfLive();
        await callConnection.hangUp();
      }
    });

    it("Run create_add_remove_hangup scenario", async function(this: Context) {
      this.timeout(0);
      const to_phone_number = env.AZURE_PHONE_NUMBER;
      const callingServer = new CallingServerClient(connectionString);
      const identityClient = new CommunicationIdentityClient(connectionString);
      const from_user = await identityClient.createUser();
      const to_user: PhoneNumberIdentifier = {
        phoneNumber: to_phone_number
      };
      const from_phone_number = env.ALTERNATE_CALLERID;
      // create call option
      const createCallOptions: CreateCallConnectionOptions = {
        callbackUrl: Constants.CALLBACK_URL,
        requestedMediaTypes: ["audio"],
        requestedCallEvents: ["participantsUpdated", "toneReceived"],
        alternateCallerId: { phoneNumber: from_phone_number }
      };
      const callConnection = await callingServer.createCallConnection(
        from_user,
        [to_user],
        createCallOptions
      );
      try {
        const added_participant_id = TestUtils.getFixedUserId(
          "0000000e-22e2-d9a2-99c6-593a0d004ca1"
        );
        const participant: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        // Add Participant
        await TestUtils.delayIfLive();
        const addParticipantResult = await callConnection.addParticipant(participant);
        assert.isNotNull(addParticipantResult.operationContext);
        assert.equal(addParticipantResult.status, "running");
        assert.isNotNull(addParticipantResult.resultDetails);

        // Remove Participant
        await TestUtils.delayIfLive();
        await callConnection.removeParticipant(participant);
      } finally {
        // Hangup call
        await TestUtils.delayIfLive();
        await callConnection.hangUp();
      }
    });
  });
});