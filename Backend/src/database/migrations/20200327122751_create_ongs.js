
/*método UP é responsável pela criação da tabela*/
exports.up = function(knex) {
 return knex.schema.createTable('ongs',function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsaap').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  })
};
/*método DOWN é responsável por deletar, caso algo dê errado*/
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
