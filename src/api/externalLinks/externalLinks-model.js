const db = require("../../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
};

function find() {
  return db("externalLinks");
}

function findBy(filter) {
  return db("users as u")
    .join("roles as r", "u.role", "=", "r.id")
    .select("u.id", "u.username", "r.name as role", "u.password")
    .where(filter);
}

function findById(id) {
  return db("users as u")
    .join("roles as r", "u.role", "=", "r.id")
    .select("u.id", "u.username", "r.name as role")
    .where("u.id", id)
    .first();
}
