import { Editor, Frame, Element } from "@craftjs/core";
import { Typography, Paper, Grid, makeStyles, Box } from "@material-ui/core";
import React from "react";

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
import { SlideLists } from "../DndBuilder/SlideLists";
import { DndState } from "../../context/DndProvider";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));
export function CraftPreviewer() {
  const classes = useStyles();
  const { isEditable, addSlide } = DndState();

  return (
    <Box style={{ width: "100%", marginTop: "6rem" }}>
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
        }}
      >
        <Grid container spacing={2} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              >
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.root}>
               <SlideLists isPreviewScreen={true} />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </Box>
  );
}
