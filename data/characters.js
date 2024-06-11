const charactersData = [
    {
        name: "Gial Ackbar",
        birth: -52,
        aliveBefore: null,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "Padmé Amidala Naberrie",
        birth: -46,
        aliveBefore: null,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Cassian Jeron Andor",
        birth: -33,
        aliveBefore: null,
        aliveAfter: null,
        death: -1,
        keywords: []
    },
    {
        name: "Wedge Antilles",
        birth: -21,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Chelli Lona Aphra",
        birth: -24,
        aliveBefore: null,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
    {
        name: "Cad Bane",
        birth: -62,
        aliveBefore: null,
        aliveAfter: null,
        death: 9,
        keywords: []
    },
    {
        name: "Jar Jar Binks",
        birth: -52, // legend
        aliveBefore: null,
        aliveAfter: 5,
        death: null,
        keywords: []
    },
    {
        name: "Ezra Bridger",
        birth: -19,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Landonis Balthazar Calrissian",
        birth: -43,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Chewbacca",
        birth: -200,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Poe Dameron",
        birth: 2,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Din Djarin",
        birth: null,
        aliveBefore: 19,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Count Dooku Darth Tyranus",
        birth: -102,
        aliveBefore: null,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Kanan Jarrus Caleb Dume",
        birth: -33,
        aliveBefore: null,
        aliveAfter: null,
        death: -1,
        keywords: []
    },
    {
        name: "Cara Dune",
        birth: null,
        aliveBefore: 0,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Jyn Erso",
        birth: -21,
        aliveBefore: null,
        aliveAfter: null,
        death: -1,
        keywords: []
    },
    {
        name: "Boba Fett",
        birth: -32,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Jango Fett",
        birth: -66,
        aliveBefore: null,
        aliveAfter: null,
        death: -22,
        keywords: []
    },
    {
        name: "Finn FN-2187",
        birth: 11,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Bib Fortuna",
        birth: null,
        aliveBefore: 3,
        aliveAfter: null,
        death: 9,
        keywords: []
    },
    {
        name: "Saw Gerrera",
        birth: null,
        aliveBefore: -22,
        aliveAfter: null,
        death: -1,
        keywords: []
    },
    {
        name: "Moff Gideon",
        birth: -51,
        aliveBefore: null,
        aliveAfter: null,
        death: 9,
        keywords: []
    },
    {
        name: "The Grand Inquisitor",
        birth: null,
        aliveBefore: -47,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
    {
        name: "Greedo",
        birth: -44,
        aliveBefore: null,
        aliveAfter: null,
        death: 0,
        keywords: []
    },
    {
        name: "General Grievous",
        birth: null,
        aliveBefore: -22,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Din Grogu",
        birth: -41,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Amilyn Holdo",
        birth: null,
        aliveBefore: -3,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "General Hux",
        birth: -1,
        aliveBefore: null,
        aliveAfter: null,
        death: 35,
        keywords: []
    },
    {
        name: "Jabba Desilijic Tiure the Hutt",
        birth: -600,
        aliveBefore: null,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
    {
        name: "Qui-Gon Jinn",
        birth: -80,
        aliveBefore: null,
        aliveAfter: null,
        death: -32,
        keywords: []
    },
    {
        name: "Maz Kanata",
        birth: -973,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Greef Karga",
        birth: -62,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Obi-Wan Kenobi",
        birth: -57,
        aliveBefore: null,
        aliveAfter: null,
        death: 0,
        keywords: []
    },
    {
        name: "Cal Kestis",
        birth: null,
        aliveBefore: 19,
        aliveAfter: 0,
        death: null,
        keywords: []
    },
    {
        name: "Orson Callan Krennic",
        birth: -51,
        aliveBefore: null,
        aliveAfter: null,
        death: -1,
        keywords: []
    },
    {
        name: "Bo-Katan Kryze",
        birth: -45,
        aliveBefore: -45,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Satine Kryze",
        birth: null,
        aliveBefore: -32, // estimation
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Darth Maul",
        birth: -54,
        aliveBefore: null,
        aliveAfter: null,
        death: -2,
        keywords: []
    },
    {
        name: "Mon Mothma",
        birth: -48,
        aliveBefore: null,
        aliveAfter: 29,
        death: null,
        keywords: []
    },
    {
        name: "Nien Nunb",
        birth: null,
        aliveBefore: 0,
        aliveAfter: null,
        death: 35,
        keywords: []
    },
    {
        name: "Barriss Offee",
        birth: null,
        aliveBefore: -19,
        aliveAfter: -10, // estimation
        death: null,
        keywords: []
    },
    {
        name: "Savage Opress",
        birth: null,
        aliveBefore: -54, // birth of darth maul ?
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Bail Prestor Organa",
        birth: null,
        aliveBefore: -32,
        aliveAfter: null,
        death: 0,
        keywords: []
    },
    {
        name: "Leia Skywalker Organa Solo",
        birth: -19,
        aliveBefore: null,
        aliveAfter: null,
        death: 35,
        keywords: []
    },
    {
        name: "Garazeb Zeb Orrelios",
        birth: null,
        aliveBefore: -5,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Sheev Palpatine Darth Sidious",
        birth: -84,
        aliveBefore: null,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
    {
        name: "Captain Phasma",
        birth: -6,
        aliveBefore: null,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "Qi'ra",
        birth: -31,
        aliveBefore: null,
        aliveAfter: 5,
        death: null,
        keywords: []
    },
    {
        name: "Captain Rex",
        birth: -32,
        aliveBefore: null,
        aliveAfter: 4,
        death: null,
        keywords: []
    },
    {
        name: "Rey Skywalker",
        birth: 15,
        aliveBefore: null,
        aliveAfter: 35,
        death: null,
        keywords: []
    },
    {
        name: "Fennec Shand",
        birth: null,
        aliveBefore: -19,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Baylan Skoll",
        birth: null,
        aliveBefore: -19,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Anakin Skywalker Darth Vader",
        birth: -41,
        aliveBefore: null,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
    {
        name: "Luke Skywalker",
        birth: -19,
        aliveBefore: null,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "Shmi Skywalker Lars",
        birth: -66,
        aliveBefore: null,
        aliveAfter: null,
        death: -22,
        keywords: []
    },
    {
        name: "Supreme Leader Snoke",
        birth: -12,
        aliveBefore: null,
        aliveAfter: null,
        death: -34,
        keywords: []
    },
    {
        name: "Kylo Ren Ben Solo",
        birth: 5,
        aliveBefore: null,
        aliveAfter: null,
        death: 35,
        keywords: []
    },
    {
        name: "Han Solo",
        birth: -32,
        aliveBefore: null,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "Hera Syndulla",
        birth: -29,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Mother Talzin",
        birth: null,
        aliveBefore: -54,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Ahsoka Tano",
        birth: -36,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Grand Moff Wilhuff Tarkin",
        birth: -64,
        aliveBefore: null,
        aliveAfter: null,
        death: 0,
        keywords: []
    },
    {
        name: "Grand Admiral Thrawn Mitth'raw'nuruodo",
        birth: -59,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Luminara Unduli",
        birth: null,
        aliveBefore: -32,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Asajj Ventress",
        birth: -50,
        aliveBefore: null,
        aliveAfter: -18,
        death: null,
        keywords: []
    },
    {
        name: "Iden Versio",
        birth: null,
        aliveBefore: -1,
        aliveAfter: null,
        death: 34,
        keywords: []
    },
    {
        name: "Paz Vizsla",
        birth: null,
        aliveBefore: -3,
        aliveAfter: null,
        death: 9,
        keywords: []
    },
    {
        name: " Mace Windu",
        birth: -72,
        aliveBefore: null,
        aliveAfter: null,
        death: -19,
        keywords: []
    },
    {
        name: "Sabine Wren",
        birth: -21,
        aliveBefore: null,
        aliveAfter: 9,
        death: null,
        keywords: []
    },
    {
        name: "Yaddle",
        birth: -509,
        aliveBefore: null,
        aliveAfter: null,
        death: -32,
        keywords: []
    },
    {
        name: "Yoda",
        birth: -896,
        aliveBefore: null,
        aliveAfter: null,
        death: 4,
        keywords: []
    },
];
