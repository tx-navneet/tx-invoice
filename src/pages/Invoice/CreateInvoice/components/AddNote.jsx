import React, { useState } from 'react';

const AddNote = () => {
  const [note, setNote] = useState(''); // State to track note input

  // Handle changes in textarea
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Handle adding the note (you can modify the logic as needed, like sending to a server)
  const handleAddNote = () => {
    if (note.trim() === '') {
      alert('Please write a note before submitting');
      return;
    }
    // For now, just log the note
    console.log('Note added:', note);
    // You can clear the textarea after adding the note
    setNote('');
  };

  return (
    <>
      <div className="separator separator-light"></div>
      <h6 className="mb-4">Terms & Condition</h6>
      <div className="col-xxl-5 order-2 order-xxl-0">
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label">Note to client</label>
            <small className="text-muted">Max 1400 characters</small>
          </div>
          <textarea
            className="form-control"
            rows="6"
            placeholder="Write an internal note"
            value={note}
            onChange={handleNoteChange}
            maxLength={1400} // Limiting input length
          ></textarea>
          <button
            className="btn btn-dark mt-2"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
