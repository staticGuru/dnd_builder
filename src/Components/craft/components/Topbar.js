import { useEditor } from "@craftjs/core";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from "@material-ui/core";
import copy from "copy-to-clipboard";
// import lz from 'lzutf8';
import React, { useState } from "react";
import { DndState } from "../../../context/DndProvider";
import { UniqueIdGenerator } from "../../../utils/UniqueIdGenerator";
import useAuth from "../../../hooks/useAuth";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Colors } from "../../../utils/Colors";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";
import { CraftPreviewer } from "../craftPreviewer";

export const Topbar = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98%",
    height: "98%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );
  const { setAuth } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const { activeSlide, updateElementProperty, addSlide } = DndState();

  const [stateToLoad, setStateToLoad] = useState(null);
  function saveCanvas(json) {
    let item = { id: UniqueIdGenerator("dnd"), json, slide: activeSlide };
    updateElementProperty(item);
    let Obj = JSON.parse(json);
    console.log(Obj);
    for (const [key] of Object.entries(Obj)) {
      if (key !== "ROOT") {
        actions.delete(key);
      }
    }
    actions.clearEvents();
    addSlide();
  }
  function logoutCallback() {
    localStorage.removeItem("user");
    setAuth({});
  }
  function handleDeleteActions(query) {
    const json = query.serialize();
    let Obj = JSON.parse(json);
    console.log(Obj);
    for (const [key] of Object.entries(Obj)) {
      if (key !== "ROOT") {
        actions.delete(key);
      }
    }
    actions.clearEvents();
  }
  function handleFullScreen() {
    setOpen(true);
  }
  return (
    <Box px={1} py={1} mt={3} mb={1}>
      <Grid container alignItems="center">
        <Grid item xs>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="white"
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            style={{
              marginRight: "10px",
              backgroundColor: Colors.primary,
              color: "white",
              fontWeight: "bold",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Preview
          </MaterialButton>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="white"
            onClick={() => handleFullScreen()}
            style={{
              marginRight: "10px",
              backgroundColor: "transparent",
              borderColor: Colors.primary,
              borderWidth: "2px",
              color: Colors.primary,
              fontWeight: "bold",
            }}
          >
            <FullscreenIcon />
          </MaterialButton>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="white"
            onClick={() => handleDeleteActions(query)}
            style={{
              marginRight: "10px",
              backgroundColor: "transparent",
              borderColor: Colors.primary,
              borderWidth: "2px",
              color: Colors.primary,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <DeleteOutlineIcon />
          </MaterialButton>
          {/* <FormControlLabel
            className="enable-disable-toggle"
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            disabled={!canUndo}
            onClick={() => actions.history.undo()}
            style={{ marginRight: "10px" }}
          >
            Undo
          </MaterialButton>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            style={{ marginRight: "10px" }}
          >
            Redo
          </MaterialButton>*/}
        </Grid>
        <Grid item>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              const json = query.serialize();
              // console.log("json",json)
              // copy(lz.encodeBase64(lz.compress(json)));
              saveCanvas(json);
              setSnackbarMessage("State copied to clipboard");
            }}
            style={{ marginRight: "10px" }}
          >
            Save
          </MaterialButton>
          {/* <MaterialButton
            className="load-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => setDialogOpen(true)}
            style={{ marginRight: "10px" }}
          >
            Load
          </MaterialButton>*/}
          <MaterialButton
            className="load-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => logoutCallback()}
          >
            Logout
          </MaterialButton>
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
            <DialogContent>
              <TextField
                multiline
                fullWidth
                placeholder='Paste the contents that was copied from the "Copy Current State" button'
                size="small"
                value={stateToLoad || ""}
                onChange={(e) => setStateToLoad(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <MaterialButton
                onClick={() => setDialogOpen(false)}
                color="primary"
              >
                Cancel
              </MaterialButton>
              <MaterialButton
                onClick={() => {
                  setDialogOpen(false);
                  // const json = lz.decompress(lz.decodeBase64(stateToLoad));
                  const json = [{}];
                  actions.deserialize(json);
                  setSnackbarMessage("State loaded");
                }}
                color="primary"
                autoFocus
              >
                Load
              </MaterialButton>
            </DialogActions>
          </Dialog>
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={!!snackbarMessage}
            onClose={() => setSnackbarMessage(null)}
            message={<span>{snackbarMessage}</span>}
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HighlightOffIcon
            style={{ position: "absolute", top: "10px", right: "10px",cursor:"pointer" }}
            onClick={handleClose}
          />
          <CraftPreviewer/>
        </Box>
      </Modal>
    </Box>
  );
};
