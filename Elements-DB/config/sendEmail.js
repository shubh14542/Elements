import { Resend } from 'resend';
import dotenv from 'dotenv'

dotenv.config()

if(!process.env.RESEND_API){
    console.log("Provide an email")
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({sendTo, subject, html})=>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'BinkeyIt <onboarding@resend.dev>',
            to: sendTo,
            subject: subject, 
            html: html,
          });

          if (error) {
            return console.error({ error });
          }

    } catch (error) {
        console.log(error)
    }
}

export default sendEmail