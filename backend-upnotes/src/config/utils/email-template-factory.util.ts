import { envs } from "../plugins/envs.plugin";

interface EmailTemplateFactory {
  frontendUrl: string,
  generateVerificationEmailTemplate: ( email: string, code: string, token: string ) => string
}

const frontendUrl = envs.FRONTEND_URL

export const emailTemplateFactory: EmailTemplateFactory = {

  frontendUrl: frontendUrl,

  generateVerificationEmailTemplate (
    email: string,
    code: string,
    token: string,
  ): string {

    const validationUrl = `${this.frontendUrl}/${token}?email=${email}`

    const html = `
    <div
      style="
        width: 600px;
        max-width: 95%;
        margin: 0 auto;
        background-color: #f3f3f3;
        padding: 20px;
      "
    >
      <div style="background-color: #ffffff">
        <header
          style="
            letter-spacing: 2px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            background-color: #263238;
            color: #ffffff;
            padding: 10px;
            font-weight: 900;
            text-align: center;
          "
        >
          <h1 style="font-size: 24px;">UPNOTES</h1>
        </header>
        <div style="padding: 30px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
          <h2>Confirma tu correo electrónico</h2>
          <p>Gracias por registrarte. Por favor, confirma tu correo electrónico utilizando el siguiente código:</p>
          <h3 style="color: #5E9E70; font-size: 20px;">${code}</h3>
          <p>O haz clic en el botón de abajo para redirigirte directamente a la página de confirmación:</p>
          <div style="display: flex; justify-content: center; margin-top: 20px;">
            <a href="${validationUrl}" 
               style="text-align: center; display: inline-block; padding: 10px 20px; color: white; background-color: #5E9E70; text-decoration: none; border-radius: 5px;">
              Confirmar correo
            </a>
          </div>
        </div>
      </div>
    </div>
    `;

    return html
  },
};
