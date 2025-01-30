import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1oh17w", // Replace with your Email.js Service ID
        "template_i1j3e5g", // Replace with your Email.js Template ID
        form.current,
        "e_YWmh6uA0zJ5DtLb" // Replace with your Email.js User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* Text and Form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Text */}
          <h2 className='h2 text-center mb-4'>
            Let&apos;s <span className='text-accent'>Connect.</span>
          </h2>
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* Input Group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='input'
                required
              />
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='input'
                required
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              className='input'
              required
            />
            <textarea
              placeholder='Message'
              name='message'
              className='textarea'
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='absolute translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;