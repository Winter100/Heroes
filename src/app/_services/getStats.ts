import axios from "axios";
import { Stat } from "../_type/characterType";

export const getStats = async (ocid: string) => {
  try {
    const response = await axios.get(
      `api/getCharacterStat?ocid=${encodeURIComponent(ocid)}`,
    );

    const data: { stat: Stat[] } = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
};
