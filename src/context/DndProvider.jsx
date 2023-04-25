import { createContext, useContext } from "react";

const DndContext = createContext(null);
const DndProvider=()=>{

}
export const DndState = () => {
     return useContext(DndContext);
   };
   
   export default DndProvider;