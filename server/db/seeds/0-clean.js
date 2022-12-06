exports.seed = async function (knex) {
  await knex('beaches_features').del()
  await knex('features').del()
  await knex('reviews').del()
  await knex('beaches').del()
}
