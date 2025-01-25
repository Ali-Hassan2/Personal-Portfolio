import {motion} from 'framer-motion'
import React, { useState, useEffect } from 'react';
import Content from '../assets/Content';
import profilePic from '../assets/projects/kevinRushProfile.jpg'
const Hero = () => {
    const roles = [
        'Full Stack Developer',
        'Python Developer',
        '.NET Developer',
        'React.js Developer',
        'Node.js Developer',
        'Frontend Engineer',
        'Backend Developer',
        'UI/UX Designer',
        'DevOps Engineer',
        'Database Administrator',
        'AI/ML Engineer',
        'Data Scientist',
        'Cloud Architect',
        'Cybersecurity Specialist',
        'Blockchain Developer',
        'Game Developer',
        'Mobile App Developer',
        'Software Engineer',
        'Technical Writer',
        'Open Source Contributor'
      ];
  const [currentText, setCurrentText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 150; // Speed for typing and deleting

  useEffect(() => {
    const handleTyping = () => {

        
      const currentRoleText = roles[currentRole];
      if (!isDeleting && charIndex < currentRoleText.length) {
        // Add a character
        setCurrentText(currentText + currentRoleText[charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Remove a character
        setCurrentText(currentText.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRoleText.length) {
        // Wait before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, roles, currentRole, currentText, typingSpeed]);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0}} 
             className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ali Hassan</motion.h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              {currentText}
              <span className="blinking-cursor">|</span>
            </span>

            <motion.p
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0}}
             className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                {Content}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:-8'>
            <div className='flex justify-center'>
                <motion.img
                initial={{x:50, opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5, delay:0}}
                 className='rounded-2xl' src={profilePic} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
