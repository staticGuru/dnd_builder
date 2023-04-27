import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DndProvider, { DndState } from "../../context/DndProvider";
import { ElementEditor } from "./ElementEditor";
import { UniqueIdGenerator } from "../../utils/UniqueIdGenerator";
import { SlideLists } from "./SlideLists";

export const DndBuilder = () => {
  const { leftItems, rightItems, setRightItems, setLeftItems,isEditable,setIsEditable,activeSlide, setActiveSlide,exportedQuestionaire,setEditableElement } = DndState();
  //  React.useEffect(()=>{
  //   var rightItems=getAllRightItems[activeSlide]
  //  },[setActiveSlide])
  // Function to handle drag and drop actions
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result);
    const { source, destination } = result;

    // Reorder the items on the left section
    if (source.droppableId === "left" && destination.droppableId === "left") {
      const newItems = Array.from(leftItems);
      const [draggedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, draggedItem);
      setLeftItems(newItems);
    }

    // Move the items from left to right section
    if (source.droppableId === "left" && destination.droppableId === "right") {
      const newLeftItems = Array.from(leftItems);
      const newRightItems = Array.from(rightItems);
      const draggedItem = newLeftItems[source.index];
      console.log("draggedItem",draggedItem);
      const picedContent={...draggedItem};
      newRightItems.splice(destination.index, 0, picedContent);
      draggedItem.id=UniqueIdGenerator(draggedItem.id)
      newLeftItems[source.index]=draggedItem;
      setLeftItems(newLeftItems);
      exportedQuestionaire[activeSlide]=newRightItems;
      setRightItems(exportedQuestionaire);
    }

    // // Move the items from right to left section
    // if (source.droppableId === "right" && destination.droppableId === "left") {
    //   const newLeftItems = Array.from(leftItems);
    //   const newRightItems = Array.from(rightItems);
    //   const [draggedItem] = newRightItems.splice(source.index, 1);
    //   newLeftItems.splice(destination.index, 0, draggedItem);
    //   setLeftItems(newLeftItems);
    //   setRightItems(newRightItems);
    // }
  };
  function handleElementEditor(element){
    setIsEditable(!isEditable)
    setEditableElement(element);
  }

  return (
    <div className="container mt-5 p-5 shadow back h-1/2 bg-green-300">
    <div className="flex d-flex flex-1">
    <div className={`w-full ${isEditable?"pointer-events-none opacity-60":""}`}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div style={{ display: "flex", flex: 0.3 }}>
          {/* Left section for draggable items */}
          <Droppable droppableId="left">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 10,
                  width: 300,
                  minHeight: 300,
                }}
                {...provided.droppableProps}
              >
                <h3>Draggable Items</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {leftItems.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            marginRight: "5px",
                            minHeight: "50px",
                            width: "60px",
                            backgroundColor: snapshot.isDragging
                              ? "#263B4A"
                              : "#456C86",
                            color: "white",
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
                <div className="cursor-pointer bg-green-400">ADD NEW SLIDES</div>
              </div>
            )}
          </Droppable>

          {/* Right section for droppable items */}
          <Droppable droppableId="right">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 10,
                  width: "100%",
                  minHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  //   flex:0.7
                }}
                {...provided.droppableProps}
              >
                <h3>Droppable Items</h3>
                {rightItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                        onClick={()=>handleElementEditor(item)}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      </div>
      {isEditable ? <ElementEditor/>:<SlideLists/>}
      </div>
    </div>
  );
};
