import React, { useContext } from 'react';
import { Responsivecontext } from '../../context/HeaderContext';
import AddTaskModal from '../Kanban/pages/MainContent/Models/AddTaskModel';

const Home = () => {
  const { handleShowModel, showModal } = useContext(Responsivecontext);
  return (
    <>
      <button
        className="btn btn-animated btn-primary"
        onClick={handleShowModel}
      >
        click me
      </button>
      {showModal ? <AddTaskModal /> : ''}
    </>
  );
};

export default Home;
