function getExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  // Adjust if current month is less than joining month
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}.${months}`; 
  // OR return `${years} years ${months} months`;
}


export default getExperience;