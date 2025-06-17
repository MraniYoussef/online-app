import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { addProjectApi, deleteProjectApi, getProjectsApi, saveProjectApi, searchProjectApi } from './api/apiProject';
import SearchBar from './components/search/searchBar';
import ProjectList from './components/projects/ProjectList';
import AddProjectForm from './components/AddProjectForm/AddProjectForm';

function App() {

    const [projects, setProjects] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        const projects = await getProjectsApi()
        setProjects(projects);
      }
      fetchData();

    }, []);

    
    const filterProjects = async keyword => {
      try{
        const filtredProjects = await searchProjectApi(keyword);
        setProjects(filtredProjects);
      }catch(err){

      }
    }
    
    const addProject = async data => {
      try {
        const project = await addProjectApi(data);
        setProjects([...projects, project]);
      }catch (err) {

      }
    }

    const deleteProject = async id => {
      try{
          await deleteProjectApi(id);
          const newProjects = projects.filter(project => project.projectID !== id);
          setProjects([...newProjects]);

      }catch(err){
        console.log(err);
      }    
     
    }

    const resetProjects = async () => {
      const projects = await getProjectsApi();
      setProjects(projects);
    }

    const saveProject = async data => {
      try {
        const newProject = await saveProjectApi(data);
        console.log(newProject);
      } catch(err) {
          console.log(err);
      }
    }
  return (
    <>
             <Header>
                <h1> Header </h1>
             </Header>
              <SearchBar FilterProjectsCallBack={filterProjects} resetProjectsCallBack={resetProjects} />
              {projects ? (
                <ProjectList projects={projects} deleteProjectCallBack={deleteProject} saveProjectCallback={saveProject} addListCallback={addProject} />
              ) : (
                <div>Loading...</div>
              )}

              <AddProjectForm  addProjectCallback={addProject} />

    </>
  );
}

export default App;
