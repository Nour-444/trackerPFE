import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrTask } from "react-icons/gr";

function Tasks() {
  const [tasks, setTasks] = useState([
    { name: 'Task 1', assignee: 'User 1', project: 'Project 1', startDate: '2024-04-12', endDate: '2024-04-15', status: 'To Do' },
    { name: 'Task 2', assignee: 'User 2', project: 'Project 2', startDate: '2024-04-13', endDate: '2024-04-16', status: 'In Progress' },
    { name: 'Task 3', assignee: 'User 3', project: 'Project 3', startDate: '2024-04-14', endDate: '2024-04-17', status: 'Done' }
  ]);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('');
  const [newTaskProject, setNewTaskProject] = useState('');
  const [newTaskStartDate, setNewTaskStartDate] = useState('');
  const [newTaskEndDate, setNewTaskEndDate] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '' || newTaskAssignee.trim() === '' || newTaskProject.trim() === '' || newTaskStartDate.trim() === '' || newTaskEndDate.trim() === '' || newTaskStatus.trim() === '') return;
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = {
        name: newTaskName,
        assignee: newTaskAssignee,
        project: newTaskProject,
        startDate: newTaskStartDate,
        endDate: newTaskEndDate,
        status: newTaskStatus
      };
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, {
        name: newTaskName,
        assignee: newTaskAssignee,
        project: newTaskProject,
        startDate: newTaskStartDate,
        endDate: newTaskEndDate,
        status: newTaskStatus
      }]);
    }
    setNewTaskName('');
    setNewTaskAssignee('');
    setNewTaskProject('');
    setNewTaskStartDate('');
    setNewTaskEndDate('');
    setNewTaskStatus('');
    setShowNewTaskForm(false);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTaskName(taskToEdit.name);
    setNewTaskAssignee(taskToEdit.assignee);
    setNewTaskProject(taskToEdit.project);
    setNewTaskStartDate(taskToEdit.startDate);
    setNewTaskEndDate(taskToEdit.endDate);
    setNewTaskStatus(taskToEdit.status);
    setEditingIndex(index);
    setShowNewTaskForm(true);
  };

  const handleCancelEdit = () => {
    setNewTaskName('');
    setNewTaskAssignee('');
    setNewTaskProject('');
    setNewTaskStartDate('');
    setNewTaskEndDate('');
    setNewTaskStatus('');
    setShowNewTaskForm(false);
    setEditingIndex(null);
  };

  return (
    <div className="board"><h4><strong>Tasks <GrTask size={40} /></strong></h4>
    <div className="sidebar-tasks">
      <div className="task-section">
        <button className="new-task-button" onClick={() => setShowNewTaskForm(true)}>
          {editingIndex !== null ? 'Update Task' : 'Create a New Task'}
        </button>
        {showNewTaskForm && (
          <form onSubmit={handleNewTaskSubmit}>
            <input className="inputName"
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Task Name"
            />
            <select className="inputAssignee" value={newTaskAssignee} onChange={(e) => setNewTaskAssignee(e.target.value)}>
              <option value="">Select Assignee</option>
              <option value="User 1">User 1</option>
              <option value="User 2">User 2</option>
              <option value="User 3">User 3</option>
            </select>
            <select className="inputProjectName" value={newTaskProject} onChange={(e) => setNewTaskProject(e.target.value)}>
              <option value="">Select Project</option>
              <option value="Project 1">Project 1</option>
              <option value="Project 2">Project 2</option>
              <option value="Project 3">Project 3</option>
            </select>
            <input
              type="date" className="inputDate"
              value={newTaskStartDate}
              onChange={(e) => setNewTaskStartDate(e.target.value)}
              placeholder="Start Date"
            />
            <input className="inputDate"
              type="date"
              value={newTaskEndDate}
              onChange={(e) => setNewTaskEndDate(e.target.value)}
              placeholder="End Date"
            />
            <select className="inputStatus" value={newTaskStatus} onChange={(e) => setNewTaskStatus(e.target.value)}>
              <option value="">Select Status</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button className="create-button" type="submit">{editingIndex !== null ? 'Update' : 'Create'}</button>
            {editingIndex !== null && <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>}
          </form>
        )}
      </div>
      <div className="task-list">
        <h3>Task's List</h3>
        <ul className='taskprojectUl'>
          {tasks.map((task, index) => (
            <li className='taskprojectLi' key={index}>
              <div className=' text-taskprojectLi'>
              <strong>{task.name}</strong>
              <br/> <strong> Assigned to :</strong>  {task.assignee}
              <br/> <strong> Project:</strong> {task.project}
              <br/> <strong> Due Date:</strong>  {task.endDate}
              <br/> <strong> Status:</strong> {task.status}
              </div>
              <div className='boutton-taskprojectLi'>
              <button  className="delete-button" onClick={() => handleDeleteTask(index)}><MdDelete size={20} /></button>
              <button  className="edit-button" onClick={() => handleEditTask(index)}><FaEdit size={20} /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Tasks;
