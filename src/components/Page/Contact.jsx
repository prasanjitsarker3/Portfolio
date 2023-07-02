import React from 'react';

const Contact = () => {
    const handleSubmitInfo = (event) => {

    }
    return (
        <div>
            <div className='py-5 text-2xl font-sans text-center'>
                <h1>Contact with me</h1>
            </div>
            <div data-aos="fade-up"
                className='md:w-1/2 w-full mx-auto font-sans bg-gradient-to-r from-teal-500 to-blue-900 py-12 rounded'>
                <form onSubmit={handleSubmitInfo} className=''>
                    <div className=' px-12 pb-1'>
                        <p className='py-1'>Your Name</p>
                        <input type="text" placeholder="Name" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Your Email</p> 
                        <input type="email" placeholder="Email" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Subject</p>
                        <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full mx-auto" />
                    </div>
                    <div className=' px-12'>
                        <p className='py-1'>Message</p>
                        <textarea className="textarea textarea-accent w-full mx-auto" placeholder="Message"></textarea>
                    </div>
                    <div className=' px-12'>
                        {/* <p className='py-1'>Message</p> */}
                        <button className="btn bg-gradient-to-r from-teal-400  to-teal-600  border-none  w-full mx-auto my-2">SEND MESSAGE</button>
                    </div>
                    {/* <button className='btn w-full mx-auto px-12'></button> */}
                </form>
            </div>
        </div>
    );
};

export default Contact;