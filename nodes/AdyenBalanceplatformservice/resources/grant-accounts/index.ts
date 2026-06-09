import type { INodeProperties } from 'n8n-workflow';

export const grantAccountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get Grant Accounts Id",
					"value": "Get Grant Accounts Id",
					"action": "Get a grant account",
					"description": "Returns the details of the [grant account](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-account).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/grantAccounts/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /grantAccounts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Accounts"
					],
					"operation": [
						"Get Grant Accounts Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the grant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Grant Accounts"
					],
					"operation": [
						"Get Grant Accounts Id"
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
						"Grant Accounts"
					],
					"operation": [
						"Get Grant Accounts Id"
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
						"Grant Accounts"
					],
					"operation": [
						"Get Grant Accounts Id"
					]
				}
			}
		},
];
