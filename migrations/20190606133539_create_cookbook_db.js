exports.up = async function(knex, Promise) {
  await knex.schema.createTable('dishes', (tbl) => {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  })

  await knex.schema.createTable('recipes', (tbl) => {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();

    tbl
      .integer('dish_id')
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    
    tbl
      .string('instructions', 128)
      .notNullable()
      .unique();
  })

  await knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable();
  })

  await knex.schema.createTable('recipes_ingredients', (tbl) => {
    tbl.increments();

    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .float('quantity', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};