  export const calculateExperience = () => {
  const startDate = new Date("2022-03-07");
  const currentDate = new Date();

  let totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  // Adjust if current day is before start day
  if (currentDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} yrs ${months}mos`;
};

