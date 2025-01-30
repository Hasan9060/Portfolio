import { motion } from "framer-motion";

// Variants for the bottom transition effect
const transitionVariants = {
  initial: {
    y: "100%", // Start from bottom
    height: "100%",
  },
  animate: {
    y: "0%", // Move to top
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"], // Slide down to hide
    height: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      {/* Dark Blue */}
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-40 bg-[#0a1f44]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      {/* Medium Blue */}
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-30 bg-[#153e75]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      {/* Bright Blue */}
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-20 bg-[#1e5aa0]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      {/* Light Blue */}
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-10 bg-[#66a3ff]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
