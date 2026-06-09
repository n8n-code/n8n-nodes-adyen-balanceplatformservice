import type { INodeProperties } from 'n8n-workflow';

export const transactionRulesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					]
				}
			},
			"options": [
				{
					"name": "Post Transaction Rules",
					"value": "Post Transaction Rules",
					"action": "Create a transaction rule",
					"description": "Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transactionRules"
						}
					}
				},
				{
					"name": "Delete Transaction Rules Transaction Rule Id",
					"value": "Delete Transaction Rules Transaction Rule Id",
					"action": "Delete a transaction rule",
					"description": "Deletes a transaction rule.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/transactionRules/{{$parameter[\"transactionRuleId\"]}}"
						}
					}
				},
				{
					"name": "Get Transaction Rules Transaction Rule Id",
					"value": "Get Transaction Rules Transaction Rule Id",
					"action": "Get a transaction rule",
					"description": "Returns the details of a transaction rule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactionRules/{{$parameter[\"transactionRuleId\"]}}"
						}
					}
				},
				{
					"name": "Patch Transaction Rules Transaction Rule Id",
					"value": "Patch Transaction Rules Transaction Rule Id",
					"action": "Update a transaction rule",
					"description": "Updates a transaction rule. \n\n* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.\n\n* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/transactionRules/{{$parameter[\"transactionRuleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /transactionRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Aggregation Level",
			"name": "aggregationLevel",
			"type": "string",
			"default": "",
			"description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
			"routing": {
				"send": {
					"property": "aggregationLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the transaction rule, maximum 300 characters.",
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entity Key",
			"name": "entityKey",
			"type": "json",
			"default": "{}",
			"description": "The type and unique identifier of the resource to which the rule applies.",
			"routing": {
				"send": {
					"property": "entityKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interval",
			"name": "interval",
			"type": "json",
			"default": "{\n  \"duration\": {}\n}",
			"description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.",
			"routing": {
				"send": {
					"property": "interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Outcome Type",
			"name": "outcomeType",
			"type": "options",
			"default": "hardBlock",
			"description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
			"options": [
				{
					"name": "Hard Block",
					"value": "hardBlock"
				},
				{
					"name": "Score Based",
					"value": "scoreBased"
				}
			],
			"routing": {
				"send": {
					"property": "outcomeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the transaction rule, maximum 150 characters.",
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Request Type",
			"name": "requestType",
			"type": "options",
			"default": "authentication",
			"description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
			"options": [
				{
					"name": "Authentication",
					"value": "authentication"
				},
				{
					"name": "Authorization",
					"value": "authorization"
				},
				{
					"name": "Tokenization",
					"value": "tokenization"
				}
			],
			"routing": {
				"send": {
					"property": "requestType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule Restrictions",
			"name": "ruleRestrictions",
			"type": "json",
			"default": "{\n  \"activeNetworkTokens\": {},\n  \"brandVariants\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"countries\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"dayOfWeek\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"differentCurrencies\": {},\n  \"entryModes\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"internationalTransaction\": {},\n  \"matchingTransactions\": {},\n  \"mccs\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"merchantNames\": {\n    \"value\": [\n      {}\n    ]\n  },\n  \"merchants\": {\n    \"value\": [\n      {}\n    ]\n  },\n  \"processingTypes\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"timeOfDay\": {\n    \"value\": {}\n  },\n  \"totalAmount\": {\n    \"value\": {}\n  }\n}",
			"description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
			"routing": {
				"send": {
					"property": "ruleRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Score",
			"name": "score",
			"type": "number",
			"default": 0,
			"description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
			"routing": {
				"send": {
					"property": "score",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "allowList",
			"description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
			"options": [
				{
					"name": "Allow List",
					"value": "allowList"
				},
				{
					"name": "Block List",
					"value": "blockList"
				},
				{
					"name": "Max Usage",
					"value": "maxUsage"
				},
				{
					"name": "Velocity",
					"value": "velocity"
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
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
						"Transaction Rules"
					],
					"operation": [
						"Post Transaction Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /transactionRules/{transactionRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Delete Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Transaction Rule Id",
			"name": "transactionRuleId",
			"required": true,
			"description": "The unique identifier of the transaction rule.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Delete Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Delete Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Delete Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "GET /transactionRules/{transactionRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Get Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Transaction Rule Id",
			"name": "transactionRuleId",
			"required": true,
			"description": "The unique identifier of the transaction rule.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Get Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Get Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Get Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /transactionRules/{transactionRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Transaction Rule Id",
			"name": "transactionRuleId",
			"required": true,
			"description": "The unique identifier of the transaction rule.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Aggregation Level",
			"name": "aggregationLevel",
			"type": "string",
			"default": "",
			"description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
			"routing": {
				"send": {
					"property": "aggregationLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the transaction rule, maximum 300 characters.",
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entity Key",
			"name": "entityKey",
			"type": "json",
			"default": "{}",
			"description": "The type and unique identifier of the resource to which the rule applies.",
			"routing": {
				"send": {
					"property": "entityKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interval",
			"name": "interval",
			"type": "json",
			"default": "{\n  \"duration\": {}\n}",
			"description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.",
			"routing": {
				"send": {
					"property": "interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Outcome Type",
			"name": "outcomeType",
			"type": "options",
			"default": "hardBlock",
			"description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
			"options": [
				{
					"name": "Hard Block",
					"value": "hardBlock"
				},
				{
					"name": "Score Based",
					"value": "scoreBased"
				}
			],
			"routing": {
				"send": {
					"property": "outcomeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the transaction rule, maximum 150 characters.",
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Request Type",
			"name": "requestType",
			"type": "options",
			"default": "authentication",
			"description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
			"options": [
				{
					"name": "Authentication",
					"value": "authentication"
				},
				{
					"name": "Authorization",
					"value": "authorization"
				},
				{
					"name": "Tokenization",
					"value": "tokenization"
				}
			],
			"routing": {
				"send": {
					"property": "requestType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule Restrictions",
			"name": "ruleRestrictions",
			"type": "json",
			"default": "{\n  \"activeNetworkTokens\": {},\n  \"brandVariants\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"countries\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"dayOfWeek\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"differentCurrencies\": {},\n  \"entryModes\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"internationalTransaction\": {},\n  \"matchingTransactions\": {},\n  \"mccs\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"merchantNames\": {\n    \"value\": [\n      {}\n    ]\n  },\n  \"merchants\": {\n    \"value\": [\n      {}\n    ]\n  },\n  \"processingTypes\": {\n    \"value\": [\n      null\n    ]\n  },\n  \"timeOfDay\": {\n    \"value\": {}\n  },\n  \"totalAmount\": {\n    \"value\": {}\n  }\n}",
			"description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
			"routing": {
				"send": {
					"property": "ruleRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Score",
			"name": "score",
			"type": "number",
			"default": 0,
			"description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
			"routing": {
				"send": {
					"property": "score",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "allowList",
			"description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
			"options": [
				{
					"name": "Allow List",
					"value": "allowList"
				},
				{
					"name": "Block List",
					"value": "blockList"
				},
				{
					"name": "Max Usage",
					"value": "maxUsage"
				},
				{
					"name": "Velocity",
					"value": "velocity"
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
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
						"Transaction Rules"
					],
					"operation": [
						"Patch Transaction Rules Transaction Rule Id"
					]
				}
			}
		},
];
