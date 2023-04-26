import React, { useState } from "react";
import { DndState } from "../../context/DndProvider";

export function QuestionTextEditor() {
  const { editableElement,updateElementProperty } = DndState();
  const [value,setValue]=useState("");
  const item={...editableElement}
  function handleValueChange(event){
     setValue(event.target.value);
  }
  function saveChanges(){
     item.content=value;
     updateElementProperty(editableElement,item);
  }
  return (
    <div>
      <div>
        <span>Question</span>
        <input placeholder="Enter question here" value={value} onChange={handleValueChange}/>

      </div>
      <div className="cursor-pointer" onClick={saveChanges}>Save</div>
    </div>
  );
}
