const animais = require('../model/animais.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(animais);
}
module.exports ={getAll};
