import axios from 'axios';

const BASE = process.env.NEXT_PUBLIC_API_URL as string;
const NEXONE_API_KEY = process.env.NEXON_API_KEY as string;
const game = 'heroes';

const versionV1 = 'v1';
const versionV2 = 'v2';

const baseUrlV1 = `${BASE}/${game}/${versionV1}`;
const baseURLV2 = `${BASE}/${game}/${versionV2}`;

export const nexonInstanceV1 = axios.create({
  baseURL: baseUrlV1,
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'x-nxopen-api-key': NEXONE_API_KEY,
  },
});

export const nexonInstance = axios.create({
  baseURL: baseURLV2,
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'x-nxopen-api-key': NEXONE_API_KEY,
  },
});
