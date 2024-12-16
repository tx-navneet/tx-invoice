import React, { useContext } from 'react';
import TaskListActions from '../../components/TaskListEditMenu/TaskListMenu';
import CardListActions from '../../components/TaskListEditMenu/CardListActions';
import { Responsivecontext } from '../../../../context/HeaderContext';
import Popup from '../../components/Models/AddmoreCardModel';
import TaskList from './TaskList';
import TaskBoard from './Drugeable/TaskBoard';

const MainContent = () => {
  // const { AddmoreCards, handleAddCards } = useContext(Responsivecontext);
  return (
    <>
    
        <TaskBoard />
    </>
  );
};

export default MainContent;
