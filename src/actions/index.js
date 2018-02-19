import axios from 'axios';

export const FETCH_CLAN = 'FETCH_CLAN';

const ROOT_UTL = 'http://api.cr-api.com';
const API_KEY = 'bdf6bc5cac4f42c1957ca26cb8640e6a8ac69c9125a645259c919f44d3834d94';
const CLAN_KEY = '228PYJ08';

export function fetchClanInformation() {
  const request = axios.get(`${ROOT_UTL}/clan/${CLAN_KEY}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return {
    type: FETCH_CLAN,
    payload: request,
  };
}
