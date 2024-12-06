import React, { useState } from 'react';

function PersonalMemo() {
  const [memo, setMemo] = useState('');
  const [showModel, setShowModel] = useState(false);
  const MAX_CHARACTERS = 1400;

  const handleShowMemo = () => {
    setShowModel(!showModel);
  };

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  const handleAddNote = () => {
    console.log('Memo:', memo);
    setMemo(''); // Clear the memo after adding
  };

  return (
    <>
      <div className="my-2">
        <button
          className="d-inline-flex align-items-center text-[#007D88]"
          onClick={handleShowMemo}
        >
          <i className="ri-add-box-line me-1"></i> Add a personal memo
        </button>
      </div>

      {showModel && (
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label">Personal Memo</label>
            <small className="text-muted">
              {memo.length}/{MAX_CHARACTERS}
            </small>
          </div>
          <textarea
            className="form-control"
            rows="6"
            placeholder="Write an internal note"
            value={memo}
            onChange={handleMemoChange}
            maxLength={MAX_CHARACTERS}
          />
          <button
            className="btn btn-outline-light mt-2"
            onChange={handleAddNote}
          >
            Add Note
          </button>
        </div>
      )}
    </>
  );
}

export default PersonalMemo;
