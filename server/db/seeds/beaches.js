
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('beaches').del()
  await knex('beaches').insert([
    {
      id: 1,
      name: 'Lyall Bay',
      description: 'Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.',
      latitude: '-41.3291',
      longitude: '174.7953',


    },
    {
      id: 2,
      name: 'Princess Bay',
      description: 'Princess Bay is one of the southern beaches of Wellington, New Zealand.',
      latitude: '-41.3438',
      longitude: '174.7817'


    },
    {
      id: 3,
      name: 'Oriental Bay',
      description: 'Oriental Bay is a bay and suburb of Wellington, the capital city of New Zealand. Noted for being both a popular beach and a luxurious centre of affluence in the city, it is located close to the Central Business District on Wellington Harbour.',
      latitude: '-41.2916',
      longitude: '174.7929'


    },
    {
      id: 4,
      name: 'Scorching Bay',
      description: 'This popular sandy inner-harbour bathing beach has a large grassed area and is sheltered from the northerly wind. It is a great place to soak up the sun and watch ships entering and leaving the harbour.',
      latitude: '-41.2972',
      longitude: '174.8333'

    },
  ]);
};
