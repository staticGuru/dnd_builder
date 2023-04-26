import { createContext, useContext, useState } from "react";

const DndContext = createContext(null);
const items = [
  {
    id: "question-#1",
    content: "Question",
    defaultContent:"Question"
  },
  {
    id: "option-#1",
    content: "Options",
    defaultContent: "Options",
    optionKey: "B",
    selectedOption:"B",
    isCorrectOption:false
  },
  { id: "submitButton-#1", content: "Submit Button", buttonText: "Submit" },
  { id: "image-#1", content: "Image", imageUrl: "" },
  { id: "textArea-#1", content: "Text Area Section", placeHolderText: "" },
];
const DndProvider = ({ children }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableElement, setEditableElement] = useState({});
  function updateElementProperty(item,updatedItem){
      const changedIndex=rightItems.findIndex((rightItem)=>rightItem.id ===item.id);
      rightItems[changedIndex]=updatedItem;
      setRightItems(rightItems);
      setIsEditable(false);
      setEditableElement({});
  }
  return (
    <DndContext.Provider
      value={{
        leftItems,
        setLeftItems,
        rightItems,
        setRightItems,
        isEditable,
        setIsEditable,
        editableElement,
        setEditableElement,
        updateElementProperty
      }}
    >
      {children}
    </DndContext.Provider>
  );
};
export const DndState = () => {
  return useContext(DndContext);
};

export default DndProvider;
