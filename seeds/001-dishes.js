
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('dishes').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('dishes').insert([
//         { name: 'tacos'},
//         { name: 'french toast'},
//         { name: 'hot dog'}
//       ]);
//     });
// };

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'tacos'},
        {name: 'french toast'},
        {name: 'hot dog'}
      ]);
    });
 };