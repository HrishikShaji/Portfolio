import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="snap-center bg-gray-400 h-screen w-screen relative flex justify-center items-center"
    >
      <motion.h1
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="absolute top-[100px] text-2xl"
      >
        Contact
      </motion.h1>
      <div>
        <form className="bg-gray-500 rounded-lg sm:p-5 ">
          <ul className="sm:p-10 py-10 px-2">
            <li className="flex justify-between items-center m-4">
              <label className="mr-2">Name</label>
              <input type="text" className="rounded-md p-2" />
            </li>
            <li className="flex justify-between items-center m-4">
              <label className="mr-4">Email</label>
              <input type="email" className="rounded-md p-2" />
            </li>
            <li className="flex justify-between items-center m-4">
              <textarea
                placeholder="Type your message..."
                className="w-full p-2 rounded-md"
              />
            </li>
            <li className="flex justify-center items-center m-4">
              <button type="submit" className="bg-gray-300 p-2 rounded-md">
                Submit
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;
