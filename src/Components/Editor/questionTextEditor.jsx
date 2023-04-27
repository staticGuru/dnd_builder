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
    <div>
      <div>
        <span>Question</span>
        <input
          placeholder="Enter question here"
          value={value}
          onChange={handleValueChange}
        />
      </div>
      <EditorFooter
        saveChanges={saveChanges}
        handleDeleteActions={handleDeleteActions}
      />
    </div>
  );
}
