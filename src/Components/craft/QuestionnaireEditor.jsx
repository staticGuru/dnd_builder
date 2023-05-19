import { Editor, Frame, Element } from "@craftjs/core";
import { Typography, Paper, Grid, makeStyles, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { SettingsPanel } from "./components/SettingsPanel";
import { Toolbox } from "./components/Toolbox";
import { Topbar } from "./components/Topbar";
import { Button } from "./components/user/Button";
import { ImageContent } from "./components/user/ImageContent";
import { Card, CardBottom, CardTop } from "./components/user/Card";
import { Container } from "./components/user/Container";
import { Text } from "./components/user/Text";
import { Video } from "./components/user/Video";
import { DocumentAttachment } from "./components/user/DocumentAttachment";
import { Option } from "./components/user/Option";
import { SlideLists } from "../DndBuilder/SlideLists";
import { DndState } from "../../context/DndProvider";
import { UniqueIdGenerator } from "../../utils/UniqueIdGenerator";
import { Audio } from "./components/user/Audio";
import { OneColumn } from "./components/Layout/oneColumn";
import { TwoColumn } from "./components/Layout/twoColumn";
import { ThreeColumn } from "./components/Layout/threeColumn";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));
export default function QuestionnaireEditor() {
  const classes = useStyles();
  const {
    isEditable,
    addSlide,
    exportedQuestionaire,
    activeSlide,
    rightItems,
    templateData,
    themeArr,
    setThemeArr,
  } = DndState();
  let jsonData = exportedQuestionaire[activeSlide];
  const [datas, setData] = useState(null);
  let data = JSON.parse(jsonData.json)["ROOT"];
  console.log("data", data, themeArr.toString());
  // useEffect(() => {
  //   let jsonData = exportedQuestionaire[activeSlide];
  //   setData(JSON.parse(jsonData.json)["ROOT"].props.background);
  //   console.log("datatatdafd",datas,JSON.parse(jsonData.json)["ROOT"].props.background)
  // }, [exportedQuestionaire, activeSlide,rightItems,templateData]);
  return (
    <div style={{ width: "100%", marginTop: "6rem" }}>
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
          Audio,
          OneColumn,
          TwoColumn,
          ThreeColumn,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs={3}>
            <Paper className={classes.root}>
              <Toolbox />
              <Box
                onClick={addSlide}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                py={1}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  ADD NEW SLIDES
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs style={{ "--background-color": "red" }}>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              >
                {/*<Card data-cy="frame-card" />
                <Button text="Click me" size="small" data-cy="frame-button" />
                <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                <Element
                  canvas
                  is={Container}
                  padding={6}
                  background="#999999"
                  data-cy="frame-container"
                >
                  <Text
                    size="small"
                    text="It's me again!"
                    data-cy="frame-container-text"
                  />
     </Element>*/}
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.root}>
              <SettingsPanel />
              {!isEditable && <SlideLists isPreviewScreen={false} />}
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
