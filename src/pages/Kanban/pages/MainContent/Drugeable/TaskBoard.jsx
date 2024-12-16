import React, { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import TaskList from './TaskList';
import AddTaskModal from '../Models/AddTaskModel';

const TaskBoard = () => {
  const [taskLists, setTaskLists] = useState([
    {
      id: '1',
      name: 'All Modules',
      insideCard: '19',
      tasks: [
        {
          id: '1-1',
          title: 'Application Pages',
          progress: 50,
          deadline: '22 Sep, 22',
          collaborators: [
            {
              name: 'John Doe',
              profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            {
              name: 'Jane Smith',
              profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
            },
          ],
        },
        {
          id: '1-2',
          title: 'User Authentication',
          progress: 70,
          deadline: '24 Sep, 22',
          collaborators: [
            {
              name: 'Alice Brown',
              profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
            },
          ],
        },
        {
          id: '1-3',
          title: 'Database Setup',
          progress: 40,
          deadline: '28 Sep, 22',
          collaborators: [
            {
              name: 'Mark Lee',
              profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
            },
            {
              name: 'Sophia Green',
              profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
            },
          ],
        },
        {
          id: '1-4',
          title: 'API Integration',
          progress: 60,
          deadline: '30 Sep, 22',
          collaborators: [
            {
              name: 'Bob White',
              profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
            },
          ],
        },
        {
          id: '1-5',
          title: 'Frontend Development',
          progress: 80,
          deadline: '10 Oct, 22',
          collaborators: [
            {
              name: 'Charlie Black',
              profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
            },
          ],
        },
        {
          id: '1-6',
          title: 'Testing & Debugging',
          progress: 20,
          deadline: '15 Oct, 22',
          collaborators: [],
        },
      ],
    },
    {
      id: '2',
      name: 'In Progress',
      insideCard: '20',
      tasks: [
        {
          id: '2-1',
          title: 'Profile Pages',
          progress: 30,
          deadline: '18 Sep, 22',
          collaborators: [
            {
              name: 'Dave Green',
              profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
            },
            {
              name: 'Eva White',
              profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
            },
          ],
        },
        {
          id: '2-2',
          title: 'Dashboard Design',
          progress: 50,
          deadline: '19 Sep, 22',
          collaborators: [
            {
              name: 'Isabella Gray',
              profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
            },
          ],
        },
        {
          id: '2-3',
          title: 'Bug Fixes',
          progress: 10,
          deadline: '22 Sep, 22',
          collaborators: [
            {
              name: 'James Black',
              profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
            },
            {
              name: 'Rachel Adams',
              profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
            },
          ],
        },
        {
          id: '2-4',
          title: 'UI Improvement',
          progress: 60,
          deadline: '25 Sep, 22',
          collaborators: [],
        },
        {
          id: '2-5',
          title: 'SEO Optimization',
          progress: 75,
          deadline: '28 Sep, 22',
          collaborators: [
            {
              name: 'Liam Roberts',
              profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Completed',
      insideCard: '20',
      tasks: [
        {
          id: '3-1',
          title: 'Profile Pages',
          progress: 100,
          deadline: '18 Sep, 22',
          collaborators: [
            {
              name: 'Eve Adams',
              profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
            },
          ],
        },
        {
          id: '3-2',
          title: 'Navneet Pages',
          progress: 100,
          deadline: '18 Sep, 22',
          collaborators: [
            {
              name: 'Frank Green',
              profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
            },
            {
              name: 'Grace Lee',
              profileImage: 'https://randomuser.me/api/portraits/women/8.jpg',
            },
          ],
        },
        {
          id: '3-3',
          title: 'Settings Pages',
          progress: 100,
          deadline: '20 Sep, 22',
          collaborators: [],
        },
        {
          id: '3-4',
          title: 'User Profiles',
          progress: 100,
          deadline: '22 Sep, 22',
          collaborators: [
            {
              name: 'Henry Martin',
              profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
            },
          ],
        },
        {
          id: '3-5',
          title: 'Database Backups',
          progress: 100,
          deadline: '25 Sep, 22',
          collaborators: [
            {
              name: 'Ivy Clark',
              profileImage: 'https://randomuser.me/api/portraits/women/9.jpg',
            },
          ],
        },
      ],
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceListIndex = taskLists.findIndex(
      (list) => list.id === source.droppableId
    );
    const destinationListIndex = taskLists.findIndex(
      (list) => list.id === destination.droppableId
    );

    const sourceList = taskLists[sourceListIndex];
    const destinationList = taskLists[destinationListIndex];

    const sourceTasks = Array.from(sourceList.tasks);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceListIndex === destinationListIndex) {
      sourceTasks.splice(destination.index, 0, movedTask);
      const updatedList = { ...sourceList, tasks: sourceTasks };
      const updatedLists = [...taskLists];
      updatedLists[sourceListIndex] = updatedList;
      setTaskLists(updatedLists);
    } else {
      const destinationTasks = Array.from(destinationList.tasks);
      destinationTasks.splice(destination.index, 0, movedTask);
      const updatedSourceList = { ...sourceList, tasks: sourceTasks };
      const updatedDestinationList = {
        ...destinationList,
        tasks: destinationTasks,
      };
      const updatedLists = [...taskLists];
      updatedLists[sourceListIndex] = updatedSourceList;
      updatedLists[destinationListIndex] = updatedDestinationList;
      setTaskLists(updatedLists);
    }
  };
  const [newListName, setNewListName] = useState('');

  const handleAddList = () => {
    if (!newListName.trim()) return; // Prevent adding empty lists

    const newList = {
      id: `${Date.now()}`, // Unique ID
      name: newListName,
      insideCard: '0',
      tasks: [],
    };
    setTaskLists([...taskLists, newList]);
    setNewListName(''); // Clear input
  };
  return (
    <>
      <div className="px-5 pt-2 pb-4">
        <div className=" flex justify-end items-center">
          <div className="mb-2 flex gap-4">
            <input
              type="text"
              placeholder="Enter list name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              className="border-1 border-gray-300 rounded-lg px-3 py-1 w-full"
            />
            <button
              onClick={handleAddList}
              className="bg-blue-500 text-white w-[100%] px-4 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Add List
            </button>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="taskBoard" type="list" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{
                  maxWidth: '100%', // Ensures it doesn't expand beyond the viewport
                  whiteSpace: 'nowrap', // Prevents wrapping of task lists
                }}
              >
                {taskLists.map((list, index) => (
                  <TaskList key={list.id} list={list} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <AddTaskModal />
    </>
  );
};

export default TaskBoard;
