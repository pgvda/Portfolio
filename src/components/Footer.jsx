import React from "react";
import {motion} from 'framer-motion';
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className=" w-full h-auto mt-10 sm:flex-col flex-row-reverse flex gap-10 overflow-hidden ">
            <motion.div 
                variants={slideIn('left', "tween", 0.2, 1)}
                className="flex-[1] bg-black-100 rounded-2xl"
            >
                <div className="bg-black-200 h-[80px] w-full p-8 text-center text-[20px]">
                    <label>
                        <span className="blue-text-gradient text-[20px] font-bold ">VIDUSHA </span>- Computer Engineer
                    </label>
                </div>

                <div className="w-auto h-[60px]">

                <footer>
                    <div className="flex flex-row mt-7 justify-center item-center gap-10 sm:pl-14 sm:pr-14">
                        <a href="https://www.facebook.com/Vidusah D Ariyarathna" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                        </a>
                        <a href="https://github.com//pgvda" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/vidusha dilshan" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://wa.me/0769342644" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </a>
                    </div>
                </footer>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer;