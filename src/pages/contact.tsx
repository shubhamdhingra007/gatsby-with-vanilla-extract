import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { PageLayout } from "../components/layout/layout";
import { container, form, formField, submit } from "../styles/contact.css";

const ContactPage = (props: PageProps) => {
  return (
    <PageLayout>
      <h1>Simple contact form using Formspree</h1>
      <div className={container}>
        <div>
          <h1>Want to get in touch?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            accusamus dolore ducimus suscipit perspiciatis impedit autem
            expedita necessitatibus ab nemo. Similique doloremque distinctio
            fugit eaque rem nam quam et quas?
          </p>
        </div>
        <form
          action="https://formspree.io/f/xdojynvb"
          method="POST"
          className={form}
        >
          <label>
            <div>Your name:</div>
            <input className={formField} required type="text" name="name" />
          </label>
          <label>
            <div>Your email:</div>
            <input className={formField} required type="email" name="email" />
          </label>
          <label>
            <div>Your message:</div>
            <textarea className={formField} required name="message"></textarea>
          </label>
          <button type="submit" className={submit}>
            Submit form
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Contact page</title>
      <meta name="description" content="Request to contact" />
    </>
  );
};
