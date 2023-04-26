import React from "react";
import { DndState } from "../../context/DndProvider";
import { QuestionTextEditor } from "../Editor/questionTextEditor";

export function ElementEditor() {
  const { editableElement, setIsEditable } = DndState();
  return (
    <div className="bg-red-300">
      <div
        onClick={()=>setIsEditable(false)}
        className="bg-blue-400 cursor-pointer justify-center flex items-center"
      >
        close
      </div>
      {ElementChecker(editableElement)}
    </div>
  );
}
function ElementChecker(ele) {
  if (ele.id.includes("question")) return <QuestionTextEditor />;
  return <div>Unwanted dropdown</div>;
}
