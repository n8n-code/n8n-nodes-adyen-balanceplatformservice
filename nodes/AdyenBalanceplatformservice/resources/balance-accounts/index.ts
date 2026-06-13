import type { INodeProperties } from 'n8n-workflow';

export const balanceAccountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Post Balance Accounts",
					"value": "Post Balance Accounts",
					"action": "Create a balance account",
					"description": "Creates a balance account that holds the funds of the associated account holder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/balanceAccounts"
						}
					}
				},
				{
					"name": "Get Balance Accounts Balance Account ID Sweeps",
					"value": "Get Balance Accounts Balance Account ID Sweeps",
					"action": "Get all sweeps for a balance account",
					"description": "Returns a list of the sweeps configured for a balance account.\n\nTo fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balanceAccounts/{{$parameter[\"balanceAccountId\"]}}/sweeps"
						}
					}
				},
				{
					"name": "Post Balance Accounts Balance Account ID Sweeps",
					"value": "Post Balance Accounts Balance Account ID Sweeps",
					"action": "Create a sweep",
					"description": "Creates a sweep that results in moving funds from or to a balance account.\n\nA sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/balanceAccounts/{{$parameter[\"balanceAccountId\"]}}/sweeps"
						}
					}
				},
				{
					"name": "Delete Balance Accounts Balance Account ID Sweeps Sweep ID",
					"value": "Delete Balance Accounts Balance Account ID Sweeps Sweep ID",
					"action": "Delete a sweep",
					"description": "Deletes a sweep for a balance account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/balanceAccounts/{{$parameter[\"balanceAccountId\"]}}/sweeps/{{$parameter[\"sweepId\"]}}"
						}
					}
				},
				{
					"name": "Get Balance Accounts Balance Account ID Sweeps Sweep ID",
					"value": "Get Balance Accounts Balance Account ID Sweeps Sweep ID",
					"action": "Get a sweep",
					"description": "Returns a sweep.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balanceAccounts/{{$parameter[\"balanceAccountId\"]}}/sweeps/{{$parameter[\"sweepId\"]}}"
						}
					}
				},
				{
					"name": "Patch Balance Accounts Balance Account ID Sweeps Sweep ID",
					"value": "Patch Balance Accounts Balance Account ID Sweeps Sweep ID",
					"action": "Update a sweep",
					"description": "Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/balanceAccounts/{{$parameter[\"balanceAccountId\"]}}/sweeps/{{$parameter[\"sweepId\"]}}"
						}
					}
				},
				{
					"name": "Get Balance Accounts ID",
					"value": "Get Balance Accounts ID",
					"action": "Get a balance account",
					"description": "Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balanceAccounts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Patch Balance Accounts ID",
					"value": "Patch Balance Accounts ID",
					"action": "Update a balance account",
					"description": "Updates a balance account.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/balanceAccounts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Balance Accounts ID Payment Instruments",
					"value": "Get Balance Accounts ID Payment Instruments",
					"action": "Get all payment instruments for a balance account",
					"description": "Returns a paginated list of the payment instruments associated with a balance account. \n\nTo fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balanceAccounts/{{$parameter[\"id\"]}}/paymentInstruments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /balanceAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Holder ID",
			"name": "accountHolderId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
			"routing": {
				"send": {
					"property": "accountHolderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Default Currency Code",
			"name": "defaultCurrencyCode",
			"type": "string",
			"default": "",
			"description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
			"routing": {
				"send": {
					"property": "defaultCurrencyCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the balance account, maximum 150 characters.",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /balanceAccounts/{balanceAccountId}/sweeps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "POST /balanceAccounts/{balanceAccountId}/sweeps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "options",
			"default": "bank",
			"description": "The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.",
			"options": [
				{
					"name": "Bank",
					"value": "bank"
				},
				{
					"name": "Internal",
					"value": "internal"
				},
				{
					"name": "Platform Payment",
					"value": "platformPayment"
				}
			],
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Counterparty",
			"name": "counterparty",
			"type": "json",
			"default": "{}",
			"description": "The destination or the source of the funds, depending on the `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.",
			"routing": {
				"send": {
					"property": "counterparty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "",
			"description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
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
			"description": "The unique identifier of the sweep.",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Priorities",
			"name": "priorities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority listed first, and if that's not possible, it moves on to the next option in the order of provided priorities.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).\n\nSet `category` to **bank**. For more details, see [optional priorities setup](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).",
			"routing": {
				"send": {
					"property": "priorities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "amountLimitExceeded",
			"description": "The reason for disabling the sweep.",
			"options": [
				{
					"name": "Amount Limit Exceeded",
					"value": "amountLimitExceeded"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "Counterparty Account Blocked",
					"value": "counterpartyAccountBlocked"
				},
				{
					"name": "Counterparty Account Closed",
					"value": "counterpartyAccountClosed"
				},
				{
					"name": "Counterparty Account Not Found",
					"value": "counterpartyAccountNotFound"
				},
				{
					"name": "Counterparty Address Required",
					"value": "counterpartyAddressRequired"
				},
				{
					"name": "Counterparty Bank Timed Out",
					"value": "counterpartyBankTimedOut"
				},
				{
					"name": "Counterparty Bank Unavailable",
					"value": "counterpartyBankUnavailable"
				},
				{
					"name": "Error",
					"value": "error"
				},
				{
					"name": "Not Enough Balance",
					"value": "notEnoughBalance"
				},
				{
					"name": "Refused By Counterparty Bank",
					"value": "refusedByCounterpartyBank"
				},
				{
					"name": "Route Not Found",
					"value": "routeNotFound"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Sweep Amount",
			"name": "sweepAmount",
			"type": "json",
			"default": "{}",
			"description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.",
			"routing": {
				"send": {
					"property": "sweepAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Target Amount",
			"name": "targetAmount",
			"type": "json",
			"default": "{}",
			"description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.",
			"routing": {
				"send": {
					"property": "targetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Trigger Amount",
			"name": "triggerAmount",
			"type": "json",
			"default": "{}",
			"description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.",
			"routing": {
				"send": {
					"property": "triggerAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "push",
			"description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
			"options": [
				{
					"name": "Pull",
					"value": "pull"
				},
				{
					"name": "Push",
					"value": "push"
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
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
						"Balance Accounts"
					],
					"operation": [
						"Post Balance Accounts Balance Account ID Sweeps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Delete Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Delete Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Sweep ID",
			"name": "sweepId",
			"required": true,
			"description": "The unique identifier of the sweep.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Delete Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Delete Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Delete Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Sweep ID",
			"name": "sweepId",
			"required": true,
			"description": "The unique identifier of the sweep.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Sweep ID",
			"name": "sweepId",
			"required": true,
			"description": "The unique identifier of the sweep.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "options",
			"default": "bank",
			"description": "The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.",
			"options": [
				{
					"name": "Bank",
					"value": "bank"
				},
				{
					"name": "Internal",
					"value": "internal"
				},
				{
					"name": "Platform Payment",
					"value": "platformPayment"
				}
			],
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Counterparty",
			"name": "counterparty",
			"type": "json",
			"default": "{}",
			"description": "The destination or the source of the funds, depending on the `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.",
			"routing": {
				"send": {
					"property": "counterparty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "",
			"description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
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
			"description": "The unique identifier of the sweep.",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Priorities",
			"name": "priorities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority listed first, and if that's not possible, it moves on to the next option in the order of provided priorities.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).\n\nSet `category` to **bank**. For more details, see [optional priorities setup](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).",
			"routing": {
				"send": {
					"property": "priorities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "amountLimitExceeded",
			"description": "The reason for disabling the sweep.",
			"options": [
				{
					"name": "Amount Limit Exceeded",
					"value": "amountLimitExceeded"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "Counterparty Account Blocked",
					"value": "counterpartyAccountBlocked"
				},
				{
					"name": "Counterparty Account Closed",
					"value": "counterpartyAccountClosed"
				},
				{
					"name": "Counterparty Account Not Found",
					"value": "counterpartyAccountNotFound"
				},
				{
					"name": "Counterparty Address Required",
					"value": "counterpartyAddressRequired"
				},
				{
					"name": "Counterparty Bank Timed Out",
					"value": "counterpartyBankTimedOut"
				},
				{
					"name": "Counterparty Bank Unavailable",
					"value": "counterpartyBankUnavailable"
				},
				{
					"name": "Error",
					"value": "error"
				},
				{
					"name": "Not Enough Balance",
					"value": "notEnoughBalance"
				},
				{
					"name": "Refused By Counterparty Bank",
					"value": "refusedByCounterpartyBank"
				},
				{
					"name": "Route Not Found",
					"value": "routeNotFound"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Sweep Amount",
			"name": "sweepAmount",
			"type": "json",
			"default": "{}",
			"description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.",
			"routing": {
				"send": {
					"property": "sweepAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Target Amount",
			"name": "targetAmount",
			"type": "json",
			"default": "{}",
			"description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.",
			"routing": {
				"send": {
					"property": "targetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Trigger Amount",
			"name": "triggerAmount",
			"type": "json",
			"default": "{}",
			"description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.",
			"routing": {
				"send": {
					"property": "triggerAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "push",
			"description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
			"options": [
				{
					"name": "Pull",
					"value": "pull"
				},
				{
					"name": "Push",
					"value": "push"
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts Balance Account ID Sweeps Sweep ID"
					]
				}
			}
		},
		{
			"displayName": "GET /balanceAccounts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /balanceAccounts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Account Holder ID",
			"name": "accountHolderId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
			"routing": {
				"send": {
					"property": "accountHolderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Default Currency Code",
			"name": "defaultCurrencyCode",
			"type": "string",
			"default": "",
			"description": "The default currency code of this balance account, in three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) format. \nThe default value is **EUR**.",
			"routing": {
				"send": {
					"property": "defaultCurrencyCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference to the balance account, maximum 150 characters.",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.\n\nPossible values: **active**, **inactive**, **closed**, **suspended**.",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
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
						"Balance Accounts"
					],
					"operation": [
						"Patch Balance Accounts ID"
					]
				}
			}
		},
		{
			"displayName": "GET /balanceAccounts/{id}/paymentInstruments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The unique identifier of the balance account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
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
						"Balance Accounts"
					],
					"operation": [
						"Get Balance Accounts ID Payment Instruments"
					]
				}
			}
		},
];
