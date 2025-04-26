import axios from 'axios';
import { Guild } from '../_type/characterType';

export const getGuild = async (ocid: string) => {
  try {
    const response = await axios.get(
      `api/getCharacterGuild?ocid=${encodeURIComponent(ocid)}`
    );

    const data: Guild = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
};
