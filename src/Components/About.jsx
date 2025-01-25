import aboutImage from '../assets/projects/about.jpg';
import About_Text from '../assets/About_Text';

import {motion} from 'framer-motion'

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap">
                {/* Image Section */}
                <motion.div
                whileInView={{x:0, opacity:1}}
                initial={{x:-100, opacity:0}}
                transition={{duration:0.5}}
                 className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImage} alt="About" />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                whileInView={{x:0,opacity:1}}
                initial={{x:100, opacity:0}}
                transition={{duration:0.5}}
                 className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="mt-10 text-sm text-gray-400 sm:text-base md:text-lg lg:mt-20 lg:ml-8 lg:leading-relaxed">
                            {About_Text}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
