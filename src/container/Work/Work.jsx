// import { useState } from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { worksData } from './workData';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className='head-text'>
        My <span>Work </span>
      </h2>

      <div className='app__work-portfolio app__flex'>
        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-profiles'
        >
          {worksData.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={work.imgUrl} alt={work.title} />
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className='app__work-social app__flex'>
                  <div>
                    <a href={work.projectLink} target='_blank' rel='noreferrer'>
                      <AiFillEye />
                    </a>
                  </div>
                  <div>
                    <a href={work.codeLink} target='_blank' rel='noreferrer'>
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
                <div className='app__work-tags app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Work, 'work');
