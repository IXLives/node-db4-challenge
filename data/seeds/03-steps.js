exports.seed = function(knex) {
    return knex('steps').insert([
        {recipe_id: 1, instructions: 'Separate 2(two) pieces of bread', step_number: 1},
        {recipe_id: 1, instructions: 'Spread Jelly on one slice, Peanut Butter on the other', step_number: 2},
        {recipe_id: 1, instructions: 'Combine the slices, spread side in. Enjoy!', step_number: 3},
        {recipe_id: 2, instructions: 'Heat tomato sauce', step_number: 1},
        {recipe_id: 2, instructions: 'Boil noodles in water', step_number: 2},
        {recipe_id: 2, instructions: 'Bake garlic bread in oven', step_number: 3},
        {recipe_id: 2, instructions: 'Serve sauce over noodles, with bread on the side. Enjoy!', step_number: 4},
        {recipe_id: 3, instructions: 'Heat alfredo sauce', step_number: 1},
        {recipe_id: 3, instructions: 'Cook chicken on low heat, covered, submersed in seasoned water (yes, seasoned water).', step_number: 2},
        {recipe_id: 3, instructions: 'Boil noodles in water', step_number: 3},
        {recipe_id:3 , instructions: 'Bake garlic bread in oven', step_number: 4},
        {recipe_id: 3, instructions: 'Shred the marinated chicken', step_number: 5},
        {recipe_id: 3, instructions: 'Serve chicken on sauce, over noodles, with garlic bread on the side. Enjoy!', step_number: 6},
    ])
}