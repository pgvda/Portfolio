import React from "react";
import {motion} from 'framer-motion';
import { slideIn } from "../utils/motion";

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

                <div className="w-auto h-[150px]">

                <div class="container p-4 pb-0">

    <section class="mb-4">

      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i></a>


      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i></a>

  
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i></a>

     
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-instagram"></i></a>

   
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i></a>

   
      <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i></a>
    </section>

  </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer;