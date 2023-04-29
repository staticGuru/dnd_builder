import React from "react";
import { DndState } from "../../context/DndProvider";
import { SlideLists } from "../DndBuilder/SlideLists";
import { CustomPreviewer } from "./CustomPreviewer";

export function PreviewContainer() {
     const {exportedQuestionaire}=DndState()
  return (
    <div className="container mt-5 shadow back p-5">
      <div className="row">
        <div className="col-lg-6">
          <h4 className="mt-3 vl font-header">Preview Template</h4>
          <p className="content">
            At the define template phase it is a good practice to give a name
            for the template and some description
          </p>
        </div>
        <div className="col-lg-3 mt-3 offset-3">
          <button className="createbutton">Save As</button>
          <button className="savebutton m-2"> Save </button>
          <button className="cancelbutton">Cancel</button>
        </div>
      </div>
      
      <div className='shadow'>
      <div className='row mt-5'>
          <div className='col-lg-9'>
              <div className='App'>
              <CustomPreviewer/>
              </div>
          </div>
          <div className='col-lg-3 RightSide_NavBar'>
              <SlideLists />
          </div>
          <div className='row'>
              <div className='col-lg-3 offset-4'>
                  <button className='createbutton'> SUBMIT </button>
              </div>
          </div>
      </div>
  </div>
    </div>
  );
}
