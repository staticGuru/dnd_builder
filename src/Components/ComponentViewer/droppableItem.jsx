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
          display: "flex",
          flexDirection: "row",
          minHeight: "50px",
          width: "80%",
          alignSelf: "center",
          marginTop:"10px",
          overflow: "hidden",
          backgroundColor: snapshot.isDragging ? "#263B4A" : "#F4EEE0",
          color: "black",
          ...provided.draggableProps.style,
        }}
        className="rounded-xl border-2 border-black font-semibold text-base"
        onClick={() => handleElementEditor(item)}
      >
        <div
          style={{ backgroundColor: "#3795BD", padding: 16 }}
          className="font-bold text-base"
        >
          {item.optionKey}
        </div>
        <div style={{ padding: 16, paddingLeft: 8 }}>{item.content}</div>
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
          display: "flex",
          flexDirection: "row",
          minHeight: "50px",
          width: "80%",
          alignSelf: "center",
          overflow: "hidden",
          backgroundColor: snapshot.isDragging ? "#DAF5FF" : "transparent",
          ...provided.draggableProps.style,
        }}
        onClick={() => handleElementEditor(item)}
      >
        <img
          alt="#"
          src={item.imageUrl}
          style={{ width: `${item.width ?? 80}px`, height: `${item.height ??80}px` }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
          }}
        />
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
