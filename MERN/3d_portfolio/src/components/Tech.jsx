import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";

const icons = Object.values(technologies).map((technology) => technology.icon);

const Tech = () => {
  return (
    <div className="relative">
      <StarsCanvas />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="w-full h-[75vh] mx-auto">
          <p className={styles.sectionSubText}>Skills</p>
          <h3 className={styles.sectionHeadText}>Tech Wizardry.</h3>
          <BallCanvas icons={icons} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
