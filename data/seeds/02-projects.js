exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      where: "www.bluemooncommunityfarm.com",
      what: "A responsive website and recipe book for a Madison Wisconsine CSA built using Kirby 2.0.",
      user_id: 1,
    },
  ]);
};
