import React, { useEffect, useState } from "react";
import { DndState } from "../../context/DndProvider";
import { Box } from "@material-ui/core";
import { Questionnaire } from "./questionnaire";

export function Publisher() {
  const { currentQuestionaire, rightItems,exportedQuestionaire,currentQuestion} = DndState();
  console.log("currentQuestionaire", currentQuestionaire);
  const [data,setData]=useState(null)
  const [storeData,setStoreData]=useState([])

  useEffect(() => {
    let dataList=localStorage.getItem("publishList");
    // exportedQuestionaire[currentQuestion]
    if(dataList){
      let list=JSON.parse(dataList)
      setStoreData(list)
      setData(list[currentQuestion])
    }

  }, [currentQuestion])
  return (
    <Box style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height:"100vh"}}>
    <div style={{width:"80vw",height:"80vh",borderWidth:"2px",borderColor:"gray",borderRadius:"5px",padding:"2px"}}><Questionnaire data={data} storeData={storeData}/></div>
    </Box>
  );
}
