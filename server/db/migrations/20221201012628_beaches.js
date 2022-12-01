
exports.up = function(knex) {
  return knex.schema.createTable('beaches', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.decimal('coordinates')
  
})}

exports.down = (knex) => {
  return knex.schema.dropTable('beaches')
  }
