import React from "react";

export function EditorFooter({ saveChanges, handleDeleteActions }) {
  return (
    <div className="flex justify-around flex-row mt-3">
      <div
        className="cursor-pointer border-2 pl-3 pr-3 pt-1 pb-1 rounded-md bg-slate-400 text-white font-bold"
        onClick={saveChanges}
      >
        Save
      </div>
      <div
        className="cursor-pointer border-2 pl-3 pr-3 pt-1 pb-1 rounded-md bg-slate-400 text-white font-bold"
        onClick={handleDeleteActions}
      >
        Delete
      </div>
    </div>
  );
}
