import React, { useState } from 'react';
import { BsFillKanbanFill } from "react-icons/bs";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'To Do', dueDate: '2024-05-01', assignedTo: 'JD' },
    { id: 2, title: 'Task 2', status: 'In Progress', dueDate: '2024-05-05', assignedTo: 'JS' },
    { id: 3, title: 'Task 3', status: 'Done', dueDate: '2024-04-30', assignedTo: 'AJ' }
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskId = parseInt(e.dataTransfer.getData('text/plain'));
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="board"><h4><strong>Kanban-board <BsFillKanbanFill size={40}/></strong></h4>
    <div className="kanban-board">
      <div className="column" onDrop={(e) => handleDrop(e, 'To Do')} onDragOver={handleDragOver}>
        <h3 >To Do</h3>
        {tasks
          .filter(task => task.status === 'To Do')
          .map(task => (
            <div  className="tasks" key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <p>{task.title}</p>
              <p><strong>Due Date: {task.dueDate}</strong></p>
              <div className='userProfile'>
              <p>{task.assignedTo}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="column" onDrop={(e) => handleDrop(e, 'In Progress')} onDragOver={handleDragOver}>
        <h3 >In Progress</h3>
        {tasks
          .filter(task => task.status === 'In Progress')
          .map(task => (
            <div   className="tasks" key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <p>{task.title}</p>
              <p><strong>Due Date: {task.dueDate}</strong></p>
              <div className='userProfile'>
              <p>{task.assignedTo}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="column" onDrop={(e) => handleDrop(e, 'Done')} onDragOver={handleDragOver}>
        <h3>Done</h3>
        {tasks
          .filter(task => task.status === 'Done')
          .map(task => (
            <div className="tasks" key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <p>{task.title}</p>
              <p><strong>Due Date: {task.dueDate}</strong></p>
              <div className='userProfile'>
              <p>{task.assignedTo}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default Board;
