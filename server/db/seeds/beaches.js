exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('beaches').del()
  await knex('beaches').insert([
    {
      id: 1,
      name: 'Lyall Bay',
      features:
        'Unprotected beach, that is good for surf sports and where dolphins can be seen on occasion.',
      description:
        'Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.',
      latitude: '-41.3291',
      longitude: '174.7953',
    },
    {
      id: 2,
      name: 'Princess Bay',
      features:
        'Semi protected beach, where you can drink and have bonfires. The beach is good for scuba diving and you can see the sunset.',
      description:
        'Princess Bay has a sheltered sandy beach and is a popular place to swim in summer. Tucked between Houghton Bay’s headland and Te Raekaihau Point, it has good views of Taputeranga Island. On a clear day you can see the peaks of the Kaikoura Range in the South Island. The bay is part of the Taputeranga Marine Reserve, which aims to return the marine habitats to a more natural state and increase the size and abundance of fish.',
      latitude: '-41.3438',
      longitude: '174.7817',
    },
    {
      id: 3,
      name: 'Oriental Bay',
      features:
        'Southerly protected beach where you may get lots of sun. It is very picturesque and good for socialising.',
      description:
        'Oriental Bay is a bay and suburb of Wellington, the capital city of New Zealand. Noted for being both a popular beach and a luxurious centre of affluence in the city, it is located close to the Central Business District on Wellington Harbour.',
      latitude: '-41.2916',
      longitude: '174.7929',
    },
    {
      id: 4,
      name: 'Scorching Bay',
      features:
        'Northerly protected beach that is good for swimming as it is highly protected. This beach may see the sunrise over the hills and there is space for a picnic.',
      description:
        'This popular sandy inner-harbour bathing beach has a large grassed area and is sheltered from the northerly wind. It is a great place to soak up the sun and watch ships entering and leaving the harbour.',
      latitude: '-41.2972',
      longitude: '174.8333',
    },
    {
      id: 5,
      name: 'Island Bay',
      features:
        'Semi protected from northerlies this beach is good for a walk, and has spots for fishing.',
      description:
        'Island Bay is at the end of the City to Sea and Southern walkways, and near the centre of Taputeranga Marine Reserve. Just east of the Bait House, divers and snorkellers can follow offshore reefs on a marked dive trail and see a wide variety of marine life. Divers can also explore the wreck of the navy frigate HMNZS Wellington, which lies east of Taputeranga Island. Shorland Park is just over the road and has plenty of play equipment, BBQs, picnic tables and toilets. A swim raft is moored in this bay during summer months.',
      latitude: '-41.3373',
      longitude: '174.7726',
    },
    {
      id: 6,
      name: 'Hataitai Beach',
      features:
        'A Protected beach that is much less affected by weather than other places, it is good for swimming.',
      description:
        'Hataitai Beach is small but picturesque - it lies between rustic boatsheds and the redeveloped Cog Park, and there are always yachts moored not far off shore. It is a small and safe beach where kids can swim safely, it is protected and thus not affected much by the weather.',
      latitude: '-41.3044',
      longitude: '174.7951',
    },
  ])
}
