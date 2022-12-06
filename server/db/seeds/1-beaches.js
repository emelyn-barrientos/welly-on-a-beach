exports.seed = async function (knex) {
  await knex('beaches').insert([
    {
      id: 1,
      name: 'Lyall Bay',
      description:
        'Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.',
      latitude: '-41.3291',
      longitude: '174.7953',
      orientation: '160',
      location:
        'https://www.google.com/maps/place/Lyall+Bay+Play+Area/@-41.3293219,174.794148,17z/data=!4m5!3m4!1s0x6d38a56736d88b8b:0x59341ad3c7844d37!8m2!3d-41.3293221!4d174.7957876',
    },
    {
      id: 2,
      name: 'Princess Bay',
      description:
        'Princess Bay has a sheltered sandy beach and is a popular place to swim in summer. Tucked between Houghton Bay’s headland and Te Raekaihau Point, it has good views of Taputeranga Island. On a clear day you can see the peaks of the Kaikoura Range in the South Island. The bay is part of the Taputeranga Marine Reserve, which aims to return the marine habitats to a more natural state and increase the size and abundance of fish.',
      latitude: '-41.3438',
      longitude: '174.7817',
      orientation: '225',
      location:
        'https://www.google.com/maps/place/Princess+Beach/@-41.3411904,174.7873713,15.42z/data=!4m5!3m4!1s0x6d38a538bcf1130b:0x23620d83fec7dc96!8m2!3d-41.3441729!4d174.7879717',
    },
    {
      id: 3,
      name: 'Oriental Bay',
      description:
        'Oriental Bay is a bay and suburb of Wellington, the capital city of New Zealand. Noted for being both a popular beach and a luxurious centre of affluence in the city, it is located close to the Central Business District on Wellington Harbour.',
      latitude: '-41.2916',
      longitude: '174.7929',
      orientation: '0',
      location:
        'https://www.google.com/maps/place/Oriental+Bay+Band+Rotunda/@-41.2911367,174.7944449,17.75z/data=!4m5!3m4!1s0x6d38af14fe799f8f:0x6f5c1c82d47ca4db!8m2!3d-41.2910503!4d174.7948097',
    },
    {
      id: 4,
      name: 'Scorching Bay',
      description:
        'This popular sandy inner-harbour bathing beach has a large grassed area and is sheltered from the northerly wind. It is a great place to soak up the sun and watch ships entering and leaving the harbour.',
      latitude: '-41.2972',
      longitude: '174.8333',
      orientation: '125',
      location:
        'https://www.google.com/maps/place/Scorching+Bay+Beach/@-41.2982291,174.8345784,15z/data=!4m5!3m4!1s0x6d38af1709d2c897:0x6ad85123ce916aab!8m2!3d-41.2971587!4d174.83325',
    },
    {
      id: 5,
      name: 'Island Bay',
      description:
        'Island Bay is at the end of the City to Sea and Southern walkways, and near the centre of Taputeranga Marine Reserve. Just east of the Bait House, divers and snorkellers can follow offshore reefs on a marked dive trail and see a wide variety of marine life. Divers can also explore the wreck of the navy frigate HMNZS Wellington, which lies east of Taputeranga Island. Shorland Park is just over the road and has plenty of play equipment, BBQs, picnic tables and toilets. A swim raft is moored in this bay during summer months.',
      latitude: '-41.3373',
      longitude: '174.7726',
      orientation: '180',
      location:
        'https://www.google.com/maps/place/Island+Bay+Beach/@-41.3447963,174.772601,16.08z/data=!4m5!3m4!1s0x6d38a5a7906b107b:0xa33ddd026143cb2c!8m2!3d-41.343481!4d174.7735059',
    },
    {
      id: 6,
      name: 'Hataitai Beach',
      description:
        'Hataitai Beach is small but picturesque - it lies between rustic boatsheds and the redeveloped Cog Park, and there are always yachts moored not far off shore. It is a small and safe beach where kids can swim safely, it is protected and thus not affected much by the weather.',
      latitude: '-41.3044',
      longitude: '174.7951',
      orientation: '125',
      location:
        'https://www.google.com/maps/place/Hataitai+Beach/@-41.3059118,174.7950919,16z/data=!4m5!3m4!1s0x6d38af95d719db4b:0xcae47c160c05a69c!8m2!3d-41.3059118!4d174.7992235',
    },
  ])
}
