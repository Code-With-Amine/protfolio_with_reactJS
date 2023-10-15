import { useState } from "react";
import Header from "./Header";
import React from "react";
import SkillsFiltier from "./SkillsFiltier";
import ShowSkills from "./ShowSkills";
import { technologies } from "../assets/data/technologiesData";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [stackFilter, setStackFilter] = useState("all");

  return (
    <div className="container" id="Skills">
      <Header title="Skills" />
      <SkillsFiltier
        stackFilter={stackFilter}
        setStackFilter={setStackFilter}
      />
      <motion.div
        layout
        className="skills mt-4"
      >
        <AnimatePresence>
        {technologies.map(
          (tech, index) =>
            (stackFilter === tech.stack || stackFilter === "all") && (
              <ShowSkills technology={tech} key={`${tech.name}-${index}`} />
            )
        )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Skills;
