import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { getProjectsApi } from './api/apiProject';

function App() {

    const [projects, setProjects] = useState(null);
    const [projectsFiltred, setProjectsFiltred] = useState(null);
    
    useEffect(() => {
      //Appel webservice
      getProjectsApi().then(console.log);

    }, []);

    useEffect(() => {
      setProjectsFiltred(projects);
    }, [projects])



  return (
    <>
        <div> <Header /></div>

    </>
  );
}

export default App;
