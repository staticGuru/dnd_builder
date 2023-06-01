import { useEditor, Element, useNode } from "@craftjs/core";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import { Button } from "./user/Button";
import { Card } from "./user/Card";
import { Container } from "./user/Container";
import { Text } from "./user/Text";
import { ImageContent } from "./user/ImageContent";
import { Video } from "./user/Video";
import { DocumentAttachment } from "./user/DocumentAttachment";
import { Option } from "./user/Option";
import { plainThemeColors } from "../utils/colors";
import ColorTheme from "./ToolItems/Theme";
import { DndState } from "../../../context/DndProvider";
import { Audio } from "./user/Audio";
import { LayoutComponent } from "./Layout";
import { Colors } from "../../../utils/Colors";

export const Toolbox = () => {
  const { connectors } = useEditor();
  const { themeArr, setThemeArr, activeSlide, rightItems } = DndState();
  // const {
  //   actions: { setProp },
  // } = useNode();
  function changeBackground(code) {
    // themeArr[activeSlide] = code;
    // setThemeArr(code);
    // console.log("Guruvignessss", themeArr,rightItems);
    //     let jsonData = JSON.parse(JSON.stringify(exportedQuestionaire[activeSlide]));
    //     let data  =JSON.parse(jsonData.json).ROOT;
    //     jsonData.json=JSON.stringify(updateObject("background",code,JSON.parse(jsonData.json)))
    // exportedQuestionaire[activeSlide]=jsonData
    // console.log("jsonData",jsonData)
    //     console.log(exportedQuestionaire);
    //     setRightItems(exportedQuestionaire);
    // setProp((props) => (props.background = code), 500);
    //     setTemplateData(UniqueIdGenerator("_id"))
  }
  return (
    <Box>
      <Accordion style={{ backgroundColor: Colors.primary, color:"white" }}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon  style={{color:"white"}}/>}>
          <Typography>Add Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                ref={(ref) =>
                  connectors.create(ref, <Text text="Add your questions.." />)
                }
                variant="contained"
                data-cy="toolbox-question"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <QuizOutlinedIcon />
                <span>Question</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) =>
                  connectors.create(ref, <Option text="Enter Options" />)
                }
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <QuestionAnswerOutlinedIcon />
                <span>Answers</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) => connectors.create(ref, <ImageContent />)}
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ImageOutlinedIcon />
                <span>Image</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) => connectors.create(ref, <Video />)}
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ImageOutlinedIcon />
                <span>Video</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) => connectors.create(ref, <Audio />)}
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <GraphicEqOutlinedIcon />
                <span>Audio</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) => connectors.create(ref, <DocumentAttachment />)}
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <AttachFileOutlinedIcon />
                <span>Document</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) =>
                  connectors.create(
                    ref,
                    <Element canvas is={Container} padding={20} />
                  )
                }
                variant="contained"
                data-cy="toolbox-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ContentPasteOutlinedIcon />
                <span>Container</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) => connectors.create(ref, <Card />)}
                variant="contained"
                data-cy="toolbox-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <CardMembershipOutlinedIcon />
                <span>Card</span>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: Colors.primary, color:"white" }}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon style={{color:"white"}}/>}>
          <Typography>Add Action Items</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MaterialButton
                ref={(ref) =>
                  connectors.create(ref, <Button text="Submit" size="small" />)
                }
                variant="contained"
                data-cy="toolbox-submit-button"
              >
                Submit
              </MaterialButton>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <ColorTheme />
      <LayoutComponent />
      {/* <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Add Themes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>Plain Theme</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {plainThemeColors.map((code) => (
                  <Grid item xs={2}>
                    <Box
                      onClick={() => changeBackground(code)}
                      variant="contained"
                      data-cy="toolbox-text"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                        borderRadius: "2px",
                        backgroundColor: code,
                        borderColor: "red",
                        borderWidth: "3px",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
                    </Accordion>*/}
    </Box>
  );
};
