const animais = require('../model/livros.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(animais);
}
module.exports ={getAll};