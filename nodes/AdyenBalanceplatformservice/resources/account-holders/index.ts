import type { INodeProperties } from 'n8n-workflow';

export const accountHoldersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					]
				}
			},
			"options": [
				{
					"name": "Post Account Holders",
					"value": "Post Account Holders",
					"action": "Create an account holder",
					"description": "Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).\n\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accountHolders"
						}
					}
				},
				{
					"name": "Get Account Holders ID",
					"value": "Get Account Holders ID",
					"action": "Get an account holder",
					"description": "Returns an account holder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accountHolders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Patch Account Holders ID",
					"value": "Patch Account Holders ID",
					"action": "Update an account holder",
					"description": "Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accountHolders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Holders ID Balance Accounts",
					"value": "Get Account Holders ID Balance Accounts",
					"action": "Get all balance accounts of an account holder",
					"description": "Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accountHolders/{{$parameter[\"id\"]}}/balanceAccounts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /accountHolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Balance Platform",
			"name": "balancePlatform",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
			"routing": {
				"send": {
					"property": "balancePlatform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Capabilities",
			"name": "capabilities",
			"type": "json",
			"default": "{}",
			"description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
			"routing": {
				"send": {
					"property": "capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Contact Details",
			"name": "contactDetails",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"phone\": {}\n}",
			"description": "Contact details of the account holder.",
			"routing": {
				"send": {
					"property": "contactDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the account holder, maximum 300 characters.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Legal Entity ID",
			"name": "legalEntityId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
			"routing": {
				"send": {
					"property": "legalEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the account holder, maximum 150 characters.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Post Account Holders"
					]
				}
			}
		},
		{
			"displayName": "GET /accountHolders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the account holder.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accountHolders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the account holder.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Balance Platform",
			"name": "balancePlatform",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
			"routing": {
				"send": {
					"property": "balancePlatform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Capabilities",
			"name": "capabilities",
			"type": "json",
			"default": "{}",
			"description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
			"routing": {
				"send": {
					"property": "capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Details",
			"name": "contactDetails",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"phone\": {}\n}",
			"description": "Contact details of the account holder.",
			"routing": {
				"send": {
					"property": "contactDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the account holder, maximum 300 characters.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the account holder.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Legal Entity ID",
			"name": "legalEntityId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
			"routing": {
				"send": {
					"property": "legalEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Primary Balance Account",
			"name": "primaryBalanceAccount",
			"type": "string",
			"default": "",
			"description": "The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.",
			"routing": {
				"send": {
					"property": "primaryBalanceAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the account holder, maximum 150 characters.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the account holder.\n\nPossible values: \n\n * **active**: The account holder is active. This is the default status when creating an account holder. \n\n * **inactive (Deprecated)**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details. \n\n * **suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone. \n\n* **closed**: The account holder is permanently deactivated by you. This action cannot be undone.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Closed",
					"value": "closed"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Verification Deadlines",
			"name": "verificationDeadlines",
			"type": "json",
			"default": "[\n  {\n    \"capabilities\": [\n      null\n    ]\n  }\n]",
			"description": "List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.",
			"routing": {
				"send": {
					"property": "verificationDeadlines",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Patch Account Holders ID"
					]
				}
			}
		},
		{
			"displayName": "GET /accountHolders/{id}/balanceAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the account holder.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The number of items that you want to skip.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Holders"
					],
					"operation": [
						"Get Account Holders ID Balance Accounts"
					]
				}
			}
		},
];
