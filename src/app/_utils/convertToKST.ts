export const convertToKST = (utcDate: string): string => {
  try {
    const date = new Date(utcDate);

    return new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }).format(date);
  } catch {
    return '';
  }
};
