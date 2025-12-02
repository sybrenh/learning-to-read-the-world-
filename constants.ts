import { CountryData } from './types';

// Zoomed out slightly and centered more East to cover the new regions
export const INITIAL_ZOOM = 3;
export const INITIAL_CENTER: [number, number] = [30.0, 40.0]; 

export const COUNTRY_DATA: CountryData[] = [
  // --- NORDICS ---
  {
    id: 'se',
    name: 'Sweden',
    lat: 62.00,
    lng: 15.00,
    characters: 'Å Ä Ö',
    description: 'Uses Å, Ä, Ö. Distinct from Norwegian/Danish which use Ø and Æ.',
    region: 'Europe',
    commonWords: ['Gata', 'Väg', 'Infart'],
    phonePrefix: '+46'
  },
  {
    id: 'no',
    name: 'Norway',
    lat: 61.00,
    lng: 8.00,
    characters: 'Æ Ø Å',
    description: 'Uses Æ, Ø, Å. Similar to Danish.',
    region: 'Europe',
    commonWords: ['Gate', 'Vei', 'Svingen'],
    phonePrefix: '+47'
  },
  {
    id: 'dk',
    name: 'Denmark',
    lat: 56.00,
    lng: 9.50,
    characters: 'Æ Ø Å',
    description: 'Same vowels as Norway, but look for the "streg" (slash) in Ø.',
    region: 'Europe',
    commonWords: ['Gade', 'Vej', 'Boulevard'],
    phonePrefix: '+45'
  },
  {
    id: 'fi',
    name: 'Finland',
    lat: 64.00,
    lng: 26.00,
    characters: 'Ä Ö',
    description: 'Uses Ä and Ö like Sweden, but lacks Å in native words. Double vowels (aa, ii) are common.',
    region: 'Europe',
    commonWords: ['Tie', 'Katu', 'Kuja'],
    phonePrefix: '+358'
  },
  {
    id: 'is',
    name: 'Iceland',
    lat: 65.00,
    lng: -19.00,
    characters: 'Ð ð Þ þ',
    description: 'Eth (Ð/ð) and Thorn (Þ/þ) are unique. Also uses Æ and Ö.',
    region: 'Europe',
    commonWords: ['Gata', 'Vegur', 'Braut'],
    phonePrefix: '+354'
  },
  
  // --- BALTICS ---
  {
    id: 'ee',
    name: 'Estonia',
    lat: 58.59,
    lng: 25.01,
    characters: 'Õ Ä Ö Ü',
    description: 'The tilde on Õ is unique to Estonia in this region.',
    region: 'Europe',
    commonWords: ['Tänav', 'Maantee', 'Puiestee'],
    phonePrefix: '+372'
  },
  {
    id: 'lv',
    name: 'Latvia',
    lat: 56.88,
    lng: 24.60,
    characters: 'Ā Ē Ī Ū Ķ Ļ',
    description: 'Macrons (lines) over vowels. Cedillas under K, L, N (ķ, ļ, ņ).',
    region: 'Europe',
    commonWords: ['Iela', 'Gatve', 'Bulvāris'],
    phonePrefix: '+371'
  },
  {
    id: 'lt',
    name: 'Lithuania',
    lat: 55.17,
    lng: 23.88,
    characters: 'Ą Ę Į Ų Ė Č',
    description: 'Ogonek (hooks) under vowels (ą, ę). Also Ė with a dot.',
    region: 'Europe',
    commonWords: ['Gatvė', 'Kelias', 'Aleja'],
    phonePrefix: '+370'
  },

  // --- EASTERN EUROPE / CYRILLIC ---
  {
    id: 'ru',
    name: 'Russia',
    lat: 56.5, 
    lng: 38.0,
    characters: 'ы э ё ъ',
    description: 'Standard Cyrillic. Look for ы, э. Does NOT use i, j, or unique Ukranian letters.',
    region: 'Europe',
    commonWords: ['Улица (Ulitsa)', 'Проспект', 'Шоссе'],
    phonePrefix: '+7'
  },
  {
    id: 'ua',
    name: 'Ukraine',
    lat: 49.00,
    lng: 31.00,
    characters: 'І і Ї ї Є є',
    description: 'Cyrillic with "i" characters (dotted i, two dots ï) and Є. Distinct from Russian.',
    region: 'Europe',
    commonWords: ['Вулиця (Vulytsya)', 'Проспект', 'Бульвар'],
    phonePrefix: '+380'
  },
  {
    id: 'bg',
    name: 'Bulgaria',
    lat: 42.73,
    lng: 25.48,
    characters: 'ъ',
    description: 'Cyrillic. Heavy use of the hard sign (ъ) as a vowel. No Э or Ё usually.',
    region: 'Europe',
    commonWords: ['Улица', 'Булевард', 'Площад'],
    phonePrefix: '+359'
  },
  {
    id: 'rs',
    name: 'Serbia',
    lat: 44.01,
    lng: 21.00,
    characters: 'ј ћ ђ њ љ',
    description: 'Cyrillic that includes the Latin "j". Distinctive ћ and ђ.',
    region: 'Europe',
    commonWords: ['Ulica', 'Put', 'Bulevar'],
    phonePrefix: '+381'
  },
  {
    id: 'mk',
    name: 'North Macedonia',
    lat: 41.60,
    lng: 21.74,
    characters: 'ѓ ќ ѕ',
    description: 'Cyrillic with accent marks on K and G (ќ, ѓ) and the letter S (ѕ).',
    region: 'Europe',
    commonWords: ['Ulica', 'Bulevar'],
    phonePrefix: '+389'
  },
  {
    id: 'gr',
    name: 'Greece',
    lat: 39.07,
    lng: 21.82,
    characters: 'Λ λ Σ Δ Ξ',
    description: 'Greek alphabet. Look for Lambda (Λ), Sigma (Σ/σ), Delta (Δ).',
    region: 'Europe',
    commonWords: ['Οδός (Odos)', 'Λεωφόρος'],
    phonePrefix: '+30'
  },

  // --- CENTRAL EUROPE ---
  {
    id: 'pl',
    name: 'Poland',
    lat: 52.00,
    lng: 19.00,
    characters: 'Ł ł Ą Ę Ś Ź',
    description: 'Look for the slashed L (Ł) and ogoneks (Ą, Ę). Lots of Z variants (Ź, Ż).',
    region: 'Europe',
    commonWords: ['Ulica', 'Aleja', 'Plac'],
    phonePrefix: '+48'
  },
  {
    id: 'cz',
    name: 'Czechia',
    lat: 49.82,
    lng: 15.47,
    characters: 'Ř Ů Ě',
    description: 'The Ř (R with caron) is very specific to Czech. Also Ů (U with ring).',
    region: 'Europe',
    commonWords: ['Ulice', 'Náměstí', 'Třída'],
    phonePrefix: '+420'
  },
  {
    id: 'sk',
    name: 'Slovakia',
    lat: 48.67,
    lng: 19.70,
    characters: 'Ô Ľ Ĺ Ŕ',
    description: 'Uses Ô and acute accents on L and R (Ĺ, Ŕ).',
    region: 'Europe',
    commonWords: ['Ulica', 'Námestie', 'Cesta'],
    phonePrefix: '+421'
  },
  {
    id: 'hu',
    name: 'Hungary',
    lat: 47.16,
    lng: 19.50,
    characters: 'Ő Ű',
    description: 'Double acute accents (Ő, Ű) are the giveaway.',
    region: 'Europe',
    commonWords: ['Utca', 'Út', 'Tér'],
    phonePrefix: '+36'
  },

  // --- ROMANCE / WESTERN ---
  {
    id: 'ro',
    name: 'Romania',
    lat: 46.00,
    lng: 25.00,
    characters: 'Ă Ș Ț Â Î',
    description: 'Breve on A (Ă) and comma below S and T (Ș, Ț).',
    region: 'Europe',
    commonWords: ['Strada', 'Intrarea', 'Aleea'],
    phonePrefix: '+40'
  },
  {
    id: 'tr',
    name: 'Turkey',
    lat: 39.00,
    lng: 35.00,
    characters: 'Ğ İ Ş ı',
    description: 'Dotted capital İ and dotless lowercase ı. Breve on G (Ğ).',
    region: 'Europe',
    commonWords: ['Sokak', 'Caddesi', 'Mahalle'],
    phonePrefix: '+90'
  },
  {
    id: 'hr',
    name: 'Croatia',
    lat: 45.10,
    lng: 15.20,
    characters: 'Đ đ',
    description: 'Crossed D (Đ/đ) is common. Uses Latin script.',
    region: 'Europe',
    commonWords: ['Ulica', 'Cesta', 'Trg'],
    phonePrefix: '+385'
  },
  {
    id: 'de',
    name: 'Germany',
    lat: 51.17,
    lng: 10.45,
    characters: 'ß Ä Ö Ü',
    description: 'The Eszett (ß) is unique to German.',
    region: 'Europe',
    commonWords: ['Straße', 'Weg', 'Platz'],
    phonePrefix: '+49'
  },
  {
    id: 'fr',
    name: 'France',
    lat: 46.60,
    lng: 2.21,
    characters: 'Ç Œ œ',
    description: 'Cedilla on C (Ç) and ligatures like Œ.',
    region: 'Europe',
    commonWords: ['Rue', 'Avenue', 'Boulevard'],
    phonePrefix: '+33'
  },
  {
    id: 'es',
    name: 'Spain',
    lat: 40.46,
    lng: -3.75,
    characters: 'Ñ ¿ ¡',
    description: 'The tilde on N (Ñ) and inverted punctuation.',
    region: 'Europe',
    commonWords: ['Calle', 'Avenida', 'Paseo'],
    phonePrefix: '+34'
  },
  {
    id: 'pt',
    name: 'Portugal',
    lat: 39.40,
    lng: -8.22,
    characters: 'Ã Õ Ç',
    description: 'Tildes on A and O (Ã, Õ).',
    region: 'Europe',
    commonWords: ['Rua', 'Avenida', 'Estrada'],
    phonePrefix: '+351'
  },

  // --- ASIA / MIDDLE EAST ---
  {
    id: 'il',
    name: 'Israel',
    lat: 31.04,
    lng: 34.85,
    characters: 'ש א ב',
    description: 'Hebrew script. Distinctive blocky shapes, written right-to-left.',
    region: 'Asia',
    commonWords: ['Rehov (רחוב)', 'Derech'],
    phonePrefix: '+972'
  },
  {
    id: 'kz',
    name: 'Kazakhstan',
    lat: 48.01,
    lng: 66.92,
    characters: 'ә ғ қ ң ө',
    description: 'Cyrillic with many descenders/tails (Қ, Ң) and unique vowels (Ә, Ө).',
    region: 'Asia',
    commonWords: ['Kóshesi (Köşesi)', 'Danyǵy'],
    phonePrefix: '+7'
  },
  {
    id: 'kg',
    name: 'Kyrgyzstan',
    lat: 41.20,
    lng: 74.77,
    characters: 'Ң Ө Ү',
    description: 'Cyrillic similar to Russian but with Ң, Ө, Ү.',
    region: 'Asia',
    commonWords: ['Kocнocu', 'Prospecti'],
    phonePrefix: '+996'
  },
  {
    id: 'mn',
    name: 'Mongolia',
    lat: 46.86,
    lng: 103.85,
    characters: 'Ө Ү',
    description: 'Cyrillic script. Look for vertical signs in cities, but horizontal script.',
    region: 'Asia',
    commonWords: ['Gudamj (Гудамж)', 'Urgun Chuluu'],
    phonePrefix: '+976'
  },
  {
    id: 'jp',
    name: 'Japan',
    lat: 36.20,
    lng: 138.25,
    characters: 'の ア ッ',
    description: 'Mix of Kanji and Kana. "の" (no) is a very common curved character.',
    region: 'Asia',
    commonWords: ['Chōme (丁目)', 'Dōri (通り)', 'Ken (県)'],
    phonePrefix: '+81'
  },
  {
    id: 'kr',
    name: 'South Korea',
    lat: 35.90,
    lng: 127.76,
    characters: '한 글 ㅇ',
    description: 'Hangul. Look for circles (ㅇ) and vertical/horizontal line combinations.',
    region: 'Asia',
    commonWords: ['-gil (길)', '-ro (로)', '-daero'],
    phonePrefix: '+82'
  },
  {
    id: 'th',
    name: 'Thailand',
    lat: 15.87,
    lng: 100.99,
    characters: 'ก ร ะ',
    description: 'Thai script. Many characters have small loops at the end of lines.',
    region: 'Asia',
    commonWords: ['Soi (ซอย)', 'Thanon (ถนน)', 'Moo'],
    phonePrefix: '+66'
  },
  {
    id: 'kh',
    name: 'Cambodia',
    lat: 12.56,
    lng: 104.99,
    characters: 'ក ខ',
    description: 'Khmer script. Similar to Thai but more intricate, often with "hair" details on top.',
    region: 'Asia',
    commonWords: ['Phlov (ផ្លូវ)', 'Maha Vithei'],
    phonePrefix: '+855'
  },
  {
    id: 'la',
    name: 'Laos',
    lat: 19.85,
    lng: 102.49,
    characters: 'ມ ວ',
    description: 'Lao script. Looks like a "curvier" version of Thai. More rounded.',
    region: 'Asia',
    commonWords: ['Thanon (ຖະຫນົນ)', 'Hoi'],
    phonePrefix: '+856'
  },
  {
    id: 'vn',
    name: 'Vietnam',
    lat: 14.06,
    lng: 108.28,
    characters: 'Ơ Ư Đ',
    description: 'Latin script with stacked diacritics (dots below, hooks above vowels).',
    region: 'Asia',
    commonWords: ['Đường', 'Phố', 'Ngõ'],
    phonePrefix: '+84'
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    lat: 23.68,
    lng: 90.35,
    characters: 'ব ং',
    description: 'Bengali script. Look for the continuous horizontal line connecting top of letters.',
    region: 'Asia',
    commonWords: ['Sarak', 'Road', 'Lane'],
    phonePrefix: '+880'
  },
  {
    id: 'lk',
    name: 'Sri Lanka',
    lat: 7.87,
    lng: 80.77,
    characters: 'ල ක',
    description: 'Sinhala. Very rounded, spiral-like characters. Distinct from linear Tamil/Hindi.',
    region: 'Asia',
    commonWords: ['Mawatha', 'Road'],
    phonePrefix: '+94'
  },
  {
    id: 'my',
    name: 'Malaysia',
    lat: 4.21,
    lng: 101.97,
    characters: 'Jalan',
    description: 'Uses Latin script (Malay). Very similar to Indonesia.',
    region: 'Asia',
    commonWords: ['Jalan', 'Lorong', 'Lebuh'],
    phonePrefix: '+60'
  },
  {
    id: 'id',
    name: 'Indonesia',
    lat: -0.78,
    lng: 113.92,
    characters: 'Jalan',
    description: 'Uses Latin script (Indonesian). Look for "Jalan" everywhere.',
    region: 'Asia',
    commonWords: ['Jalan', 'Gang', 'Raya'],
    phonePrefix: '+62'
  },

  // --- AMERICAS ---
  {
    id: 'br',
    name: 'Brazil',
    lat: -14.23,
    lng: -51.92,
    characters: 'Ã Ç',
    description: 'Portuguese: Tildes (Ã) and Cedillas (Ç). No Ñ (unlike Spanish).',
    region: 'Americas',
    commonWords: ['Rua', 'Avenida', 'Rodovia'],
    phonePrefix: '+55'
  },
  {
    id: 'mx',
    name: 'Mexico',
    lat: 23.63,
    lng: -102.55,
    characters: 'Ñ',
    description: 'Spanish. Octagonal STOP signs say ALTO.',
    region: 'Americas',
    commonWords: ['Calle', 'Avenida', 'Boulevard'],
    phonePrefix: '+52'
  }
];
