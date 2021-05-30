exports.seed = function (knex, Promise) {
  return knex("posts").insert([
    {
      when: "2017-07-23",
      what: "I wonder who will find this functionality.",
      user_id: 1,
    },
  ]);
};
