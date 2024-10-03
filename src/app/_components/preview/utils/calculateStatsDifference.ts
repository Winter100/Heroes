export const calculateStatsDifference = (data, combinedStats) => {
  const resultStats = [];

  for (const dataItem of data) {
    const combinedItem = combinedStats.find(
      (item) => item.stat_name === dataItem.stat_name,
    );

    let statValue = parseInt(dataItem.stat_value);

    if (combinedItem) {
      statValue -= parseInt(combinedItem.stat_value); // 일치하는 combinedStats 값을 빼기
    }

    resultStats.push({
      stat_name: dataItem.stat_name,
      stat_value: statValue.toString(),
    });
  }

  return resultStats;
};
