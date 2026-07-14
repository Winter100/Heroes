import { API_PATH } from '@/app/_constant/keyword';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const tag = searchParams.get('tag');
  const secret = request.headers.get('revalidate-secret');

  if (secret !== process.env.MY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: '인증되지 않은 접근입니다.' },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { message: '태그가 누락되었습니다.' },
      { status: 400 }
    );
  }

  const isValidateTag = Object.values(API_PATH).includes(tag);

  if (!isValidateTag) {
    return NextResponse.json(
      { message: '올바르지 않은 태그입니다.' },
      { status: 401 }
    );
  }

  try {
    revalidateTag(tag);
    return NextResponse.json(
      {
        revalidated: true,
        tag,
        now: Date.now(),
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: '초기화 실패' }, { status: 500 });
  }
};
