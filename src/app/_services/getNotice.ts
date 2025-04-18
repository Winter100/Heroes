import axios from 'axios';
import { NoticeType } from '../_hooks/useNotice/useNotice';

export const getNotice = async <T>(type: NoticeType): Promise<T | null> => {
  try {
    const response = await axios.get(`api/getNotice?type=${type}`);

    const data: T = response?.data;

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
