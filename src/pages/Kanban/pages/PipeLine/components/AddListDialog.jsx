import React, { useState } from 'react';
import { Dialog, TextInput } from 'evergreen-ui';

const AddNewListModal = () => {
  const [isShown, setIsShown] = useState(false);

  const handleOpen = () => {
    document.body.classList.add('modal-open');
    setIsShown(true);
  };

  const handleClose = () => {
    document.body.classList.remove('modal-open');
    setIsShown(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleOpen}>
        Add New List
      </button>

      <Dialog
        isShown={isShown}
        title="Add New List"
        onCloseComplete={handleClose}
        confirmLabel="Create"
      >
        <TextInput placeholder="Enter list name" width="100%" />
      </Dialog>
    </>
  );
};

export default AddNewListModal;
