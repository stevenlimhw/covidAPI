const axios = require('axios')

const axiosPost = (url) => {
    axios.post(url)
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}

module.exports = axiosPost