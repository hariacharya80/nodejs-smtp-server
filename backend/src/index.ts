import express from 'express';
import * as mailserver from 'smtp-server';
import { HttpConfig, MailConfig } from './config/server.config';

const HttpApp = express();
const SmtpServer = new mailserver.SMTPServer({});

async function Main(){
    HttpApp.listen(3000, () => {
        console.log(`HTTP Server is running on port: ${HttpConfig.port}`);
    });

    SmtpServer.listen(25, () => {
        console.log(`SMTP Server is running on port ${MailConfig.port}`);
    });
}

Main();