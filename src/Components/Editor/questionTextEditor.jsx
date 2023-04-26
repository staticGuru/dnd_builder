import React from "react";
import { DndState } from "../../context/DndProvider";

export function QuestionTextEditor() {
  const { editableElement } = DndState();
  return <div>QuestionTextEditor</div>;
}
