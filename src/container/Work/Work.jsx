// import { useState } from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { worksData } from './workData';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';

const Work = () => {
  // const [activeFilter, setActiveFilter] = useState('All');
  // const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  //const [works, setWorks] = useState([worksData]);
  // const [filterWork, setFilterWork] = useState([worksData]);
  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);
  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);
  //     if (item === 'All') {
  //       setFilterWork(worksData);
  //     } else {
  //       setFilterWork(worksData.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  //   console.log(setFilterWork);
  // };
  return (
    <>
      <h2 className='head-text'>
        My <span>Work </span>
      </h2>
      {/* <div className='app__work-filter'>
        {[
          'UI/UX',
          'Web Development',
          'Web Design',
          'React JS',
          'JavaScript',
          'All',
        ].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div> */}
      <div className='app__work-portfolio app__flex'>
        <motion.div
          //animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__profiles'
        >
          {worksData.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={work.imgUrl} alt={work.title} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub onClick={'https://github.com/ClondonoM'} />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>
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
