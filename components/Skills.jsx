import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="snap-center h-screen w-screen relative bg-gray-400 flex justify-center items-center"
    >
      <motion.h1
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="absolute top-[120px] sm:[100px]  text-2xl"
      >
        Skills
      </motion.h1>
      <div className=" grid grid-cols-3 sm:grid-cols-6 gap-4 mt-[100px]">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
