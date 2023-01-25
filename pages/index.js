import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";

import { Inter } from "@next/font/google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/Navbar";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import DoneIcon from "@mui/icons-material/Done";
import EmailIcon from "@mui/icons-material/Email";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CodeIcon from "@mui/icons-material/Code";

// import styles from '@/styles/Home.module.css'

export default function Home() {
  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };
  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (scrollTo) {
      scroll2El(scrollTo);
    }
    localStorage.removeItem("scrollTo");
  }, []);

  return (
    <>
      <Navbar onClick={onBtnClick} />
      <div className="w-full bg-[#65aed9] flex justify-center items-center pt-20 md:pt-10">
        <div className="md:flex gap-10 md:p-[40px] p-[20px]">
          <div className="rounded">
            <Image
              className="rounded-3xl"
              src="/profilePhoto.png"
              alt="me"
              width="1000"
              height="1000"
              // layout="responsive"
              // objectFit="contain"
            />
          </div>
          <div
            id="about"
            className="flex flex-col justify-between md:items-start items-center text-[white]"
          >
            <div className="md:mt-4 mt-5">
              <div className="text-lg md:text-left text-center">
                Hello, my name is
              </div>
              <div className="font-bold text-[40px] ">ANKIT NEGI</div>
            </div>
            <div className="md:text-left text-center">
              Persuing final year of my graduation major Computer Science .
              Aiming to leverage proven communication, leadership, and
              management skills to successfully fill the Full Stack Developer
              role in your company. I am always ready to learn new skills and
              technologies and Frequently praised as hard-working by my seniors,
              I can be relied upon to help your company achieve its goals and
              tasks.
            </div>
            <Link
              href="/ankit_negi_resume.pdf"
              download="ankit_negi_resume"
              target="_blank"
              className="py-3 px-5 bg-color_7 rounded hover:bg-color_5 mt-2 duration-200 font-semibold rounded cursor-pointer text-[white]"
              // className="bg-color_5 cursor-pointer font-semibold hover:bg-color_7 duration-200 px-10 py-2  rounded w-min text-[white] whitespace-nowrap mt-5 md:mt-2"
            >
              <DownloadIcon fontSize="small" sx={{ marginRight: "5px" }} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-center items-center flex-col bg-color_6">
        <div className="text-text_1 font-bold text-[27px]">Skills Overview</div>
        <div className="text-center  md:hidden block text-text_2 text-md md:mx-0 mx-3">
          I have 5 months of experience building web applications. Below is a
          quick overview of my main technical skill sets and tools I use
        </div>
        <div className="text-center md:block hidden text-text_2 text-md md:mx-0 mx-3">
          I have 5 months of experience building web applications. <br />
          Below is a quick overview of my main technical skill sets and tools I
          use
        </div>
        <div className="md:flex h-full my-20 w-full justify-evenly  gap-5 px-10 md:px-40 ">
          <div className=" w-[100%] h-full p-5 bg-color_2  drop-shadow ">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <WebIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <div className="text-text_1 font-semibold text-[20px] text-center mb-3">
              Frontend
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              React/Redux/Next
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />
              React Native
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Javascript
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              HTML/CSS
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Tialwind CSS/ MUI
            </div>
          </div>
          <div className=" w-[100%] h-full p-5 bg-color_2  drop-shadow md:mt-0 mt-10">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <StorageIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <div className="text-text_1 font-semibold text-[20px] text-center mb-3">
              Backend
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Python/Django Basics
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Node/Express
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              MongoDB
            </div>
          </div>
          <div className=" w-[100%] h-[100%] p-5 bg-color_2  drop-shadow md:mt-0 mt-10">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <AddCircleOutlineRoundedIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <div className="text-text_1 font-semibold text-[20px] text-center mb-3">
              Others
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Unit Testing
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Python DSA
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Bit-Bucket/Github
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="pt-5 flex-col pb-10 ">
        <div className="mx-auto md:w-[40%] w-[90%]">
          <div className="text-text_1 text-center font-bold text-[27px]">
            Experience
          </div>
          <div className="text-center text-text_2 text-md md:mx-0 mx-3">
            Below is given my up to date experience in proffessioanl career
          </div>
          <div className="border rounded mt-5 bg-color_2 drop-shadow-lg">
            <div className="text-color_2 font-bold text-[17 px] bg-[#41A4F5] py-2 px-5">
              MOODRAA-E PLATFORM
            </div>
            <div className="px-5">
              <div className="text-text_1 my-2 text-[17px] flex justify-between items-center">
                <div className="font-semibold">Software Engineer</div>
                <div className="text-[14px]"> 09/2022 - 01/2023 </div>
              </div>
              <div className="text-text_2 text-md pb-4">
                <div className="flex items-start gap-4 justify-start">
                  <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                  <div className="w-[90%]">
                    Developed my team-work skills by working in close
                    collaboration with my colleagues.
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-start">
                  <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                  <div className="w-[90%]">
                    Daily maintenance of code, debugging issues and solving
                    clients’ problems.
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-start">
                  <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                  <div className="w-[90%]">
                    worked on mobile app development and created major features
                    on it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="pt-10 pb-20 px-10 md:px-28 flex justify-center items-center flex-col bg-color_6"
      >
        <div className="text-text_1 font-bold text-[27px]">
          Featured Projects
        </div>
        <div className="md:flex justify-center items-start gap-5 mt-4 5">
          <div className="p-3  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-text_1 text-[20px] font-semibold">
              Profiler
            </div>
            <div className="text-sm text-text_2">
              it is a SaaS product, currently under-development. This product
              would help to create portfolios without having to code, publish
              reasearch papers, articles and even more.
            </div>
            <div className="text-text_1 my-3 text-[15px] font-semibold">
              Webapp Development
            </div>
            <div className="flex flex-wrap gap-5 mb-2">
              {[
                "NextJs",
                "ExpressJs",
                "MongoDB",
                "NodeJs",
                "MUI",
                "TailwindCSS",
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-1 bg-color_5 rounded-3xl text-[white] px-3 font-semibold"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3 md:my-0 my-10  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-text_1 text-[20px] font-semibold">
              Portfolio
            </div>
            <div className="text-sm text-text_2">
              My portfolio which you are using right now, It was build to
              showcase my career journey and to give brief idea about my skills.
            </div>
            <div className="text-text_1 my-3 text-[15px] font-semibold">
              Webapp Development
            </div>
            <div className="flex flex-wrap gap-5 mb-2">
              {["NextJs", "MUI", "Tailwind"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-1 bg-color_5 rounded-3xl text-[white] px-3 font-semibold"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-text_1 text-[20px] font-semibold">
              Other projects
            </div>
            <div className="text-sm text-text_2">
              my other projects include, Newz24/7 - it is simple news
              application build under react library, Noted - simple notes taking
              application with login and logout feature.
            </div>
            <div className="text-text_1 my-3 text-[15px] font-semibold">
              Webapp Development
            </div>
            <div className="flex flex-wrap gap-5 mb-2">
              {["ReactJs", "ExpressJs", "MongoDB", "NodeJs", "Bootstrap"].map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 bg-color_5 rounded-3xl text-[white] px-3 font-semibold"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full bg-[black] py-5 px-5 md:px-20 image">
        <div className="text-center text-color_2 ">
          <div>Ankit Negi</div>
          <div>Full stack developer</div>
        </div>
        <div className="flex justify-between text-color_2 mt-5">
          <div>
            <div className="text-text_2">
              <EmailIcon fontSize="small" sx={{ marginRight: "10px" }} />
              nankit793@gmail.com
            </div>
            <div className="text-text_2 mt-2">
              <LocalPhoneIcon fontSize="small" sx={{ marginRight: "10px" }} />
              +91 8920249775
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            <CodeIcon
              sx={{ color: "#808080" }}
              fontSize="medium"
              className="cursor-pointer"
              onClick={() => {
                window.open("https://leetcode.com/nankit793/", "_blank");
              }}
            />
            <GitHubIcon
              sx={{ color: "#808080" }}
              fontSize="medium"
              className="cursor-pointer"
              onClick={() => {
                window.open("https://github.com/nankit793", "_blank");
              }}
            />
            <LinkedInIcon
              sx={{ color: "#808080" }}
              fontSize="medium"
              className="cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/nankit/", "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
