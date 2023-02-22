import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-400 snap-center h-screen w-screen relative flex justify-center items-center"
    >
      <motion.h1
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="absolute top-[100px] text-2xl"
      >
        About
      </motion.h1>
      <motion.div
        whileInView={{ x: [300, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] rounded-md bg-gray-200"
      >
        <p className="p-10">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
        </p>
      </motion.div>
    </div>
  );
};

export default About;
