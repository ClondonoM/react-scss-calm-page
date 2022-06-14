import ReactTooltip from 'react-tooltip';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { skillsData } from './skillsData';

import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>
        My <span>Skills</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skillsData.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
