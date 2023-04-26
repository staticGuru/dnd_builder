import { createContext, useContext, useState } from "react";

const DndContext = createContext(null);
const items = [
  { id: "question-#1", content: "Question",questionText:"Where are you from?"},
  { id: "option-#1", content: "Options",optionText:"india",optionKey:"B",isCorrectOption:false},
  { id: "submitButton-#1", content: "Submit Button",buttonText:"Submit"},
  { id: "image-#1", content: "Image",imageUrl:""},
  { id: "textArea-#1", content: "Text Area Section",placeHolderText:"" },
];
const DndProvider = ({ children }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <DndContext.Provider
      value={{
        leftItems,
        setLeftItems,
        rightItems,
        setRightItems,
        isEditable,
        setIsEditable,
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
