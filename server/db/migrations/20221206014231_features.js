exports.up = function (knex) {
  return knex.schema.createTable('features', (table) => {
    table.increments('id').primary()
    table.string('feature')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('features')
}
