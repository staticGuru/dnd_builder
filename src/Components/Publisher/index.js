import React, { useEffect } from "react";
import { DndState } from "../../context/DndProvider";

export function Publisher() {
  const { currentQuestionaire } = DndState();
  console.log("currentQuestionaire", currentQuestionaire);
  return <div>Publisher</div>;
}
