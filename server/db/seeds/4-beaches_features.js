exports.seed = async function (knex) {
  await knex('beaches_features').insert([
    { id: 1, beaches_id: 1, features_id: 1 }, // Swimming
    { id: 2, beaches_id: 1, features_id: 2 }, // alcohol allowed
    { id: 3, beaches_id: 1, features_id: 3 }, // accessible
    { id: 4, beaches_id: 1, features_id: 4 }, // dogs allowed off lead
    { id: 5, beaches_id: 1, features_id: 5 }, // nearby cafe
    { id: 6, beaches_id: 1, features_id: 6 }, // playground
    { id: 8, beaches_id: 1, features_id: 8 }, // car parking
    { id: 9, beaches_id: 1, features_id: 9 }, // bike parking
    { id: 10, beaches_id: 1, features_id: 10 }, // changing rooms
    { id: 11, beaches_id: 1, features_id: 11 }, // showers
    { id: 12, beaches_id: 1, features_id: 12 }, // toilet
    { id: 13, beaches_id: 1, features_id: 13 }, // surfing
    { id: 14, beaches_id: 1, features_id: 14 }, // kayaking
    { id: 15, beaches_id: 1, features_id: 15 }, // windsurfing
    { id: 16, beaches_id: 1, features_id: 16 }, // surf lifesaving club
    { id: 17, beaches_id: 1, features_id: 27 }, // sandy beach
    { id: 18, beaches_id: 2, features_id: 1 }, // Swimming
    { id: 19, beaches_id: 2, features_id: 2 }, // alcohol allowed
    { id: 20, beaches_id: 2, features_id: 7 }, // sheltered from northerlies
    { id: 21, beaches_id: 2, features_id: 8 }, // car parking
    { id: 22, beaches_id: 2, features_id: 10 }, // changing rooms
    { id: 23, beaches_id: 2, features_id: 11 }, // showers
    { id: 24, beaches_id: 2, features_id: 12 }, // toilet
    { id: 25, beaches_id: 2, features_id: 14 }, // kayaking
    { id: 26, beaches_id: 2, features_id: 20 }, // marine reserve
    { id: 27, beaches_id: 2, features_id: 22 }, // fires allowed by permit
    { id: 28, beaches_id: 2, features_id: 23 }, // sunset viewing
    { id: 29, beaches_id: 2, features_id: 24 }, // diving
    { id: 30, beaches_id: 3, features_id: 1 }, // Swimming
    { id: 31, beaches_id: 3, features_id: 3 }, // accessible
    { id: 32, beaches_id: 3, features_id: 5 }, // nearby cafe
    { id: 33, beaches_id: 3, features_id: 6 }, // playground
    { id: 34, beaches_id: 3, features_id: 8 }, // car parking
    { id: 35, beaches_id: 3, features_id: 9 }, // bike parking
    { id: 36, beaches_id: 3, features_id: 10 }, // changing rooms
    { id: 37, beaches_id: 3, features_id: 11 }, // showers
    { id: 38, beaches_id: 3, features_id: 12 }, // toilet
    { id: 39, beaches_id: 3, features_id: 14 }, // kayaking
    { id: 40, beaches_id: 3, features_id: 17 }, // picnic tables
    { id: 41, beaches_id: 3, features_id: 21 }, // sheltered from southerlies
    { id: 42, beaches_id: 3, features_id: 26 }, // swim platform
    { id: 43, beaches_id: 3, features_id: 27 }, // sandy beach
    { id: 44, beaches_id: 4, features_id: 1 }, // Swimming
    { id: 45, beaches_id: 4, features_id: 2 }, // alcohol allowed
    { id: 46, beaches_id: 4, features_id: 3 }, // accessible
    { id: 47, beaches_id: 4, features_id: 5 }, // nearby cafe
    { id: 48, beaches_id: 4, features_id: 6 }, // playground
    { id: 49, beaches_id: 4, features_id: 7 }, // sheltered from northerlies
    { id: 50, beaches_id: 4, features_id: 8 }, // car parking
    { id: 51, beaches_id: 4, features_id: 10 }, // changing rooms
    { id: 52, beaches_id: 4, features_id: 11 }, // showers
    { id: 53, beaches_id: 4, features_id: 12 }, // toilet
    { id: 54, beaches_id: 4, features_id: 14 }, // kayaking
    { id: 55, beaches_id: 4, features_id: 17 }, // picnic tables
    { id: 56, beaches_id: 4, features_id: 26 }, // swim platform
    { id: 57, beaches_id: 4, features_id: 27 }, // sandy beach
    { id: 58, beaches_id: 5, features_id: 1 }, // Swimming
    { id: 59, beaches_id: 5, features_id: 2 }, // alcohol allowed
    { id: 60, beaches_id: 5, features_id: 3 }, // accessible
    { id: 61, beaches_id: 5, features_id: 4 }, // dogs allowed off lead
    { id: 62, beaches_id: 5, features_id: 5 }, // nearby cafe
    { id: 63, beaches_id: 5, features_id: 6 }, // playground
    { id: 64, beaches_id: 5, features_id: 7 }, // sheltered from northerlies
    { id: 65, beaches_id: 5, features_id: 8 }, // car parking
    { id: 66, beaches_id: 5, features_id: 9 }, // bike parking
    { id: 67, beaches_id: 5, features_id: 10 }, // changing rooms
    { id: 68, beaches_id: 5, features_id: 11 }, // showers
    { id: 69, beaches_id: 5, features_id: 12 }, // toilet
    { id: 70, beaches_id: 5, features_id: 14 }, // kayaking
    { id: 71, beaches_id: 5, features_id: 16 }, // surf lifesaving club
    { id: 72, beaches_id: 5, features_id: 17 }, // picnic tables
    { id: 73, beaches_id: 5, features_id: 19 }, // dogs allowed on lead
    { id: 74, beaches_id: 5, features_id: 20 }, // marine reserve
    { id: 75, beaches_id: 5, features_id: 23 }, // marine reserve
    { id: 76, beaches_id: 5, features_id: 24 }, // marine reserve
    { id: 77, beaches_id: 5, features_id: 25 }, // marine reserve
    { id: 78, beaches_id: 5, features_id: 26 }, // marine reserve
    { id: 79, beaches_id: 5, features_id: 27 }, // marine reserve
    { id: 80, beaches_id: 6, features_id: 1 }, // Swimming
    { id: 81, beaches_id: 6, features_id: 2 }, // alcohol allowed
    { id: 82, beaches_id: 6, features_id: 3 }, // accessible
    { id: 83, beaches_id: 6, features_id: 5 }, // nearby cafe
    { id: 84, beaches_id: 6, features_id: 6 }, // playground
    { id: 85, beaches_id: 6, features_id: 7 }, // sheltered from northerlies
    { id: 86, beaches_id: 6, features_id: 8 }, // car parking
    { id: 87, beaches_id: 6, features_id: 9 }, // bike parking
    { id: 88, beaches_id: 6, features_id: 10 }, // changing rooms
    { id: 89, beaches_id: 6, features_id: 11 }, // showers
    { id: 90, beaches_id: 6, features_id: 12 }, // toilet
    { id: 91, beaches_id: 6, features_id: 14 }, // kayaking
    { id: 92, beaches_id: 6, features_id: 17 }, // picnic tables
    { id: 93, beaches_id: 6, features_id: 19 }, // dogs allowed on lead
    { id: 94, beaches_id: 6, features_id: 21 }, // sheltered from southerlies
  ])
}
