import { createContext, useContext, useState } from "react";

const DndContext = createContext(null);
const items = [
     { id: "question", content: "Question" },
     { id: "options", content: "Options" },
     { id: "submitButton", content: "Submit Button" },
     { id: "image", content: "Image" },
     { id: "textArea", content: "Text Area Section" },
   ];
const DndProvider=({children})=>{
     const [leftItems, setLeftItems] = useState(items);
     const [rightItems, setRightItems] = useState([]);
return(
     <DndContext.Provider value={{leftItems, setLeftItems,rightItems, setRightItems}}>{children}</DndContext.Provider>
)
}
export const DndState = () => {
     return useContext(DndContext);
   };
   
   export default DndProvider;