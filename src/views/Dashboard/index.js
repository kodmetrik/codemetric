import React from 'react'
import { useState,useEffect} from 'react'
import dayjs from 'dayjs'
import { Table, Button, Input, Icon, Row, Select  } from 'antd';
import Highlighter from 'react-highlight-words';
import Layout from '../../components/Layout'
import { withFirebase} from '../../Firebase/context'
const { Option } = Select;
// const dataSource = [
//   {
//     "key": 1,
//     "name": "Driscoll",
//     "surname": "Holland",
//     "email": "consectetuer@estMauris.net",
//     "date": "1601928576",
//     "status": "pasive"
//   },
//   {
//     "key": 2,
//     "name": "Merritt",
//     "surname": "Whitley",
//     "email": "urna.nec@necmalesuadaut.org",
//     "date": "1605932352",
//     "status": "pasive"
//   },
//   {
//     "key": 3,
//     "name": "Oliver",
//     "surname": "Copeland",
//     "email": "mauris.ut.mi@suscipit.org",
//     "date": "1561409519",
//     "status": "pasive"
//   },
//   {
//     "key": 4,
//     "name": "Baxter",
//     "surname": "Walls",
//     "email": "Proin.nisl.sem@erat.co.uk",
//     "date": "1554784983",
//     "status": "active"
//   },
//   {
//     "key": 5,
//     "name": "Leonard",
//     "surname": "Lynch",
//     "email": "a.neque@keyanteNunc.ca",
//     "date": "1559552952",
//     "status": "contacted"
//   },
//   {
//     "key": 6,
//     "name": "Octavius",
//     "surname": "Christensen",
//     "email": "lorem@blanditenimconsequat.org",
//     "date": "1595003796",
//     "status": "pasive"
//   },
//   {
//     "key": 7,
//     "name": "Reuben",
//     "surname": "Gray",
//     "email": "pharetra@Donectempor.com",
//     "date": "1573219318",
//     "status": "contacted"
//   },
//   {
//     "key": 8,
//     "name": "Connor",
//     "surname": "Burns",
//     "email": "penatibus.et@blandit.co.uk",
//     "date": "1598941082",
//     "status": "active"
//   },
//   {
//     "key": 9,
//     "name": "Zahir",
//     "surname": "Gross",
//     "email": "lorem.sit@Nuncsollicitudincommodo.ca",
//     "date": "1605705276",
//     "status": "active"
//   },
//   {
//     "key": 10,
//     "name": "Michael",
//     "surname": "Mcdonald",
//     "email": "mauris@Suspendisse.ca",
//     "date": "1575853862",
//     "status": "active"
//   },
//   {
//     "key": 11,
//     "name": "Tarik",
//     "surname": "Puckett",
//     "email": "vitae@sitametmetus.co.uk",
//     "date": "1597978121",
//     "status": "contacted"
//   },
//   {
//     "key": 12,
//     "name": "Mason",
//     "surname": "Page",
//     "email": "libero@pedeNuncsed.edu",
//     "date": "1581924625",
//     "status": "contacted"
//   },
//   {
//     "key": 13,
//     "name": "Carlos",
//     "surname": "Sears",
//     "email": "neque@nibhenim.ca",
//     "date": "1576285471",
//     "status": "pasive"
//   },
//   {
//     "key": 14,
//     "name": "Peter",
//     "surname": "Fitzpatrick",
//     "email": "lorem@Phaselluslibero.co.uk",
//     "date": "1575196378",
//     "status": "contacted"
//   },
//   {
//     "key": 15,
//     "name": "Gavin",
//     "surname": "Whitfield",
//     "email": "lacus.pede.sagittis@quis.co.uk",
//     "date": "1596808024",
//     "status": "pasive"
//   },
//   {
//     "key": 16,
//     "name": "Bert",
//     "surname": "Brkeyges",
//     "email": "lectus@miac.edu",
//     "date": "1590354670",
//     "status": "contacted"
//   },
//   {
//     "key": 17,
//     "name": "Logan",
//     "surname": "Finley",
//     "email": "mi@euelit.co.uk",
//     "date": "1571647366",
//     "status": "contacted"
//   },
//   {
//     "key": 18,
//     "name": "Kareem",
//     "surname": "Adkins",
//     "email": "ut.odio@Integer.com",
//     "date": "1571259176",
//     "status": "contacted"
//   },
//   {
//     "key": 19,
//     "name": "Linus",
//     "surname": "Spence",
//     "email": "dapibus.gravkeya@velitCraslorem.com",
//     "date": "1551453079",
//     "status": "active"
//   },
//   {
//     "key": 20,
//     "name": "Wesley",
//     "surname": "Hubbard",
//     "email": "ipsum@cursus.edu",
//     "date": "1560136352",
//     "status": "contacted"
//   },
//   {
//     "key": 21,
//     "name": "Ira",
//     "surname": "Booth",
//     "email": "Cum.sociis.natoque@semper.net",
//     "date": "1608553975",
//     "status": "pasive"
//   },
//   {
//     "key": 22,
//     "name": "Davis",
//     "surname": "Gould",
//     "email": "elit.fermentum@tinckeyuntnunc.com",
//     "date": "1587221549",
//     "status": "active"
//   },
//   {
//     "key": 23,
//     "name": "Chadwick",
//     "surname": "Blake",
//     "email": "odio.Phasellus@vehiculaet.ca",
//     "date": "1593452142",
//     "status": "active"
//   },
//   {
//     "key": 24,
//     "name": "Arden",
//     "surname": "Figueroa",
//     "email": "lobortis.quam.a@egestasligulaNullam.org",
//     "date": "1580075668",
//     "status": "pasive"
//   },
//   {
//     "key": 25,
//     "name": "Vance",
//     "surname": "Wall",
//     "email": "mi@accumsanlaoreet.com",
//     "date": "1548344586",
//     "status": "active"
//   },
//   {
//     "key": 26,
//     "name": "Gage",
//     "surname": "Moon",
//     "email": "tempus.mauris@keyante.net",
//     "date": "1576010644",
//     "status": "active"
//   },
//   {
//     "key": 27,
//     "name": "Hall",
//     "surname": "Powers",
//     "email": "Class@ipsum.com",
//     "date": "1551529286",
//     "status": "active"
//   },
//   {
//     "key": 28,
//     "name": "Boris",
//     "surname": "Munoz",
//     "email": "Vivamus@liberoet.net",
//     "date": "1576056514",
//     "status": "contacted"
//   },
//   {
//     "key": 29,
//     "name": "Baxter",
//     "surname": "Nicholson",
//     "email": "vitae@bibendumsedest.ca",
//     "date": "1585766349",
//     "status": "pasive"
//   },
//   {
//     "key": 30,
//     "name": "Linus",
//     "surname": "Wade",
//     "email": "Phasellus.libero.mauris@acmattissemper.co.uk",
//     "date": "1551098856",
//     "status": "contacted"
//   },
//   {
//     "key": 31,
//     "name": "Hedley",
//     "surname": "Young",
//     "email": "cubilia@lectuspede.net",
//     "date": "1550069101",
//     "status": "pasive"
//   },
//   {
//     "key": 32,
//     "name": "Joseph",
//     "surname": "Haley",
//     "email": "Aenean.euismod.mauris@Maurisquisturpis.com",
//     "date": "1572359156",
//     "status": "pasive"
//   },
//   {
//     "key": 33,
//     "name": "Ferris",
//     "surname": "Schroeder",
//     "email": "fringilla.purus.mauris@neque.co.uk",
//     "date": "1561199145",
//     "status": "pasive"
//   },
//   {
//     "key": 34,
//     "name": "Ezra",
//     "surname": "Deleon",
//     "email": "varius.Nam.porttitor@tortorIntegeraliquam.co.uk",
//     "date": "1591188826",
//     "status": "pasive"
//   },
//   {
//     "key": 35,
//     "name": "Isaiah",
//     "surname": "Leon",
//     "email": "nunc@arcu.edu",
//     "date": "1548306058",
//     "status": "active"
//   },
//   {
//     "key": 36,
//     "name": "Harding",
//     "surname": "Slater",
//     "email": "Nunc.mauris.elit@elitNullafacilisi.edu",
//     "date": "1565862647",
//     "status": "pasive"
//   },
//   {
//     "key": 37,
//     "name": "Colin",
//     "surname": "Oneil",
//     "email": "tellus.eu@arcu.net",
//     "date": "1561309883",
//     "status": "active"
//   },
//   {
//     "key": 38,
//     "name": "Christian",
//     "surname": "Walton",
//     "email": "egestas@tinckeyuntpede.co.uk",
//     "date": "1575926026",
//     "status": "pasive"
//   },
//   {
//     "key": 39,
//     "name": "Fuller",
//     "surname": "Richards",
//     "email": "sollicitudin.a.malesuada@sollicitudin.org",
//     "date": "1606501873",
//     "status": "active"
//   },
//   {
//     "key": 40,
//     "name": "George",
//     "surname": "Travis",
//     "email": "cursus.a@eleifendnondapibus.net",
//     "date": "1578767976",
//     "status": "pasive"
//   },
//   {
//     "key": 41,
//     "name": "Hamilton",
//     "surname": "Wise",
//     "email": "nec@Duisrisusodio.edu",
//     "date": "1588626935",
//     "status": "active"
//   },
//   {
//     "key": 42,
//     "name": "Amal",
//     "surname": "Long",
//     "email": "Donec@Vivamussit.net",
//     "date": "1585302331",
//     "status": "pasive"
//   },
//   {
//     "key": 43,
//     "name": "Acton",
//     "surname": "Sloan",
//     "email": "egestas@euplacerat.com",
//     "date": "1582768137",
//     "status": "pasive"
//   },
//   {
//     "key": 44,
//     "name": "Sean",
//     "surname": "Meyer",
//     "email": "Ut.sagittis.lobortis@commodohendreritDonec.com",
//     "date": "1553135176",
//     "status": "pasive"
//   },
//   {
//     "key": 45,
//     "name": "Cody",
//     "surname": "Acosta",
//     "email": "Cras@mus.edu",
//     "date": "1590274770",
//     "status": "contacted"
//   },
//   {
//     "key": 46,
//     "name": "Dieter",
//     "surname": "Mathews",
//     "email": "ultricies.sem.magna@ametconsectetuer.org",
//     "date": "1582947638",
//     "status": "pasive"
//   },
//   {
//     "key": 47,
//     "name": "Tad",
//     "surname": "Lyons",
//     "email": "vitae.risus@Nuncsedorci.com",
//     "date": "1590413062",
//     "status": "contacted"
//   },
//   {
//     "key": 48,
//     "name": "Bert",
//     "surname": "Gibbs",
//     "email": "Nunc@rkeyiculusmus.co.uk",
//     "date": "1596245467",
//     "status": "contacted"
//   },
//   {
//     "key": 49,
//     "name": "Rigel",
//     "surname": "Castaneda",
//     "email": "Pellentesque.habitant.morbi@Crasconvallis.org",
//     "date": "1594124956",
//     "status": "contacted"
//   },
//   {
//     "key": 50,
//     "name": "Vladimir",
//     "surname": "Mcgowan",
//     "email": "non.quam.Pellentesque@egestas.edu",
//     "date": "1559769076",
//     "status": "contacted"
//   },
//   {
//     "key": 51,
//     "name": "Grant",
//     "surname": "Mays",
//     "email": "magna@Fuscediam.co.uk",
//     "date": "1573719246",
//     "status": "contacted"
//   },
//   {
//     "key": 52,
//     "name": "Noah",
//     "surname": "Avila",
//     "email": "imperdiet.erat.nonummy@lacuspede.edu",
//     "date": "1572424774",
//     "status": "contacted"
//   },
//   {
//     "key": 53,
//     "name": "Warren",
//     "surname": "Kline",
//     "email": "suscipit@mauris.edu",
//     "date": "1571729783",
//     "status": "active"
//   },
//   {
//     "key": 54,
//     "name": "John",
//     "surname": "Ellison",
//     "email": "ante.dictum@Nuncullamcorpervelit.co.uk",
//     "date": "1547728543",
//     "status": "pasive"
//   },
//   {
//     "key": 55,
//     "name": "Kareem",
//     "surname": "Tucker",
//     "email": "dictum.eu@keyenim.co.uk",
//     "date": "1609120046",
//     "status": "active"
//   },
//   {
//     "key": 56,
//     "name": "Bradley",
//     "surname": "Ortiz",
//     "email": "ornare@ultrices.org",
//     "date": "1582226564",
//     "status": "active"
//   },
//   {
//     "key": 57,
//     "name": "Reuben",
//     "surname": "Rocha",
//     "email": "turpis@orciluctus.ca",
//     "date": "1601636545",
//     "status": "contacted"
//   },
//   {
//     "key": 58,
//     "name": "Lester",
//     "surname": "Velez",
//     "email": "eleifend.Cras.sed@lacusMauris.com",
//     "date": "1595285691",
//     "status": "contacted"
//   },
//   {
//     "key": 59,
//     "name": "Rashad",
//     "surname": "Molina",
//     "email": "Maecenas@nequetellusimperdiet.edu",
//     "date": "1577579145",
//     "status": "active"
//   },
//   {
//     "key": 60,
//     "name": "Christian",
//     "surname": "Nielsen",
//     "email": "egestas@Proin.org",
//     "date": "1577447507",
//     "status": "pasive"
//   },
//   {
//     "key": 61,
//     "name": "Fritz",
//     "surname": "Guerrero",
//     "email": "Suspendisse.dui.Fusce@duiquis.org",
//     "date": "1585130277",
//     "status": "pasive"
//   },
//   {
//     "key": 62,
//     "name": "Dale",
//     "surname": "Shaw",
//     "email": "nec.ante@lacusMaurisnon.edu",
//     "date": "1559927971",
//     "status": "active"
//   },
//   {
//     "key": 63,
//     "name": "Brennan",
//     "surname": "Grimes",
//     "email": "magnis.dis@velitduisemper.edu",
//     "date": "1552692870",
//     "status": "pasive"
//   },
//   {
//     "key": 64,
//     "name": "Theodore",
//     "surname": "Stevenson",
//     "email": "sit.amet.metus@Suspendissesagittis.com",
//     "date": "1591105077",
//     "status": "active"
//   },
//   {
//     "key": 65,
//     "name": "Zane",
//     "surname": "Love",
//     "email": "euismod.et.commodo@rhoncusNullamvelit.com",
//     "date": "1549517629",
//     "status": "pasive"
//   },
//   {
//     "key": 66,
//     "name": "Blake",
//     "surname": "Garza",
//     "email": "amet.ultricies.sem@Quisqueporttitor.edu",
//     "date": "1578804922",
//     "status": "active"
//   },
//   {
//     "key": 67,
//     "name": "Emmanuel",
//     "surname": "Kinney",
//     "email": "vestibulum.massa.rutrum@Cumsociisnatoque.edu",
//     "date": "1605550997",
//     "status": "pasive"
//   },
//   {
//     "key": 68,
//     "name": "Upton",
//     "surname": "Hardin",
//     "email": "mauris.Integer.sem@ligulaelitpretium.org",
//     "date": "1596796919",
//     "status": "active"
//   },
//   {
//     "key": 69,
//     "name": "Edan",
//     "surname": "Erickson",
//     "email": "Aliquam.tinckeyunt.nunc@ipsumleoelementum.org",
//     "date": "1567595719",
//     "status": "pasive"
//   },
//   {
//     "key": 70,
//     "name": "Harper",
//     "surname": "Spencer",
//     "email": "tristique.pharetra.Quisque@turpis.ca",
//     "date": "1547320271",
//     "status": "pasive"
//   },
//   {
//     "key": 71,
//     "name": "Colby",
//     "surname": "Robles",
//     "email": "libero@lacus.ca",
//     "date": "1561182583",
//     "status": "pasive"
//   },
//   {
//     "key": 72,
//     "name": "Nigel",
//     "surname": "Fitzgerald",
//     "email": "luctus.lobortis@nectempus.org",
//     "date": "1550749419",
//     "status": "active"
//   },
//   {
//     "key": 73,
//     "name": "Brock",
//     "surname": "Bradshaw",
//     "email": "sagittis.augue.eu@metus.com",
//     "date": "1557592949",
//     "status": "active"
//   },
//   {
//     "key": 74,
//     "name": "Jared",
//     "surname": "Hicks",
//     "email": "tellus@et.co.uk",
//     "date": "1606955445",
//     "status": "pasive"
//   },
//   {
//     "key": 75,
//     "name": "Jacob",
//     "surname": "Velasquez",
//     "email": "tellus@amet.org",
//     "date": "1595579538",
//     "status": "active"
//   },
//   {
//     "key": 76,
//     "name": "Hector",
//     "surname": "Bauer",
//     "email": "Pellentesque@magnaetipsum.org",
//     "date": "1596363487",
//     "status": "active"
//   },
//   {
//     "key": 77,
//     "name": "Stone",
//     "surname": "Rekey",
//     "email": "erat@massaSuspendisse.edu",
//     "date": "1570077790",
//     "status": "contacted"
//   },
//   {
//     "key": 78,
//     "name": "Zeph",
//     "surname": "Reed",
//     "email": "ac.arcu@lorem.ca",
//     "date": "1558847325",
//     "status": "pasive"
//   },
//   {
//     "key": 79,
//     "name": "Buckminster",
//     "surname": "Shaw",
//     "email": "felis@inlobortistellus.net",
//     "date": "1552080176",
//     "status": "pasive"
//   },
//   {
//     "key": 80,
//     "name": "Byron",
//     "surname": "Deleon",
//     "email": "magna.nec.quam@nisia.edu",
//     "date": "1589510648",
//     "status": "active"
//   },
//   {
//     "key": 81,
//     "name": "Knox",
//     "surname": "Owen",
//     "email": "Morbi.non@Maecenas.org",
//     "date": "1580462041",
//     "status": "active"
//   },
//   {
//     "key": 82,
//     "name": "Preston",
//     "surname": "Neal",
//     "email": "fermentum@nonummyac.org",
//     "date": "1596251448",
//     "status": "active"
//   },
//   {
//     "key": 83,
//     "name": "Conan",
//     "surname": "Salas",
//     "email": "facilisis.facilisis.magna@enimMaurisquis.ca",
//     "date": "1578065713",
//     "status": "active"
//   },
//   {
//     "key": 84,
//     "name": "Kenyon",
//     "surname": "Giles",
//     "email": "Donec@risusNulla.net",
//     "date": "1565689499",
//     "status": "pasive"
//   },
//   {
//     "key": 85,
//     "name": "Jasper",
//     "surname": "Bush",
//     "email": "ante.lectus@in.co.uk",
//     "date": "1580467839",
//     "status": "pasive"
//   },
//   {
//     "key": 86,
//     "name": "Cyrus",
//     "surname": "Duran",
//     "email": "Fusce.aliquam@lorem.net",
//     "date": "1580433106",
//     "status": "contacted"
//   },
//   {
//     "key": 87,
//     "name": "Adrian",
//     "surname": "Evans",
//     "email": "dui@vel.edu",
//     "date": "1554341599",
//     "status": "active"
//   },
//   {
//     "key": 88,
//     "name": "Hayden",
//     "surname": "Torres",
//     "email": "sociis.natoque@Donecnibh.net",
//     "date": "1607114149",
//     "status": "pasive"
//   },
//   {
//     "key": 89,
//     "name": "Basil",
//     "surname": "Vaughn",
//     "email": "nisi.a@euismodet.edu",
//     "date": "1572720623",
//     "status": "contacted"
//   },
//   {
//     "key": 90,
//     "name": "Benjamin",
//     "surname": "Reeves",
//     "email": "dictum.magna.Ut@ultriciesadipiscing.net",
//     "date": "1556868265",
//     "status": "pasive"
//   },
//   {
//     "key": 91,
//     "name": "Gareth",
//     "surname": "Sargent",
//     "email": "Praesent.interdum@nunc.edu",
//     "date": "1588108129",
//     "status": "pasive"
//   },
//   {
//     "key": 92,
//     "name": "Clark",
//     "surname": "Oliver",
//     "email": "est@Duismi.net",
//     "date": "1560797603",
//     "status": "pasive"
//   },
//   {
//     "key": 93,
//     "name": "Merritt",
//     "surname": "Mejia",
//     "email": "est@nisisemsemper.com",
//     "date": "1581391650",
//     "status": "pasive"
//   },
//   {
//     "key": 94,
//     "name": "Cade",
//     "surname": "Branch",
//     "email": "dictum.magna@Sedpharetrafelis.com",
//     "date": "1563040156",
//     "status": "pasive"
//   },
//   {
//     "key": 95,
//     "name": "Leo",
//     "surname": "Woodard",
//     "email": "nunc.ullamcorper.eu@liberoat.edu",
//     "date": "1575549725",
//     "status": "active"
//   },
//   {
//     "key": 96,
//     "name": "Griffin",
//     "surname": "Carter",
//     "email": "Cras.convallis@elitpharetra.com",
//     "date": "1564664057",
//     "status": "pasive"
//   },
//   {
//     "key": 97,
//     "name": "Anthony",
//     "surname": "Pearson",
//     "email": "Cras@felisDonectempor.ca",
//     "date": "1605413976",
//     "status": "contacted"
//   },
//   {
//     "key": 98,
//     "name": "Amos",
//     "surname": "Stevens",
//     "email": "lorem@malesuadamalesuadaInteger.net",
//     "date": "1593623711",
//     "status": "contacted"
//   },
//   {
//     "key": 99,
//     "name": "Fitzgerald",
//     "surname": "Osborne",
//     "email": "ultricies.adipiscing.enim@ornare.org",
//     "date": "1557120802",
//     "status": "active"
//   },
//   {
//     "key": 100,
//     "name": "Dillon",
//     "surname": "Spence",
//     "email": "augue.porttitor.interdum@vitae.edu",
//     "date": "1592044216",
//     "status": "active"
//   }
// ]


function Dashboard(props) {
  const [selected,setSelected] = useState({})
  const [sortedInfo, setSortedInfo] = useState({})
  const [filteredInfo,setFilteredInfo] = useState({})
  const [filter,setFilter] = useState({})
  const [dataSource,setDataSource] = useState([])
  const [loading,setLoading] = useState(false)
  const [filteredDataSource,setFilteredDataSource] = useState(dataSource)
  useEffect(()=>{
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [searchInfo, setSearchInfo] = useState({
    searchText: '',
    searchedColumn: '',
  })
  async function getUsers() {
    setLoading(true)
    const customers = await props.firebase.getCustomers()
    setDataSource(customers)
    setFilteredDataSource(customers)
    setLoading(false)
  }
  const handleAction= record =>{
    console.log(record)
  }
  const handlefilter = (filter) => {
    if(filter === 'all'){
      setFilteredDataSource(dataSource)
      return;
    }
    const newDataSource = dataSource.filter(item => {
      return item.status === filter
    })
    setFilteredDataSource(newDataSource)
  }
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo({...sorter});
    setFilteredInfo({...filters})
  }
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInfo.searchInput = node;
          }}
          placeholder={"Ara"}
          value={selectedKeys? selectedKeys[0] : ''}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ wkeyth: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ wkeyth: 90, marginRight: 8 }}
        >
          Ara
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ wkeyth: 90 }}>
          Temizle
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInfo.searchInput.select());
      }
    },
    render: text =>
      searchInfo.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchInfo.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchInfo({
      searchText:selectedKeys[0],
      searchedColumn: dataIndex,
    })
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSortedInfo({...sortedInfo, searchText: '' });
  };
  const clearAll = () => {
    setFilteredInfo({})
    setSortedInfo({})
  };
  const columns = [
    {
      title: 'İd',
      dataIndex: 'key',
      key: 'key',
      onFilter: (value, record) => record.key === +value,
      filteredValue: filteredInfo.key || null,
      sorter: (a, b) => a.key > b.key,
      sortOrder: sortedInfo.columnKey === 'key' && sortedInfo.order,
      ...getColumnSearchProps('key'),
    },
    {
      title: 'İsim',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name < b.name,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Soyisim',
      dataIndex: 'surname',
      key: 'surname',
      sorter: (a, b) => a.surname.length -  b.surname.length,
      sortOrder: sortedInfo.columnKey === 'surname' && sortedInfo.order,
      ...getColumnSearchProps('surname'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Tarih',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date - b.date,
      sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
      ...getColumnSearchProps('date'),
      render: (text) => (dayjs(text).format('DD-MM-YYYY'))
    },
    {
      title: 'Statü',
      dataIndex: 'status',
      key: 'status',
      sortDirections: ['ascend','descend'],
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      ...getColumnSearchProps('status'),
    },
    {
      title: 'Aksiyon',
      dataIndex: 'action',
      key:'action',
      render: (text, record) => (
        <Select defaultValue="İşleminizi seçin" style={{ width: 180, marginRight: 20 }} onChange={() => handleAction(record)}>
          <Option value="" disabled>İşleminizi seçin</Option>
          <Option value="active">Aktif</Option>
          <Option value="pasive">Pasif</Option>
          <Option value="contacted">İletişime Geçildi.</Option>
        </Select>
      ),
    }
  ]
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelected({
        selectedRowKeys,
        selectedRows
      })
    },
  };
  return (
    <Layout>
      <Row type="flex" justify="end" style={{marginBottom : 20}}>
        <Select defaultValue="Hepsi" style={{ width: 180, marginRight:20 }} onChange={handlefilter}>
          <Option value="all">Hepsi</Option>
          <Option value="active">Aktif</Option>
          <Option value="pasive">Pasif</Option>
          <Option value="contacted">İletişime Geçildi.</Option>
        </Select>
        <Button onClick={clearAll}>Filtreleri temizle</Button>
      </Row>
      <Table tableLayout="fixed" loading={loading} rowSelection={rowSelection} columns={columns} dataSource={filteredDataSource} onChange={handleChange}/>
    </Layout>
  )
}
export default withFirebase(Dashboard)