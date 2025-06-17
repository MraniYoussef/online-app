const ENDPOINT = "http://localhost:8081/projets";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getProjectsApi = async () => {
    const res = fetch(ENDPOINT, {headers});
    const json = (await res).json();
    return json;
}

export const searchProjectApi = async name => {
    let res;
    try{
     res = await fetch(`${ENDPOINT}?nomProjet=${name}`, {headers});
    } catch(err) {
        throw "ERROR SEARCH REQUEST"
    }
    if(console.err.status === 404) {
        throw "ERROR 404";
    }
    const json = await res.json;
    return json;
}

export const addProjectApi = async data => {
    let res;
    try{
        const idEmploye = data.idEmploye;
        const res = await fetch(`${ENDPOINT}/${idEmploye}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    });
    }catch(err){
    throw "ERROR ADDING REQUEST"
    }
    if(res.status === 404) {
            throw "CANT ADD 404";
        }
    const json = await res.json();
    return json;
    }

export const saveProjectApi = async data => {
    const res = await fetch (ENDPOINT + "/" + data.projectID, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers
    });
    const json = await res.json();
    return json;
}

export const deleteProjectApi = async id => {
         let res;
        try{
         res = await fetch (`${ENDPOINT}/${id}`, { method: 'DELETE' }, {headers});
        }catch(err) {
        throw "ERROR REQUEST";
         
        }
        if(res.status === 404) {
            throw "CANT DELETE 404";
        }
        const json = await res.json();
        return json
    
}
    
  
     




