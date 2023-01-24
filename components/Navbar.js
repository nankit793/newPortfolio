import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#0892d0] p-4">
      <div className="flex gap-5">
        <FacebookIcon
          sx={{ color: "white" }}
          fontSize="medium"
          className="cursor-pointer"
        />
        <GitHubIcon
          sx={{ color: "white" }}
          fontSize="medium"
          className="cursor-pointer"
        />
        <LinkedInIcon
          sx={{ color: "white" }}
          fontSize="medium"
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-5">
        <div className=" text-white cursor-pointer">ABOUT</div>
        <div className=" text-white cursor-pointer">PROJECTS</div>
        <div className=" text-white cursor-pointer">EXPERIENCE</div>
        <div className=" text-white cursor-pointer">CONTACT</div>
      </div>
    </div>
  );
}

export default Navbar;
