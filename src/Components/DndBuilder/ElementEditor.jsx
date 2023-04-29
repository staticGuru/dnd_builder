import React from "react";
import { DndState } from "../../context/DndProvider";
import { QuestionTextEditor } from "../Editor/questionTextEditor";
import { OptionTextEditor } from "../Editor/optionTextEditor";
import { ImageContentEditor } from "../Editor/ImageContentEditor";

export function ElementEditor() {
  const { editableElement, setIsEditable } = DndState();
  return (
    <div className="border-4 rounded-xl border-yellow-400 overflow-hidden bg-slate-200">
      <div
        onClick={() => setIsEditable(false)}
        className="bg-red-600 text-white text-base cursor-pointer justify-center flex items-center p-2 font-bold "
      >
        close
      </div>
      <div className="pl-2 pr-2 bg-blue-600">{ElementChecker(editableElement)}</div>
    </div>
  );
}
function ElementChecker(ele) {
  if (ele.id.includes("question")) return <QuestionTextEditor />;
  if (ele.id.includes("option")) return <OptionTextEditor />;
  if (ele.id.includes("image")) return <ImageContentEditor />;

  return <div>Unwanted dropdown</div>;
}
