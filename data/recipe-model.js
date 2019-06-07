const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  addRecipe,
  getRecipes,

};

function getDishes() {
  return db('dishes')
};

function getDish(id) {
  return db('dishes')
    .join('recipes', 'recipes.dish_id', 'dishes.id')
    .select('dishes.id as dishId', 'dish.name as dishName', 'recipes.name as recipeName')
    .where({ 'recipes.dish_id': id });
};

function getRecipes() {
    return db('Recipes')
      .join('dishes', 'recipes.dish_id', 'dishes.id')
      .select('recipes.*', 'dish.name as dishName')
  };

function addDish(dish) {
  return db('dishes')
  .insert(dish)
  .then(ids => {
    return getDish(ids[0])
  })
};


function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    // .then(ids => {
    //   return getDish(ids[0])
    };
  



async function execute(){

    const dish = await addDish({
        name: 'tacos'
    });
    console.log(dish);
  
}

// execute();
