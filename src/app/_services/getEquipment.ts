import axios from 'axios';
import { Item_equipment } from '../_type/equipmentType';

export const getEquipment = async (ocid: string = '') => {
  try {
    const response = await axios.get(
      `api/getCharacterEquipment?ocid=${encodeURIComponent(ocid)}`
    );

    const data: Item_equipment = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
};
