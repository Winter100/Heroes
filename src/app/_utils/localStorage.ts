import { initialTitleList } from "../_constant/rankTitleList";
import { MergedCharacter } from "../_type/characterType";
import { TitleType } from "../_type/RankTitleListType";
import { LOCALSTORAGE_KEY } from "./../_constant/localstorage";

interface OcidData {
  name: string;
  ocid: string;
}

export const getLocalStorageItems = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const storageItem = localStorage.getItem(key);

    if (!storageItem) return null;

    try {
      return JSON.parse(storageItem) as T;
    } catch (e) {
      return null;
    }
  }

  return null;
};

export const getWaitingRoomToLocalStorage = (): MergedCharacter[] => {
  return getLocalStorageItems(LOCALSTORAGE_KEY.waiting) ?? [];
};

export const setLocalStorageItems = <T extends { name: string }>(
  key: string,
  data: T,
) => {
  const existingItems = getLocalStorageItems<T[]>(key) ?? [];

  const updatedItems = existingItems.map((item) =>
    item.name === data.name ? data : item,
  );

  if (!updatedItems.some((item) => item.name === data.name)) {
    updatedItems.push(data);
  }

  localStorage.setItem(key, JSON.stringify(updatedItems));
};

export const setLocalStoreageRankTitle = (
  key: string,
  item: { stat_name: string; isView: boolean }[],
) => {
  const updatedItems = [...item];

  localStorage.setItem(key, JSON.stringify(updatedItems));
};

export const getLocalStorageRankTitle = () => {
  return getLocalStorageItems<TitleType[]>("RankTitleList");
};

/**
 * 주어진 이름으로 로컬스토리지에서 ocid를 찾습니다.
 *
 * @param name - 검색할 캐릭터의 이름
 * @returns 해당 이름을 가진 아이템이 존재하면 ocid를 반환하고, 그렇지 않으면 null을 반환합니다.
 *
 */
export const findOcidByName = (name: string) => {
  return (
    getLocalStorageItems<OcidData[]>(LOCALSTORAGE_KEY.ocidList)?.find(
      (item) => item.name === name,
    )?.ocid || null
  );
};

/**
 *  캐릭터의 이름과 ocid를 객체로 묶어 로컬스토리지에 저장합니다.
 *
 * @param name - 추가할 캐릭터의 이름
 * @param ocidObj - ocidObj : {ocid : "캐릭터의 ocid...."}
 * @returns ocid
 */
export const setOcidListToLocalStorage = (
  name: string,
  ocidObj: { ocid: string },
) => {
  const ocid = ocidObj.ocid;

  setLocalStorageItems(LOCALSTORAGE_KEY.ocidList, { name, ocid });

  return ocid;
};

export const setWaitingRoomCharactersInfo = (
  userData: MergedCharacter | MergedCharacter[],
) => {
  localStorage.setItem(LOCALSTORAGE_KEY.waiting, JSON.stringify(userData));
};

export const addWaitingRoomCharacterInfo = (userData: MergedCharacter) => {
  setLocalStorageItems(LOCALSTORAGE_KEY.waiting, userData);
};

export const removeWatingRoomCharactersInfo = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(LOCALSTORAGE_KEY.waiting);
  }
};
