import React from "react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavBar1 = () => {
  return (
    <div className="sticky top-0 z-30 w-full p-5 bg-gray-400 flex justify-center">
      <ul className="">
        <a href="#home" className="mx-3 text-2xl">
          Home
        </a>
        <a href="#about" className="mx-3 text-2xl">
          About
        </a>
        <a href="#skills" className="mx-3 text-2xl">
          Skills
        </a>
        <a href="#projects" className="mx-3 text-2xl">
          Projects
        </a>
        <a href="#contact" className="mx-3 text-2xl">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default NavBar1;
