import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../utils/Colors";
import { NarrativeLists } from "../../../utils/NarrativeList";
import { Pagination } from "@mui/material";
import usePagination from "../../../hooks/usePagination";
import Modal from "../../Modal/Modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ChooseNarrative(activeStep) {
  const [selectedNarrative, setSelectedNarrative] = useState(NarrativeLists[0]);
  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ChoosedDescription selectedNarrative={selectedNarrative} />
        </Grid>
        <Grid item xs={9}>
          <ContentArea
            selectedNarrative={selectedNarrative}
            setSelectedNarrative={setSelectedNarrative}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export function ContentArea({ selectedNarrative, setSelectedNarrative }) {
  console.log("NarrativeLists", NarrativeLists);
  const PER_PAGE = 8;
  let [page, setPage] = useState(1);
  const count = Math.ceil(NarrativeLists.length / PER_PAGE);
  const _DATA = usePagination(NarrativeLists, PER_PAGE);
  const handleChange = (e, p) => {
    e.preventDefault();
    setPage(p);
    _DATA?.jump(p);
  };
  return (
    <Box
      sx={{ flexGrow: 1, padding: "2px" }}
      className="border-gray-100 rounded-sm border-2"
    >
      <Grid container spacing={2}>
        {_DATA.currentData().map((narrative, index) => (
          <Grid
            key={index}
            item
            xs={3}
            style={{
              width: "50%",
              height: "250px",
              minHeight: "250px",
            }}
          >
            <Box
              style={{
                borderWidth: "1px",
                borderColor: Colors.primary,
                backgroundColor:
                  narrative?.id === selectedNarrative?.id
                    ? Colors.primary
                    : "transparent",
                alignItems: "center",
                height: "100%",
              }}
              className={`rounded-md p-2 flex flex-col hover:bg-red-500`}
              onClick={() => setSelectedNarrative(narrative)}
            >
              <Typography
                style={{
                  color:
                    narrative?.id !== selectedNarrative?.id
                      ? Colors.primary
                      : "white",
                  fontWeight: "bold",
                }}
              >
                {narrative.title}
              </Typography>
              <img
                src={narrative.image}
                alt={narrative.title}
                loading="lazy"
                className="mt-4 rounded-md"
                style={{ width: "80%", height: "70%" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        style={{ display: "flex", justifyContent: "center" }}
        className="py-2"
      >
        <Pagination
          count={count}
          //   size="large"
          page={page}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
export function ChoosedDescription({ selectedNarrative }) {
  console.log("selectedNarrative", selectedNarrative);
  const [show, setShow] = useState(false);

  function handleOptions() {
    // console.log("calleddd", document.getElementById("selectionModal"));
    setShow(true);
    // return React.createPortal(
    //   <div
    //     style={{
    //       backgroundColor: "red",
    //       position: "absolute",
    //       top: "20px",
    //       left: "20px",
    //       height: "400px",
    //     }}
    //   >
    //     Callbacks
    //   </div>,
    //   document.getElementById("selectionModal")
    // );
  }
  return (
    <Box
      className="flex flex-col items-center border-gray-100 rounded-sm border-2"
      sx={{ flexGrow: 1, padding: "2px" }}
    >
      <Typography
        style={{ color: Colors.primary, fontWeight: "bold" }}
        className="py-2"
      >
        {selectedNarrative.title}
      </Typography>
      <Box
        className="text-justify px-2"
        style={{ maxHeight: "60vh", overflow: "scroll" }}
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </Box>
      <Button
        variant="contained"
        style={{
          backgroundColor: Colors.primary,
          color: "white",
          fontWeight: "bold",
        }}
        className="my-2"
        onClick={handleOptions}
      >
        CHOOSE AND PROCEED
      </Button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </Box>
  );
}
export default ChooseNarrative;
