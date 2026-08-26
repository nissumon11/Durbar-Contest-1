function calculateRemainingMoney(
  totalMoney: number,
  cakeCost: number,
  donutCost: number,
): number {
  const remainingMoney = totalMoney - cakeCost;

  const donuts = Math.floor(remainingMoney / donutCost);

  return remainingMoney - donuts * donutCost;
}

console.log(calculateRemainingMoney(100, 20, 10));
console.log(calculateRemainingMoney(50, 30, 7));
