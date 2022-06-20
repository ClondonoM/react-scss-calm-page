import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='app__social-linkedin'>
        <a
          href='https://www.linkedin.com/in/carlos-alberto-londo%C3%B1o-martinez-b12a10234/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div className='app__social-github'>
        <a href='https://github.com/ClondonoM' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div className='app__social-twitter'>
        <a
          href='https://twitter.com/CLondonoDev'
          target='_blank'
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
