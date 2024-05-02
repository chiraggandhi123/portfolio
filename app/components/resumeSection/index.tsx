import React from "react";
import "./index.css";
const ResumeSection = () => {
  return (
    <>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <img src='/images/book-outline.svg'/>
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Software Engineer - Naukri.com</h4>
              <span>2022 — Present</span>
              <p className="timeline-text">
                As a Senior Software Engineer at Naukri.com, my primary
                responsibilities revolve around frontend development and
                optimization. I utilized my expertise in HTML, CSS, and
                JavaScript to craft visually appealing and responsive user
                interfaces for both web and mobile platforms. Leveraging
                frameworks like React and React Native, I'd build scalable
                components and applications that deliver exceptional user
                experiences. Additionally, I collaborate with cross-functional
                teams, provide technical leadership, mentor junior developers,
                evaluate new technologies, ensure code quality through testing,
                and promote knowledge sharing within the organization. Overall,
                My role is pivotal in driving the innovation and success of
                Naukri.com's frontend ecosystem.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer - To The New</h4>
              <span>2021 - 2022</span>
              <p className="timeline-text">
              Designed and implemented responsive web interfaces using HTML/CSS, JavaScript, React Js.
Developed backend APIs with Express.js and MongoDB for seamless data flow.
Collaborated with team members to maintain code quality and version control using Git/GitLab.
Incorporated HTML5/CSS3 features to enhance user experience and visual appeal.
Participated in code reviews to ensure best practices and identify areas for improvement.
              </p>
            </li>
           
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
            <img src='/images/book-outline.svg'/>
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Bharati Vidyapeeth (GGSIPU)
              </h4>
              <span>2017 - 2021</span>
              <p className="timeline-text">
                BTECH - 8.9 (cgpa)
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Modern Vidya Niketan
              </h4>
              <span>2015 - 2017</span>
              <p className="timeline-text">
                12th - 93%
              </p>
            </li>
          </ol>
        </section>
        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card" style={{color:"red"}}>
              <img src="/images/skill-5.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-2.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-6.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-1.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-9.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-7.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-3.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-8.png" alt="" height={100} width={100} className="skill-icon" />
              <img src="/images/skill-4.png" alt="" height={100} width={100} className="skill-icon" />
            {/* <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value={80}>80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value={70}>70%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value={90}>90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value={50}>50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "50%" }} />
              </div>
            </li> */}

          </ul>
        </section>
      </article>
    </>
  );
};

export default ResumeSection;
