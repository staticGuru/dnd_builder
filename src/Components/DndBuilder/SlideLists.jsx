import React, { useEffect } from "react";
import { DndState } from "../../context/DndProvider";
import { useEditor } from "@craftjs/core";
import { useNavigate } from "react-router-dom";

export function SlideLists({ isPreviewScreen }) {
  const { exportedQuestionaire, activeSlide, setActiveSlide } = DndState();
  const { actions } = useEditor();
  const navigation=useNavigate()
  function changeActiveSlide(e,index) {
    navigation("/answers/1")
    // e.preventDefault();
    // setActiveSlide(index);
    // let JsonObj = exportedQuestionaire[index]?.json;
    // // console.log({ JsonObj });
    // if (JsonObj) actions.deserialize(JsonObj);
  }
  useEffect(() => {
    if (isPreviewScreen) {
      actions.setOptions((props) => (props.enabled = false));
    }
  }, [isPreviewScreen]);
  return (
    <div className="bg-slate-100 flex flex-col p-3">
      {exportedQuestionaire.map((slide, index) => (
        <div key={index} onClick={(e) => changeActiveSlide(e,index)}>
          <span className="cursor-pointer text-black mb-2 font-semibold">
            {"slide " + (index + 1)}
          </span>
          <div
            className={`h-32 w-40 bg-white text-black font-semibold rounded-xl border-4 ${
              index === activeSlide ? "border-yellow-400" : "border-black"
            } text-center items-end cursor-pointer mb-2 overflow-hidden`}
          >
            <iframe
              src={`http://localhost:3000/1`}
              title={`slidesection-${index}`}
              width="100%"
              height="100%"
              scrolling="no"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
