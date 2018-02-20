import axios from 'axios';

import { FETCH_CLAN, FETCH_MEMBER } from './types';
import { API_URL, CLAN_TAG } from '../config';
import AXIOS_OPTIONS from './axiosConfig';

export function fetchClanInformation() {
  const request = axios.get(`${API_URL}/clan/${CLAN_TAG}`, AXIOS_OPTIONS);

  return {
    type: FETCH_CLAN,
    payload: request,
  };
}

export function fetchMember(memberTag) {
  const request = axios.get(`${API_URL}/player/${memberTag}?keys=tag,name,trophies,arena,clan,stats,games,currentDeck`, AXIOS_OPTIONS);

  return {
    type: FETCH_MEMBER,
    payload: request,
  };
}

