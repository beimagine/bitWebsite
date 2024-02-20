'use client'
import { Element } from 'react-scroll'
import './Contact.css'
const Contact = () => {
    return (
        <Element name='contact'>
        <div className="contact">
            <form action="#" method="post">
                <h1 className="contactTitle">Contact us</h1>
                <input placeholder='Name' type="text" className="name" name="name" required />
                <input placeholder='Email' type="email" className="email" name="email" required />
                <input placeholder='Company And Organization' type="text" className="company" name="company" />
                <textarea placeholder='Message' className="message" name="message" rows="4" required></textarea>
                <div>
                <button className='messageButton'>Send Message</button>
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