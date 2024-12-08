import nodemailer, { Transporter } from 'nodemailer';
import { emailTemplateFactory } from '../../config';

interface EmailServiceOptions {
  mailerService: string;
  mailerEmail: string;
  senderEmailPassword: string;
  postToProvider: boolean;
}

interface SendEmailVerificationCode {
  email: string;
  code: string;
  token: string;
}

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  path: string;
  filename: string;
}

export class EmailService {
  private transporter: Transporter;
  private readonly postToProvider: boolean;

  constructor(emailServiceOptions: EmailServiceOptions) {
    const {
      mailerEmail,
      mailerService,
      postToProvider,
      senderEmailPassword,
    } = emailServiceOptions;

    this.transporter = nodemailer.createTransport({
      service: mailerService,
      auth: {
        user: mailerEmail,
        pass: senderEmailPassword,
      },
    });

    this.postToProvider = postToProvider;
  }

  public async sendEmail(sendEmailOptions: SendMailOptions): Promise<boolean> {
    const { htmlBody, subject, to, attachments = [] } = sendEmailOptions;

    try {
      if (!this.postToProvider) return true;

      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });

      console.log(sentInformation);

      return true;
    } catch (error) {
      console.log(`${error}`);
      return false;
    }
  }

  public async sendEmailWithVerificationCode({
    email,
    code,
    token,
  }: SendEmailVerificationCode): Promise<boolean> {

    const htmlEmail = emailTemplateFactory.generateVerificationEmailTemplate(
      email,
      code,
      token,
    );

    const emailSent = await this.sendEmail({
      to: email,
      subject: 'Upnotes - Confirma tu cuenta',
      htmlBody: htmlEmail,
    });

    return emailSent
  }
}
