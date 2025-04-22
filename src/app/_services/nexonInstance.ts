import axios from 'axios';

const base = 'https://open.api.nexon.com';
const game = 'heroes';
const version = 'v2';

const baseURL = `${base}/${game}/${version}`;

export const nexonInstance = axios.create({
  baseURL,
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY as string,
  },
});

const versionV1 = 'v1';
const baseUrlV1 = `${base}/${game}/${versionV1}`;

export const nexonInstanceV1 = axios.create({
  baseURL: baseUrlV1,
  method: 'GET',
  headers: {
    'Cache-Control': 'no-cache',
    'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY as string,
  },
});
