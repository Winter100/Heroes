import axios from "axios";

export const getEquipment = async (ocid: string) => {
  try {
    const response = await axios.get(
      `api/getCharacterEquipment?ocid=${encodeURIComponent(ocid)}`,
    );

    const data = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
};
