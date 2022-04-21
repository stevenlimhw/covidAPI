const axios = require('axios')
const { url } = require('../utils/strings')

/**
 * Function to fetch the data from the web API using axios.
 * 
 * @returns A promise with res.data.update inside.
 */
function fetchData() {
    return axios.get(url)
        .then(res => res.data.update)
        .catch(err => console.error(err))
}

module.exports = fetchData