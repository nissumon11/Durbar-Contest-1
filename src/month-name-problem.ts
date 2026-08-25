const getMonthName = (monthNumber: number): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthNumber - 1];
};

console.log(getMonthName(2));
console.log(getMonthName(4));
console.log(getMonthName(6));
console.log(getMonthName(3));
console.log(getMonthName(1));
console.log(getMonthName(9));
