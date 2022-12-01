
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('beaches').del()
  await knex('beaches').insert([
    {
      id: 1,
      name: 'Lyall bay',
      description: 'Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.',
      coordinates: '41.3291, 174.7953',


    },
    {
      id: 2,
      name: 'Princess bay',
      description: 'Princess Bay is one of the southern beaches of Wellington, New Zealand.',
      coordinates: '41.3438, 174.7817',
     


    },
    {
      id: 3,
      name: 'Oriental bay',
      description: 'Oriental Bay is a bay and suburb of Wellington, the capital city of New Zealand. Noted for being both a popular beach and a luxurious centre of affluence in the city, it is located close to the Central Business District on Wellington Harbour.',
      coordinates: '41.2916, 174.7929',
     


    },
    {
      id: 4,
      name: 'Scorching bay',
      description: 'This popular sandy inner-harbour bathing beach has a large grassed area and is sheltered from the northerly wind. It is a great place to soak up the sun and watch ships entering and leaving the harbour.',
      coordinates: '41.2972, 174.8333',
    

    },
  ]);
};
