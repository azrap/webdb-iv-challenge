
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('ingredients').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('ingredients').insert([
//         { name: "bun"},
//         { name: "loaf of brioche bread"},
//         { name: "sausage"},
//         { name: "nutella"}, 
//         { name: "tortilla"}, 
//         { name: "black beans"}, 
//         { name: "salsa"},
//         { name: "gaucamole"}, 
//       ]);
//     });
// };

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "bun"},
        { name: "loaf of brioche bread"},
        { name: "sausage"},
        { name: "nutella"},
        { name: "tortilla"},
        { name: "black beans"},
        { name: "salsa"},
        { name: "gaucamole"},
      ]);
    });
 };