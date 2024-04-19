import React, { useState,useEffect  } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsFillFolderFill } from "react-icons/bs";
import axios from 'axios';
const apiUrl = 'http://localhost:8000/projects';
const apiUrl2 = 'http://localhost:8000/project';
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectStartDate, setNewProjectStartDate] = useState('');
  const [newProjectEndDate, setNewProjectEndDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // State to track the index of the project being edited

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();
    if (newProjectName.trim() === '' || newProjectDescription.trim() === '' || newProjectStartDate.trim() === '' || newProjectEndDate.trim() === '') return;
    setProjects([...projects, {
      name: newProjectName,
      description: newProjectDescription,
      startDate: newProjectStartDate,
      dueDate: newProjectEndDate
    }]);
    setNewProjectName('');
    setNewProjectDescription('');
    setNewProjectStartDate('');
    setNewProjectEndDate('');
    setShowNewProjectForm(false);
      // Make a POST request to add the new project
        // Create an object to represent the new project
  const newProject = {
    name: newProjectName,
    description: newProjectDescription,
    startDate: newProjectStartDate,
    dueDate: newProjectEndDate,
  };
  axios
  .post('http://localhost:8000/project', newProject)
  .then((response) => {
    // If the request is successful, update the projects state with the new project
    setProjects([...projects, newProject]);
    // Reset form fields and hide the form
    setNewProjectName('');
    setNewProjectDescription('');
    setNewProjectStartDate('');
    setNewProjectEndDate('');
    setShowNewProjectForm(false);
  })
  .catch((error) => {
    console.error('Error adding new project:', error);
    // Handle errors as needed
  });
  };

  const handleDeleteProject = (index,id) => {
    axios.delete('http://localhost:8000/project/'+id)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleEditProject = (index) => {
    setEditingIndex(index);
    setNewProjectName(projects[index].name);
    setNewProjectDescription(projects[index].description);
    setNewProjectStartDate(projects[index].startDate);
    setNewProjectEndDate(projects[index].dueDate);
    setShowNewProjectForm(true);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setShowNewProjectForm(false);
    setNewProjectName('');
    setNewProjectDescription('');
    setNewProjectStartDate('');
    setNewProjectEndDate('');
  };

  const handleUpdateProject = (e) => {
    e.preventDefault();
    if (
      newProjectName.trim() === '' ||
      newProjectDescription.trim() === '' ||
      newProjectStartDate.trim() === '' ||
      newProjectEndDate.trim() === ''
    )
      return;

    const updatedProject = {
      name: newProjectName,
      description: newProjectDescription,
      startDate: newProjectStartDate,
      endDate: newProjectEndDate,
    };

    axios.put(`${apiUrl2}/${projects[editingIndex].id}`, updatedProject)
      .then((response) => {
        const updatedProjects = [...projects];
        updatedProjects[editingIndex] = updatedProject;
        setProjects(updatedProjects);
        setEditingIndex(null);
        setShowNewProjectForm(false);
        setNewProjectName('');
        setNewProjectDescription('');
        setNewProjectStartDate('');
        setNewProjectEndDate('');
      })
      .catch((error) => {
        console.error('Error updating project:', error);
      });
  };

  return (
    <div className="board"><h4><strong>Projects <BsFillFolderFill  size={40}/>
    </strong></h4>
    <div className="sidebar-projects">
      <div className="project-section">
        <button className="new-project-button" onClick={() => setShowNewProjectForm(true)}>
          Create a New Project
        </button>
        {showNewProjectForm && (
          <form onSubmit={editingIndex !== null ? handleUpdateProject : handleNewProjectSubmit}>
            <input className="inputName"
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Project's Name"
            />
            <input className="inputDescription"
              type="text"
              value={newProjectDescription}
              onChange={(e) => setNewProjectDescription(e.target.value)}
              placeholder="Project's Description"
            />
            <input className="inputDate"
              type="date"
              value={newProjectStartDate}
              onChange={(e) => setNewProjectStartDate(e.target.value)}
              placeholder="Start Date"
            />
            <input className="inputDate"
              type="date"
              value={newProjectEndDate}
              onChange={(e) => setNewProjectEndDate(e.target.value)}
              placeholder="End Date"
            />
            <button className="create-button" type="submit">{editingIndex !== null ? 'Update' : 'Create'}</button>
            {editingIndex !== null && <button className='cancel-button' type="button" onClick={handleCancelEdit}>Cancel</button>}
          </form>
        )}
      </div>
      <div className="project-list">
        <h3>Project's List</h3>
        <ul className='taskprojectUl'>
          {projects.map((project, index) => (
            <li className='taskprojectLi' key={index}>
              <div className=' text-taskprojectLi'>
              <strong>{project.name}</strong>: {project.description}<br/>
              <strong>Start Date:</strong> {project.startDate}<br/> 
              <strong>Due Date:</strong> {project.dueDate}
              </div>
              
              <div className='boutton-taskprojectLi'> 
              <button className="delete-button" onClick={() => handleDeleteProject(index,project.id)}><MdDelete size={20} />
</button>
              
              <button className="edit-button" onClick={() => handleEditProject(index)}><FaEdit size={20} /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Projects;
