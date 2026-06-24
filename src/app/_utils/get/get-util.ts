import Tesseract from 'tesseract.js';
import { getImageByName } from './getImageByName';
import { TitleType } from '@/app/_type/RankTitleListType';
import { LOCALSTORAGE_KEY } from '@/app/_constant/keyword';
import { MergedCharacter } from '@/app/_type/characterType';

/**
 * - 서치 파람스 값을 리턴
 * @param request
 * @param keyName
 * @returns
 */
export const getSearchParamsValue = (
  request: { url: string | URL; base?: string | URL },
  keyName: string
) => {
  const { searchParams } = new URL(request.url);
  const searchParamsValue = searchParams.get(keyName);

  return searchParamsValue;
};

/**
 * - 아이템의 등급을 떼고 이름으로 이미지 리턴
 * @param itemName
 * @param slot
 * @returns
 */
export const getTooltipImageSrc = (itemName: string, slot?: string) => {
  const name = slot
    ? itemName.replace(/^(초급|중급|고급|레어|전설)\s*/, '')
    : itemName;
  const src = getImageByName(name, slot);

  return src;
};

/**
 * 이미지 서칭에서 이름 변환
 * @param img
 * @returns
 */
export const imageToName = async (img: string | File | Buffer) => {
  if (!img) return;

  try {
    const result = await Tesseract.recognize(img, 'kor+eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          // 로딩 현황
          // console.log(Math.round(m.progress * 100));
        }
      },
    });

    const text = result.data.text;
    return text.split('\n').filter(Boolean) ?? [];
  } catch (e) {
    console.error(e);
  }
};

/**
 * 이벤트 남은 시간 알려주는 함수
 * @param dateString
 * @param time
 * @returns
 */
export const isWithinHours = (dateString: string, time: number) => {
  const givenDate = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - givenDate.getTime();

  return diffMs <= time * 60 * 60 * 1000;
};

interface OcidData {
  name: string;
  ocid: string;
}

export const getLocalStorageItems = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const storageItem = localStorage.getItem(key);

    if (!storageItem) return null;

    try {
      return JSON.parse(storageItem) as T;
    } catch {
      return null;
    }
  }

  return null;
};

const setLocalStorageItems = <T extends { name: string }>(
  key: string,
  data: T
) => {
  const existingItems = getLocalStorageItems<T[]>(key) ?? [];

  const updatedItems = existingItems.map((item) =>
    item.name === data.name ? data : item
  );

  if (!updatedItems.some((item) => item.name === data.name)) {
    updatedItems.push(data);
  }

  localStorage.setItem(key, JSON.stringify(updatedItems));
};

export const setLocalStoreageRankTitle = (
  key: string,
  item: { stat_name: string; isView: boolean }[]
) => {
  const updatedItems = [...item];

  localStorage.setItem(key, JSON.stringify(updatedItems));
};

export const getLocalStorageRankTitle = () => {
  return getLocalStorageItems<TitleType[]>('RankTitleList');
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
      (item) => item.name === name
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
  ocidObj: { ocid: string }
) => {
  const ocid = ocidObj.ocid;

  setLocalStorageItems(LOCALSTORAGE_KEY.ocidList, { name, ocid });

  return ocid;
};

export const setWaitingRoomCharactersInfo = (
  userData: MergedCharacter | MergedCharacter[]
) => {
  localStorage.setItem(LOCALSTORAGE_KEY.waiting, JSON.stringify(userData));
};

export const addWaitingRoomCharacterInfo = (userData: MergedCharacter) => {
  setLocalStorageItems(LOCALSTORAGE_KEY.waiting, userData);
};

/**
 * 각성석 관련 함수
 * @param itemName
 * @returns
 */
export const extractValue = (itemName: string): string | null => {
  const match = itemName.match(/\d+\D*$/);
  return match ? match[0] : null;
};

/**
 * 아이템 레벨 리턴 함수
 * @param itemName
 * @returns
 */
export const extractNumber = (itemName: string): number | null => {
  const match = itemName.match(/\d+/);
  if (match && match[0]) {
    return parseInt(match[0], 10);
  }
  return null;
};
