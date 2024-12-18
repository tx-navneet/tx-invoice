/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import TaskListActions from '../../../components/TaskListEditMenu/TaskListMenu'; // Assume this is your edit menu
import './TaskBoard.css'; // Custom styles

const TaskCard = ({ task, index, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const handleShowActions = () => {
    setShowActions((prev) => !prev);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card bg-white border-1 border-gray-300 shadow-lg rounded-xl px-3 pb-3 mb-6 hover:shadow-2xl transition-all card card-simple card-border tasklist"
        >
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full mb-3">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${task.progress}%`,
                backgroundColor: task.progress >= 80 ? '#4CAF50' : '#FF9800',
              }}
            ></div>
          </div>

          {/* Card Header */}
          <div className="flex justify-between items-center mb-4 mt-2">
            <h6 className="text-md font-semibold">{task.title}</h6>
            <TaskListActions />
          </div>

          {/* Collaborators */}
          <div className="mb-4">
            <div className="flex space-x-2">
              {task.collaborators && task.collaborators.length > 0 ? (
                task.collaborators.map((collaborator, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300"
                  >
                    <img
                      src={collaborator.profileImage}
                      alt={collaborator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <span className="text-gray-500 text-sm">No collaborators</span>
              )}
            </div>
          </div>

          {/* Task Stats */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex space-x-4">
              <span className="flex items-center">
                <i className="ri-checkbox-line"></i>
                <span>
                  {task.completed}/{task.total}
                </span>
              </span>
              <span className="flex items-center">
                <i className="ri-message-3-line"></i>
                <span>{task.discussions}</span>
              </span>
            </div>
            <span className="text-xs">{task.deadline}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
