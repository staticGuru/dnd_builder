import React from "react";
import { DndState } from "../../context/DndProvider";

export function DroppableItems({ provided, snapshot, item }) {
  const { setEditableElement, setIsEditable, isEditable } = DndState();
  function handleElementEditor(element) {
    setIsEditable(!isEditable);
    setEditableElement(element);
  }
  if (item.id.includes("question"))
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
          padding: 16,
          margin: "0 0 8px 0",
          minHeight: "50px",
          backgroundColor: snapshot.isDragging ? "#263B4A" : "#474E68",
          color: "white",
          ...provided.draggableProps.style,
        }}
        className="rounded-xl border-2 border-black font-semibold text-base"
        onClick={() => handleElementEditor(item)}
      >
        {item.content}
      </div>
    );
  if (item.id.includes("option"))
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
        display:"flex",
        flexDirection:"row",
          minHeight: "50px",
          width: "80%",
          alignSelf: "center",
          overflow: "hidden",
          backgroundColor: snapshot.isDragging ? "#263B4A" : "#F4EEE0",
          color: "black",
          ...provided.draggableProps.style,
        }}
        className="rounded-xl border-2 border-black font-semibold text-base"
        onClick={() => handleElementEditor(item)}
      >
        <div style={{backgroundColor:"#3795BD",padding:16}} className="font-bold text-base">B</div>
        <div style={{padding:16,paddingLeft:8}}>{item.content}</div>
      </div>
    );
    if (item.id.includes("image"))
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
        display:"flex",
        flexDirection:"row",
          minHeight: "50px",
          width: "80%",
          alignSelf: "center",
          overflow: "hidden",
          backgroundColor: snapshot.isDragging ? "#263B4A" : "#F4EEE0",
          color: "black",
          ...provided.draggableProps.style,
        }}
        className="rounded-xl border-2 border-black font-semibold text-base"
        onClick={() => handleElementEditor(item)}
      >
        <img alt="#" src={item.imageUrl} style={{width:`${item.width}px`,height:`${item.height}px`}}/>
      </div>
    );
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
        color: "white",
        ...provided.draggableProps.style,
      }}
      onClick={() => handleElementEditor(item)}
    >
      {item.content}
    </div>
  );
}
