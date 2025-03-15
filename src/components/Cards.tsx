import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Windows from "../assets/Windows.png";
import Linux from "../assets/Linux.png";
import Mac from "../assets/Mac.png";

// Animation Variants
const fadeInOut = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div
      id="download"
      ref={ref}
      className="w-full py-[5rem] px-4 bg-dark mt-11"
    >
      {/* Title Section with Fade In/Out */}
      <motion.h2
        className="text-5xl font-bold text-center py-15 text-white"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
      >
        Download{" "}
        <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
          Tochi{" "}
        </span>
        <span className="bg-red text-sm px-4 border-3 border-orange-700 rounded-full">
          v 1.0.0
        </span>
      </motion.h2>

      {/* Cards Grid with Pop-up Effect */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 py-10 gap-8">
        {[
          { name: "Windows", img: Windows },
          { name: "Linux", img: Linux },
          { name: "Mac", img: Mac },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-full h-[350px] bg-black rounded-4xl border border-green-400 hover:scale-105 duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            variants={popUp}
            initial="hidden"
            animate={controls}
          >
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl font-bold text-center py-5 text-white">
                {item.name}
              </h2>
              <img
                src={item.img}
                alt={`${item.name} Logo`}
                className="w-40 h-40"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
