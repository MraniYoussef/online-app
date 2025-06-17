import { useState } from "react"

function Project({details, deleteProjectCallback, saveProjectCallback}){

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });
    const [loading, setLoading] = useState(false);

    const handleOnDeleteClick = () => {
        deleteProjectCallback(details.id)
    }

    const handleEditClick = () => {
        setIsModeEdit(!isModeEdit);
    }

    const handleSaveClick = async () => {
        setLoading(true);
        await saveProjectCallback(data);
        setLoading(true);
                setIsModeEdit(false);
    }

    const handleOnChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div className="Project">
            {loading 
                    ?       (<div>Loading...</div>)
                    : (
                <div>
                        {isModeEdit ? (
                            <>
                                <label for='id'>ID: </label><input name='id' value={data.projectID} onChange={handleOnChange}/>
                                <label for='role'>Role: </label><input name='role' value={data.role} onChange={handleOnChange} />
                                <label for='startDate'>Start Date: </label><input name='startDate' value={data.startDate} onChange={handleOnChange}/>
                                <label for='endDate'>End Date: </label><input name='endDate' value={data.endDate} onChange={handleOnChange} />
                                <label for='nomProjet'>Nom Projet: </label><input name='nomProjet' value={data.nomProjet} onChange={handleOnChange} />
                                <label for='plateforme'>Plateforme: </label><input name='plateforme' value={data.plateforme} onChange={handleOnChange} />
                                <label for='tailleequipe'>Taille équipe: </label><input name='tailleequipe' value={data.tailleequipe} onChange={handleOnChange} />
                                <label for='technologies'>Technologies: </label><input name='technologies' value={data.technologies} onChange={handleOnChange} />
                                <label for='urlProjet'>URL Project: </label><input name='urlProjet' value={data.urlProject} onChange={handleOnChange} />
                                <button onClick={handleSaveClick}>Save</button>
                            </>
                        ) :
                        (  <>
                                    <label for='id'>ID: </label><h2>{details.employe.idEmploye}</h2>
                                    <label for='role'>Role: </label><h2>{details.role}</h2>           
                                    <label for='startDate'>Start Date: </label><h2>{details.startDate}</h2>          
                                        <label for='endDate'>End Date: </label><h2>{details.endDate}</h2>             
                                    <label for='nomProjet'>Nom Projet: </label><h2>{details.nomProjet}</h2>           
                                    <label for='projectID'>Project ID: </label><h2>{details.projectID}</h2>          
                                    <label for='plateforme'>Plateforme: </label><h2>{details.plateforme}</h2>          
                                    <label for='tailleequipe'>Taille équipe: </label><h2>{details.tailleequipe}</h2>        
                                    <label for='technologies'>Technologies: </label><h2>{details.technologies}</h2>        
                                    <label for='urlProjet'>URL Project: </label><h2>{details.urlProjet}</h2>          
                                    <button onClick={handleOnDeleteClick}>Delete</button>
                            </>
                        )

                        }

                    <button onClick={handleEditClick}>Edit</button>
                    </div>
                            )}
                    
                    
                </div>
    )

}

export default Project