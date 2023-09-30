const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);

        jobs();
        // jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'shubrat.parth@gmail.com',
        //     'Test Email',
        //     'Hello World from SMTP server!'
        //     );

        // cron.schedule( '*/2 * * * * *', () => {
        //     console.log('Running Cron Job');
        // })

    });
}

setupAndStartServer();