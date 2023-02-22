import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-5 hidden sm:flex  fixed w-full overflow-x-hidden overflow-y-scroll z-20 sm:flex justify-center items-center bg-gray-400">
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
      >
        <ul className="hidden sm:flex">
          <li className="mx-2 text-2xl">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2 text-2xl">
            <a href="#about">About</a>
          </li>
          <li className="mx-2 text-2xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="mx-2 text-2xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-2 text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.div>
      {toggle ? (
        <motion.div
          whileInView={{ y: [-200, 0] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" h-[40%] w-screen flex flex-col justify-center fixed left-0  top-0 right-0 z-10 bg-gray-300"
        >
          <ul className="flex flex-col items-center">
            <li className="mx-2 text-2xl">
              <a href="#home" onClick={() => setToggle(false)}>
                Home
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="#about" onClick={() => setToggle(false)}>
                About
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="#skills" onClick={() => setToggle(false)}>
                Skills
              </a>
            </li>
            <li className="mx-2 text-2xl">
              <a href="#projects" onClick={() => setToggle(false)}>
                Projects
              </a>
            </li>
            <li className="mx-2 mb-5 text-2xl">
              <a href="#contact" onClick={() => setToggle(false)}>
                Contact
              </a>
            </li>
            <div className="mt-10 rounded-full p-5 bg-white">
              <HiX onClick={() => setToggle(false)} />
            </div>
          </ul>
        </motion.div>
      ) : (
        <div className="sm:hidden p-5   rounded-full bg-gray-300">
          <HiMenuAlt4 className="" onClick={() => setToggle(true)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
