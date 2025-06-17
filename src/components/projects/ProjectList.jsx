import Project from "../project/Project"

function ProjectList({projects, deleteProjectCallBack, saveProjectCallback}) {

    return(
        <div>
            {projects.map(project => <Project key={project.id} details={project} deleteProjectCallBack={deleteProjectCallBack} saveProjectCallback={saveProjectCallback} />)}
        </div>
    )
}

export default ProjectList