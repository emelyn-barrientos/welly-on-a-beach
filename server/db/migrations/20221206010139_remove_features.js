exports.up = function (knex) {
  return knex.schema.table('beaches', (table) => {
    table.dropColumn('features')
  })
}

exports.down = (knex) => {
  return knex.schema.table('beaches', (table) => {
    table.string('features')
  })
}
