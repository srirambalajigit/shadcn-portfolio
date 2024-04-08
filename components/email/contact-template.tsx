import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Hello, Sriram Balaji!</h1>
    <p>You got MAIL!!!</p>

    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <br></br>
    {message}
  </div>
);

export default ContactTemplate;