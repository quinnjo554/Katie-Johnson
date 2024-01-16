"use server"
import { Resend } from "resend";
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const resend = new Resend("re_Fi8Ta5Jr_P8FKEvMufXESRkQQ5wR2Kxe4");
export const sendEmail = async (values: FormValues) => {
    const concat = " Sender Name: " + values.name + "\n Sender Email: " + values.email;
    resend.emails.send({
        from: 'katie.johnson@academicpathways.net',
        to: 'katie.johnson@academicpathways.net',
        subject: values.subject,
        text: values.message + "\n\n" + concat
    
    });

    resend.sendEmail({
        from: 'katie.johnson@academicpathways.net',
        to: values.email,
        subject: "Thank you" + values.name,
        text: "I have received your email and will be in touch shortly"
    })
                                                             
}
