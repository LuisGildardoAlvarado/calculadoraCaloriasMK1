export function Calculations(weight, height, age, PAF, gender) {
  if (gender === "men") {
    // Men
    //Basal Metabolic Harris-Benedict in men
    const BMHBm = parseFloat(
      (66.473 + 13.751 * weight + 5.0033 * height - 6.755 * age).toFixed(2)
    );
    //Basal Metabolic Miffin-St.Jeor in men
    const BMMSm = parseFloat(
      (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2)
    );
    const BMPromm = parseFloat(((BMHBm + BMMSm) / 2).toFixed(2));
    //Thermogenic Effect Food
    const TEFm = BMPromm * 0.1;
    //Total Energy Expenditure
    const TEEm = parseFloat((BMPromm * PAF + TEFm).toFixed(2));

    const cals = { BM: BMPromm, TEE: TEEm };
    return cals;
  }
  if (gender === "women") {
    // Women
    //Basal Metabolic Harris-Benedict in women
    const BMHBw = parseFloat(
      (655.1 + 9.463 * weight + 1.8 * height - 4.6756 * age).toFixed(2)
    );

    //Basal Metabolic Miffin-St.Jeor in women
    const BMMSw = parseFloat(
      (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2)
    );
    const BMPromw = parseFloat(((BMHBw + BMMSw) / 2).toFixed(2));
    //Thermogenic Effect Food
    const TEFw = BMPromw * 0.1;
    //Total Energy Expenditure
    const TEEw = parseFloat((BMPromw * PAF + TEFw).toFixed(2));

    const cals = { BM: BMPromw, TEE: TEEw };
    return cals;
  }
}
