import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/Navbar";
// import styles from '@/styles/Home.module.css'

const topSkills = ["Python", "NodeJS", "ReactJS", "ExpressJS", "JavaScript"];
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full p-10 bg-color_1 flex justify-center items-center">
        <div className="md:flex gap-10 mx-20">
          <div className="">
            {/* <img src={require("./profilePhoto.JPG")} alt="Profile_Image" /> */}
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <div>Hii, my name is</div>
              <div className="font-bold text-[30px] ">ANKIT NEGI</div>
            </div>
            <div>
              Efficient Computer Science major currently attending Dronacharya
              Group of Instituions. Aiming to leverage proven communication,
              leadership, and management skills to successfully fill the Full
              Stack Developer role in your company. I am always ready to learn
              new skills and technologies and Frequently praised as hard-working
              by my seniors, I can be relied upon to help your company achieve
              its goals and tasks.
            </div>
            <div className="bg-color_7 px-5 py-2  rounded w-min text-[white] whitespace-nowrap">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
