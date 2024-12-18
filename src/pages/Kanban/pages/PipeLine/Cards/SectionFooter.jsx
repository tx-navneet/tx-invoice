import React from 'react';

const SectionFooter = () => {
  return (
    <>
      <div className="hk-fixed-footer">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center h-80p">
            <button type="button" className="btn btn-danger w-200p me-3">
              lost
            </button>
            <button type="button" className="btn btn-primary w-200p">
              win
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFooter;
