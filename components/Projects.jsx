import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Projects = () => {
  const slides = [
    {
      title: "slide 1",
      image:
        "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      code: "code 1",
    },
    {
      title: "slide 2",
      image:
        "https://images.unsplash.com/photo-1525919646094-d07bd618cd93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      code: "code 2",
    },
    {
      title: "slide 3",
      image:
        "https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      code: "code 3",
    },
    {
      title: "slide 4",
      image:
        "https://images.unsplash.com/photo-1476445704028-a36e0c798192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      code: "code 4",
    },
    {
      title: "slide 5",
      image:
        "https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      code: "code 5",
    },
    {
      title: "slide 6",
      image:
        "https://images.unsplash.com/photo-1504714071067-f2880fba258a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzOTU0NTB8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      code: "code 6",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const prevSlide = () => {
    if (slides.length === 1) {
      return;
    }
    if (prevIndex > 0) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      const newPrevIndex = isFirstSlide ? slides.length - 2 : currentIndex - 2;
      const newNextIndex = isFirstSlide ? currentIndex + 1 : currentIndex;
      setCurrentIndex(newIndex);
      setPrevIndex(newPrevIndex);
      setNextIndex(newNextIndex);
    } else {
      setCurrentIndex(slides.length - 1);
      setPrevIndex(slides.length - 2);
      setNextIndex(0);
    }
    console.log("prevSlide is: ", prevIndex, currentIndex, nextIndex);
  };

  const nextSlide = () => {
    if (slides.length === 1) {
      return;
    }
    if (nextIndex <= slides.length - 2) {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      const newNextIndex = isLastSlide ? 1 : currentIndex + 2;
      const newPrevIndex = isLastSlide ? slides.length - 1 : currentIndex;
      setCurrentIndex(newIndex);
      setPrevIndex(newPrevIndex);
      setNextIndex(newNextIndex);
    } else {
      if (currentIndex === slides.length - 1 && nextIndex === 0) {
        setCurrentIndex(slides.length - 1);
        setPrevIndex(slides.length - 2);
        setNextIndex(0);
      } else {
        setCurrentIndex(0);
        setPrevIndex(slides.length - 1);
        setNextIndex(1);
      }
    }
    console.log("nextSlide is: ", prevIndex, currentIndex, nextIndex);
  };

  return (
    <div
      id="projects"
      className="snap-center h-screen w-screen bg-gray-400 relative flex justify-center items-center"
    >
      <motion.h1
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="absolute top-[100px] text-2xl"
      >
        Projects
      </motion.h1>
      <div className="relative group flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <motion.div
            whileInView={{ x: [-300, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden group md:flex flex-col items-center overflow-hidden relative w-[200px] h-[100px] bg-gray-400 rounded-md"
          >
            <img
              className="cursor-pointer"
              onClick={prevSlide}
              src={slides[prevIndex].image}
            />
          </motion.div>
          <motion.div
            whileInView={{ y: [300, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="group flex flex-col items-center overflow-hidden relative sm:w-[500px] w-[300px]  mx-10 h-[200px] sm:h-[250px] bg-gray-500 rounded-md"
          >
            <h1 className="bg-black text-white py-1 px-2 mt-2 rounded-xl hidden group-hover:block mx-3 absolute top-[10px[">
              {slides[currentIndex].title}
            </h1>
            <button className="bg-green-500 text-white py-1 px-2 mt-2 rounded-xl hidden group-hover:block absolute bottom-[10px]">
              {slides[currentIndex].code}
            </button>
            <img
              className="object-cover h-full w-full"
              src={slides[currentIndex].image}
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden group md:flex flex-col items-center overflow-hidden relative w-[200px] h-[100px] bg-gray-300 rounded-md"
          >
            <img
              className="cursor-pointer"
              onClick={nextSlide}
              src={slides[nextIndex].image}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex absolute bottom-[150px]">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white rounded-full p-2 m-2 cursor-pointer"
        >
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white rounded-full p-2 m-2 cursor-pointer"
        >
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
