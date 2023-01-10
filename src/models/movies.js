const db = require('../config/db')
const models = {} 

models.getData = async function () {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.tb_movies ORDER BY id_movie DESC')
        .then(data =>{
            resolve(data.rows)
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = models