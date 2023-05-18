import { createContext, useContext, useState } from "react";
import { BsPatchQuestion, BsImage, BsBodyText } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { UniqueIdGenerator } from "../utils/UniqueIdGenerator";

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
  {
    id: "textArea-#1",
    content: "Text Area",
    label: "Text Area",
    placeHolderText: "Share your thoughts...",
    icon: <BsBodyText size={32} style={{ marginTop: 10, marginBottom: 10 }} />,
  },
];

const json = JSON.stringify({
  ROOT: {
    type: { resolvedName: "Container" },
    isCanvas: true,
    props: {
      background: "#eeeeee",
      padding: 5,
      "data-cy": "root-container",
    },
    displayName: "Container",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
});

const DndProvider = ({ children }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([
    {
      id: UniqueIdGenerator("dnd"),
      json,
      slide: 1,
    },
  ]);
  const [isEditable, setIsEditable] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [editableElement, setEditableElement] = useState({});
  const [templateData, setTemplateData] = useState({});
  const [isPublished, setIsPublished] = useState(false);
  const [currentQuestionaire, setCurrentQuestionaire] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [themeArr,setThemeArr]=useState("#025464");
  let newItem = {
    id: UniqueIdGenerator("dnd"),
    json,
    slide: rightItems.length,
  };

  function updateElementProperty(updatedItem) {
    rightItems[activeSlide] = updatedItem;
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
    let newItem = {
      id: UniqueIdGenerator("dnd"),
      json,
      slide: rightItems.length,
    };
    rightItems.push(newItem);
    setRightItems(rightItems);
    setIsEditable(false);
    setActiveSlide(rightItems.length - 1);
  }
  console.log("rightItems", rightItems);
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
        templateData,
        setTemplateData,
        isPublished,
        setIsPublished,
        currentQuestionaire,
        setCurrentQuestionaire,
        currentQuestion,
        setCurrentQuestion,
        themeArr,
        setThemeArr
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
