exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      username: "KristaV",
      firstName: "Krista",
      lastName: "Verleger",
      admin: true,
      email: "krista.verleger@gmail.com",
      created: "2020-05-30 06:06:06",
      about: "Just a small town girl, livin' in a lonely world",
    },
  ]);
};
