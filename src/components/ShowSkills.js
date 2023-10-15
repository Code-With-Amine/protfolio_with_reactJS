import React from "react";
import { motion } from "framer-motion";

function ShowSkills({ technology }) {
  return (
    <motion.div 
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{duration: 0.3}}
    layout className="skills--tech p-4 d-flex flex-column w-100">
      <img
        src={technology.cover}
        alt={technology.name}
        className="w-100 h-100"
      />
      <h3 className="text-center pt-2">{technology.name}</h3>
    </motion.div>
  );
}

export default ShowSkills;
