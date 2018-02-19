import { API_KEY } from '../config';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export default options;
