exports.seed = function(knex) {
    return knex('recipes').insert([
        {recipe_name: 'PB n J'},
        {recipe_name: 'Spaghetti'},
        {recipe_name: 'Alfredo'},
    ])
}