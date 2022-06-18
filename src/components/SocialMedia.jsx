import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://www.linkedin.com/in/carlos-alberto-londo%C3%B1o-martinez-b12a10234/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/ClondonoM' target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/CLondonoDev' target='_blank'>
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
