# Reminder Service 

- Used node cron scheduler to schedule the Jobs for sending the mails.
- Used morgan package for logging the events.
- Used SMTP protocol over node mailer to connect to mail client and send mails.
- Used message queue for queueing the messages in queue to remove the bottle neck as well as to increase server availiblity, if reminder service goes down the message to be sent must not be lost.
- Configured message broker using amqlib protocol