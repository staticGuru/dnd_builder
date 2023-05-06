import React from "react";

export function PreviewTemplate({item:previewer,index}) {
  return (
    <div key={index} className="bg-white w-36 h-40 border-gray-300 border-2 rounded-md mx-2 p-1 overflow-clip`">
    {previewer.map((element, index) => {
     if (element.id.includes("question"))
       return <QuestionPreviewer element={element} />;
     if (element.id.includes("option"))
       return <OptionPreviewer element={element} />;
     if (element.id.includes("image"))
       return <ImagePreviewer element={element} />;
   })}
    </div>
  );
}

function QuestionPreviewer({ element }) {
     return (
       <span className="text-black font-bold text-xs mt-1 mb-1">
         {element.content}
       </span>
     );
   }
   function OptionPreviewer({ element }) {
     return (
       <span className="text-black font-normal text-xs mb-1">
         <div className="flex flex-row pt-1 pb-1 pl-2 pr-2 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-slate-200">
           <span className="mr-3 font-semibold">{element.optionKey}</span>
           <span>{element.content}</span>
         </div>
       </span>
     );
   }
   function ImagePreviewer({ element }) {
     return (
       <div className="text-black font-bold text-xs mb-1 flex justify-center items-center">
         <img
           alt="#"
           src={element.imageUrl}
           style={{
             width: `${80}px`,
             height: `${80}px`,
           }}
           onError={({ currentTarget }) => {
             currentTarget.onerror = null; // prevents looping
             currentTarget.src =
               "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
           }}
         />
       </div>
     );
   }
