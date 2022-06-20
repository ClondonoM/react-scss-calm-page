// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { abouts } from './aboutData';

// import { client } from '../../client';
// import BlockContent from '@sanity/block-content-to-react';
// import imageUrlBuilder from '@sanity/image-url';
// import sanityClient from '@sanity/client';
import './About.scss';

const About = () => {
  // const [abouts, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  // const [abouts, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  // const builder = imageUrlBuilder(sanityClient);
  // function urlFor(source) {
  //   return builder.image(source);
  // }

  return (
    <>
      <h2 className='head-text'>
        Needs, Development, <span>Solutions </span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            trasition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
