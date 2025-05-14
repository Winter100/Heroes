export const convertTradeType = (type: 'buy' | 'sell') => {
  return type === 'buy' ? '구매' : '판매';
};
