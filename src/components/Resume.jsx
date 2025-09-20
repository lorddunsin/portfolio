import React from "react";
import ResumeFile from "/Isaiah_Awokiya_Frontend_Resume.pdf";

function Resume() {
  return (
    <div className="h-screen w-full">
      <iframe
        src={ResumeFile}
        title="Isaiah Awokiya Resume"
        className="w-full h-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Resume;
