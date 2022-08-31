const sql = require("../config/db");

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM entrenador", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const post = (body) => {
  const { name, id_pokemon } = body;
  let query = `INSERT INTO entrenador (name, id_pokemon) VALUES ('${name}', ${id_pokemon} );`;
  return new Promise((resolve, reject) => {
  sql.query(query, (err, res) => {
    if (err) {
      reject(err);
    }
      resolve(res);
    });
  });
};

const findByID = (params) => {
  const {id}  = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM entrenador WHERE code = ${id} `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};
 
module.exports = { findAll, post, findByID };