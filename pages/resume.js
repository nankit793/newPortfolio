import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

import { Document, Page, pdfjs } from "react-pdf";
import { useRouter } from "next/router";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume() {
  const router = useRouter();

  const onClick = (e) => {
    e.preventDefault();
    localStorage.setItem("scrollTo", e.target.getAttribute("goto"));
    router.push("/");
  };
  //   const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <Navbar onClick={onClick} />
      <div className="flex bg-[#65aed9]  items-start gap-5 flex-wrap md:gap-80 px-20 justify-center pb-[120px] pt-20 text-text_1">
        <div className="text-[25px] font-bold text-[white]">Resume</div>
        <Link
          href="/ankit_negi_resume.pdf"
          download="ankit_negi_resume"
          target="_blank"
          className="py-3 px-5 bg-color_7 rounded hover:bg-color_5 duration-200 font-semibold rounded cursor-pointer text-[white]"
        >
          Download CV
        </Link>
      </div>
      <div className="w-full relative top-[-80px] px-3  md:px-10 flex justify-center textRemove">
        <div className="border overflow-x-auto rounded">
          <Document
            file="/ankit_negi_resume.pdf"
            //    onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageIndex={0} />
          </Document>
        </div>
      </div>
    </>
  );
}

export default Resume;
