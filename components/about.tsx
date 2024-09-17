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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        👨‍💻 I’m a <span className="font-medium">Software Engineer</span> specializing in <span className="font-medium">Java, Python, Spring Boot, Kafka</span>, and creating scalable solutions for distributed systems. I'm passionate about <span className="font-medium">system design</span> and solving complex problems through automation.
      </p>
      <p className="mb-3">
        🚀 Currently seeking new opportunities to bring my skills to impactful projects.
      </p>
      <p>
        Outside of coding, I stay active with gym workouts and badminton. My downtime is spent playing video games and watching movies. I am also keen on <span className="font-medium">learning new things</span>, currently focusing on fitness techniques and musical pursuits like playing the guitar.
      </p>
    </motion.section>
  );
}
