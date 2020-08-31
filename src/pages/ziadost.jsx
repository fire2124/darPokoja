import React from "react";
import AllPagesPDFViewer from "./components/Pdf/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";

import "./styles.css";

export default function Ziadost() {
  return (
    <div>
        <AllPagesPDFViewer pdf={samplePDF} />
    </div>
  );
}
