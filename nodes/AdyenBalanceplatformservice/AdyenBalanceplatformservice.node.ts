import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { platformDescription } from './resources/platform';
import { grantOffersDescription } from './resources/grant-offers';
import { paymentInstrumentGroupsDescription } from './resources/payment-instrument-groups';
import { accountHoldersDescription } from './resources/account-holders';
import { paymentInstrumentsDescription } from './resources/payment-instruments';
import { grantAccountsDescription } from './resources/grant-accounts';
import { bankAccountValidationDescription } from './resources/bank-account-validation';
import { balanceAccountsDescription } from './resources/balance-accounts';
import { transactionRulesDescription } from './resources/transaction-rules';

export class AdyenBalanceplatformservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-balanceplatformservice',
		name: 'N8nDevAdyenBalanceplatformservice',
		icon: { light: 'file:./adyen-balanceplatformservice.png', dark: 'file:./adyen-balanceplatformservice.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts',
		defaults: { name: 'adyen-balanceplatformservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenBalanceplatformserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Platform",
					"value": "Platform",
					"description": ""
				},
				{
					"name": "Grant Offers",
					"value": "Grant Offers",
					"description": ""
				},
				{
					"name": "Payment Instrument Groups",
					"value": "Payment Instrument Groups",
					"description": ""
				},
				{
					"name": "Account Holders",
					"value": "Account Holders",
					"description": ""
				},
				{
					"name": "Payment Instruments",
					"value": "Payment Instruments",
					"description": ""
				},
				{
					"name": "Grant Accounts",
					"value": "Grant Accounts",
					"description": ""
				},
				{
					"name": "Bank Account Validation",
					"value": "Bank Account Validation",
					"description": ""
				},
				{
					"name": "Balance Accounts",
					"value": "Balance Accounts",
					"description": ""
				},
				{
					"name": "Transaction Rules",
					"value": "Transaction Rules",
					"description": ""
				}
			],
			"default": ""
		},
		...platformDescription,
		...grantOffersDescription,
		...paymentInstrumentGroupsDescription,
		...accountHoldersDescription,
		...paymentInstrumentsDescription,
		...grantAccountsDescription,
		...bankAccountValidationDescription,
		...balanceAccountsDescription,
		...transactionRulesDescription
		],
	};
}
