/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ApiOperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiOperationListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiOperation"
            }
          }
        }
      }
    }
  }
};

export const ApiOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiOperation",
    modelProperties: {
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ApiOperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ApiOperationPropertiesServiceSpecification"
        }
      }
    }
  }
};

export const ApiOperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiOperationDisplay",
    modelProperties: {
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiOperationPropertiesServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiOperationPropertiesServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const MetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      supportedAggregationTypes: {
        serializedName: "supportedAggregationTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      metricClass: {
        serializedName: "metricClass",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricDimension"
            }
          }
        }
      }
    }
  }
};

export const MetricDimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricDimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkusResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      }
    }
  }
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities"
            }
          }
        }
      },
      locations: {
        serializedName: "locations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locationInfo: {
        serializedName: "locationInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuLocationInfo"
            }
          }
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      restrictions: {
        serializedName: "restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Restriction"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuCapabilities: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuCapabilities",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkuLocationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Restriction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Restriction",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageModelsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageModelsResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UsageModel"
            }
          }
        }
      }
    }
  }
};

export const UsageModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageModel",
    modelProperties: {
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "UsageModelDisplay"
        }
      },
      modelName: {
        serializedName: "modelName",
        type: {
          name: "String"
        }
      },
      targetType: {
        serializedName: "targetType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageModelDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageModelDisplay",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AscOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AscOperation",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      },
      output: {
        serializedName: "properties.output",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CachesListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CachesListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cache"
            }
          }
        }
      }
    }
  }
};

export const Cache: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Cache",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          Pattern: new RegExp("^[-0-9a-zA-Z_]{1,80}$")
        },
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "CacheIdentity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CacheSku"
        }
      },
      cacheSizeGB: {
        serializedName: "properties.cacheSizeGB",
        type: {
          name: "Number"
        }
      },
      health: {
        serializedName: "properties.health",
        type: {
          name: "Composite",
          className: "CacheHealth"
        }
      },
      mountAddresses: {
        serializedName: "properties.mountAddresses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "String"
        }
      },
      upgradeStatus: {
        serializedName: "properties.upgradeStatus",
        type: {
          name: "Composite",
          className: "CacheUpgradeStatus"
        }
      },
      networkSettings: {
        serializedName: "properties.networkSettings",
        type: {
          name: "Composite",
          className: "CacheNetworkSettings"
        }
      },
      encryptionSettings: {
        serializedName: "properties.encryptionSettings",
        type: {
          name: "Composite",
          className: "CacheEncryptionSettings"
        }
      },
      securitySettings: {
        serializedName: "properties.securitySettings",
        type: {
          name: "Composite",
          className: "CacheSecuritySettings"
        }
      },
      directoryServicesSettings: {
        serializedName: "properties.directoryServicesSettings",
        type: {
          name: "Composite",
          className: "CacheDirectorySettings"
        }
      }
    }
  }
};

export const CacheIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentitiesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CacheHealth: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheHealth",
    modelProperties: {
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      statusDescription: {
        serializedName: "statusDescription",
        type: {
          name: "String"
        }
      },
      conditions: {
        serializedName: "conditions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Condition"
            }
          }
        }
      }
    }
  }
};

export const Condition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Condition",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheUpgradeStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheUpgradeStatus",
    modelProperties: {
      currentFirmwareVersion: {
        serializedName: "currentFirmwareVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      firmwareUpdateStatus: {
        serializedName: "firmwareUpdateStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      firmwareUpdateDeadline: {
        serializedName: "firmwareUpdateDeadline",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastFirmwareUpdate: {
        serializedName: "lastFirmwareUpdate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      pendingFirmwareVersion: {
        serializedName: "pendingFirmwareVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheNetworkSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheNetworkSettings",
    modelProperties: {
      mtu: {
        defaultValue: 1500,
        constraints: {
          InclusiveMaximum: 1500,
          InclusiveMinimum: 576
        },
        serializedName: "mtu",
        type: {
          name: "Number"
        }
      },
      utilityAddresses: {
        serializedName: "utilityAddresses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dnsServers: {
        serializedName: "dnsServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dnsSearchDomain: {
        serializedName: "dnsSearchDomain",
        type: {
          name: "String"
        }
      },
      ntpServer: {
        defaultValue: "time.windows.com",
        serializedName: "ntpServer",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheEncryptionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheEncryptionSettings",
    modelProperties: {
      keyEncryptionKey: {
        serializedName: "keyEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultKeyReference"
        }
      },
      rotationToLatestKeyVersionEnabled: {
        serializedName: "rotationToLatestKeyVersionEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyVaultKeyReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultKeyReference",
    modelProperties: {
      keyUrl: {
        serializedName: "keyUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "KeyVaultKeyReferenceSourceVault"
        }
      }
    }
  }
};

export const KeyVaultKeyReferenceSourceVault: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultKeyReferenceSourceVault",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheSecuritySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheSecuritySettings",
    modelProperties: {
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NfsAccessPolicy"
            }
          }
        }
      }
    }
  }
};

export const NfsAccessPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NfsAccessPolicy",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      accessRules: {
        serializedName: "accessRules",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NfsAccessRule"
            }
          }
        }
      }
    }
  }
};

export const NfsAccessRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NfsAccessRule",
    modelProperties: {
      scope: {
        serializedName: "scope",
        required: true,
        type: {
          name: "String"
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      access: {
        serializedName: "access",
        required: true,
        type: {
          name: "String"
        }
      },
      suid: {
        serializedName: "suid",
        type: {
          name: "Boolean"
        }
      },
      submountAccess: {
        serializedName: "submountAccess",
        type: {
          name: "Boolean"
        }
      },
      rootSquash: {
        serializedName: "rootSquash",
        type: {
          name: "Boolean"
        }
      },
      anonymousUID: {
        serializedName: "anonymousUID",
        type: {
          name: "String"
        }
      },
      anonymousGID: {
        serializedName: "anonymousGID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheDirectorySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheDirectorySettings",
    modelProperties: {
      activeDirectory: {
        serializedName: "activeDirectory",
        type: {
          name: "Composite",
          className: "CacheActiveDirectorySettings"
        }
      },
      usernameDownload: {
        serializedName: "usernameDownload",
        type: {
          name: "Composite",
          className: "CacheUsernameDownloadSettings"
        }
      }
    }
  }
};

export const CacheActiveDirectorySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheActiveDirectorySettings",
    modelProperties: {
      primaryDnsIpAddress: {
        serializedName: "primaryDnsIpAddress",
        required: true,
        type: {
          name: "String"
        }
      },
      secondaryDnsIpAddress: {
        serializedName: "secondaryDnsIpAddress",
        type: {
          name: "String"
        }
      },
      domainName: {
        serializedName: "domainName",
        required: true,
        type: {
          name: "String"
        }
      },
      domainNetBiosName: {
        serializedName: "domainNetBiosName",
        required: true,
        type: {
          name: "String"
        }
      },
      cacheNetBiosName: {
        constraints: {
          Pattern: new RegExp("^[-0-9a-zA-Z]{1,15}$")
        },
        serializedName: "cacheNetBiosName",
        required: true,
        type: {
          name: "String"
        }
      },
      domainJoined: {
        serializedName: "domainJoined",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "CacheActiveDirectorySettingsCredentials"
        }
      }
    }
  }
};

export const CacheActiveDirectorySettingsCredentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheActiveDirectorySettingsCredentials",
    modelProperties: {
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheUsernameDownloadSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheUsernameDownloadSettings",
    modelProperties: {
      extendedGroups: {
        serializedName: "extendedGroups",
        type: {
          name: "Boolean"
        }
      },
      usernameSource: {
        defaultValue: "None",
        serializedName: "usernameSource",
        type: {
          name: "String"
        }
      },
      groupFileURI: {
        serializedName: "groupFileURI",
        type: {
          name: "String"
        }
      },
      userFileURI: {
        serializedName: "userFileURI",
        type: {
          name: "String"
        }
      },
      ldapServer: {
        serializedName: "ldapServer",
        type: {
          name: "String"
        }
      },
      ldapBaseDN: {
        serializedName: "ldapBaseDN",
        type: {
          name: "String"
        }
      },
      encryptLdapConnection: {
        serializedName: "encryptLdapConnection",
        type: {
          name: "Boolean"
        }
      },
      requireValidCertificate: {
        serializedName: "requireValidCertificate",
        type: {
          name: "Boolean"
        }
      },
      autoDownloadCertificate: {
        serializedName: "autoDownloadCertificate",
        type: {
          name: "Boolean"
        }
      },
      caCertificateURI: {
        serializedName: "caCertificateURI",
        type: {
          name: "String"
        }
      },
      usernameDownloaded: {
        serializedName: "usernameDownloaded",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "CacheUsernameDownloadSettingsCredentials"
        }
      }
    }
  }
};

export const CacheUsernameDownloadSettingsCredentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheUsernameDownloadSettingsCredentials",
    modelProperties: {
      bindDn: {
        serializedName: "bindDn",
        type: {
          name: "String"
        }
      },
      bindPassword: {
        serializedName: "bindPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CacheSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageTargetsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageTargetsResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StorageTarget"
            }
          }
        }
      }
    }
  }
};

export const NamespaceJunction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NamespaceJunction",
    modelProperties: {
      namespacePath: {
        serializedName: "namespacePath",
        type: {
          name: "String"
        }
      },
      targetPath: {
        serializedName: "targetPath",
        type: {
          name: "String"
        }
      },
      nfsExport: {
        serializedName: "nfsExport",
        type: {
          name: "String"
        }
      },
      nfsAccessPolicy: {
        defaultValue: "default",
        serializedName: "nfsAccessPolicy",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Nfs3Target: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Nfs3Target",
    modelProperties: {
      target: {
        constraints: {
          Pattern: new RegExp("^[-.,0-9a-zA-Z]+$")
        },
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      usageModel: {
        serializedName: "usageModel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClfsTarget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClfsTarget",
    modelProperties: {
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnknownTarget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnknownTarget",
    modelProperties: {
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const BlobNfsTarget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BlobNfsTarget",
    modelProperties: {
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      usageModel: {
        serializedName: "usageModel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageTargetResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageTargetResource",
    modelProperties: {
      name: {
        constraints: {
          Pattern: new RegExp("^[-0-9a-zA-Z_]{1,80}$")
        },
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const StorageTarget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageTarget",
    modelProperties: {
      ...StorageTargetResource.type.modelProperties,
      junctions: {
        serializedName: "properties.junctions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NamespaceJunction"
            }
          }
        }
      },
      targetType: {
        serializedName: "properties.targetType",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      nfs3: {
        serializedName: "properties.nfs3",
        type: {
          name: "Composite",
          className: "Nfs3Target"
        }
      },
      clfs: {
        serializedName: "properties.clfs",
        type: {
          name: "Composite",
          className: "ClfsTarget"
        }
      },
      unknown: {
        serializedName: "properties.unknown",
        type: {
          name: "Composite",
          className: "UnknownTarget"
        }
      },
      blobNfs: {
        serializedName: "properties.blobNfs",
        type: {
          name: "Composite",
          className: "BlobNfsTarget"
        }
      }
    }
  }
};
