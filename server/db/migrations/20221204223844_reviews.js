exports.up = function (knex) {
  knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
