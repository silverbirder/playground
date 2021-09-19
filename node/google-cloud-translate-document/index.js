require('dotenv').config();

async function translateDocument(projectId, location, inputUri, outputPrefix) {
    // Imports the Google Cloud Translation library
    const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;

    // Instantiates a client
    const translationClient = new TranslationServiceClient();

    const documentInputConfig = {
        gcsSource: {
            inputUri: inputUri,
        },
    };
    const documentOutputConfig = {
        gcsDestination: {
            outputUriPrefix: outputPrefix,
        },
    };

    const request = {
        parent: translationClient.locationPath(projectId, location),
        documentInputConfig: documentInputConfig,
        documentOutputConfig: documentOutputConfig,
        sourceLanguageCode: 'en',
        targetLanguageCode: 'ja',
    };

    // Run request
    const [response] = await translationClient.translateDocument(request);

    console.log(
        `Response: Mime Type - ${response.documentTranslation.mimeType}`
    );
}

translateDocument(process.env.PROJECT_ID, process.env.LOCATION, process.env.INPUT_URI, process.env.OUTPUT_PREFIX);