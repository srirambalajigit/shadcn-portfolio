'use server';
import { Resend } from 'resend';
import { ContactTemplate } from '@/components/email/contact-template';

import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please enter a valid email.",
    })
    .email(),
  message: z.string().max(380).min(4),
})

export async function contactSubmit(prevState: any, formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message')

  const validatedFields = contactFormSchema.safeParse({
    name,
    email,
    message
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Form validation failed, please check and try again!'
    }
  }

  const { data: res, error } = await resend.emails.send({
    from: 'contact@srirambalaji.com',
    to: 'srirambalajiandr@gmail.com',
    subject: 'Contact Form',
    react: ContactTemplate({ name, email, message }),
    text: message
  });

  if (error) {
    return {
      message: 'Something went wrong! Please try again later'
    };
  }

  return {
    message: 'Your contact request has been submitted'
  };
}
