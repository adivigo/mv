const models = require('../models/movies')
const movies = {}

movies.gets = async (req, res) => {
    try {
        const data = await models.getData()
        if (!data.length) {
            return response('Data tidak ditemukan')
        } else {
            return response(data)
        }
    } catch (error) {
        return response(error)
    }
}

module.exports = movies