const express = require('express');
const cors = require('cors');

/*importando o arquivo rotas, necessário sempre colocar o "./" 
para identificar que é um arquivo*/ 
const routes = require('./routes');

const app = express();
app.use(cors());

/*definição para entender o Json*/
app.use(express.json());

/*definição para usar o arquivo routes*/
app.use(routes);

/*definindo a porta da aplicação*/ 
app.listen(3333);