const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

/*

    10:00 AM
    Every 5 minutes
    We will check are there any pending emails which was expected to be sent by now and is pending, if yes, then send it.

*/
// We can send multiple cron jobs according to our need

const setupJobs = (timestamp) => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await emailService.fetchPendingEmails();

        response.forEach((email) => {
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async(err, data) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id, {
                        status: "SUCCESS",
                    });
                }
            });
        })

        console.log(response);
    })
}

module.exports = setupJobs;