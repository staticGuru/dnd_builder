import React from "react";

export function EditorFooter({saveChanges,handleDeleteActions}) {
  return (
    <div>
      <div className="cursor-pointer" onClick={saveChanges}>
        Save
      </div>
      <div className="cursor-pointer" onClick={handleDeleteActions}>
        Delete
      </div>
    </div>
  );
}

