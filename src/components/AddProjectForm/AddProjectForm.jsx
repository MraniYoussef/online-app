import { useState } from "react";

function AddProjectForm({addProjectCallback}){
    
    const [errors, setErrors] = useState({});
    const [formState, setFormeState] = useState({
        role: '',
        startDate: '',
        endDate: '',
        nomProjet: '',
        plateforme: '',
        tailleequipe: '',
        technologies: '',
        urlProjet: '',
        idEmploye: ''
    });


    const handleInputChange = e => {
        const {name, value} = e.target;
        setFormeState({
            ...formState,
            [name]: value,
        })
    }

    const handleAddProject = () => {
        setErrors({
            ...errors,
            role: !formState.role                  ?   'Role is required.'          : null,
            nomProjet: !formState.nomProjet        ?   'Project name is required.'  : null,
            plateforme: !formState.plateforme      ?   'Plateforme is required.'    : null,
            tailleequipe: !formState.tailleequipe  ?   'Team is required.'          : null,
            startDate: !formState.startDate        ?   'Sart date is required.'     : null,
            endDate: !formState.endDate            ?   'End date is required.'      : null,
            urlProjet: !formState.urlProjet        ?   'URL is required.'           : null,
            idEmploye: !formState.idEmploye        ?   'Employee id is required'    : null

        })
        
        if(formState.role && formState.nomProjet && formState.startDate && formState.endDate && formState.idEmploye
             && formState.plateforme && formState.tailleequipe && formState.technologies && formState.urlProjet){
                 addProjectCallback(formState);
                 setErrors({})
             }

    }

    return (<div>
                <input type="text" name='role'          value={formState.role}         onChange={handleInputChange} />
                {errors.role && <small>{errors.role}</small> }

                <br></br>                
                <input type="text" name='idEmploye'          value={formState.idEmploye}         onChange={handleInputChange} />
                {errors.idEmploye && <small>{errors.idEmploye}</small> }

                <br></br>
                <input type="text" name='startDate'     value={formState.startDate}    onChange={handleInputChange} />
                {errors.startDate && <small>{errors.startDate}</small> }

                <br></br>
                <input type="text" name='endDate'       value={formState.endDate}      onChange={handleInputChange} />
                {errors.endDate && <small>{errors.endDate}</small> }

                <br></br>
                <input type="text" name='nomProjet'     value={formState.nomProjet}    onChange={handleInputChange} />
                {errors.nomProjet && <small>{errors.nomProjet}</small> }

                <br></br>
                <input type="text" name='plateforme'    value={formState.plateforme}   onChange={handleInputChange} />
                {errors.plateforme && <small>{errors.plateforme}</small> }

                <br></br>
                <input type="text" name='tailleequipe'  value={formState.tailleequipe} onChange={handleInputChange} />
                {errors.tailleequipe && <small>{errors.tailleequipe}</small> }

                <br></br>
                <input type="text" name='technologies'  value={formState.technologies} onChange={handleInputChange} />
                {errors.technologies && <small>{errors.technologies}</small> }

                <br></br>
                <input type="text" name='urlProjet'     value={formState.urlProjet}    onChange={handleInputChange} />
                {errors.urlProjet && <small>{errors.urlProjet}</small> }

                <br></br>
                <button onClick={handleAddProject} >Add</button>
            </div>
            )

}
export default AddProjectForm;