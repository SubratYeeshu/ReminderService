const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'shubrat.parth@gmail.com',
        //     'Test Email',
        //     'Hello World from SMTP server!'
        //     );
    });
}

setupAndStartServer();