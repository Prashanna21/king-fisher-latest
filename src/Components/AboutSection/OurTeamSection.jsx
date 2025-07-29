import React from "react";
import HeadingWithHighlight from "../HeadingWithHighlight";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "And Neko",
    title: "Chief Development Officer (CDO)",
    description:
      "Eneko is a Technical Architect and Project Manager with over 15 years of experience at the renowned construction company ACR, where he was Group Leader for the northern region. At Kategora, he coordinates the Project Management activities.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "John Doe",
    title: "Chief Operating Officer (COO)",
    description:
      "John is an experienced operations manager who has worked in various multinational companies and now oversees the company’s operational strategies.",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jane Smith",
    title: "Chief Financial Officer (CFO)",
    description:
      "Jane has a solid background in finance, working with global investment firms, and she now manages the financial planning and risk management at the company.",
    imageUrl:
      "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Carlos Alvarez",
    title: "Chief Marketing Officer (CMO)",
    description:
      "Carlos brings innovative marketing strategies and brand vision to life, with over 12 years in digital marketing and consumer engagement.",
    imageUrl:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Lisa Wong",
    title: "Chief Technology Officer (CTO)",
    description:
      "Lisa is a technology leader who has led multiple engineering teams in tech startups and is now responsible for overseeing all technical aspects of the company.",
    imageUrl:
      "https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

function OurTeamSection() {
  return (
    <div>
      <HeadingWithHighlight
        text={"Meet Our Visionaries"}
        highlights={["Visionaries"]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-y-6 lg:gap-4 mt-10 px-4 md:px-8 lg:px-12">
        {teamMembers?.map((item, index) => (
          <TeamCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default OurTeamSection;
