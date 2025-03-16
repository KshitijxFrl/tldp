import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);

    // Trigger download for Windows only
    if (card === "Windows") {
      const link = document.createElement("a");
      link.href = "tldp/downloads/tochi-windows/";
      link.download = "tochisetup.exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closeModal = () => setSelectedCard(null);

  return (
    <div
      id="download"
      ref={ref}
      className="w-full py-[5rem] px-4 bg-dark mt-11"
    >
      <motion.h2
        className="text-5xl font-bold text-center text-white"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
      >
        Download{" "}
        <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
          Tochi
        </span>{" "}
        <span className="bg-red text-sm px-4 border-3 border-orange-700 rounded-full">
          v 1.0.0
        </span>
      </motion.h2>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 py-10 gap-8">
        {[
          { name: "Windows", img: Windows },
          { name: "Linux", img: Linux },
          { name: "Mac", img: Mac },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-full h-[350px] bg-black rounded-4xl border border-green-400 hover:scale-105 duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] cursor-pointer"
            variants={popUp}
            initial="hidden"
            animate={controls}
            onClick={() => handleCardClick(item.name)}
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

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white rounded-2xl p-6 max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-xl font-bold text-gray-300 hover:text-red-500"
            >
              ✕
            </button>

            {/* Modal Content Based on Card */}
            {selectedCard === "Windows" && (
              <>
                <h3 className="text-2xl font-bold mb-4">
                  Download tochi for Windows
                </h3>
                <div className="bg-blue-600 text-white p-3 rounded-sm mb-4 text-sm">
                  Downloading Tochi installer for Windows...
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  <li>
                    Use the Tochi installer to install Tochi on the system.
                  </li>
                  <li>
                    Provide Tochi access and add Tochi to the path by checking
                    the parameters in the installer.
                  </li>
                </ul>
              </>
            )}

            {selectedCard === "Linux" && (
              <>
                <h3 className="text-2xl font-bold mb-4">
                  Download tochi for Linux
                </h3>
                <div className="bg-blue-600 text-white p-3 rounded-sm mb-4 text-sm">
                  Use these commands to install Tochi
                </div>
                <div className="bg-neutral-800 p-3 rounded-md font-mono text-sm mb-2">
                  sudo apt update && sudo apt install tochi
                </div>
                <div className="bg-neutral-800 p-3 rounded-md font-mono text-sm">
                  tochi init && tochi start
                </div>
              </>
            )}

            {selectedCard === "Mac" && (
              <>
                <h3 className="text-2xl font-bold mb-4">
                  Download tochi for Mac
                </h3>
                <div className="bg-yellow-600 text-white p-3 rounded-lg text-sm">
                  Coming soon for Mac systems
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
