import axios from 'axios';

import { FETCH_CLAN } from './types';
import { API_URL, CLAN_TAG } from '../config';
import AXIOS_OPTIONS from './axiosConfig';

export default function fetchClanInformation() {
  const request = axios.get(`${API_URL}/clan/${CLAN_TAG}`, AXIOS_OPTIONS);

  return {
    type: FETCH_CLAN,
    payload: request,
  };
}
