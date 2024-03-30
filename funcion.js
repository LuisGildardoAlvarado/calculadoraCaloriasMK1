const calculate = document
  .getElementById("calculate")
  .addEventListener("submit", formCalculate);

// Funciones
function formCalculate(e) {
  e.preventDefault();

  // DATA
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const PAF = parseFloat(document.getElementById("PAF").value);
  const men = document.querySelector("#men");
  const women = document.querySelector("#women");

  if (men.checked) {
    const BMHBm = parseFloat(
      (66.473 + 13.751 * weight + 5.0033 * height - 6.755 * age).toFixed(2)
    ); //Basal Metabolic Harris-Benedict in men
    const BMMSm = parseFloat(
      (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2)
    ); //Basal Metabolic Miffin-St.Jeor in men
    const BMPromm = parseFloat(((BMHBm + BMMSm) / 2).toFixed(2));

    const TEFm = BMPromm * 0.1; //Thermogenic Effect Food
    const TEEm = parseFloat((BMPromm * PAF + TEFm).toFixed(2)); //Total Energy Expenditure

    const BMP = (document.getElementById(
      "BMP"
    ).textContent = `Metabolismo basal: ${BMPromm} kcals`);
    const TEE = (document.getElementById(
      "TEE"
    ).textContent = `Calorias de mantenimiento: ${TEEm} kcals`);
    return BMP, TEE;
  }

  if (women.checked) {
    const BMHBw = parseFloat(
      (655.1 + 9.463 * weight + 1.8 * height - 4.6756 * age).toFixed(2)
    ); //Basal Metabolic Harris-Benedict in women
    const BMMSw = parseFloat(
      (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2)
    ); //Basal Metabolic Miffin-St.Jeor in women
    const BMPromw = parseFloat(((BMHBw + BMMSw) / 2).toFixed(2));

    const TEFw = BMPromw * 0.1; //Thermogenic Effect Food
    const TEEw = parseFloat((BMPromw * PAF + TEFw).toFixed(2)); //Total Energy Expenditure

    const BMP = (document.getElementById(
      "BMP"
    ).textContent = `Metabolismo basal: ${BMPromw} kcals`);
    const TEE = (document.getElementById(
      "TEE"
    ).textContent = `Calorias de mantenimiento: ${TEEw} kcals`);
    return BMP, TEE;
  }
}
