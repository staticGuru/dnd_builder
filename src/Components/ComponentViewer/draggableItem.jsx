import React from "react";
export function DraggableItem({ provided, snapshot, item }) {
  //   const {icon:Component}=item
  const { icon } = item;
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        userSelect: "none",
        padding: 4,
        minHeight: "4rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: snapshot.isDragging ? "#263B4A" : "#394867",
        color: "white",
        display: "flex",
        flexDirection: "column",
        borderColor: "#F7E1AE",
        borderWidth: "4px",
        borderRadius: "10px",
        ...provided.draggableProps.style,
      }}
    >
      {icon}
      <span className="mt-1 mb-1 text-sm text-white font-bold ">
        {item.content}
      </span>
    </div>
  );
}
