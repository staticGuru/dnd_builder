import { useEditor } from "@craftjs/core";
import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
} from "@material-ui/core";
import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { DndState } from "../../../context/DndProvider";
export const SettingsPanel = () => {
  const { setIsEditable } = DndState();
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      setIsEditable(true);
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });
  console.log("seleceee", { actions, selected, isEnabled });
  function closeHandler() {
    actions.clearEvents();
    setIsEditable(false);
  }
  return isEnabled && selected ? (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <CancelOutlinedIcon
                  size="small"
                  color="error"
                  label={selected.name}
                  data-cy="chip-selected"
                  style={{ cursor: "pointer" }}
                  onClick={closeHandler}
                />
              </Grid>
            </Grid>
            <Chip
              size="small"
              color="primary"
              label={selected.name}
              data-cy="chip-selected"
            />
          </Box>
        </Grid>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <MaterialButton
            variant="contained"
            color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        ) : null}
      </Grid>
    </Box>
  ) : null;
};
