### ###
Recipes (many) <==> Ingredients (many)

Quantity?
Steps?

### recipe
recipe_id
recipe_name

### steps
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });

### ingredients
ingredient_id
ingredient_name

### recipe_ingredients
recipe_id
ingredient_id
quantity
