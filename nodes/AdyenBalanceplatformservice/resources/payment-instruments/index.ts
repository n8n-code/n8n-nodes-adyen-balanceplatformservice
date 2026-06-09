import type { INodeProperties } from 'n8n-workflow';

export const paymentInstrumentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					]
				}
			},
			"options": [
				{
					"name": "Post Payment Instruments",
					"value": "Post Payment Instruments",
					"action": "Create a payment instrument",
					"description": "Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.\n\n For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/paymentInstruments"
						}
					}
				},
				{
					"name": "Get Payment Instruments Id",
					"value": "Get Payment Instruments Id",
					"action": "Get a payment instrument",
					"description": "Returns the details of a payment instrument.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentInstruments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Patch Payment Instruments Id",
					"value": "Patch Payment Instruments Id",
					"action": "Update a payment instrument",
					"description": "Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/paymentInstruments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Instruments Id Reveal",
					"value": "Get Payment Instruments Id Reveal",
					"action": "Get the PAN of a payment instrument",
					"description": "Returns the primary account number (PAN) of a payment instrument.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):\n\n* Balance Platform BCL PCI role",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentInstruments/{{$parameter[\"id\"]}}/reveal"
						}
					}
				},
				{
					"name": "Get Payment Instruments Id Transaction Rules",
					"value": "Get Payment Instruments Id Transaction Rules",
					"action": "Get all transaction rules for a payment instrument",
					"description": "Returns a list of transaction rules associated with a payment instrument.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentInstruments/{{$parameter[\"id\"]}}/transactionRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /paymentInstruments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Balance Account Id",
			"name": "balanceAccountId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
			"routing": {
				"send": {
					"property": "balanceAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Card",
			"name": "card",
			"type": "json",
			"default": "{\n  \"authentication\": {\n    \"phone\": {}\n  },\n  \"configuration\": {\n    \"bulkAddress\": {}\n  },\n  \"deliveryContact\": {\n    \"address\": {},\n    \"name\": {},\n    \"phoneNumber\": {}\n  }\n}",
			"description": "Contains information about the card. Required when you create a payment instrument of `type` **card**.",
			"routing": {
				"send": {
					"property": "card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the payment instrument, maximum 300 characters.",
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
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Issuing Country Code",
			"name": "issuingCountryCode",
			"type": "string",
			"default": "",
			"description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
			"routing": {
				"send": {
					"property": "issuingCountryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Payment Instrument Group Id",
			"name": "paymentInstrumentGroupId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
			"routing": {
				"send": {
					"property": "paymentInstrumentGroupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the payment instrument, maximum 150 characters.",
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
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
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
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "Status Reason",
			"name": "statusReason",
			"type": "options",
			"default": "accountClosure",
			"description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
			"options": [
				{
					"name": "Account Closure",
					"value": "accountClosure"
				},
				{
					"name": "Damaged",
					"value": "damaged"
				},
				{
					"name": "End Of Life",
					"value": "endOfLife"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "Lost",
					"value": "lost"
				},
				{
					"name": "Other",
					"value": "other"
				},
				{
					"name": "Stolen",
					"value": "stolen"
				},
				{
					"name": "Suspected Fraud",
					"value": "suspectedFraud"
				}
			],
			"routing": {
				"send": {
					"property": "statusReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "bankAccount",
			"description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
			"options": [
				{
					"name": "Bank Account",
					"value": "bankAccount"
				},
				{
					"name": "Card",
					"value": "card"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
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
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
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
						"Payment Instruments"
					],
					"operation": [
						"Post Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentInstruments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /paymentInstruments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Balance Account Id",
			"name": "balanceAccountId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the balance account associated with this payment instrument.\n>You can only change the balance account ID if the payment instrument has **inactive** status.",
			"routing": {
				"send": {
					"property": "balanceAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Card",
			"name": "card",
			"type": "json",
			"default": "{\n  \"authentication\": {\n    \"phone\": {}\n  },\n  \"configuration\": {\n    \"bulkAddress\": {}\n  },\n  \"deliveryContact\": {\n    \"address\": {},\n    \"name\": {},\n    \"phoneNumber\": {}\n  }\n}",
			"description": "Object that contains information about the card payment instrument.",
			"routing": {
				"send": {
					"property": "card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
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
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Status Comment",
			"name": "statusComment",
			"type": "string",
			"default": "",
			"description": "Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.",
			"routing": {
				"send": {
					"property": "statusComment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "Status Reason",
			"name": "statusReason",
			"type": "options",
			"default": "accountClosure",
			"description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
			"options": [
				{
					"name": "Account Closure",
					"value": "accountClosure"
				},
				{
					"name": "Damaged",
					"value": "damaged"
				},
				{
					"name": "End Of Life",
					"value": "endOfLife"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "Lost",
					"value": "lost"
				},
				{
					"name": "Other",
					"value": "other"
				},
				{
					"name": "Stolen",
					"value": "stolen"
				},
				{
					"name": "Suspected Fraud",
					"value": "suspectedFraud"
				}
			],
			"routing": {
				"send": {
					"property": "statusReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
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
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
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
						"Payment Instruments"
					],
					"operation": [
						"Patch Payment Instruments Id"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentInstruments/{id}/reveal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Reveal"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Reveal"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Reveal"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Reveal"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentInstruments/{id}/transactionRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Transaction Rules"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Transaction Rules"
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
						"Payment Instruments"
					],
					"operation": [
						"Get Payment Instruments Id Transaction Rules"
					]
				}
			}
		},
];
