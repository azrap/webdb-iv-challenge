
// exports.seed = function(knex, Promise) {
//  // Deletes ALL existing entries
//  return knex('recipes').truncate()
//    .then(function () {
//      // Inserts seed entries
//      return knex('recipes').insert([
//        {dish_id: 1, name: "abuela's tacos", instructions: 'secrets that will go to my grave with me'},
//        {dish_id: 2, name: "nutella stuffed french toast", instructions: 'a cup of nutella and other things'},
//        {dish_id: 3, name: "chicago style hot dogs", instructions: 'Step 1: get a bun'}
//      ]);
//    });
// };



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: "abuela's tacos", instructions: 'secrets that will go to my grave with me'},
        {dish_id: 2, name: "nutella stuffed french toast", instructions: 'a cup of nutella and other things'},
        {dish_id: 3, name: "chicago style hot dogs", instructions: 'Step 1: get a bun'}
      ]);
    });
 };