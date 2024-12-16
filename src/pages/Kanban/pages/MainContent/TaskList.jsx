/* eslint-disable no-unused-vars */
// src/TaskList.js
import React, { useContext, useEffect, useRef } from 'react';
import Dragula from 'react-dragula';
import 'dragula/dist/dragula.css';
import TaskCard from './TaskCard';
import TaskListActions from '../../components/TaskListEditMenu/TaskListMenu';
import { Responsivecontext } from '../../../../context/HeaderContext';
import AddTaskModal from './Models/AddTaskModel';

const TaskList = () => {
  const drakeRef = useRef(null);
  const tasklistRef = useRef(null); // Reference to the tasklist container
  const taskCardsRef = useRef([]); // Reference to the task cards (full div)
  const { handleShowModel, showModal } = useContext(Responsivecontext);

  useEffect(() => {
    // Initialize dragula with the task list container
    drakeRef.current = Dragula(taskCardsRef.current, {
      // You can add options here to configure the drag behavior, such as dragging between lists
    });

    // Cleanup the dragula instance on component unmount
    return () => {
      if (drakeRef.current) {
        drakeRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="card card-simple card-border tasklist">
        <div className="card-header card-header-action">
          <div className="tasklist-handle">
            <h6 className="text-uppercase fw-bold d-flex align-items-center mb-0">
              <span className="tasklist-name">In progress</span>
              <span className="badge badge-pill badge-soft-violet ms-2">6</span>
            </h6>
            <TaskListActions />
          </div>
          <button
            className="btn btn-white btn-block btn-add-newtask"
            onClick={handleShowModel}
          >
            <span>
              <span className="icon">
                <span className="feather-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </span>
              Add New Task
            </span>
          </button>
        </div>
        <div className="card-body" id="tasklist" ref={tasklistRef}>
          <div
            ref={(el) => taskCardsRef.current.push(el)}
            className="task-card"
          >
            <TaskCard title="Task 1" progress={50} deadline="2023-10-30" />
          </div>
          <div
            ref={(el) => taskCardsRef.current.push(el)}
            className="task-card"
          >
            <TaskCard title="Task 2" progress={75} deadline="2023-11-05" />
          </div>
          <div
            ref={(el) => taskCardsRef.current.push(el)}
            className="task-card"
          >
            <TaskCard title="Task 3" progress={30} deadline="2023-11-10" />
          </div>
          <div
            ref={(el) => taskCardsRef.current.push(el)}
            className="task-card"
          >
            <TaskCard title="Task 4" progress={90} deadline="2023-11-15" />
          </div>
        </div>
      </div>
      {showModal ? <AddTaskModal /> : ''}
    </>
  );
};

export default TaskList;
