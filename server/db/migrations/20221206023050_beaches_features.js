exports.up = function (knex) {
  return knex.schema.createTable('beaches_features', (table) => {
    table.increments('id').primary()
    table.integer('features_id').references('features.id')
    table.integer('beaches_id').references('beaches.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('beaches_features')
}
