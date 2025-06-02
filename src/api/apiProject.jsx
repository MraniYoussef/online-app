const ENDPOINT = "http://localhost:8081/projets";

export const getProjectsApi = async () => {
    const res = fetch(ENDPOINT);
    const json = (await res).json();
    return json;
}

export const searchProjectApi = async name => {
    const res = await fetch(`${ENDPOINT}?nomProjet=${name}`);
    const json = await res.json;
    return json;
}

export const addProjectApi = async data => {
    const res = await fetch (`${ENDPOINT}`, {
        method: 'POST',
        data: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
}

export const UpdateProjectApi = async data => {
    const res = await fetch (`${ENDPOINT}`, {
        method: 'PUT',
        data: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
}

export const deleteProjectApi = async id => {
     const res = await fetch (`${ENDPOINT}/${id}`, { method: 'DELETE' });
    const json = await res.json();
    return json;
}



