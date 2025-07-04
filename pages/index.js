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
import Avatar from "@mui/material/Avatar";

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
      <Head>
        <title className="">Ankit Negi - Data Scientist</title>
        <meta
          name="description"
          content="my name is Ankit Negi I am a full stack developer."
        ></meta>
      </Head>
      <Navbar onClick={onBtnClick} />
      <div className="w-full bg-[#65aed9] flex justify-center items-center pt-20 md:pt-10">
        <div className="md:flex gap-10 md:p-[40px] p-[20px]">
          <div className="rounded-full ">
            <Avatar
              alt="profile_photo"
              className="rounded-full mx-auto max-w-[250px] min-w-[250px] "
              variant="rounded"
              src="/profilePhoto.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            id="about"
            className="flex flex-col justify-between md:items-start items-center text-[white]"
          >
            <div className="md:mt-4 mt-5">
              <div className="text-lg md:text-left text-center font-rubik">
                Hello, My name is
              </div>
              <div className="font-bold text-[40px] font-heading ">
                ANKIT NEGI
              </div>
            </div>
            <div className="md:text-left  text-center font-rubik">
              Aspiring Data Scientist having 2+ years of experience as software
              engineer with hands-on project experience in machine learning, LLM
              fine-tuning, and full-stack development using Python and
              JavaScript. Passionate about solving real-world problems through
              data and learning new technologies.
            </div>
            <Link
              href="/ankit_negi_resume.pdf"
              download="ankit_negi_resume"
              target="_blank"
              className="py-2 px-5 bg-color_7  hover:bg-color_5 mt-3 duration-200  rounded-[5px] font-workSans cursor-pointer text-[white]"
              // className="bg-color_5 cursor-pointer font-semibold hover:bg-color_7 duration-200 px-10 py-2  rounded w-min text-[white] whitespace-nowrap mt-5 md:mt-2"
            >
              <DownloadIcon fontSize="small" sx={{ marginRight: "5px" }} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-center items-center flex-col bg-color_6">
        <div className="text-text_1 font-workSans text-[27px]">
          Skills Overview
        </div>

        <div className="flex h-full [&>*]:min-w-[250px] [&>*]:max-w-[300px] flex-wrap my-[50px] w-full justify-evenly  gap-5 px-10 md:px-40 ">
          <div className=" w-[100%] h-full p-5 bg-color_2   drop-shadow [&>div]:font-rubik [&>div]:text-gray-500">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <WebIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <h1 className="text-color_4  font-rubik text-[20px] text-center mb-3">
              Statistics
            </h1>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Descriptive Statistics
            </div>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />
              Inferential Statistics
            </div>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Hypothesis Testing
            </div>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              ANOVA
            </div>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              T-test & Z-test
            </div>
            <div className="flex justify-start items-center  mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Probability & Distribution
            </div>
          </div>
          <div className=" w-[100%] h-full p-5 bg-color_2  drop-shadow  [&>div]:font-rubik [&>div]:text-gray-500  md:mt-0 mt-10">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <StorageIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <h1 className="text-color_4  font-rubik text-[20px] text-center mb-3">
              Machine Learning
            </h1>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Supervised ML
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Unsupervised ML
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              NLP
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              LLMs
            </div>
            <div className="flex justify-start items-start text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Deep Learning
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Neural Networks
            </div>
            <div className="flex justify-start items-start text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Principal Component Analysis (PCA)
            </div>
          </div>
          <div className=" w-[100%] h-[100%] p-5 bg-color_2  drop-shadow  [&>div]:font-rubik [&>div]:text-gray-500   md:mt-0 mt-10">
            <div className="w-[70px] h-[70px] bg-[#41A4F5] drop-shadow-xl relative mx-auto top-[-50px] rounded-full">
              <div className="flex justify-center pt-4">
                <AddCircleOutlineRoundedIcon
                  // fontSize="large"
                  sx={{ color: "white", fontSize: "40px" }}
                />
              </div>
            </div>
            <h1 className="text-color_4  font-rubik text-[17px] ">
              Programming Languages
            </h1>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Python
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              JavaScript
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              SQL
            </div>
            <h1 className="text-color_4  font-rubik text-[17px]  mt-3 ">
              Visualization
            </h1>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Matplotlib
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Seaborn
            </div>
            <h1 className="text-color_4  font-rubik text-[17px]  mt-3 ">
              Database
            </h1>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              SQL
            </div>
            <div className="flex justify-start items-center text-text_1 mx-5 text-[17px] my-1">
              <DoneIcon
                fontSize="small"
                sx={{ color: "#41A4F5", marginRight: "5px" }}
              />{" "}
              Mongo DB
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="pt-5 flex-col pb-10 ">
        <div className="mx-auto w-[90%]">
          <div className="text-text_1 text-center  font-workSans text-[27px]">
            Experience
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="border mx-auto rounded mt-5 max-w-[500px] bg-color_2 drop-shadow-lg">
              <div className="text-color_2 font-workSans text-[17px] bg-[#41A4F5] py-2 px-5">
                MOODRAA-E PLATFORM
              </div>
              <div className="px-5">
                <div className="text-text_1 my-2 font-rubik text-[17px] flex flex-wrap justify-between items-center">
                  <div className="">Software Engineer</div>
                  <div className="text-[14px]">
                    September 2022 - January 2023
                  </div>
                </div>
                <div className="text-gray-400 text-md pb-4 font-rubik">
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
                      worked on mobile app development and created major
                      features on it.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border mx-auto rounded mt-5 max-w-[500px] bg-color_2 drop-shadow-lg">
              <div className="text-color_2 font-workSans text-[17px] bg-[#41A4F5] py-2 px-5">
                Optimizory
              </div>
              <div className="px-5">
                <div className="text-text_1 my-2 font-rubik text-[17px] flex flex-wrap justify-between items-center">
                  <div className="">Software Engineer</div>
                  <div className="text-[14px]">September 2023 - Present</div>
                </div>
                <div className="text-gray-400 text-md pb-4 font-rubik">
                  <div className="flex items-start gap-4 justify-start">
                    <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                    <div className="w-[90%]">
                      Collaboratively developed and maintained applications for
                      the Jira Marketplace.
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-start">
                    <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                    <div className="w-[90%]">
                      Worked on two key applications like PACT and Links
                      Explorer, enhancing project management and issues
                      exploration capabilities for users.
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-start">
                    <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                    <div className="w-[90%]">
                      Contributed to improving the overall efficiency by 40% and
                      optimized the speed of applications up to 60%, Improved
                      performance of the development team through innovative
                      solutions and effective collaboration.
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-start">
                    <div className="w-[5px] h-[5px] bg-text_2 rounded-full mt-2"></div>
                    <div className="w-[90%]">
                      Made Links Explorer the most used application for project
                      management in Jira marketplace.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="pt-5 pb-20 px-10 md:px-28 flex justify-center items-center flex-col bg-color_6"
      >
        <div className="text-text_1 font-workSans text-[27px]">
          Featured Projects
        </div>
        <div className="[&>*]:max-w-[350px]  flex flex-wrap justify-center items-start gap-5 mt-4 5">
          <div className="p-3  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-color_4  text-[18px] mb-2 font-workSans">
              FINE TUNED LLM MODEL FOR CHATBOT
            </div>
            <div className="text-sm text-text_2 font-rubik">
              Utilized the llama2finetune-v2 model as the base model for
              generative AI. Trained model on various PDF data like Python
              Programming, Software Engineering, Medical terminologies. Enhanced
              the model using specialized medical datasets to improve its
              performance in healthcare-related NLP tasks. Skilled in machine
              learning, fine-tuning models, and creating tokenization for
              predictions.
            </div>

            <div className="flex flex-wrap gap-5 my-2">
              {["LLM", "NLP", "Deep Learning", "Tokenization"].map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 bg-color_5 rounded-3xl text-[15px] text-[white] px-3 font-rubik"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="p-3 md:my-0 my-10  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-color_4  text-[18px] mb-2 font-workSans">
              Cancer diagnosis
            </div>
            <div className="text-sm text-text_2 font-rubik">
              Used K-Fold cross-validation technique to avoid overfitting,
              Designed and compared models like Support Vector Machine (SVM),
              Random Forest Classifier, and Logistic Regression.
            </div>

            <div className="flex flex-wrap gap-5 my-2">
              {[
                "Visualizations",
                "K-Fold Cross-Validation",
                "Support Vector Machine ( SVM )",
                "Random Forest Classifier",
                "Logistic Regression.",
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-1 bg-color_5 rounded-3xl text-[white] px-3 font-rubik text-[15px]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3  md:w-[35%] border bg-color_2 py-2 drop-shadow">
            <div className="text-color_4  text-[18px] mb-2 font-workSans">
              CREDIT CARD CAMPAIGN
            </div>
            <div className="text-sm text-text_2 font-rubik">
              Successfully analyzed Cancer diagnosis data and built a predictive
              model. Utilized interactive visualizations and data filters to
              enhance data exploration and inform decision-making. Used K-Fold
              cross-validation technique to avoid overfitting, Designed and
              compared models like Support Vector Machine (SVM), Random Forest
              Classifier, and Logistic Regression.
            </div>

            <div className="flex flex-wrap gap-5 my-2">
              {[
                "Supervised ML",
                "Visualization",
                "Standardization",
                "Seaborn",
                "Stratified Split",
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-1 bg-color_5 rounded-3xl text-[white] px-3 font-rubik text-[15px]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full bg-[black] py-5 px-5 md:px-20 image">
        <div className="text-center tracking-widest text-color_2 font-heading ">
          <div>Ankit Negi</div>
          <div>Data Scientist</div>
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
