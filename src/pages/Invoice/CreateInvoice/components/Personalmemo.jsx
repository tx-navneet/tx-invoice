import React, { useState } from 'react';

function PersonalMemo() {
  const [memo, setMemo] = useState('');
  const MAX_CHARACTERS = 1400;

 

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  const handleAddNote = () => {
    console.log('Memo:', memo);
    setMemo(''); // Clear the memo after adding
  };

  return (
    <>
    

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
            className="btn btn-dark mt-2"
            onChange={handleAddNote}
          >
            Add Note
          </button>
        </div>
    
    </>
  );
}

export default PersonalMemo;
