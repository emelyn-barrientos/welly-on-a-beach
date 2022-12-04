exports.seed = async function (knex) {
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 100,
      beaches_id: 1,
      date_posted: new Date(Date.now()),
      review:
        'Lyall Bay is the BEST beach for surfing! Highly recommed checking this beach out.',
    },
    {
      id: 101,
      beaches_id: 2,
      date_posted: new Date(Date.now()),
      review: 'This beach is fantastic for having fire pit with friends.',
    },
    {
      id: 103,
      beaches_id: 5,
      date_posted: new Date(Date.now()),
      review: 'EXCELLENT location for kayaking.',
    },
    {
      id: 104,
      beaches_id: 5,
      date_posted: new Date(Date.now()),
      review: 'I love snorkling at Island Bay! You can see so much sea life.',
    },
  ])
}
