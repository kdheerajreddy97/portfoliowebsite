import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import craiglistImg from "@/public/craiglist.png";
import pubsubImg from "@/public/pubsub.png";
import redditImg from "@/public/reddit.png";
import ingresubs from "@/public/IngreSubs.png";
import hackernews from "@/public/hackernews.png";


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
    title: "MAQSoftware, Software Engineer",
    location: "Hyderabad, India",
    description:
      "Skills: HTML, CSS, JavaScript, React.js, Node.js, Microsoft Dynamics 365, PowerApps, SharePoint, Splunk, C#, .NET, SQL Server, ServiceNOW, SSIS, SSAS, PowerBI.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Apr 2021",
  },
  {
    title: "Excellus, Software Engineering Intern - Data & Analytics Team",
    location: "Rochester, NY, USA",
    description:
      "Skills: Java, React.js, Docker, SSIS, SSAS, PowerBI, SQL Server.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2022 - Aug 2022",
  },
  {
    title: "Rochester Institute of Technology, Software Engineering Intern  - Auxillary Service Team",
    location: "Rochester, NY, USA",
    description:
      "Skills: Microsoft Fabric, PySpark Python, SQL, Power Query, Power Automate, Sharepoint, PowerBI. ",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - Dec 2023",
  },
  {
    title: "Croyance, Software Engineer",
    location: "Remote, USA",
    description:
      "Skills: Java, Spring Boot, GraphQL, Apache Kafka, Docker, Kubernetes, AWS.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Ingredient Substitution Tool",
    description:
      "The Ingredient Substitution Tool is a web application designed to help users find and contribute cooking ingredient substitutes. This application is built with a React.js frontend and a Django REST Framework backend.",
    tags: ["React.js", "Django", "Python", "Node.js"],
    imageUrl: ingresubs,
    link: "https://github.com/kdheerajreddy97/ingredient-substitution-tool",
  },
  {
    title: "Pub-Sub Model",
    description:
      "Created a highly scalable publish-subscribe messaging model using Docker, enabling seamless real-time communication and enhancing system reliability, resulting in a 30% reduction in response time.",
    tags: ["Python", "Docker"],
    imageUrl: pubsubImg,
    link: "https://github.com/kdheerajreddy97/DFS-Pub-Sub",
  },
  {
    title: "Craiglist Search",
    description:
      "Built a web application enabling users to search for cars on Craigslist by manufacturer or proximity (5km radius). Processed and stored data for over 5K+ vehicles, significantly improving search efficiency and user experience.",
    tags: ["MongoDB", "FastAPI", "Python", "HTML", "JavaScript"],
    imageUrl: craiglistImg,
    link: "https://github.com/kdheerajreddy97/Car_Search_MongoDB",
  },
  {
    title: "Movie Reviews App",
    description:
      "Developed a full-stack application for browsing and reviewing movies, using React for the front end and Spring Boot for the back end. Implemented RESTful APIs to manage movies and reviews, enabling users to submit and view movie reviews. ",
    tags: ["Java", "Spring Boot", "React", "MongoDb"],
    imageUrl: redditImg,
    link: "https://github.com/kdheerajreddy97/movie-reviews-app",
  },
  {
    title: "HackerNews Article Scraper",
    description:
      "This project is a Node.js script that uses Playwright to scrape and sort the latest articles from the "newest" page of Hacker News. The script collects the titles and timestamps of the 100 most recent articles and then checks if they are correctly sorted from newest to oldest based on their timestamps.",
    tags: ["Node.js", "npm"],
    imageUrl: hackernews,
    link: "https://github.com/kdheerajreddy97/HackerNews_ArticleScraper",
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
