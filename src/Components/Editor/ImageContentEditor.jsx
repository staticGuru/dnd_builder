import React, { useState } from "react";
import { EditorFooter } from "./editorFooter";
import { DndState } from "../../context/DndProvider";

export function ImageContentEditor() {
  const { editableElement, updateElementProperty, deleteElement } = DndState();
  const item = { ...editableElement };
  const [url, setUrl] = useState();
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
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
    item.content = url;
    item.width = width;
    item.height = height;
    updateElementProperty(editableElement, item);
  }
  function handleDeleteActions() {
    deleteElement(item);
  }
  return (
    <div>
      <div className="flex flex-col">
        <span>Option</span>
        <input
          placeholder="Enter image url"
          value={url}
          onChange={handleUrlChanges}
        />
        <div>
          <span>Width</span>
          <input
            placeholder="Enter width of image"
            value={width}
            onChange={handleWidthChanges}
          />
        </div>
        <div>
          <span>Height</span>
          <input
            placeholder="Enter height of image"
            value={height}
            onChange={handleHeightChanges}
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
