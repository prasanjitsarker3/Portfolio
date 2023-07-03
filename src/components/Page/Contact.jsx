import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1fkxtbn', 'template_dp6pjq7', form.current, 'CTcv9pyzlyFDSQKgH')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className='py-5 text-2xl font-sans text-center'>
                <h1>Contact with me</h1>
            </div>
            <div data-aos="fade-up"
                className='md:w-1/2 w-full mx-auto font-sans bg-gradient-to-r from-teal-500 to-blue-900 py-12 rounded'>
                <form ref={form} onSubmit={sendEmail} >
                    <div className=' px-12 pb-1'>
                        <p className='py-1'>Your Name</p>
                        <input name="user_name" type="text" placeholder="Name" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Your Email</p>
                        <input type="email" name="user_email" placeholder="Email" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Subject</p>
                        <input type="text" name="subject" placeholder="Subject" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Message</p>
                        <textarea name="message" className="textarea textarea-accent w-full mx-auto" placeholder="Message"></textarea>
                    </div>
                    <div className=' px-12'>
                        <button type="submit" value="Send" className="btn bg-gradient-to-r from-teal-400  to-teal-600  border-none  w-full mx-auto my-2">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;