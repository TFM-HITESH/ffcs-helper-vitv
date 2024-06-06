import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function RotateText() {
  const words = ["deciding", "creating", "choosing", "planning", "drafting"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 10000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-center text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white p-2 px-4 rounded-3xl font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        <button
          onClick={() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
          }}
        >
          {words[index]}
        </button>
      </motion.h1>
    </AnimatePresence>
  );
}
