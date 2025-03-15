import { CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import sampleVideo from "../assets/sampleVideo.mp4";
import { checklistItems } from "../constants";

// Animation Variants
const fadeInOut = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.6 } }, // Fade out when leaving
};

const Features = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit"); // Fade out when out of view
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="about"
      ref={ref}
      className="mt-20 scroll-mt-30"
      initial="hidden"
      animate={controls}
      exit="exit"
    >
      {/* Title */}
      <motion.div className="text-center px-5" variants={fadeInOut}>
        <span className="text-orange-500 rounded-full h-12 text-lg font-bold px-4 py-2 uppercase">
          Features
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-5xl text-center mt-8 tracking-wide font-bold"
        variants={fadeInOut}
      >
        Supercharge your{" "}
        <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
          application with Tochi
        </span>
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        {/* Video Player */}
        <motion.div
          className="p-10 w-full lg:w-1/2 flex justify-center items-center flex-shrink-0 mt-[-10px] lg:mt-[-150px]"
          variants={fadeInOut}
        >
          <div className="relative w-full max-w-lg">
            <video
              src={sampleVideo}
              controls
              className="rounded-3xl w-full h-auto border border-white-500 hover:scale-105 duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
              style={{ maxHeight: "500px", objectFit: "cover" }} // Ensures video retains shape
            />
          </div>
        </motion.div>

        {/* Checklist Items */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div key={index} className="flex mb-12" variants={fadeInOut}>
              <div className="text-orange-500 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
