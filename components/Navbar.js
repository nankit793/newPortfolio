import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useRouter } from "next/router";
import SwipeableTemporaryDrawer from "./Drawer";
function Navbar(props) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex justify-between items-center bg-color_5 p-4 fixed top-0 w-full z-10">
      <div className="flex gap-5">
        <div
          className="p-1 flex items-center rounded-full duration-200 hover:bg-color_4"
          onClick={() => {
            window.open("https://leetcode.com/nankit793/", "_blank");
          }}
        >
          <CodeIcon
            sx={{ color: "white" }}
            fontSize="medium"
            className="cursor-pointer"
          />
        </div>
        <div
          className="p-1 flex items-center rounded-full duration-200 hover:bg-color_4"
          onClick={() => {
            window.open("https://github.com/nankit793", "_blank");
          }}
        >
          <GitHubIcon
            sx={{ color: "white" }}
            fontSize="medium"
            className="cursor-pointer"
          />
        </div>
        <div
          className="p-1 flex items-center rounded-full duration-200 hover:bg-color_4"
          onClick={() => {
            window.open("https://www.linkedin.com/in/nankit/", "_blank");
          }}
        >
          <LinkedInIcon
            sx={{ color: "white" }}
            fontSize="medium"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className=" gap-5 md:flex hidden text-sm [&>div]:font-workSans">
        <div
          goto="about"
          onClick={props.onClick}
          className="  cursor-pointer text-[white]"
        >
          ABOUT
        </div>
        <div
          goto=""
          onClick={() => {
            router.push("/resume");
          }}
          className=" text-white cursor-pointer"
        >
          RESUME
        </div>
        <div
          goto="experience"
          onClick={props.onClick}
          className=" text-white cursor-pointer"
        >
          EXPERIENCE
        </div>
        <div
          goto="projects"
          onClick={props.onClick}
          className=" text-white cursor-pointer "
        >
          PROJECTS
        </div>
        <div
          goto="contact"
          onClick={props.onClick}
          className=" text-white cursor-pointer"
        >
          CONTACT
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex flex-col gap-4 px-5 py-5">
          <div
            goto="about"
            onClick={props.onClick}
            className=" text-color-5 font-workSans cursor-pointer text-text_1 "
          >
            ABOUT
          </div>
          <div
            goto=""
            onClick={() => {
              router.push("/resume");
            }}
            className=" text-color-5 font-workSans cursor-pointer"
          >
            RESUME
          </div>
          <div
            goto="experience"
            onClick={props.onClick}
            className=" text-color-5 font-workSans cursor-pointer"
          >
            EXPERIENCE
          </div>
          <div
            goto="projects"
            onClick={props.onClick}
            className=" text-color-5 font-workSans cursor-pointer "
          >
            PROJECTS
          </div>
          <div
            goto="contact"
            onClick={props.onClick}
            className=" text-color-5 font-workSans cursor-pointer"
          >
            CONTACT
          </div>
        </div>
      </Popover>
      <div className="md:hidden block">
        <Button aria-describedby={id} onClick={handleClick}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
