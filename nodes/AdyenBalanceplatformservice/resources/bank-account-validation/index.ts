import type { INodeProperties } from 'n8n-workflow';

export const bankAccountValidationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bank Account Validation"
					]
				}
			},
			"options": [
				{
					"name": "Post Validate Bank Account Identification",
					"value": "Post Validate Bank Account Identification",
					"action": "Validate a bank account",
					"description": "Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/validateBankAccountIdentification"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /validateBankAccountIdentification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bank Account Validation"
					],
					"operation": [
						"Post Validate Bank Account Identification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Identification",
			"name": "accountIdentification",
			"type": "json",
			"default": "{\n  \"type\": \"auLocal\"\n}",
			"routing": {
				"send": {
					"property": "accountIdentification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bank Account Validation"
					],
					"operation": [
						"Post Validate Bank Account Identification"
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
						"Bank Account Validation"
					],
					"operation": [
						"Post Validate Bank Account Identification"
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
						"Bank Account Validation"
					],
					"operation": [
						"Post Validate Bank Account Identification"
					]
				}
			}
		},
];
