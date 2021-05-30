exports.seed = function (knex, Promise) {
  return knex("education").insert([
    {
      completed: "03 05 2020",
      accolade: "Full Stack Web Development and Technical Interviewing",
      about: "A 9-month intensive bootcamp with Lambda School.",
      user_id: 1,
    },
  ]);
};
