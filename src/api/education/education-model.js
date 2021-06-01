const db = require("../../../data/db-config");

module.exports = {
  find,
};

function find() {
  return db("education as e")
    .join("users as u")
    .select("u.username", "e.id", "e.completed", "e.accolade", "e.about");
}
