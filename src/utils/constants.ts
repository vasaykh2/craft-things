import { getCookie } from './cookie';

export const BASE_URL: string = 'http://localhost:3001';

export const config = {
  baseUrl: { BASE_URL },
  headers: {
    authorization:
      `Bearer ${getCookie('jwt')}`,
    'Content-Type': 'application/json',
  },
};

console.log(getCookie('jwt'));

//'https://nomoreparties.co/v1/plus-cohort-15';

//authorization: '6e42217e-2177-4476-b93c-c82e4a9b29ea',

//authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlYTljMjliMjliMWE4MTk3OWU5OTQiLCJpYXQiOjE2OTAyMTkyODN9.AewsRZnLWiv0rNwhn8D3Pa_BRv1A4y6N766d7s6h-sU',
