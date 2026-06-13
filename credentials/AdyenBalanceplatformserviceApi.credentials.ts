import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenBalanceplatformserviceApi implements ICredentialType {
        name = 'N8nDevAdyenBalanceplatformserviceApi';

        displayName = 'Adyen Balanceplatformservice API';

        icon: Icon = { light: 'file:../nodes/AdyenBalanceplatformservice/adyen-balanceplatformservice.png', dark: 'file:../nodes/AdyenBalanceplatformservice/adyen-balanceplatformservice.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://balanceplatform-api-test.adyen.com/bcl/v2',
                        required: true,
                        placeholder: 'https://balanceplatform-api-test.adyen.com/bcl/v2',
                        description: 'The base URL of your Adyen Balanceplatformservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
