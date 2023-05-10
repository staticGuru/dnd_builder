import { useEditor, Element } from "@craftjs/core";
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
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Button } from "./user/Button";
import { Card } from "./user/Card";
import { Container } from "./user/Container";
import { Text } from "./user/Text";
import ImageContent from "./user/ImageContent";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Add Components</Typography>
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
                  connectors.create(ref, <Text text="Enter Options" />)
                }
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <QuestionAnswerOutlinedIcon />
                <span>Answers</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                ref={(ref) =>
                  connectors.create(ref, <ImageContent />)
                }
                variant="contained"
                data-cy="toolbox-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ImageOutlinedIcon />
                <span>Image</span>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <MaterialButton
                ref={(ref) =>
                  connectors.create(
                    ref,
                    <Element canvas is={Container} padding={20} />
                  )
                }
                variant="contained"
                data-cy="toolbox-container"
              >
                Container
              </MaterialButton>
            </Grid>
            <Grid item xs={6}>
              <MaterialButton
                ref={(ref) => connectors.create(ref, <Card />)}
                variant="contained"
                data-cy="toolbox-card"
              >
                Card
              </MaterialButton>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
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
    </Box>
  );
};
