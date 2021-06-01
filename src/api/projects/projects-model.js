const db = require("../../../data/db-config");

module.exports = {
  find,
};

function find() {
  return db("projects as p")
    .join("users as u", "u.id", "=", "p.user_id")
    .select("p.id", "p.where", "p.what", "u.username as author");
}
