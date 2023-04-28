import axios from 'axios'

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
const api_key = 'WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al'


export const getRovers = () => {
    const params = {
        api_key: api_key
    }
    
    return axios.get(url, {params})
        .then(data => console.log(data.data))
        .catch(error => console.log(error))
}