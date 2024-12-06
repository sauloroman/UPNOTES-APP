import nodemailer, { Transporter } from 'nodemailer';

interface EmailTemplateFactory {
  generateVerificationEmailTemplate: (
    email: string,
    code: string,
    frontendUrl: string
  ) => string;
}

interface EmailServiceOptions {
  mailerService: string;
  mailerEmail: string;
  senderEmailPassword: string;
  postToProvider: boolean;
  emailTemplateFactory: EmailTemplateFactory;
}

interface SendEmailVerificationCode {
  email: string;
  code: string;
  frontendUrl: string;
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
  private readonly emailTemplateFactory: EmailTemplateFactory;

  constructor(emailServiceOptions: EmailServiceOptions) {
    const {
      mailerEmail,
      mailerService,
      postToProvider,
      senderEmailPassword,
      emailTemplateFactory,
    } = emailServiceOptions;

    this.transporter = nodemailer.createTransport({
      service: mailerService,
      auth: {
        user: mailerEmail,
        pass: senderEmailPassword,
      },
    });

    this.postToProvider = postToProvider;
    this.emailTemplateFactory = emailTemplateFactory;
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
    frontendUrl,
  }: SendEmailVerificationCode): Promise<boolean> {

    const htmlEmail = this.emailTemplateFactory.generateVerificationEmailTemplate(
      email,
      code,
      frontendUrl
    );

    const emailSent = await this.sendEmail({
      to: email,
      subject: 'Upnotes - Confirma tu cuenta',
      htmlBody: htmlEmail,
    });

    return emailSent
  }
}
