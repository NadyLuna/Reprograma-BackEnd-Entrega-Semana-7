const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Melhores livros com histórias Pernambucanas',
        data:'25/09/2020'
    })
});

module.exports = router;