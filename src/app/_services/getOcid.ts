import axios from "axios";
import {
  findOcidByName,
  setOcidListToLocalStorage,
} from "../_utils/localStorage";

export const getOcid = async (characterName: string): Promise<string> => {
  try {
    let ocid = findOcidByName(characterName);

    if (!ocid) {
      const response = await axios.get(
        `api/getCharacterOcid?character_name=${encodeURIComponent(characterName)}`,
      );

      const data: { ocid: string } = response.data;
      ocid = setOcidListToLocalStorage(characterName, data);
    }

    return ocid;
  } catch (e) {
    throw e;
  }
};
