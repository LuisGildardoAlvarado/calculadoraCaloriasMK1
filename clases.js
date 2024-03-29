class Calculations {
  constructor(weight, height, age, PAF) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.PAF = PAF;
  }

  calculateForMen() {
    //Basal Metabolic Harris-Benedict in men
    const BMHBm = parseFloat(
      (
        66.473 +
        13.751 * this.weight +
        5.0033 * this.height -
        6.755 * this.age
      ).toFixed(2)
    );
    //Basal Metabolic Miffin-St.Jeor in men
    const BMMSm = parseFloat(
      (10 * this.weight + 6.25 * this.height - 5 * this.age + 5).toFixed(2)
    );
    const BMPromm = parseFloat(((BMHBm + BMMSm) / 2).toFixed(2));
    //Thermogenic Effect Food
    const TEFm = BMPromm * 0.1;
    //Total Energy Expenditure
    const TEEm = parseFloat((BMPromm * this.PAF + TEFm).toFixed(2));

    const BMP = (document.getElementById(
      "BMP"
    ).textContent = `Metabolismo basal: ${BMPromm} kcals`);
    const TEE = (document.getElementById(
      "TEE"
    ).textContent = `Calorias de mantenimiento: ${TEEm} kcals`);
  }
  calculateForWomen() {
    //Basal Metabolic Harris-Benedict in women
    const BMHBw = parseFloat(
      (
        655.1 +
        9.463 * this.weight +
        1.8 * this.height -
        4.6756 * this.age
      ).toFixed(2)
    );
    //Basal Metabolic Miffin-St.Jeor in women
    const BMMSw = parseFloat(
      (10 * this.weight + 6.25 * this.height - 5 * this.age - 161).toFixed(2)
    );
    const BMPromw = parseFloat(((BMHBw + BMMSw) / 2).toFixed(2));
    //Thermogenic Effect Food
    const TEFw = BMPromw * 0.1;
    //Total Energy Expenditure
    const TEEw = parseFloat((BMPromw * this.PAF + TEFw).toFixed(2));

    const BMP = (document.getElementById(
      "BMP"
    ).textContent = `Metabolismo basal: ${BMPromw} kcals`);
    const TEE = (document.getElementById(
      "TEE"
    ).textContent = `Calorias de mantenimiento: ${TEEw} kcals`);
  }
}

// DOM
const calculate = document
  .getElementById("calculate")
  .addEventListener("submit", formCalculate);

function formCalculate(e) {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const PAF = parseFloat(document.getElementById("PAF").value);

  const men = document.querySelector("#men");
  const women = document.querySelector("#women");

  const cal = new Calculations(weight, height, age, PAF);
  if (men.checked) {
    cal.calculateForMen();
  }
  if (women.checked) {
    cal.calculateForWomen();
  }

  e.preventDefault();
}
