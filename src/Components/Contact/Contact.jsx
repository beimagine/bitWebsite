'use client'
import { Element } from 'react-scroll'
import './Contact.css'
import { useState } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("");

    const sendMail = () => {
        const params = {
            from_name: fullName,
            email_id: email,
            company: company,
            message: message,
        };

        emailjs.send("service_eu3y028", "template_4l4f046", params, { publicKey: "6yOkYye0ZFCWEVtQJ" }).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setFullName('');
                setEmail('');
                setCompany('');
                setMessage('');
            },
            (err) => {
                console.log("FAILED...", err);
            }
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMail();
    };
    return (
        <Element name='contact'>
            <div className="contact">
                <form action="#" method="post">
                    <h1 className="contactTitle">Contact us</h1>
                    <input placeholder='Name' value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="name" name="name" required />
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="email" name="email" required />
                    <input placeholder='Company And Organization' value={company} onChange={(e) => setCompany(e.target.value)} type="text" className="company" name="company" />
                    <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} className="message" name="message" rows="4" required></textarea>
                    <div>
                        <button className='messageButton' onClick={handleSubmit}>Send Message</button>
                    </div>
                </form>
                <div className='Cimg'>
                    <img src='/assets/Cimg.svg' />
                </div>
            </div>
        </Element>
    )
}
export default Contact;