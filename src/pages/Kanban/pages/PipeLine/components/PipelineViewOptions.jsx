import React from 'react';

const PipelineViewOptions = () => (
  <div className="btn-group d-xxl-inline-flex d-none mx-3">
    {['trello', 'list', 'calendar'].map((icon) => (
      <button
        key={icon}
        type="button"
        className="btn btn-icon btn-outline-light"
      >
        <span className="feather-icon">
          <i data-feather={icon}></i>
        </span>
      </button>
    ))}
  </div>
);

export default PipelineViewOptions;
