import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {

  return(
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt='title' className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bolt text-center'>{title}</h3>
        </div>
        
      </motion.div>

    </Tilt>
  )

}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Vidusha, a Computer Engineering student at the Faculty of Engineering, University of Ruhuna. I'm
really passionate about technology and love diving into the world of computer engineering. I'm always
excited about the latest advancements in technology and enjoy solving problems. I'm driven by a
desire to innovate and make a difference. I'm eager to apply my skills and knowledge to interesting
projects and I'm committed to learning and growing in the field of computer engineering.

      </motion.p>
    
      <div className='mt-20px flex flex-wrap gap-10'>
        {services.map((services, index) =>(
          <ServiceCard key={services.title} index={index} {...services}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");