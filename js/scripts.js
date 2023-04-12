// a dataset of Liverpool FC first-team squad's hometowns
const liverpoolData = [
    {
        "name": "Alisson Becker",
        "position": "Goalkeeper",
        "jersey no": 1,
        "latitude": -29.68102693,
        "longitude": -51.13682175,
        "birthday": "2-Oct-1992",
        "appearances": 165,
        "nation": "Brazil"
    },
    {
        "name": "Joe Gomez",
        "position": "Defender",
        "jersey no": 2,
        "latitude": 51.44454465,
        "longitude": -0.020515411,
        "birthday": "23-May-1997",
        "appearances": 107,
        "nation": "England"
    },
    {
        "name": "Fabinho",
        "position": "Midfielder",
        "jersey no": 3,
        "latitude": -22.90350493,
        "longitude": -47.0439524,
        "birthday": "23-Oct-1993",
        "appearances": 142,
        "nation": "Brazil"
    },
    {
        "name": "Virgil van Dijk",
        "position": "Defender",
        "jersey no": 4,
        "latitude": 51.57278003,
        "longitude": 4.770890829,
        "birthday": "8-Jul-1991",
        "appearances": 153,
        "nation": "Netherlands"
    },
    {
        "name": "Ibrahima Konaté",
        "position": "Defender",
        "jersey no": 5,
        "latitude": 48.85889805,
        "longitude": 2.355034972,
        "birthday": "25-May-1999",
        "appearances": 22,
        "nation": "France"
    },
    {
        "name": "Thiago Alcântara",
        "position": "Midfielder",
        "jersey no": 6,
        "latitude": 40.48807345,
        "longitude": 17.9963803,
        "birthday": "11-Apr-1991",
        "appearances": 64,
        "nation": "Spain"
    },
    {
        "name": "James Milner",
        "position": "Midfielder",
        "jersey no": 7,
        "latitude": 53.7981671,
        "longitude": -1.562102659,
        "birthday": "4-Jan-1986",
        "appearances": 221,
        "nation": "England"
    },
    {
        "name": "Naby Keïta",
        "position": "Midfielder",
        "jersey no": 8,
        "latitude": 9.64065632,
        "longitude": -13.56628484,
        "birthday": "10-Feb-1995",
        "appearances": 84,
        "nation": "Guinea"
    },
    {
        "name": "Roberto Firmino",
        "position": "Forward",
        "jersey no": 9,
        "latitude": -9.671838643,
        "longitude": -35.75440336,
        "birthday": "2-Oct-1991",
        "appearances": 253,
        "nation": "Brazil"
    },
    {
        "name": "Mohamed Salah",
        "position": "Forward",
        "jersey no": 11,
        "latitude": 30.97448447,
        "longitude": 30.86723455,
        "birthday": "15-Jun-1992",
        "appearances": 209,
        "nation": "Egypt"
    },
    {
        "name": "Adrián",
        "position": "Goalkeeper",
        "jersey no": 13,
        "latitude": 37.39026551,
        "longitude": -5.975793477,
        "birthday": "3-Jan-1987",
        "appearances": 14,
        "nation": "Spain"
    },
    {
        "name": "Jordan Henderson",
        "position": "Midfielder",
        "jersey no": 14,
        "latitude": 54.90720951,
        "longitude": -1.374496708,
        "birthday": "17-Jun-1990",
        "appearances": 351,
        "nation": "England"
    },
    {
        "name": "Alex Oxlade-Chamberlain",
        "position": "Midfielder",
        "jersey no": 15,
        "latitude": 50.82133086,
        "longitude": -1.080594033,
        "birthday": "15-Aug-1993",
        "appearances": 103,
        "nation": "England"
    },
    {
        "name": "Curtis Jones",
        "position": "Midfielder",
        "jersey no": 17,
        "latitude": 53.41,
        "longitude": -2.98,
        "birthday": "30-Jan-2001",
        "appearances": 54,
        "nation": "England"
    },
    {
        "name": "Cody Gakpo",
        "position": "Forward",
        "jersey no": 18,
        "latitude": 51.42333775,
        "longitude": 5.470049826,
        "birthday": "7-May-1999",
        "appearances": 12,
        "nation": "Netherlands"
    },
    {
        "name": "Harvey Elliott",
        "position": "Midfielder",
        "jersey no": 19,
        "latitude": 51.38721716,
        "longitude": -0.511461048,
        "birthday": "4-Apr-2003",
        "appearances": 35,
        "nation": "England"
    },
    {
        "name": "Diogo Jota",
        "position": "Forward",
        "jersey no": 20,
        "latitude": 41.15684409,
        "longitude": -8.631223368,
        "birthday": "4-Dec-1996",
        "appearances": 67,
        "nation": "Portugal"
    },
    {
        "name": "Kostas Tsimikas",
        "position": "Defender",
        "jersey no": 21,
        "latitude": 40.64184126,
        "longitude": 22.9422507,
        "birthday": "12-May-1996",
        "appearances": 31,
        "nation": "Greece"
    },
    {
        "name": "Calvin Ramsay",
        "position": "Defender",
        "jersey no": 22,
        "latitude": 57.15074266,
        "longitude": -2.100708778,
        "birthday": "31-Jul-2003",
        "appearances": 0,
        "nation": "Scotland"
    },
    {
        "name": "Luis Díaz",
        "position": "Forward",
        "jersey no": 23,
        "latitude": 10.95546701,
        "longitude": -72.79480208,
        "birthday": "13-Jan-1997",
        "appearances": 21,
        "nation": "Colombia"
    },
    {
        "name": "Andrew Robertson",
        "position": "Defender",
        "jersey no": 26,
        "latitude": 55.86451609,
        "longitude": -4.245504868,
        "birthday": "11-Mar-1994",
        "appearances": 187,
        "nation": "Scotland"
    },
    {
        "name": "Darwin Núñez",
        "position": "Forward",
        "jersey no": 27,
        "latitude": -30.40416772,
        "longitude": -56.46890117,
        "birthday": "14-Jun-1999",
        "appearances": 23,
        "nation": "Uruguay"
    },
    {
        "name": "Fábio Carvalho",
        "position": "Forward",
        "jersey no": 28,
        "latitude": 39.09165039,
        "longitude": -9.255813824,
        "birthday": "30-Aug-2002",
        "appearances": 12,
        "nation": "Portugal"
    },
    {
        "name": "Arthur Melo",
        "position": "Midfielder",
        "jersey no": 29,
        "latitude": -16.68756618,
        "longitude": -49.27097937,
        "birthday": "12-Aug-1996",
        "appearances": 0,
        "nation": "Brazil"
    },
    {
        "name": "Joël Matip",
        "position": "Defender",
        "jersey no": 32,
        "latitude": 51.48352339,
        "longitude": 7.215944609,
        "birthday": "8-Aug-1991",
        "appearances": 138,
        "nation": "Cameroon"
    },
    {
        "name": "Stefan Bajcetic",
        "position": "Midfielder",
        "jersey no": 43,
        "latitude": 42.24026088,
        "longitude": -8.721134367,
        "birthday": "22-Oct-2004",
        "appearances": 11,
        "nation": "Spain"
    },
    {
        "name": "Rhys Williams",
        "position": "Defender",
        "jersey no": 46,
        "latitude": 53.76312311,
        "longitude": -2.705606599,
        "birthday": "3-Feb-2001",
        "appearances": 9,
        "nation": "England"
    },
    {
        "name": "Nat Phillips",
        "position": "Defender",
        "jersey no": 47,
        "latitude": 53.57749751,
        "longitude": -2.430972754,
        "birthday": "21-Mar-1997",
        "appearances": 19,
        "nation": "England"
    },
    {
        "name": "Caoimhín Kelleher",
        "position": "Goalkeeper",
        "jersey no": 62,
        "latitude": 51.89860857,
        "longitude": -8.474047339,
        "birthday": "23-Nov-1998",
        "appearances": 4,
        "nation": "Ireland"
    },
    {
        "name": "Trent Alexander-Arnold",
        "position": "Defender",
        "jersey no": 66,
        "latitude": 53.4,
        "longitude": -2.98,
        "birthday": "7-Oct-1998",
        "appearances": 189,
        "nation": "England"
    }
]

mapboxgl.accessToken = 'pk.eyJ1IjoieW9vdXplZSIsImEiOiJjbGc1cWoweWkwNjAwM2Vwbzc1cGVyNmxsIn0.dgHHzAHSakJWLbVW4jFoHQ';

const LIV_COORDINATES = [-3.014109032, 53.40771462]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: LIV_COORDINATES, // starting position [lng, lat]
    zoom: 8 // starting zoom
});


// real markers, made with REAL data

liverpoolData.forEach(function (liverpoolRecord) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${liverpoolRecord['name']} (#${liverpoolRecord["jersey no"]}) was born here on ${ liverpoolRecord['birthday'] }. He plays as a ${ liverpoolRecord.position } for Liverpool and ${ liverpoolRecord.nation }, making ${ liverpoolRecord.appearances } league appearances thus far.`
    );

    // map center point
    new mapboxgl.Marker({
        color: "#2f6e36"
    })
        .setLngLat([liverpoolRecord.longitude, liverpoolRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})