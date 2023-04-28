import React from "react";
import { DndState } from "../../context/DndProvider";

export function SlideLists() {
  const { exportedQuestionaire, activeSlide, setActiveSlide } = DndState();
  return (
    <div className="bg-slate-600 flex flex-col">
      {exportedQuestionaire.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === activeSlide ? "bg-green-500" : "bg-slate-500"
          }`}
        >
          <span
            className="cursor-pointer"
            onClick={() => setActiveSlide(index)}
          >
            {"slide-" + (index + 1)}
          </span>
        </div>
      ))}
    </div>
  );
}
