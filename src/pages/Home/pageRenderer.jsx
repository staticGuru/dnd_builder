import React from "react";
import ChooseNarrative from "./sections/chooseNarrative";

function PageRenderer({ activeStep }) {
  if (activeStep === 0) return ChooseNarrative(activeStep);
  return <div>{`PageRenderer-${activeStep}`}</div>;
}

export default PageRenderer;
