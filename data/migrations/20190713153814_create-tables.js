exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.text("username", 128).unique().notNullable();
      tbl.text("firstName", 60);
      tbl.text("lastName", 60);
      tbl.boolean("admin").defaultTo(false);
      tbl.text("email", 80);
      tbl.timestamp("created");
      tbl.text("about", 2000);
    })
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.text("where", 80);
      tbl.text("what", 2000);
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("education", (tbl) => {
      tbl.increments();
      tbl.date("completed");
      tbl.text("accolade", 300);
      tbl.text("about", 2000);
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("visitorLog", (tbl) => {
      tbl.increments();
      tbl.timestamp("when");
      tbl.boolean("approved").defaultTo(false);
      tbl.text("what", 2000);
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("externalLinks", (tbl) => {
      tbl.increments();
      tbl.text("where", 80);
      tbl.text("favicon", 80);
      tbl.text("about", 500);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("externalLinks")
    .dropTableIfExists("visitorLog")
    .dropTableIfExists("education")
    .dropTableIfExists("projects")
    .dropTableIfExists("users");
};
