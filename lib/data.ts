import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import craiglistImg from "@/public/craiglist.png";
import pubsubImg from "@/public/pubsub.png";
import redditImg from "@/public/reddit.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Hyderabad, India",
    description:
      "Skills: Html, CSS, JavaScript, Microsoft Dynamics 365, PowerApps, SharePoint, Splunk, C#, .NET. SQL Server, ServiceNOW, SSIS, SSAS, PowerBI, SQL Server.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Apr 2021",
  },
  {
    title: "Software Engineering Intern",
    location: "Rochester, NY",
    description:
      "Skills: SSIS, SSAS, PowerBI, SQL Server, C#.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2022 - Aug 2022",
  },
  {
    title: "Software Engineering Intern",
    location: "Rochester, NY",
    description:
      "Skills: Microsoft Fabric, PySpark Python, SQL, Power Query, Power Automate, Sharepoint. ",
    icon: React.createElement(FaReact),
    date: "May 2023 - Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Pub-Sub Model",
    description:
      "Created a highly scalable publish-subscribe messaging model using Docker, enabling seamless real-time communication and enhancing system reliability, resulting in a 30% reduction in response time.",
    tags: ["Python", "Docker"],
    imageUrl: pubsubImg,
  },
  {
    title: "Craiglist Search",
    description:
      "Built a web application enabling users to search for cars on Craigslist by manufacturer or proximity (5km radius). Processed and stored data for over 5K+ vehicles, significantly improving search efficiency and user experience.",
    tags: ["MongoDB", "FastAPI", "Python", "HTML", "JavaScript"],
    imageUrl: craiglistImg,
  },
  {
    title: "Reddit Firehose",
    description:
      "Designed Spring Boot microservices to extract data from Reddit’s API and stream into Kafka. Leveraged Docker compose to bring up Kafka cluster of multiple brokers. Externalized configuration of entire application using Spring Cloud Config.",
    tags: ["Java", "Spring Boot", "Kafka", "Docker", "Microservice"],
    imageUrl: redditImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C#",
  ".NET",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "XML",
  "C",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Neo4J",
  "H-2 Database",
  "M Query",
  "DAX Query",
  "Azure DataBricks",
  "Azure Data Factory",
  "Power Query",
  "Cosmos DB",
  "PowerBI",
  "SSIS",
  "SSAS",
  "Apache Spark",
  "SharePoint",
  "Dynamics 365",
  "ArcGIS",
  "Git",
  "Docker",
  "Power Automate",
  "Microsoft Fabric",
  "Git",
  "SNOW",
  "Kafka"  
] as const;