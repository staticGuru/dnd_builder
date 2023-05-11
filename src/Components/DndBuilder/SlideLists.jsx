import React from "react";
import { DndState } from "../../context/DndProvider";
import { useEditor } from "@craftjs/core";

export function SlideLists() {
  const { exportedQuestionaire, activeSlide, setActiveSlide } = DndState();
  const {actions}=useEditor();
  function changeActiveSlide(index){
    setActiveSlide(index);
    let JsonObj=exportedQuestionaire[index].json
    console.log({JsonObj})
    actions.deserialize(JsonObj)
  }
  return (
    <div className="bg-slate-100 flex flex-col p-3">
      {exportedQuestionaire.map((slide, index) => (
        <div
          key={index}
          className={`h-32 w-28 bg-white text-black font-semibold rounded-xl border-4 ${
            index === activeSlide ? "border-yellow-400" : "border-black"
          } text-center items-end cursor-pointer mb-2`}
          onClick={() => changeActiveSlide(index)}
        >
          <span className="cursor-pointer">{"slide-" + (index + 1)}</span>
        </div>
      ))}
    </div>
  );
}
