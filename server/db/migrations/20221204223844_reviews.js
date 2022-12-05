exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('beaches_id').references('beaches.id')
    table.date('date_posted')
    table.string('review')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
