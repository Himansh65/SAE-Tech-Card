import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importing brands icons
import "./App.css";

import BhaskarImage from "./assets/Bhaskar.jpg";
import RajSinghImage from "./assets/harsh raj singh.jpg";
import NikhilImage from "./assets/Nikhil Singh.jpg";
import PrachiImage from "./assets/Prachi Prajapati.jpg";
import VishalImage from "./assets/VISHAL SHARMA.jpg";
import SachinImage from "./assets/Sachin Singh.jpg";
import UditImage from "./assets/udit Srivastav.jpg";
import DeepakImage from "./assets/DEEPAK SINGH.jpg";
import UjjawalImage from "./assets/UJJWAL KUMAR SINGH.jpg";
import MrigendraImage from "./assets/MRIGENDRA SINGH.jpg";
import AbhayImage from "./assets/Abhay Gond.jpg";
import SonaliImage from "./assets/Sonali Yadav.jpg";
import HarshImage from "./assets/harsh yadav.jpg";
import DivyanshImage from "./assets/Divyansh Kushwaha.jpg";
import SaurabhImage from "./assets/Saurabh Singh.jpeg";
import RohanImage from "./assets/Rohan Kumar Singh.jpg";
import RashiImage from "./assets/Rashi Gupta.jpg";

const App = () => {
  // Sample card data for 17 cards
  const cardData = [
    {
      name: "Bhaskar Vishwakarma",
      position: "Vice Chairperson",
      department: "ME",
      phone: "bhaskarvishwa88@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/bhaskar-vishwakarma-27917122a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BelhMD0HMTIOJkIvcPwRbrA%3D%3D",
      image: BhaskarImage,
    },
    {
      name: "Harsh Raj Singh",
      position: "Secretary",
      department: "ME",
      phone: "harshrajs626@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/harshraj19?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAGLw34ziTWC91iOee%2FvyDg%3D%3D",
      image: RajSinghImage,
    },
    {
      name: "Nikhil Singh",
      position: "Event Supervisor",
      department: "ME",
      phone: "nikhilsingh7302351@gmail.com",
      linkedin: "https://linkedin.com/in/bhaskarv",
      image: NikhilImage,
    },
    {
      name: "Prachi Prajapati",
      position: "Alumini Relation Coordinator",
      department: "CHE",
      phone: "prizprajapati2714@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/prachi-prajapati-3b956724b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FAu%2B5MLmQgiv76ZIDRuusQ%3D%3D",
      image: PrachiImage,
    },
    {
      name: "Vishal Sharma",
      position: "Co-Treasurer",
      department: "ME",
      phone: "vishalav113@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/vishal-sharma-499215286?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgNkkTBtRRxWj1Y4PJXOJVg%3D%3D",
      image: VishalImage,
    },
    {
      name: "Sachin Singh",
      position: "Vice Chairperson",
      department: "ME",
      phone: "singhsachin14581@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/sachin-singh-15aa8525a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br72kO%2BIITcCeYNgX8YBn5Q%3D%3D",
      image: SachinImage,
    },
    {
      name: "Udit Srivastav",
      position: "Sponsors & Media Committee Head",
      department: "ME",
      phone: "uditsrivastav9598@gmail.com",
      linkedin: "https://linkedin.com/in/bhaskarv",
      image: UditImage,
    },
    {
      name: "Deepak Singh",
      position: "Secretary(TSC) and DISCO Head(SAE)",
      department: "CSE",
      phone: "2021021128@mmmut.ac.in",
      linkedin:
        "https://www.linkedin.com/in/-deepak--singh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKk1Iz7kIRPCKiHDe6U6IyQ%3D%3D",
      image: DeepakImage,
    },
    {
      name: "Ujjwal Kumar Singh",
      position: "Treasurer",
      department: "ME",
      phone: "ujjwalsingh9906@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/ujjwalkumarsingh7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bes5zoeEKR8%2Bwl9hoYfxddw%3D%3D",
      image: UjjawalImage,
    },
    {
      name: "Mrigendra Singh",
      position: "Event Supervisor",
      department: "CSE",
      phone: "mrigendrak38@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/mrigendra-singh-21461922b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRT5aWX5nQQuYmAFWS%2FRTeQ%3D%3D",
      image: MrigendraImage,
    },
    {
      name: "Abhay Gond",
      position: "Joint Secretary",
      department: "ME",
      phone: "abhay.gond572@gmail.com",
      linkedin: "https://linkedin.com/in/bhaskarv",
      image: AbhayImage,
    },
    {
      name: "Sonali Yadav",
      position: "Joint Secretary",
      department: "EE",
      phone: "sonali271608@gmail.com",
      linkedin: "https://linkedin.com/in/bhaskarv",
      image: SonaliImage,
    },
    {
      name: "Harsh Kumar Yadav",
      position: "Chair Person, Secretary(TSC)",
      department: "ME",
      phone: "harshybhu03@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/harsh-kumar-yadav-26a866312?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtcAV0FwJRBSVGVz6J63m%2FA%3D%3D",
      image: HarshImage,
    },
    {
      name: "Divyansh Kushwaha",
      position: "Executive Board Member",
      department: "ECE",
      phone: "divyanshkushwaha608@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/divyansh-kushwaha-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0MFCp5%2BaQ6GuKcVDCzjH5g%3D%3D",
      image: DivyanshImage,
    },
    {
      name: "Saurabh Singh",
      position: "Secretary",
      department: "ME",
      phone: "saurabhji8765@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/saurabh-singh-991ab8275?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUvr5SGWqQk2oNjT5T5oVOQ%3D%3D",
      image: SaurabhImage,
    },
    {
      name: "Rohan Kumar Singh",
      position: "Joint-Secretary",
      department: "CE",
      phone: "rohananp12a@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/harshraj19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: RohanImage,
    },
    {
      name: "Rashi Gupta",
      position: "Secretary",
      department: "CSE",
      phone: "2002rashigupta@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/rashi-gupta-4351ab228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlwE4rtpTQPqy1coQwHUCZA%3D%3D",
      image: RashiImage,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-400">
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="card-container w-96 h-96 perspective-1000 m-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`card relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Face */}
        <div
          className="card-front absolute w-full h-full bg-gradient-to-br from-cyan-950 to-black backface-hidden"
          style={{
            borderRadius: "30px", // Card shape
          }}
        >
          {/* Circular Image */}
          <div className="circular-image">
            <img
              src={card.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="front-name">{card.name}</h2>
        </div>

        {/* Back Face with Tech Theme */}
        <div
          className={`card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-lg tech-theme-glow glass-effect`}
        >
          <div className="flex flex-col items-center justify-center h-full p-5">
            {/* Department */}
            <h2
              className={`text-4xl font-bold text-gray-800 tracking-tight ${
                isFlipped ? "animate-slide-up-delay-1" : ""
              }`}
            >
              {card.department}
            </h2>

            {/* Details */}
            <p
              className={`text-lg text-gray-800 text-center ${
                isFlipped ? "animate-slide-up-delay-2" : ""
              }`}
            >
              {/* Job Title with Icon */}
              <span className="font-semibold text-gray-300 block py-2">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-2 text-green-500"
                />
                {card.position}
              </span>

              {/* Phone Number with Icon */}
              <span className="block text-gray-300 py-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-blue-500"
                />
                {card.phone}
              </span>
            </p>

            {/* Social Media Links */}
            <div
              className={`social-links mt-4 ${
                isFlipped ? "animate-slide-up-delay-2" : ""
              }`}
            >
              <a
                href={card.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 mx-3 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
