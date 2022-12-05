exports.seed = async function (knex) {
  await knex('reviews').del()
  await knex('beaches').del()
}
