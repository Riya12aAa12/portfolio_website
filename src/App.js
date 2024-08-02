

import React, { useRef } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import Certification from './components/Certification';
import AnimatedCursor from "react-animated-cursor";

const experiences = [
  {
    cardtitle: "Full Stack Web Developer",
    cardsubtitle: "IBM, Online",
    subtitle: "Full Stack Web Development",
    workDescription: [
      "Gained extensive training and experience in web designing and web development using latest technology.",
      "Learned how to use open source platforms in an effective and quick way to resolve problems and bugs in code.",
      "Gained experience working in a real-life tech environment alongside seasoned and experienced developers and professionals.",
      "Worked in a team as well as individually on projects. Received extremely positive feedback from mentors.",
      "Designed a fully functional dynamic e-commerce web app and three more major projects along with multiple minor projects from scratch as part of training."
    ],
    dateText: "May 2023 to July 2023",
    Imgsrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/T-Mobile_logo_2022.svg"
  },
  {
    cardtitle: "Community Development Project",
    cardsubtitle: "Mithila Gram Vikas, Bihar",
    subtitle: "Social Awareness",
    workDescription: [
      "Created personalized learning plans that cater to individual needs, strengths, and interests.",
      "Updated the curriculum to reflect current trends, technologies, and societal needs.",
      "Incorporated activities that promote critical thinking, creativity, and problem-solving skills.",
      "Provided ongoing training opportunities for teachers to enhance their teaching skills."
    ],
    dateText: "May 2022 to July 2023",
    Imgsrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/T-Mobile_logo_2022.svg"
  }
];

const certifications = [
  {
    title: "Full Stack Web Development",
    image: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY__gObJHxND6Rz_Ib35fjmqvQc_hsm0j-E93b6PnwAbwUs0ROLUSxC-rd5RsZbQsudS6WiAoc08OmvfndmaoComsKeq9M4Cw=s1600-rw-v1",
    bodyText: "IBM - 2023"
  },
  {
    title: "Programming with JavaScript",
    image: "https://media.licdn.com/dms/image/D4D22AQEWrbGLfx0RBw/feedshare-shrink_800/0/1689689837374?e=2147483647&v=beta&t=PsOo-FNmsG8dZnGAWF0e22JYcAyC23BqkbIMNDeIuOw",
    bodyText: "Coursera- 2024"
  },
  {
    title: "State Management",
    image: "https://media.licdn.com/dms/image/sync/D4D27AQEdslndoG714A/articleshare-shrink_800/0/1711174405208?e=2147483647&v=beta&t=BCybj-8sxitlBsevR-eXnCSaw1xEl5pYZpviA-60q4o",
    bodyText: "Great Learning - 2023"
  },
  {
    title: "Front End Development",
    image: "https://media.licdn.com/dms/image/D4D22AQEbWhpPtX065A/feedshare-shrink_2048_1536/0/1702079001753?e=1725494400&v=beta&t=tIXOm_H3hwYmXY5RAT4P94U61qbAOg1rrGYpHPbMJEw",
    bodyText: "oas Infotype- 2023"
  },
  {
    title: "Data Structure and Algorithm",
    image: "https://media.licdn.com/dms/image/D5622AQH1jPB2Mk-9tQ/feedshare-shrink_2048_1536/0/1712771134831?e=1725494400&v=beta&t=xrwsmwzih3SEav1bc8qXGIXjN0x9bMd2HXmgXykf6Wg",
    bodyText: "Unstop - 2023"
  },
  {
    title: "Fundamentals of AI & ML: Introduction to Artificial Intelligence",
    image: "https://media.licdn.com/dms/image/D4D22AQEjMFYIo0eRSA/feedshare-shrink_2048_1536/0/1688274722369?e=1725494400&v=beta&t=6MfHweITw8KwZGfh-SrZLU-2gSMTuqojAkSt_c9UaQE",
    bodyText: "Skillsoft - 2024"
  },
  {
    title: "Introduction to CSS3",
    image: "https://media.licdn.com/dms/image/C5622AQFE32hwA_o-3Q/feedshare-shrink_2048_1536/0/1644766833685?e=1725494400&v=beta&t=WOOrTYsno48RAPVS_S0NAM-HK3bawCxl9yjPhy0gF7E",
    bodyText: "Udemy - 2023"
  },
  {
    title: "Python Basic to Advanced",
    image: "https://media.licdn.com/dms/image/C5622AQFfvlUOHIJmTA/feedshare-shrink_2048_1536/0/1644845846687?e=2147483647&v=beta&t=hoE2p1tkSdpCPDfmX7tKj5bciTR61xArI68wZ6bJLrI",
    bodyText: "IIT Roorkee - 2023"
  }
];



function App() {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div>
        <Navbar />
        <HomeBanner scrollToAboutMe={scrollToAboutMe} />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="The NewsMania"
          projectDesc="Built a NewsMania using front-end technologies like React, NewsMonkey API, News API, and JavaScript. NewsMania is an interactive and responsive news web application that provides all the latest news from around the globe."
          projectLink="https://github.com/Riya12aAa12/NewsMania1"
          projectImg={require('./images/n.png')}
        />
        <ProjectCard
          projectTitle="Dynamic Job Seeking Website"
          projectDesc="Allows users to create detailed profiles, upload resumes, and showcase skills, experience, and education."
          projectLink="https://github.com/Riya12aAa12/Dynamic-Job-Seeking-Website/tree/master"
          projectImg={require('./images/job.jpg')}
        />
        <ProjectCard
          className="odd"
          projectTitle="Real-time Chat Application"
          projectDesc="Allows users to communicate with each other, send push notifications for new messages, mentions, and other important events. Implements a search function to help users find specific messages or conversations."
          projectLink="https://github.com/Riya12aAa12/Real-chat-application"
          projectImg={require('./images/real.png')}
        />
        <div ref={aboutMeRef}>
          <AboutMe id="about" />
        </div>
        <Experience experiences={experiences} />
        <Certification certifications={certifications} />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;





















