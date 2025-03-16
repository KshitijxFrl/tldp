import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { commandList } from "../constants";
import { useInView } from "framer-motion";

// Animation Variants
const fadeInOut = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const bottomToTopSmooth = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // Smooth Bezier Curve
  },
};

const Commands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
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
      id="commands"
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 py-12 mt-30"
    >
      {/* Left Section: Title with Fade In & Out */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
      >
        <span className="text-orange-500 rounded-full h-12 text-lg font-bold px-0 py-2 uppercase">
          Commands
        </span>
        <h2 className="text-6xl font-bold text-white">Work with Tochi</h2>
        <p className="mt-4 md:text-2xl text-xl font-bold text-gray-500">
          Use these powerful commands to interact with Tochi efficiently.
        </p>
      </motion.div>

      {/* Right Section: Animated Card (Smoother Bottom to Top) */}
      <motion.div
        className="lg:w-1/2 w-full max-w-lg bg-[#01011F] border border-orange-500 rounded-xl overflow-hidden hover:scale-105 duration-300 drop-shadow-[0_0_6px_rgba(255,140,0,0.9)]"
        variants={bottomToTopSmooth}
        initial="hidden"
        animate={controls}
      >
        <div className="p-6 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800">
          <Accordion type="multiple" className="w-full">
            {commandList.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-700"
              >
                <AccordionTrigger>{item.command}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
};

export default Commands;
