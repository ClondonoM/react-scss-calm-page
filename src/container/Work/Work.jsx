import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className='head-text'>
        My Work <span>section</span>
        <br />
        means <span> Good Business</span>
      </h2>
    </>
  );
};

export default AppWrap(Work, 'work');
