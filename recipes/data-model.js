const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .where({ recipe_id })
    .select("r.recipe_name", "i.ingredient_name", "ri.quantity");
}

function getInstructions(recipe_id) {
  return db("steps as s")
    .join("recipes as r", "r.id", "s.recipe_id")
    .where({ recipe_id })
    .select("recipe_name", "instructions");
}
