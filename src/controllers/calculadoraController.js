const path = require('path');

let calculadoraController = {
  index: (req, res) => {
    return res.render('index') // criar pagina home para calculadora
  }
}

module.exports = calculadoraController
