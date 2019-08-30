
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name')
            .unique()
            .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name')
            .unique()
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') 
        tbl.string('instructions')
            .notNullable()
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('quantity')
            .unsigned()
            .notNullable()
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
