/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import { GoPlus } from 'react-icons/go';
import { Button, Menu, Popover, Dialog, Pane, Position } from 'evergreen-ui';
import { RxDotsVertical } from 'react-icons/rx';
// import zIndex from '@mui/material/styles/zIndex';
import "./TaskBoard.css"

const TaskList = ({ list }) => {
  // State hooks
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    priority: 'Medium', // Default priority
  });

  // Handle modal visibility
  const handleOpenModal = () => {
    setFormData({
      name: '', // Empty name for the user to input
      startDate: '',
      endDate: '',
      description: '',
      priority: 'Medium',
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle saving the task data
  const handleSave = () => {
    // You can add logic to save the task data
    console.log('Task Saved:', formData);
    handleCloseModal(); // Close the modal after saving
  };

  return (
    <div className="bg-[#f7f7f7] rounded-lg shadow-lg w-full max-w-[400px] flex-shrink-0 p-4 mb-4 hover:shadow-2xl transition-all border-1 border-gray-200">
      {/* List Header */}
      <div className="div d-flex justify-between items-center mb-3">
        <div className="d-flex gap-2">
          <h3 className="text-lg font-semibold text-black">{list.name}</h3>
          <span className="badge badge-pill badge-soft-violet">
            {list.insideCard}
          </span>
        </div>
        <div className="actions">
          <Popover
            position={Position.BOTTOM_RIGHT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item onClick={() => handleEditList(list.id)}>
                    Edit
                  </Menu.Item>
                  <Menu.Item onClick={() => handleDeleteList(list.id)}>
                    Delete
                  </Menu.Item>
                  <Menu.Item onClick={() => handleClearAllTasks(list.id)}>
                    Clear All
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Button
              appearance="minimal"
              iconBefore={RxDotsVertical}
              className="border-0 outline-none focus:ring-0 active:ring-0" // Remove border, outline, and focus ring
            />
          </Popover>
        </div>
      </div>

      {/* Add Task Button */}
      <div className="w-full bg-[#bcc5f1] border-1 d-flex justify-center items-center rounded-lg m-auto mb-3">
        <button
          onClick={handleOpenModal}
          className="btn btn-btn-outline-brown w-full text-black text-center d-flex justify-center items-center"
        >
          <GoPlus className="text-[20px]" />
        </button>
      </div>

      {/* Dialog Box - Evergreen UI */}
      {showModal && (
        <div className="div" style={{zIndex: 1100}}>

        <Dialog isShown={showModal} onCloseComplete={handleCloseModal} title="Create New Task" zIndex={1080} className="z-[1200]"  hasFooter={false}>
          <Pane padding={16} zIndex={1200} >
            <form>
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter task name"
                  />
                </div>

                {/* Start Date */}
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Note/Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter task description"
                  ></textarea>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set Priority:
                  </label>
                  <div className="flex space-x-4">
                    {['High', 'Medium', 'Low'].map((priority) => (
                      <label key={priority} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleChange}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">{priority}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Action Buttons */}
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </form>
          </Pane>
        </Dialog>
        </div>
      )}

      {/* Droppable Area with Scroll */}
      <Droppable droppableId={list.id} type="task">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 max-h-[430px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {list.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
