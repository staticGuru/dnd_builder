import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UniqueIdGenerator } from "../utils/UniqueIdGenerator";
import { DndState } from "../context/DndProvider";
import TruncatedUrl from "./Publisher/truncateUrl";

const Publish = () => {
  const { exportedQuestionaire } = DndState();
  const [publish, setPublish] = useState(false);
  const getPublishUrl = () => {
    const uniqueId = UniqueIdGenerator("publish");
    const URL =
      process.env.REACT_APP_BASE_URL +
      "answers/" +
      uniqueId +
      "?qu=" +
      JSON.stringify(exportedQuestionaire);
    return URL;
  };
  function handlePublish(){
localStorage.setItem("publishList",JSON.stringify(exportedQuestionaire));
  }
  return (
    <div className="container mt-5 shadow back p-5">
      <div className="row">
        <div className="col-lg-4">
          <h4 className="text-dark vl font-header">Publish</h4>
          <p className="content">Publish your template </p>
        </div>
        <div className="col-lg-3 offset-5">
          <button className="createbutton">Save As</button>
          <button className="savebutton m-2">Save</button>
        </div>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-lg-12">
          <h5 className="text-center text-success mt-5">
            {" "}
            Would you like to publish ?{" "}
          </h5>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-10">
          <div className="text-center">
            <button
              className={`createbutton offset-2 ${
                exportedQuestionaire.flat().length
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onClick={() => handlePublish()}
              disabled={exportedQuestionaire.flat().length ? false : true}
            >
              Publish
            </button>
            <button className="createbutton offset-1">Cancel</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {publish && <TruncatedUrl url={getPublishUrl()} />}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-2">
          <Link to="/Summary">
            <button className="createbutton mt-5"> Previous </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Publish;
