const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação no back-end.
 * POST: Inserir uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação).
  * Route Params: Parâmetros utilizados para identificar recursos únicos.
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  */

  /**
   * Tipos de Banco de Dados
   * SQL: Mysql, SQLite, Postgres....
   * NoSQL: MongoDB, CouchDB ...
   */

   /**
    * Driver: Select * From User - exemplo
    * Query Builder: table('users').select('*').where();
    */

app.listen(3333);
