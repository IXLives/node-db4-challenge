const express = require("express");

const Recipes = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes: ", err });
    });
});

router.get("/:id/shopping_list", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get shopping list: ", err });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get instructions: ", err });
    });
});

module.exports = router;
