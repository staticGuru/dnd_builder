import React, { useState } from "react";
import { DndState } from "../../context/DndProvider";
import { EditorFooter } from "./editorFooter";

export function QuestionTextEditor() {
  const { editableElement, updateElementProperty, deleteElement } = DndState();
  const [value, setValue] = useState("");
  const item = { ...editableElement };
  function handleValueChange(event) {
    setValue(event.target.value);
  }
  function saveChanges() {
    item.content = value;
    updateElementProperty(editableElement, item);
  }
  function handleDeleteActions() {
    deleteElement(item);
  }
  return (
    <div className="bg-blue-600 flex flex-1 flex-col d-flex h-full">
      <div>
        <span className="text-base text-black font-bold ml-2 mb-4">Question</span>
        <input
          placeholder="Enter question here"
          value={value}
          onChange={handleValueChange}
          className="outline-none p-2 rounded-sm self-center ml-2"
        />
      </div>
      <EditorFooter
        saveChanges={saveChanges}
        handleDeleteActions={handleDeleteActions}
      />
    </div>
  );
}
