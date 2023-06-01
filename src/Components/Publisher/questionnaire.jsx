import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import { Typography, Paper, Grid, makeStyles, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button } from "../craft/components/user/Button";
import { ImageContent } from "../craft/components/user/ImageContent";
import { Card, CardBottom, CardTop } from "../craft/components/user/Card";
import { Container } from "../craft/components/user/Container";
import { Text } from "../craft/components/user/Text";
import { Video } from "../craft/components/user/Video";
import { DocumentAttachment } from "../craft/components/user/DocumentAttachment";
import { DndState } from "../../context/DndProvider";
import { Option } from "../craft/components/user/Option";
import { Elemento } from "./Elemento";
import { SubmitComponent } from "./SubmitComponent";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));
export function Questionnaire({ data,storeData}) {
  const classes = useStyles();

  const {
    isEditable,
    addSlide,
    setCurrentQuestion,
    currentQuestion,
    exportedQuestionaire,
  } = DndState();
  console.log("datafadsfasd", currentQuestion, exportedQuestionaire);
  

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          ImageContent,
          Video,
          DocumentAttachment,
          Option,
        }}
      >
        {data && <Elemento data={data} />}
        <Grid container spacing={2} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              ></Element>
            </Frame>
          </Grid>
        </Grid>
       
      </Editor>
      {currentQuestion === storeData.length - 1 && (
        <SubmitComponent />
      )}
      <Box className="flex flex-row">
      {currentQuestion != 0 && (
        <Box className="bg-blue-400 pl-5 pr-5 pt-2 pb-2 text-white rounded-sm" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
          Preview Question
        </Box>
      )}
     
      <Box className="bg-blue-400 pl-5 pr-5 pt-2 pb-2 text-white rounded-sm" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
        Next Question
      </Box>
      </Box>
    </Box>
  );
}
