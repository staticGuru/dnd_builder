import { createContext, useContext, useState } from "react";
import { BsPatchQuestion, BsImage } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";

const DndContext = createContext(null);
const items = [
  {
    id: "question-#1",
    content: "Question",
    defaultContent: "Question",
    icon: (
      <BsPatchQuestion size={32} style={{ marginTop: 10, marginBottom: 10 }} />
    ),
  },
  {
    id: "option-#1",
    content: "Options",
    defaultContent: "Options",
    optionKey: "B",
    selectedOption: "B",
    isCorrectOption: false,
    icon: (
      <BiMessageDots size={32} style={{ marginTop: 10, marginBottom: 10 }} />
    ),
  },
  // { id: "submitButton-#1", content: "Submit", buttonText: "Submit", icon:<BsPatchQuestion/> },
  {
    id: "image-#1",
    content: "Image",
    imageUrl: "",
    width: "",
    height: "",
    icon: <BsImage size={32} style={{ marginTop: 10, marginBottom: 10 }} />,
  },
  // { id: "textArea-#1", content: "Text Area Section", placeHolderText: "" },
];
const DndProvider = ({ children }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([[]]);
  const [isEditable, setIsEditable] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [editableElement, setEditableElement] = useState({});

  function updateElementProperty(item, updatedItem) {
    const changedIndex = rightItems[activeSlide].findIndex(
      (rightItem) => rightItem.id === item.id
    );
    rightItems[activeSlide][changedIndex] = updatedItem;
    setRightItems(rightItems);
    setIsEditable(false);
    setEditableElement({});
  }
  function deleteElement(item) {
    const deletedItems = rightItems[activeSlide].filter(
      (rightItem) => rightItem.id !== item.id
    );
    rightItems[activeSlide] = deletedItems;
    setRightItems(rightItems);
    setIsEditable(false);
    setEditableElement({});
  }
  function addSlide() {
    rightItems.push([]);
    setRightItems(rightItems);
    setActiveSlide(rightItems.length - 1);
  }
  return (
    <DndContext.Provider
      value={{
        leftItems,
        setLeftItems,
        rightItems: rightItems[activeSlide],
        setRightItems,
        isEditable,
        setIsEditable,
        editableElement,
        setEditableElement,
        updateElementProperty,
        deleteElement,
        activeSlide,
        setActiveSlide,
        exportedQuestionaire: rightItems,
        addSlide,
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
