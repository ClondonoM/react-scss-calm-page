import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='app__footer'>
        <h2 className='head-text'>
          Hi! here we can <span>talk!!</span>
        </h2>

        <div className='app__footer-email '>
          <a href='mailto:c.londono.m@gmail.com '>
            <img src={images.email} alt='emailme' />
          </a>
        </div>

        <div className='app__footer-social'>
          <div className='app__footer-img'>
            <a
              href='https://www.linkedin.com/in/carlos-alberto-londo%C3%B1o-martinez-b12a10234/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={images.linkedin} alt='linkedin' />
            </a>
          </div>
          <div className='app__footer-img'>
            <a
              href='https://github.com/ClondonoM'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='app__footer-img-github'
                src={images.github}
                alt='github'
              />
            </a>
          </div>
          <div className='app__footer-img'>
            <a
              href='https://twitter.com/CLondonoDev'
              target='_blank'
              rel='noreferrer'
            >
              <img src={images.twitter} alt='twitter' />
            </a>
          </div>
        </div>

        <div className='copyright'>
          <p className='p-text'>@2022 Carlos Londono</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Footer, 'contact');
