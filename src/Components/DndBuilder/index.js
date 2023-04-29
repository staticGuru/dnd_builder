import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DndProvider, { DndState } from "../../context/DndProvider";
import { ElementEditor } from "./ElementEditor";
import { UniqueIdGenerator } from "../../utils/UniqueIdGenerator";
import { SlideLists } from "./SlideLists";
import { DraggableItem } from "../ComponentViewer/draggableItem";
import { DroppableItems } from "../ComponentViewer/droppableItem";

export const DndBuilder = () => {
  const {
    leftItems,
    rightItems,
    setRightItems,
    setLeftItems,
    isEditable,
    setIsEditable,
    activeSlide,
    addSlide,
    exportedQuestionaire,
    setEditableElement,
  } = DndState();
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
      console.log("draggedItem", draggedItem);
      const picedContent = { ...draggedItem };
      newRightItems.splice(destination.index, 0, picedContent);
      draggedItem.id = UniqueIdGenerator(draggedItem.id);
      newLeftItems[source.index] = draggedItem;
      setLeftItems(newLeftItems);
      exportedQuestionaire[activeSlide] = newRightItems;
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

  return (
    <div className="container p-5 mt-5 shadow back min-h-screen bg-[#FDF4F5]">
      <div className="flex d-flex flex-1">
        <div
          className={`w-full min-h-screen ${
            isEditable ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div style={{ display: "flex"}} className="min-h-screen">
              {/* Left section for draggable items */}
              <Droppable droppableId="left">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "#F1F6F9",
                      padding: 10,
                      width: 300,
                      minHeight: 300
                    }}
                    {...provided.droppableProps}
                  >
                    <h4 className="font-bold text-black text-base">Components</h4>

                    <div className="grid grid-cols-2 gap-2 mt-3 mb-5">
                      {leftItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <DraggableItem
                              item={item}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                    </div>
                    {provided.placeholder}
                    <div
                      className="cursor-pointer p-2 border-1 border-black rounded-xl text-white font-bold bg-violet-700 text-center"
                      onClick={addSlide}
                    >
                      ADD NEW SLIDES
                    </div>
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
                        : "#F0F0F0",
                      padding: 10,
                      width: "100%",
                      minHeight: 300,
                      display: "flex",
                      flexDirection: "column"
                      //   flex:0.7
                    }}
                    {...provided.droppableProps}
                  >
                    <h4 className="font-bold text-black text-xl">Questionaire Builder</h4>
                    {rightItems.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <DroppableItems
                            item={item}
                            provided={provided}
                            snapshot={snapshot}
                          />
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
        {isEditable ? <ElementEditor /> : <SlideLists />}
      </div>
    </div>
  );
};
