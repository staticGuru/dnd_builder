import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import Preview from "./Preview";
import Define from "./Define";
import Publish from "./Publish";
import Editor from "./Editor";
import MasterTemplates from "./MasterTemplates";
import DisplayPages from "./DisplayPages";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { DndBuilder } from "./DndBuilder";
import { PreviewContainer } from "./DndPreviewer/PreviewContainer";
import { Publisher } from "./Publisher";
import { DndState } from "../context/DndProvider";
import QuestionnaireEditor from "./craft/QuestionnaireEditor";
import { CraftPreviewer } from "./craft/craftPreviewer";

const CreateNewTemplate = () => {
  const { setIsPublished, isPublished,setCurrentQuestionaire } = DndState();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    let text = urlParams.get("qu");
    if (text) {
      setCurrentQuestionaire(text)
      setIsPublished(true);
    } else {
      setCurrentQuestionaire("")
      setIsPublished(false);
    }
  }, [urlParams]);
  return (
    <div className="container mt-1">
      {!isPublished && (
        <div className="row">
          <div className="col-lg-2 Box"></div>
          <div className="col-lg-10">
            <Navbar />
            <ul className="step-menu mt-4">
              <li className="complete">
                <Link
                  className="nav-link active text-dark arrow-pointer"
                  aria-current="page"
                  to="/Define"
                >
                  Define
                </Link>
              </li>
              <li className="current">
                <Link
                  className="nav-link active text-dark build arrow-pointer"
                  aria-current="page"
                  to="/Editor"
                >
                  Build
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-dark arrow-pointer"
                  aria-current="page"
                  to="/Preview"
                >
                  Preview
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-dark arrow-pointer"
                  aria-current="page"
                  to="/Summary"
                >
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-dark arrow-pointer"
                  aria-current="page"
                  to="/Publish"
                >
                  Publish
                </Link>
              </li>
            </ul>

            <Outlet/>
          </div>
        </div>
      )}
      <div className="row">
        <Routes>
          <Route exact path="/answers/:jsonNo" element={<Publisher />} />
        </Routes>
      </div>
    </div>
  );
};

export default CreateNewTemplate;
