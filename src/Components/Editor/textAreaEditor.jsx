import React, { useState } from "react";
import { DndState } from "../../context/DndProvider";
import { EditorFooter } from "./editorFooter";

export function TextAreaEditor() {
  const { editableElement, updateElementProperty, deleteElement } = DndState();
  const item = { ...editableElement };
  const [value, setValue] = useState(item.label ?? item.placeHolderText);
  const [optionValue, setOptionValue] = useState(item.placeHolderText);
  function handleValueChange(event) {
    setValue(event.target.value);
  }
  function handleOptionChange(event) {
    setOptionValue(event.target.value);
  }
  function saveChanges() {
    item.label = value;
    item.placeHolderText = optionValue;
    updateElementProperty(editableElement, item);
  }
  function handleDeleteActions() {
    deleteElement(item);
  }
  return (
    <div className="bg-blue-600 flex flex-1 flex-col d-flex h-full p-2">
      <div className="bg-blue-600 flex flex-1 flex-col d-flex">
        <span className="text-base text-black font-bold m-2">label</span>

        <input
          placeholder="Enter label here..."
          value={value}
          onChange={handleValueChange}
          className="outline-none p-2 rounded-sm self-center"
          style={{marginLeft:"1rem",marginRight:"1rem"}}
        />
        <span className="text-base text-black font-bold m-2">PlaceHolder Text</span>
        <input
          placeholder="Enter placeHolder text"
          value={optionValue}
          onChange={handleOptionChange}
          className="outline-none p-2 rounded-sm self-center"
          style={{marginLeft:"1rem",marginRight:"1rem"}}
        />
       
      </div>
      <EditorFooter
        saveChanges={saveChanges}
        handleDeleteActions={handleDeleteActions}
      />
    </div>
  );
}
