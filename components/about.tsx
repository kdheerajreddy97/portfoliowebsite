"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-medium">full-stack developer</span>, 
        I have honed a diverse set of skills including <span className="font-medium">React, Next.js, Spring Boot, MongoDB</span>, 
        and I am proficient in <span className="font-medium"> Azure, Python, Java, PowerBI</span>, among others. 
        I am always looking to adopt new technologies and am currently seeking a <span className="font-medium">full-time position. </span> 
        where I can contribute to innovative and impactful projects.
      </p>

      <p>
          Outside of coding, I stay active with gym workouts and badminton. My downtime is spent playing video games and watching movies. I am also keen on <span className="font-medium">learning new things</span>, currently focusing on fitness techniques and musical pursuits like playing the guitar.
      </p>
    </motion.section>
  );
}
