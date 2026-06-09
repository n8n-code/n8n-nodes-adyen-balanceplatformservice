import type { INodeProperties } from 'n8n-workflow';

export const platformDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					]
				}
			},
			"options": [
				{
					"name": "Get Balance Platforms ID",
					"value": "Get Balance Platforms ID",
					"action": "Get a balance platform",
					"description": "Returns a balance platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balancePlatforms/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Balance Platforms ID Account Holders",
					"value": "Get Balance Platforms ID Account Holders",
					"action": "Get all account holders under a balance platform",
					"description": "Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balancePlatforms/{{$parameter[\"id\"]}}/accountHolders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /balancePlatforms/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the balance platform.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID"
					]
				}
			}
		},
		{
			"displayName": "GET /balancePlatforms/{id}/accountHolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the balance platform.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
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
						"Platform"
					],
					"operation": [
						"Get Balance Platforms ID Account Holders"
					]
				}
			}
		},
];
