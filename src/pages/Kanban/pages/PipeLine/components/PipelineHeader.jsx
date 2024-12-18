import React from "react";
import PipelineViewOptions from "./PipelineViewOptions";
import PipelineStats from "./PipelineStats";
import { TextInput } from "evergreen-ui";

const PipelineHeader = () => (
    <>

    <header className="taskboard-header d-flex justify-between relative container-fluid py-3 " 
    >
      <div className="d-flex align-items-center">
        <a className="taskboardapp-title link-dark" href="#">
          <h1>Sales Pipeline</h1>
        </a>
        <button
          type="button"
          className="btn btn-primary ms-3 d-xxl-inline-block d-none flex-shrink-0"
          data-bs-toggle="modal"
          data-bs-target="#add_new_deal"
        >
          Add Deal
        </button>
        <PipelineViewOptions />
      </div>
      <PipelineStats />
      <div className="input">
        <TextInput placeholder="Search Cards" />
      </div>
    </header>
    </>
  );

  export default PipelineHeader