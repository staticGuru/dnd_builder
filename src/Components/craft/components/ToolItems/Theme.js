import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { plainThemeColors } from "../../utils/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DndState } from "../../../../context/DndProvider";
import { UniqueIdGenerator } from "../../../../utils/UniqueIdGenerator";
import { useEditor, useNode } from "@craftjs/core";

function ColorTheme() {
  const { exportedQuestionaire, activeSlide, setRightItems, setTemplateData,themeArr, setThemeArr } =
    DndState();
  const { actions } = useEditor();
  function updateObject(keyName, newVal, object) {
    const results = {};
    for (var key in object) {
      if (key === keyName) {
        results[key] = newVal;
      } else if (typeof object[key] === "object" && object[key] !== null) {
        results[key] = updateObject(keyName, newVal, object[key]);
      } else {
        results[key] = object[key];
      }
    }
    return results;
  }
  function changeBackground(code) {
    console.log(
      "Guruvignessss",
      JSON.parse(exportedQuestionaire[activeSlide].json)["ROOT"].props
        .background,
      code
    );
    setThemeArr(code)
    let jsonData = JSON.parse(
      JSON.stringify(exportedQuestionaire[activeSlide])
    );
    let data = JSON.parse(jsonData.json).ROOT;
    jsonData.json = JSON.stringify(
      updateObject("background", code, JSON.parse(jsonData.json))
    );

    exportedQuestionaire[activeSlide] = jsonData;
    console.log("jsonData", jsonData,exportedQuestionaire);
    console.log(exportedQuestionaire);
    setRightItems(exportedQuestionaire);
    //     setProp((props) => (props.background = code), 500);
    setTemplateData(UniqueIdGenerator("_id"));
        actions.deserialize(jsonData);
  }

  return (
    <Accordion>
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
    </Accordion>
  );
}

export default ColorTheme;
