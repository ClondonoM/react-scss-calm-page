import { Bslinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <Bslinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
