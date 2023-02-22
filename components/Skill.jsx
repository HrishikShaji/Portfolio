import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-md bg-white"
    >
      <img />
    </motion.div>
  );
};

export default Skill;
