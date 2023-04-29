import React from "react";
import { DndState } from "../../context/DndProvider";

export function CustomPreviewer() {
  const { editableElement, activeSlide, exportedQuestionaire } = DndState();
  console.log(
    "editableElement",
    editableElement,
    exportedQuestionaire[activeSlide]
  );
  const previewer = exportedQuestionaire[activeSlide];
  return (
    <div className="flex flex-1 flex-col m-2 rounded-xl overflow-hidden p-4 min-h-screen border-2 border-blue-600">
      {previewer.map((element, index) => {
        if (element.id.includes("question"))
          return <QuestionPreviewer element={element} />;
        if (element.id.includes("option"))
          return <OptionPreviewer element={element} />;
        if (element.id.includes("image"))
          return <ImagePreviewer element={element} />;
      })}
    </div>
  );
}
function QuestionPreviewer({ element }) {
  return (
    <span className="text-black font-bold text-base mt-4 mb-3">
      {element.content}
    </span>
  );
}
function OptionPreviewer({ element }) {
  return (
    <span className="text-black font-normal text-base mb-3 ml-6 w-3/4-">
      <div className="flex flex-row pt-1 pb-1 pl-2 pr-2 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-slate-200">
        <span className="mr-3 font-semibold">{element.optionKey}</span>
        <span>{element.content}</span>
      </div>
    </span>
  );
}
function ImagePreviewer({ element }) {
  return (
    <div className="text-black font-bold text-base mb-3 flex justify-center items-center">
      <img
        alt="#"
        src={element.imageUrl}
        style={{
          width: `${element.width ?? 80}px`,
          height: `${element.height ?? 80}px`,
        }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
        }}
      />
    </div>
  );
}
