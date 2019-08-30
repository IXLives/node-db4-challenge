exports.seed = function(knex) {
    return knex('ingredients').insert([
        {ingredient_name: 'Peanut Butter'},
        {ingredient_name: 'Jelly'},
        {ingredient_name: 'Tomato Sauce'},
        {ingredient_name: 'Noodles'},
        {ingredient_name: 'Alfredo Sauce'},
        {ingredient_name: 'Chicken Breast'},
        {ingredient_name: 'Garlic Bread'},
        {ingredient_name: 'Bread'},
    ])
}