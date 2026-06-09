import type { INodeProperties } from 'n8n-workflow';

export const paymentInstrumentGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					]
				}
			},
			"options": [
				{
					"name": "Post Payment Instrument Groups",
					"value": "Post Payment Instrument Groups",
					"action": "Create a payment instrument group",
					"description": "Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/paymentInstrumentGroups"
						}
					}
				},
				{
					"name": "Get Payment Instrument Groups ID",
					"value": "Get Payment Instrument Groups ID",
					"action": "Get a payment instrument group",
					"description": "Returns the details of a payment instrument group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentInstrumentGroups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Instrument Groups ID Transaction Rules",
					"value": "Get Payment Instrument Groups ID Transaction Rules",
					"action": "Get all transaction rules for a payment instrument group",
					"description": "Returns a list of all the transaction rules associated with a payment instrument group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/paymentInstrumentGroups/{{$parameter[\"id\"]}}/transactionRules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /paymentInstrumentGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Balance Platform",
			"name": "balancePlatform",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.",
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the payment instrument group, maximum 300 characters.",
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"description": "Properties of the payment instrument group.",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the payment instrument group, maximum 150 characters.",
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tx Variant",
			"name": "txVariant",
			"type": "string",
			"default": "",
			"description": "The tx variant of the payment instrument group.",
			"routing": {
				"send": {
					"property": "txVariant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Post Payment Instrument Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentInstrumentGroups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument group.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID"
					]
				}
			}
		},
		{
			"displayName": "GET /paymentInstrumentGroups/{id}/transactionRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the payment instrument group.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID Transaction Rules"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID Transaction Rules"
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
						"Payment Instrument Groups"
					],
					"operation": [
						"Get Payment Instrument Groups ID Transaction Rules"
					]
				}
			}
		},
];
