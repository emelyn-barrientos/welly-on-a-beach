exports.seed = async function (knex) {
  await knex('features').insert([
    {
      id: 1,
      feature: 'swimming',
    },
    {
      id: 2,
      feature: 'alcohol allowed',
    },
    {
      id: 3,
      feature: 'accessible',
    },
    {
      id: 4,
      feature: 'dogs allowed off lead',
    },
    {
      id: 5,
      feature: 'nearby cafe',
    },
    {
      id: 6,
      feature: 'playground',
    },
    {
      id: 7,
      feature: 'sheltered from northerlies',
    },
    {
      id: 8,
      feature: 'car parking',
    },
    {
      id: 9,
      feature: 'bike parking',
    },
    {
      id: 10,
      feature: 'changing rooms',
    },
    {
      id: 11,
      feature: 'showers',
    },
    {
      id: 12,
      feature: 'toilet',
    },

    {
      id: 13,
      feature: 'surfing',
    },
    {
      id: 14,
      feature: 'kayaking',
    },
    {
      id: 15,
      feature: 'windsurfing',
    },
    {
      id: 16,
      feature: 'surf lifesaving club',
    },
    {
      id: 17,
      feature: 'picnic tables',
    },
    {
      id: 18,
      feature: 'nude area',
    },
    {
      id: 19,
      feature: 'dogs allowed on lead',
    },
    {
      id: 20,
      feature: 'marine reserve',
    },
    {
      id: 21,
      feature: 'sheltered from southerlies',
    },
    {
      id: 22,
      feature: 'fires allowed by permit',
    },
    {
      id: 23,
      feature: 'sunset viewing',
    },
    {
      id: 24,
      feature: 'diving',
    },
    {
      id: 25,
      feature: 'bbq',
    },
    {
      id: 26,
      feature: 'swim raft',
    },
    {
      id: 27,
      feature: 'sandy beach',
    },
  ])
}
