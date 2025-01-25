import { RiReactjsLine } from 'react-icons/ri';
import { DiNodejs, DiMongodb, DiPython, DiDatabase } from 'react-icons/di';
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiGithub, SiGeeksforgeeks, SiLeetcode, SiSqlite, SiDotnet } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { GiAbstract039 } from 'react-icons/gi'; // For AOS
import {motion} from 'framer-motion'


const iconAnimation = (duration) =>({
    initial : {y: -8},
    animate:{
        y:[8,-8],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType :"reverse",
        },
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-3xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-5xl text-green-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb className="text-5xl text-green-600" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-5xl text-blue-400" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className="text-5xl text-blue-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-5xl text-blue-700" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCode className="text-5xl text-purple-600" /> {/* Generic icon for C# */}
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDotnet className="text-5xl text-purple-500" /> {/* .NET */}
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-5xl text-orange-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-5xl text-blue-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-5xl text-yellow-400" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-5xl text-cyan-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiBootstrap className="text-5xl text-purple-700" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGithub className="text-5xl text-neutral-800" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGeeksforgeeks className="text-5xl text-green-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiDatabase className="text-5xl text-gray-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLeetcode className="text-5xl text-orange-400" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSqlite className="text-5xl text-blue-500" />
                </motion.div>

                <motion.div
                variants = {iconAnimation(2.5)}
                initial= "initial"            
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GiAbstract039 className="text-5xl text-pink-500" /> {/* AOS */}
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
