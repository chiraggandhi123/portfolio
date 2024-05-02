"use client";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "../public/css/index.css";
import AboutSection from "./components/aboutSection";
import ResumeSection from "./components/resumeSection";
import PortfolioSection from "./components/portfolioSection";
import BlogSection from "./components/blogSection";
import ContactSection from "./components/contactSection";

const Home = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const LinkList = ["About",
   "Resume", 
   "Contact"
  //  "Portfolio", 
  //  "Blog", 
  ];
  const renderSection = (idx: number)=>{
    switch (idx) {
      case 0:
        return <AboutSection />;
      case 1:
        return <ResumeSection/>
      case 2:
        return <ContactSection/>    
        case 3:
          return <BlogSection/>
          case 4:
        return <PortfolioSection/>
      default:
        return <AboutSection/>
    }
  }
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">

          <Navbar links={LinkList} activeLink={activeIdx} setActiveLink={setActiveIdx}/>
          {renderSection(activeIdx)}
        </div>
      </main>
    </>
  );
};

export default Home;
