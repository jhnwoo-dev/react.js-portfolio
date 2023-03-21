import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_one4vdd', 'template_tniigpf', form.current, 'JxncV2Nalp39tFTfo')
            .then((result) => {
                alert("Your email has been sent!");
                e.target.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className="contact-me" ref={form} onSubmit={sendEmail}>
            <label className="contact-label">Name</label>
            <input className="contact-inputs" type="text" name="user_name" />
            <label className="contact-label">Email</label>
            <input className="contact-inputs" type="email" name="user_email" />
            <label className="contact-label">Message</label>
            <textarea className="contact-inputs message-box" name="message" />
            <input className="contact-btn" type="submit" value="Send" />
        </form>
    );
};

export default Contact;
