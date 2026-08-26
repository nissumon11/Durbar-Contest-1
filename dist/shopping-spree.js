"use strict";
function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    const remainingMoney = totalMoney - cakeCost;
    if (remainingMoney < 0) {
        return remainingMoney;
    }
    return remainingMoney % donutCost;
}
console.log(calculateRemainingMoney(100, 20, 10));
console.log(calculateRemainingMoney(50, 30, 7));
