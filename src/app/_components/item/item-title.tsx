/**
 * 아이템 이름과 티어를 넣으면 티어에 맞게 색깔이 표시됨
 * @returns
 */

import { cn } from '@/lib/utils';

const colorClassObj = {
  일반: 'text-white',
  초급: 'text-green-400',
  중급: 'text-blue-300',
  고급: 'text-purple-500',
  레어: 'text-orange-300',
  전설: 'text-pink-400',
  ['']: 'text-gray-400',
};

function getItemColorClass(name: string) {
  // 1. 만약 name이 비어있거나 올바르지 않다면 기본 회색 리턴
  if (!name) return colorClassObj[''];

  // 2. 오브젝트의 Key 배열(['일반', '초급', '중급', ...])을 뽑아냅니다.
  // 단, 빈 문자열('')은 항상 매칭되므로 검사 대상에서 제외합니다.
  const keys = Object.keys(colorClassObj).filter((key) => key !== '');

  // 3. name에 포함된 등급 키워드를 하나 찾습니다.
  const matchedKey = keys.find((key) => name.includes(key));

  // 4. 매칭된 키가 있다면 해당 색상을, 없다면 기본값(text-gray-400)을 리턴합니다.
  return matchedKey
    ? colorClassObj[matchedKey as keyof typeof colorClassObj]
    : colorClassObj[''];
}

const ItemTitle = ({
  tier,
  className,
  children,
  category,
  name,
  ...props
}: {
  tier: string;
  children: React.ReactNode;
  className?: string;
  category?: string;
  name?: string;
}) => {
  let colorClass = '';
  // 아이템이 장비면서 이름에 초급,중급 을 확인하는 로직이 먼저 들어가야함 조건부로
  if (category === '장비') {
    if (name?.includes('와드네') || name?.includes('에리우')) {
      colorClass = getItemColorClass(name ?? '');
    } else {
      colorClass = colorClassObj[tier as keyof typeof colorClassObj];
    }
  } else {
    colorClass = colorClassObj[tier as keyof typeof colorClassObj];
  }

  return (
    <div className={cn(colorClass, className)} {...props}>
      {children}
    </div>
  );
};

export default ItemTitle;
