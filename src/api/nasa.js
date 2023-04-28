import axios from 'axios'

export const getRovers = async (limit, id) => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY'

    return await axios(url, {params})
    .then((resp) => {
        const rovers = resp.data.map((rover) => ({
            name: rover.name,
            
        }));
        return {rovers}
    })
    .catch((error) => {
        console.log('Error getting Rovers', error)
        throw error;
    })
}