const { fifaData } = require('./fifa.js')
import functions from './index';

//helper functions
const getFinals = function () {
  const allFinals = fifaData.filter(match => match.Stage === "Final");
  return allFinals;
}
const getYears = function () {
  return getFinals(fifaData).map(item => item.Year);
}
const getWinners = function () {
  return getFinals(fifaData).map(match => match["Home Team Goals"] > match["Away Team Goals"] ? match["Home Team Name"] : match["Away Team Name"])
}
describe('fooFunction', () => {
  it('foo returns foo', () => {
    expect(functions.foo()).toBe('bar');
  })
});
//task 2:
describe('getFinals', () => {
  it('getFinals returns an array of final matches', () => {
    expect(functions.getFinals(fifaData)).toEqual(expect.arrayContaining(
      [
        {
          Year: 1930,
          Datetime: '30 Jul 1930 - 14:15',
          Stage: 'Final',
          Stadium: 'Estadio Centenario',
          City: 'Montevideo',
          HomeTeamName: 'Uruguay',
          HomeTeamGoals: 4,
          AwayTeamGoals: 2,
          AwayTeamName: 'Argentina',
          WinConditions: '',
          Attendance: 68346,
          HalfTimeHomeGoals: 1,
          HalfTimeAwayGoals: 2,
          Referee: 'LANGENUS Jean (BEL)',
          Assistant1: 'SAUCEDO Ulises (BOL)',
          Assistant2: 'CRISTOPHE Henry (BEL)',
          RoundID: 405,
          MatchID: 1087,
          HomeTeamInitials: 'URU',
          AwayTeamInitials: 'ARG'
        },
        {
          Year: 1934,
          Datetime: '10 Jun 1934 - 17:30',
          Stage: 'Final',
          Stadium: 'Nazionale PNF',
          City: 'Rome',
          HomeTeamName: 'Italy',
          HomeTeamGoals: 2,
          AwayTeamGoals: 1,
          AwayTeamName: 'Czechoslovakia',
          WinConditions: 'Italy win after extra time',
          Attendance: 55000,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'EKLIND Ivan (SWE)',
          Assistant1: 'BAERT Louis (BEL)',
          Assistant2: 'IVANCSICS Mihaly (HUN)',
          RoundID: 3490,
          MatchID: 1134,
          HomeTeamInitials: 'ITA',
          AwayTeamInitials: 'TCH'
        },
        {
          Year: 1938,
          Datetime: '19 Jun 1938 - 17:00',
          Stage: 'Final',
          Stadium: 'Stade Olympique',
          City: 'Colombes',
          HomeTeamName: 'Italy',
          HomeTeamGoals: 4,
          AwayTeamGoals: 2,
          AwayTeamName: 'Hungary',
          WinConditions: '',
          Attendance: 45000,
          HalfTimeHomeGoals: 3,
          HalfTimeAwayGoals: 1,
          Referee: 'CAPDEVILLE Georges (FRA)',
          Assistant1: 'WUETHRICH Hans (SUI)',
          Assistant2: 'KRIST Gustav (TCH)',
          RoundID: 3487,
          MatchID: 1174,
          HomeTeamInitials: 'ITA',
          AwayTeamInitials: 'HUN'
        },
        {
          Year: 1954,
          Datetime: '04 Jul 1954 - 17:00',
          Stage: 'Final',
          Stadium: 'Wankdorf Stadium',
          City: 'Berne',
          HomeTeamName: 'Germany FR',
          HomeTeamGoals: 3,
          AwayTeamGoals: 2,
          AwayTeamName: 'Hungary',
          WinConditions: '',
          Attendance: 62500,
          HalfTimeHomeGoals: 2,
          HalfTimeAwayGoals: 2,
          Referee: 'LING William (ENG)',
          Assistant1: 'ORLANDINI Vincenzo (ITA)',
          Assistant2: 'GRIFFITHS Benjamin (WAL)',
          RoundID: 3484,
          MatchID: 1278,
          HomeTeamInitials: 'FRG',
          AwayTeamInitials: 'HUN'
        },
        {
          Year: 1958,
          Datetime: '29 Jun 1958 - 15:00',
          Stage: 'Final',
          Stadium: 'Rasunda Stadium',
          City: 'Solna',
          HomeTeamName: 'Brazil',
          HomeTeamGoals: 5,
          AwayTeamGoals: 2,
          AwayTeamName: 'Sweden',
          WinConditions: '',
          Attendance: 49737,
          HalfTimeHomeGoals: 2,
          HalfTimeAwayGoals: 1,
          Referee: 'GUIGUE Maurice (FRA)',
          Assistant1: 'DUSCH Albert (GER)',
          Assistant2: 'GARDEAZABAL Juan (ESP)',
          RoundID: 3482,
          MatchID: 1343,
          HomeTeamInitials: 'BRA',
          AwayTeamInitials: 'SWE'
        },
        {
          Year: 1962,
          Datetime: '17 Jun 1962 - 14:30',
          Stage: 'Final',
          Stadium: 'Nacional',
          City: 'Santiago De Chile',
          HomeTeamName: 'Brazil',
          HomeTeamGoals: 3,
          AwayTeamGoals: 1,
          AwayTeamName: 'Czechoslovakia',
          WinConditions: '',
          Attendance: 68679,
          HalfTimeHomeGoals: 1,
          HalfTimeAwayGoals: 1,
          Referee: 'LATYCHEV Nikolaj (URS)',
          Assistant1: 'HORN Leo (NED)',
          Assistant2: 'DAVIDSON Bob (SCO)',
          RoundID: 3480,
          MatchID: 1463,
          HomeTeamInitials: 'BRA',
          AwayTeamInitials: 'TCH'
        },
        {
          Year: 1966,
          Datetime: '30 Jul 1966 - 15:00',
          Stage: 'Final',
          Stadium: 'Wembley Stadium',
          City: 'London',
          HomeTeamName: 'England',
          HomeTeamGoals: 4,
          AwayTeamGoals: 2,
          AwayTeamName: 'Germany FR',
          WinConditions: 'England win after extra time',
          Attendance: 96924,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'DIENST Gottfried (SUI)',
          Assistant1: 'BAKHRAMOV Tofik (URS)',
          Assistant2: 'GALBA Karol (TCH)',
          RoundID: 3478,
          MatchID: 1633,
          HomeTeamInitials: 'ENG',
          AwayTeamInitials: 'FRG'
        },
        {
          Year: 1970,
          Datetime: '21 Jun 1970 - 12:00',
          Stage: 'Final',
          Stadium: 'Estadio Azteca',
          City: 'Mexico City',
          HomeTeamName: 'Brazil',
          HomeTeamGoals: 4,
          AwayTeamGoals: 1,
          AwayTeamName: 'Italy',
          WinConditions: '',
          Attendance: 107412,
          HalfTimeHomeGoals: 1,
          HalfTimeAwayGoals: 1,
          Referee: 'GLOECKNER Rudolf (GDR)',
          Assistant1: 'SCHEURER Ruedi (SUI)',
          Assistant2: 'COEREZZA Norberto Angel (ARG)',
          RoundID: 3476,
          MatchID: 1765,
          HomeTeamInitials: 'BRA',
          AwayTeamInitials: 'ITA'
        },
        {
          Year: 1974,
          Datetime: '07 July 1974 - 16:00',
          Stage: 'Final',
          Stadium: 'Olympiastadion',
          City: 'Munich',
          HomeTeamName: 'Netherlands',
          HomeTeamGoals: 1,
          AwayTeamGoals: 2,
          AwayTeamName: 'Germany FR',
          WinConditions: '',
          Attendance: 78200,
          HalfTimeHomeGoals: 1,
          HalfTimeAwayGoals: 2,
          Referee: 'TAYLOR John (ENG)',
          Assistant1: 'GONZALEZ ARCHUNDIA Alfonso (MEX)',
          Assistant2: 'BARRETO RUIZ Ramon (URU)',
          RoundID: 605,
          MatchID: 2063,
          HomeTeamInitials: 'NED',
          AwayTeamInitials: 'FRG'
        },
        {
          Year: 1978,
          Datetime: '25 Jun 1978 - 15:00',
          Stage: 'Final',
          Stadium: 'El Monumental - Estadio Monumental Antonio Vespuci',
          City: 'Buenos Aires',
          HomeTeamName: 'Argentina',
          HomeTeamGoals: 3,
          AwayTeamGoals: 1,
          AwayTeamName: 'Netherlands',
          WinConditions: 'Argentina win after extra time',
          Attendance: 71483,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'GONELLA Sergio (ITA)',
          Assistant1: 'BARRETO RUIZ Ramon (URU)',
          Assistant2: 'LINEMAYR Erich (AUT)',
          RoundID: 639,
          MatchID: 2198,
          HomeTeamInitials: 'ARG',
          AwayTeamInitials: 'NED'
        },
        {
          Year: 1982,
          Datetime: '11 Jul 1982 - 20:00',
          Stage: 'Final',
          Stadium: 'Santiago Bernabeu',
          City: 'Madrid',
          HomeTeamName: 'Italy',
          HomeTeamGoals: 3,
          AwayTeamGoals: 1,
          AwayTeamName: 'Germany FR',
          WinConditions: '',
          Attendance: 90000,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'COELHO Arnaldo (BRA)',
          Assistant1: 'KLEIN Abraham (ISR)',
          Assistant2: 'CHRISTOV Vojtech (TCH)',
          RoundID: 3475,
          MatchID: 923,
          HomeTeamInitials: 'ITA',
          AwayTeamInitials: 'FRG'
        },
        {
          Year: 1986,
          Datetime: '29 Jun 1986 - 12:00',
          Stage: 'Final',
          Stadium: 'Estadio Azteca',
          City: 'Mexico City',
          HomeTeamName: 'Argentina',
          HomeTeamGoals: 3,
          AwayTeamGoals: 2,
          AwayTeamName: 'Germany FR',
          WinConditions: '',
          Attendance: 114600,
          HalfTimeHomeGoals: 1,
          HalfTimeAwayGoals: 0,
          Referee: 'ARPPI FILHO Romualdo (BRA)',
          Assistant1: 'FREDRIKSSON Erik (SWE)',
          Assistant2: 'ULLOA MORERA Berny (CRC)',
          RoundID: 3467,
          MatchID: 393,
          HomeTeamInitials: 'ARG',
          AwayTeamInitials: 'FRG'
        },
        {
          Year: 1990,
          Datetime: '08 Jul 1990 - 20:00',
          Stage: 'Final',
          Stadium: 'Stadio Olimpico',
          City: 'Rome',
          HomeTeamName: 'Germany FR',
          HomeTeamGoals: 1,
          AwayTeamGoals: 0,
          AwayTeamName: 'Argentina',
          WinConditions: '',
          Attendance: 73603,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'CODESAL MENDEZ Edgardo (MEX)',
          Assistant1: 'PEREZ HOYOS Armando (COL)',
          Assistant2: 'LISTKIEWICZ Michal (POL)',
          RoundID: 3462,
          MatchID: 27,
          HomeTeamInitials: 'FRG',
          AwayTeamInitials: 'ARG'
        },
        {
          Year: 1994,
          Datetime: '17 Jul 1994 - 12:30',
          Stage: 'Final',
          Stadium: 'Rose Bowl',
          City: 'Los Angeles',
          HomeTeamName: 'Brazil',
          HomeTeamGoals: 0,
          AwayTeamGoals: 0,
          AwayTeamName: 'Italy',
          WinConditions: 'Brazil win on penalties (3 - 2)',
          Attendance: 94194,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'PUHL Sandor (HUN)',
          Assistant1: 'ZARATE Venancio (PAR)',
          Assistant2: 'FANAEI Mohammad (IRN)',
          RoundID: 3459,
          MatchID: 3104,
          HomeTeamInitials: 'BRA',
          AwayTeamInitials: 'ITA'
        },
        {
          Year: 1998,
          Datetime: '12 Jul 1998 - 21:00',
          Stage: 'Final',
          Stadium: 'Stade de France',
          City: 'Saint-Denis',
          HomeTeamName: 'Brazil',
          HomeTeamGoals: 0,
          AwayTeamGoals: 3,
          AwayTeamName: 'France',
          WinConditions: '',
          Attendance: 80000,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 2,
          Referee: 'BELQOLA Said (MAR)',
          Assistant1: 'WARREN Mark (ENG)',
          Assistant2: 'SALIE Achmat (RSA)',
          RoundID: 1027,
          MatchID: 8788,
          HomeTeamInitials: 'BRA',
          AwayTeamInitials: 'FRA'
        },
        {
          Year: 2002,
          Datetime: '30 Jun 2002 - 20:00',
          Stage: 'Final',
          Stadium: 'International Stadium Yokohama',
          City: 'Yokohama',
          HomeTeamName: 'Germany',
          HomeTeamGoals: 0,
          AwayTeamGoals: 2,
          AwayTeamName: 'Brazil',
          WinConditions: '',
          Attendance: 69029,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'COLLINA Pierluigi (ITA)',
          Assistant1: 'LINDBERG Leif (SWE)',
          Assistant2: 'SHARP Philip (ENG)',
          RoundID: 43950600,
          MatchID: 43950064,
          HomeTeamInitials: 'GER',
          AwayTeamInitials: 'BRA'
        },
        {
          Year: 2006,
          Datetime: '09 Jul 2006 - 20:00',
          Stage: 'Final',
          Stadium: 'Olympiastadion',
          City: 'Berlin',
          HomeTeamName: 'Italy',
          HomeTeamGoals: 1,
          AwayTeamGoals: 1,
          AwayTeamName: 'France',
          WinConditions: 'Italy win on penalties (5 - 3)',
          Attendance: 69000,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'ELIZONDO Horacio (ARG)',
          Assistant1: 'GARCIA Dario (ARG)',
          Assistant2: 'OTERO Rodolfo (ARG)',
          RoundID: 97410600,
          MatchID: 97410064,
          HomeTeamInitials: 'ITA',
          AwayTeamInitials: 'FRA'
        },
        {
          Year: 2010,
          Datetime: '11 Jul 2010 - 20:30',
          Stage: 'Final',
          Stadium: 'Soccer City Stadium',
          City: 'Johannesburg',
          HomeTeamName: 'Netherlands',
          HomeTeamGoals: 0,
          AwayTeamGoals: 1,
          AwayTeamName: 'Spain',
          WinConditions: 'Spain win after extra time',
          Attendance: 84490,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'WEBB Howard (ENG)',
          Assistant1: 'Darren CANN (ENG)',
          Assistant2: 'MULLARKEY Michael (ENG)',
          RoundID: 249721,
          MatchID: 300061509,
          HomeTeamInitials: 'NED',
          AwayTeamInitials: 'ESP'
        },
        {
          Year: 2014,
          Datetime: '13 Jul 2014 - 16:00',
          Stage: 'Final',
          Stadium: 'Estadio do Maracana',
          City: 'Rio De Janeiro',
          HomeTeamName: 'Germany',
          HomeTeamGoals: 1,
          AwayTeamGoals: 0,
          AwayTeamName: 'Argentina',
          WinConditions: 'Germany win after extra time',
          Attendance: 74738,
          HalfTimeHomeGoals: 0,
          HalfTimeAwayGoals: 0,
          Referee: 'Nicola RIZZOLI (ITA)',
          Assistant1: 'Renato FAVERANI (ITA)',
          Assistant2: 'Andrea STEFANI (ITA)',
          RoundID: 255959,
          MatchID: 300186501,
          HomeTeamInitials: 'GER',
          AwayTeamInitials: 'ARG'
        }
      ]
    ));
  })
});
// task 3
describe('getYears', () => {
  it('an array containing years', () => {
    expect(functions.getYears(fifaData, getFinals)).toEqual(expect.arrayContaining(
      [
        1930, 1934, 1938, 1954,
        1958, 1962, 1966, 1970,
        1974, 1978, 1982, 1986,
        1990, 1994, 1998, 2002,
        2006, 2010, 2014
      ]
    ));
  })
});

// Task 4

describe('getWinners', () => {
  it('an array containing all winners', () => {
    expect(functions.getWinners(fifaData, getFinals)).toEqual(expect.arrayContaining(
      [
        'Uruguay', 'Italy',
        'Italy', 'Germany FR',
        'Brazil', 'Brazil',
        'England', 'Brazil',
        'Germany FR', 'Argentina',
        'Italy', 'Argentina',
        'Germany FR', 'Italy',
        'France', 'Brazil',
        'France', 'Spain',
        'Germany'
      ]
    ));
  })
});

// Task 5

describe('getWinnersByYear', () => {
  it('an array containing strings of winners', () => {
    expect(functions.getWinnersByYear(fifaData, getFinals, getYears, getWinners)).toEqual(expect.arrayContaining(
      [
        'In 1930, Uruguay won the world cup!',
        'In 1934, Italy won the world cup!',
        'In 1938, Italy won the world cup!',
        'In 1954, Germany FR won the world cup!',
        'In 1958, Brazil won the world cup!',
        'In 1962, Brazil won the world cup!',
        'In 1966, England won the world cup!',
        'In 1970, Brazil won the world cup!',
        'In 1974, Germany FR won the world cup!',
        'In 1978, Argentina won the world cup!',
        'In 1982, Italy won the world cup!',
        'In 1986, Argentina won the world cup!',
        'In 1990, Germany FR won the world cup!',
        'In 1994, Italy won the world cup!',
        'In 1998, France won the world cup!',
        'In 2002, Brazil won the world cup!',
        'In 2006, France won the world cup!',
        'In 2010, Spain won the world cup!',
        'In 2014, Germany won the world cup!'
      ]
    ));
  })
});

// Task 6

describe('getAverageGoals', () => {
  it('getAverageGoals returns a number', () => {
    expect(functions.getAverageGoals(getFinals(fifaData))).toBe('3.58');
  })
});
