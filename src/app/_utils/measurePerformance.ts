export const measurePerformance = (name: string, callback: () => void) => {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();

  console.log(`${name} 실행 시간: ${(endTime - startTime).toFixed(8)}ms`);
};
