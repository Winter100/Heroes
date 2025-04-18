export const parseKoreanDate = (dateStr: string): Date => {
  const [year, month, day, timePart] = dateStr
    .split('. ')
    .map((part) => part.trim());
  const [period, time] = timePart.split(' ');
  const [hourStr, minute, second] = time.split(':');

  let hour = parseInt(hourStr, 10);
  if (period === '오후' && hour !== 12) hour += 12;
  if (period === '오전' && hour === 12) hour = 0;

  const date = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    hour,
    parseInt(minute, 10),
    parseInt(second, 10)
  );

  if (isNaN(date.getTime())) {
    throw new Error('잘못된 날짜 형식입니다.');
  }
  return date;
};

export const getTimeDifference = (inputDateStr: string): string => {
  try {
    const inputDate = parseKoreanDate(inputDateStr);
    const now = new Date();
    const diffMs = now.getTime() - inputDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) {
      return '방금';
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else {
      return `${diffDays}일 전`;
    }
  } catch (e) {
    console.error(e);
    return '날짜를 처리할 수 없습니다.';
  }
};

export const getYearMonthDay = (dateStr: string): string => {
  try {
    const [year, month, day] = dateStr.split('. ').map((part) => part.trim());

    // 연, 월, 일이 숫자인지 확인
    if (!/^\d+$/.test(year) || !/^\d+$/.test(month) || !/^\d+$/.test(day)) {
      throw new Error('연, 월, 일은 숫자여야 합니다.');
    }

    return `${year}. ${month}. ${day}`;
  } catch (e) {
    console.error(e);
    return '잘못된 날짜 형식입니다.';
  }
};

export const getRemainingTime = (targetDateString: string): string => {
  // UTC 시간을 한국 시간으로 변환
  const targetDate = new Date(targetDateString);
  const koreanTime = new Date(
    targetDate.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  );

  // 현재 시간을 한국 시간으로 변환
  const now = new Date();
  const currentKoreanTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  );

  const timeDiff = koreanTime.getTime() - currentKoreanTime.getTime();

  const twentyFourHours = 24 * 60 * 60 * 1000;

  if (timeDiff < 0) {
    return '종료';
  }

  if (timeDiff <= twentyFourHours) {
    // 24시간 이내인 경우 시간과 분으로 표시
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}시간 ${minutes}분`;
  } else {
    // 24시간 초과인 경우 일수로 표시
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return `${daysDiff}일`;
  }
};
