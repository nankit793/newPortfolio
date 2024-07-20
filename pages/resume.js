import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>Ankit Negi - Online Resume</title>
        <meta
          name="description"
          content="my name is Ankit Negi I am a full stack developer."
        ></meta>
      </Head>
      <Navbar onClick={onClick} />
      <div className="flex bg-[#65aed9]  items-start gap-5 flex-wrap md:gap-80 px-20 justify-center pb-[120px] pt-20 text-text_1">
        <div className="text-[25px] font-workSans text-[white]">Resume</div>
        <Link
          href="/ankit_negi_resume.pdf"
          download="ankit_negi_resume"
          target="_blank"
          className="py-2 px-5 bg-color_7 font-workSans hover:bg-color_5 duration-200  rounded-full cursor-pointer text-[white]"
        >
          Download CVs
        </Link>
      </div>
      <div className="w-full relative top-[-80px] px-3  md:px-10 flex justify-center textRemove">
        <div className="border overflow-x-auto rounded">
          <Document file="/ankit_negi_resume.pdf">
            <Page pageIndex={0} />
          </Document>
        </div>
      </div>
    </>
  );
}

export default Resume;
