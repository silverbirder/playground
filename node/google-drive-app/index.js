(async () => {
    require('dotenv').config();
    const fs = require('fs');
    const { drive, auth } = require('@googleapis/drive');
    const { JWT } = auth;

    const keys = require('./jwt.keys.json');
    const jwtClient = new JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/drive.file'],
    );

    await jwtClient.authorize();
    const driveService = drive({
        version: 'v3',
        auth: jwtClient
    });
    await driveService.files.create({
        resource: {
            name: 'index.js',
            parents: [process.env.GOOGLE_DRIVE_ID]
        },
        media: {
            body: fs.createReadStream('index.js')
        },
    });
})();