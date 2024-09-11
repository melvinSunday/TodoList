"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    (<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "yesfont-display yestext-center yestext-4xl yesfont-bold yestracking-[-0.02em] yesdrop-shadow-sm md:yestext-7xl md:yesleading-[5rem]",
        className
      )}>
      {word}
    </motion.h1>)
  );
};

export default BlurIn;
