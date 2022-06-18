import { useState } from 'react';

import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleSubmit = () => {
  //   setLoading(true);
  //   const contact = {
  //     _type: 'contact',
  //     name: formData.name,
  //     email: email,
  //     message: message,
  //   };
  // };

  return (
    <>
      <h2 className='head-text'>
        Hi! here we can <span>talk!!</span>
      </h2>

      <div className='app__footer-cards app__flex '>
        {/* <img className='email-icon' src={images.email} alt='email' /> */}

        <a className='email-address' href='mailto:c.londono.m@gmail.com '>
          <img src={images.email} alt='emailme' />
        </a>
      </div>

      {/* {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(Footer, 'contact');
