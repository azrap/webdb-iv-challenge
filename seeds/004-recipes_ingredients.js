
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('recipes_ingredients').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('recipes_ingredients').insert([
//         {recipe_id: 3, ingredient_id: 1  , quantity: 4 },
//         {recipe_id: 2, ingredient_id: 2  , quantity: 1 },
//         {recipe_id: 3, ingredient_id: 3  , quantity: 4 },
//         {recipe_id: 2, ingredient_id: 5 ,  quantity: 1 },
//         {recipe_id: 1, ingredient_id: 6  , quantity: 4 },
//         {recipe_id: 1, ingredient_id: 7  , quantity: 1 },
//         {recipe_id: 1, ingredient_id: 8  , quantity: 1 },
//         {recipe_id: 1, ingredient_id: 9  , quantity: 1 },
//       ]);
//     });
// };


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 3, ingredient_id: 1  , quantity: 4 },
        {recipe_id: 2, ingredient_id: 2  , quantity: 1 },
        {recipe_id: 3, ingredient_id: 3  , quantity: 4 },
        {recipe_id: 2, ingredient_id: 5 ,  quantity: 1 },
        {recipe_id: 1, ingredient_id: 6  , quantity: 4 },
        {recipe_id: 1, ingredient_id: 7  , quantity: 1 },
        {recipe_id: 1, ingredient_id: 8  , quantity: 1 },
        {recipe_id: 1, ingredient_id: 9  , quantity: 1 },
      ]);
    });
 };