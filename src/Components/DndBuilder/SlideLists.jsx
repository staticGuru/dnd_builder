import React from "react";
import { DndState } from "../../context/DndProvider";

export function SlideLists() {
  const { exportedQuestionaire, activeSlide, setActiveSlide } = DndState();
  return (
    <div className="bg-slate-600 flex flex-col p-3">
      {exportedQuestionaire.map((slide, index) => (
        <div
          key={index}
          className={`h-32 w-28 bg-white text-black font-semibold rounded-xl border-4 ${
            index === activeSlide ? "border-yellow-400" : "border-black"
          } text-center items-end cursor-pointer mb-2`}
          onClick={() => setActiveSlide(index)}
        >
          <span className="cursor-pointer">{"slide-" + (index + 1)}</span>
        </div>
      ))}
    </div>
  );
}
