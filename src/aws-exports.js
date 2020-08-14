export default {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //Find it here - (Federated Identities > Selected Identity Pool/Create new > Sample code > Select Javascript > Get AWS Credentials)
        identityPoolId: "XXXXXXXXX",

        // REQUIRED - Amazon Cognito Region
        //Find it here - (User pools > General Settings > Pool Id) The first part of the Pool Id us-east-1
        region: 'ap-south-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        //Find it here - (User pools > General Settings > Pool Id)
        userPoolId: 'ap-south-1_XXXXXX',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        //Find it here - (User pools > General Settings > App clients > App client id)
        userPoolWebClientId: 'XXXXXXXXX'
}

