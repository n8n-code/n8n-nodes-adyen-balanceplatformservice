import type { INodeProperties } from 'n8n-workflow';

export const grantOffersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Offers"
					]
				}
			},
			"options": [
				{
					"name": "Get Grant Offers",
					"value": "Get Grant Offers",
					"action": "Get all available grant offers",
					"description": "Returns a list of all [grant offers](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/grantOffers"
						}
					}
				},
				{
					"name": "Get Grant Offers Grant Offer ID",
					"value": "Get Grant Offers Grant Offer ID",
					"action": "Get a grant offer",
					"description": "Returns the details of a single grant offer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/grantOffers/{{$parameter[\"grantOfferId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /grantOffers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers"
					]
				}
			}
		},
		{
			"displayName": "Account Holder ID",
			"name": "accountHolderId",
			"required": true,
			"description": "The unique identifier of the grant account.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountHolderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers"
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
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers"
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
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers"
					]
				}
			}
		},
		{
			"displayName": "GET /grantOffers/{grantOfferId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers Grant Offer ID"
					]
				}
			}
		},
		{
			"displayName": "Grant Offer ID",
			"name": "grantOfferId",
			"required": true,
			"description": "The unique identifier of the grant offer.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers Grant Offer ID"
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
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers Grant Offer ID"
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
						"Grant Offers"
					],
					"operation": [
						"Get Grant Offers Grant Offer ID"
					]
				}
			}
		},
];
