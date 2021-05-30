exports.seed = function (knex, Promise) {
  return knex("posts").insert([
    {
      where: "www.github.com/user/kristapants",
      favicon: "https://img.icons8.com/plasticine/100/000000/linkedin.png",
      about: "you haven't heard of github?",
    },
  ]);
};
