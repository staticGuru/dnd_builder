import React, { useState } from "react";
import { EditorFooter } from "./editorFooter";
import { DndState } from "../../context/DndProvider";

export function ImageContentEditor() {
  const { editableElement, updateElementProperty, deleteElement } = DndState();
  const item = { ...editableElement };
  const [url, setUrl] = useState(item.imageUrl);
  const [width, setWidth] = useState(item.width);
  const [height, setHeight] = useState(item.height);
  function handleUrlChanges(e) {
    setUrl(e.target.value);
  }
  function handleWidthChanges(e) {
    setWidth(e.target.value);
  }
  function handleHeightChanges(e) {
    setHeight(e.target.value);
  }
  function saveChanges() {
    item.imageUrl = url ?? "";
    if (url) {
      item.width = width;
      item.height = height;
    }
    updateElementProperty(editableElement, item);
  }
  function handleDeleteActions() {
    deleteElement(item);
  }
  return (
    <div className="flex flex-1 flex-col d-flex min-h-screen pb-4">
      <div className="flex flex-col">
        <span className="text-base text-black font-bold ml-2 mb-1">Option</span>
        <input
          placeholder="Enter image url"
          value={url}
          onChange={handleUrlChanges}
          className="outline-none p-2 rounded-sm self-center ml-2"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        />
        <div>
          <span className="text-base text-black font-bold mb-1">Width</span>
          <input
            placeholder="Enter width of image"
            value={width}
            onChange={handleWidthChanges}
            className="outline-none p-2 rounded-sm self-center ml-2"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          />
        </div>
        <div>
          <span className="text-base text-black font-bold  mb-1">Height</span>
          <input
            placeholder="Enter height of image"
            value={height}
            onChange={handleHeightChanges}
            className="outline-none p-2 rounded-sm self-center ml-2"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          />
        </div>
      </div>
      <EditorFooter
        saveChanges={saveChanges}
        handleDeleteActions={handleDeleteActions}
      />
    </div>
  );
}
