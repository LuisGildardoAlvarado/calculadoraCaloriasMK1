import { Calculations } from "./components/Calculos";

document.querySelector("form").addEventListener("submit", formCalculate);
// const men = document.querySelector("#men");
// const women = document.querySelector("#women");
// const weight = parseFloat(document.getElementById("weight").value);
// const height = parseFloat(document.getElementById("height").value);
// const age = parseFloat(document.getElementById("age").value);
// const PAF = parseFloat(document.getElementById("PAF").value);

// Funciones
function formCalculate(e) {
  const data = Object.fromEntries(new FormData(e.target));

  const cals = Calculations(
    data.weight,
    data.height,
    data.age,
    data.PAF,
    data.gender
  );
  const BMP = (document.getElementById(
    "BMP"
  ).textContent = `Metabolismo basal: ${cals.BM} kcals`);
  const TEE = (document.getElementById(
    "TEE"
  ).textContent = `Calorias de mantenimiento: ${cals.TEE} kcals`);
  e.preventDefault();
}
