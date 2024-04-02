export function Calculations(weight, height, age, PAF, gender) {
  if (gender === "men") {
    // Men
    //Basal Metabolic Harris-Benedict in men
    const BMHBm = parseFloat(
      (66.473 + 13.751 * weight + 5.0033 * height - 6.755 * age).toFixed(2)
    );
    //Total Energy Expenditure
    const TEEm = parseFloat((BMHBm * PAF).toFixed(2));

    const cals = { BM: BMHBm, TEE: TEEm };
    return cals;
  }
  if (gender === "women") {
    // Women
    //Basal Metabolic Harris-Benedict in women
    const BMHBw = parseFloat(
      (655.1 + 9.463 * weight + 1.8 * height - 4.6756 * age).toFixed(2)
    );

    //Total Energy Expenditure
    const TEEw = parseFloat((BMHBw * PAF).toFixed(2));

    const cals = { BM: BMHBw, TEE: TEEw };
    return cals;
  }
}
