import { Element, useEditor } from "@craftjs/core";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Container } from "../user/Container";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import { OneColumn } from "./oneColumn";
import { TwoColumn } from "./twoColumn";
import { ThreeColumn } from "./threeColumn";
import { Colors } from "../../../../utils/Colors";
export function LayoutComponent() {
  const { connectors } = useEditor();

  return (
    <Accordion style={{ backgroundColor: Colors.primary, color: "white" }}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon style={{ color: "white" }} />}
      >
        <Typography>Layout</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              ref={(ref) => connectors.create(ref, <OneColumn />)}
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
              <ViewColumnOutlinedIcon />
              <span>One Column</span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              ref={(ref) => connectors.create(ref, <TwoColumn />)}
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
              <ViewColumnOutlinedIcon />
              <span>Two Column</span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              ref={(ref) => connectors.create(ref, <ThreeColumn />)}
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
              <ViewColumnOutlinedIcon />
              <span>Three Column</span>
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
