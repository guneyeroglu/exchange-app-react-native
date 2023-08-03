export const moneyFormat = (money) => {
  const list = Number(money);

  if (list > 10000) {
    return list.toFixed(1);
  }

  if (list > 1000) {
    return list.toFixed(2);
  }

  if (list > 100) {
    return list.toFixed(3);
  }

  return list.toFixed(4);
};
