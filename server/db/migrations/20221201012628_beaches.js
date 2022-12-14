exports.up = function (knex) {
  return knex.schema.createTable('beaches', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('features')
    table.text('description')
    table.string('latitude')
    table.string('longitude')
    table.string('orientation')
    table.text('location')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('beaches')
}
