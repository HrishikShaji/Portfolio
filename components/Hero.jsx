import React from "react";
import Image from "next/image";
import sphere from "/public/assets/circle.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="snap-center flex relative justify-center w-screen h-screen items-center bg-gray-400"
    >
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
      >
        <Image src={sphere} alt="img" />
      </motion.div>

      <h1 className="z-10 text-black text-2xl">
        <Typewriter
          options={{
            strings: ["Hello!", "I'm a Web Developer"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </h1>
    </div>
  );
};

export default Hero;
