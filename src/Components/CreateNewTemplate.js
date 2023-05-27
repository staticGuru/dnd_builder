import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Colors } from "../utils/Colors";

const CreateNewTemplate = () => {
  const { setIsPublished, isPublished, setCurrentQuestionaire } = DndState();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: Colors.primary,
    cursor:"pointer",
    fontWeight:"bold",
    "&:hover":{
      backgroundColor:Colors.primary,
      color:"white"
    }
  }));
  const navigation=useNavigate()
  useEffect(() => {
    // let text = urlParams.get("qu");
    // if (text) {
    //   setCurrentQuestionaire(text);
    //   setIsPublished(true);
    // } else {
    //   setCurrentQuestionaire("");
    //   setIsPublished(false);
    // }
  }, [urlParams]);
  return (
    <div className="container mt-1">
      {true && (
        <div className="row">
          <div className="col-lg-12">
            <Navbar />
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>1. Component</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>2. Classify</Item>
              </Grid>
              <Grid item xs={3}>
                <Item onClick={()=>navigation("/answers/1")}>3. Content</Item>
              </Grid>
              <Grid item xs={3}>
                <Item><div onClick={()=>navigation("/publish")}>4. Configure</div></Item>
              </Grid>
            </Grid>
            {/* <ul className="step-menu mt-4">
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
      </ul>*/}

            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewTemplate;
