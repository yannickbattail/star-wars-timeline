const characters = [
    {
        name: "Gial Ackbar",
        birth: -52,
        death: 34,
        keywords: []
    },
    {
        name: "Padmé Amidala Naberrie",
        birth: -46,
        death: -19,
        keywords: []
    },
    {
        name: "Cassian Jeron Andor",
        birth: -33,
        death: -1,
        keywords: []
    },
    {
        name: "Wedge Antilles",
        birth: -21,
        death: null,
        keywords: []
    },
    {
        name: "Chelli Lona Aphra",
        birth: -24,
        death: 4,
        keywords: []
    },
    {
        name: "Cad Bane",
        birth: -62,
        death: 9,
        keywords: []
    },
    {
        name: "Jar Jar Binks",
        birth: -52,
        death: null,
        keywords: []
    },
    {
        name: "Ezra Bridger",
        birth: -19,
        death: null,
        keywords: []
    },
    {
        name: "Landonis Balthazar Calrissian",
        birth: -43,
        death: null,
        keywords: []
    },
    {
        name: "Chewbacca",
        birth: -200,
        death: null,
        keywords: []
    },
    {
        name: "Poe Dameron",
        birth: 2,
        death: null,
        keywords: []
    },
    {
        name: "Din Djarin",
        birth: -19, // Prior to 19 BBY
        death: null,
        keywords: []
    },
    {
        name: "Count Dooku Darth Tyranus",
        birth: -102,
        death: -19,
        keywords: []
    },
    {
        name: "Kanan Jarrus",
        birth: -33,
        death: -1,
        keywords: []
    },
    {
        name: "Cara Dune",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Jyn Erso",
        birth: -21,
        death: -1,
        keywords: []
    },
    {
        name: "Boba Fett",
        birth: -32,
        death: null,
        keywords: []
    },
    {
        name: "Jango Fett",
        birth: -66,
        death: -22,
        keywords: []
    },
    {
        name: "Finn FN-2187",
        birth: 11,
        death: null,
        keywords: []
    },
    {
        name: "Bib Fortuna",
        birth: null,
        death: 9,
        keywords: []
    },
    {
        name: "Saw Gerrera",
        birth: null,
        death: -1,
        keywords: []
    },
    {
        name: "Moff Gideon",
        birth: -51,
        death: 9,
        keywords: []
    },
    {
        name: "The Grand Inquisitor",
        birth: -47, // prior to -47
        death: 4,
        keywords: []
    },
    {
        name: "Greedo",
        birth: -44,
        death: 0,
        keywords: []
    },
    {
        name: "General Grievous",
        birth: null,
        death: -19,
        keywords: []
    },
    {
        name: "Din Grogu",
        birth: -41,
        death: null,
        keywords: []
    },
    {
        name: "Amilyn Holdo",
        birth: null,
        death: 34,
        keywords: []
    },
    {
        name: "General Hux",
        birth: -1,
        death: 35,
        keywords: []
    },
    {
        name: "Jabba Desilijic Tiure the Hutt",
        birth: -600,
        death: 4,
        keywords: []
    },
    {
        name: "Qui-Gon Jinn",
        birth: -80,
        death: -32,
        keywords: []
    },
    {
        name: "Maz Kanata",
        birth: -973,
        death: null,
        keywords: []
    },
    {
        name: "Greef Karga",
        birth: -62,
        death: null,
        keywords: []
    },
    {
        name: "Obi-Wan Kenobi",
        birth: -57,
        death: 0,
        keywords: []
    },
    {
        name: "Cal Kestis",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Orson Callan Krennic",
        birth: -51,
        death: -1,
        keywords: []
    },
    {
        name: "Bo-Katan Kryze",
        birth: -45, // extimation
        death: null,
        keywords: []
    },
    {
        name: "Satine Kryze",
        birth: null,
        death: -19,
        keywords: []
    },
    {
        name: "Darth Maul",
        birth: -54,
        death: -2,
        keywords: []
    },
    {
        name: "Mon Mothma",
        birth: -48,
        death: null,
        keywords: []
    },
    {
        name: "Nien Nunb",
        birth: null,
        death: 35,
        keywords: []
    },
    {
        name: "Barriss Offee",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Savage Opress",
        birth: null,
        death: -19,
        keywords: []
    },
    {
        name: "Bail Prestor Organa",
        birth: null,
        death: 0,
        keywords: []
    },
    {
        name: "Leia Skywalker Organa Solo",
        birth: -19,
        death: 35,
        keywords: []
    },
    {
        name: "Garazeb Zeb Orrelios",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Sheev Palpatine Darth Sidious",
        birth: -84,
        death: 4,
        keywords: []
    },
    {
        name: "Captain Phasma",
        birth: -6,
        death: 34,
        keywords: []
    },
    {
        name: "Qi'ra",
        birth: -31,
        death: null,
        keywords: []
    },
    {
        name: "Captain Rex",
        birth: -32,
        death: null,
        keywords: []
    },
    {
        name: "Rey Skywalker",
        birth: 15,
        death: null,
        keywords: []
    },
    {
        name: "Fennec Shand",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Baylan Skoll",
        birth: null,
        death: null,
        keywords: []
    },
    {
        name: "Anakin Skywalker Darth Vader",
        birth: -41,
        death: 4,
        keywords: []
    },
    {
        name: "Luke Skywalker",
        birth: -19,
        death: 34,
        keywords: []
    },
    {
        name: "Shmi Skywalker Lars",
        birth: -66,
        death: -22,
        keywords: []
    },
    {
        name: "Supreme Leader Snoke",
        birth: -12,
        death: -34,
        keywords: []
    },
    {
        name: "Kylo Ren Ben Solo",
        birth: 5,
        death: 35,
        keywords: []
    },
    {
        name: "Han Solo",
        birth: -32,
        death: 34,
        keywords: []
    },
    {
        name: "Hera Syndulla",
        birth: -29,
        death: null,
        keywords: []
    },
    {
        name: "Mother Talzin",
        birth: -19,
        death: null,
        keywords: []
    },
    {
        name: "Ahsoka Tano",
        birth: -36,
        death: null,
        keywords: []
    },
    {
        name: "Grand Moff Wilhuff Tarkin",
        birth: -64,
        death: 0,
        keywords: []
    },
    {
        name: "Grand Admiral Thrawn Mitth'raw'nuruodo",
        birth: -59,
        death: null,
        keywords: []
    },
    {
        name: "Luminara Unduli",
        birth: null,
        death: -19,
        keywords: []
    },
    {
        name: "Asajj Ventress",
        birth: -50,
        death: null,
        keywords: []
    },
    {
        name: "Iden Versio",
        birth: null,
        death: 34,
        keywords: []
    },
    {
        name: "Paz Vizsla",
        birth: null,
        death: 9,
        keywords: []
    },
    {
        name: " Mace Windu",
        birth: -72,
        death: -19,
        keywords: []
    },
    {
        name: "Sabine Wren",
        birth: -21,
        death: null,
        keywords: []
    },
    {
        name: "Yaddle",
        birth: -509,
        death: -32,
        keywords: []
    },
    {
        name: "Yoda",
        birth: -896,
        death: 4,
        keywords: []
    },
];
