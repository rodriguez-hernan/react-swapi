
const getCharacterId = (url) => {
    //https://swapi.co/api/people/1/
    let id = url.substring(28);
    id = id.slice(0, -1);
    return parseInt(id);
}


export const addCharId = (characters) => {
    let data = [];
    characters.forEach((char)=>{
        data.push({
            ...char,
            id: getCharacterId(char.url)
        })
    });
    return data
}
