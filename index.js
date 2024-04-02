import { Calculations } from "./components/Calculos";

document.querySelector("form").addEventListener("submit", formCalculate);
// const men = document.querySelector("#men");
// const women = document.querySelector("#women");
// const weight = parseFloat(document.getElementById("weight").value);
// const height = parseFloat(document.getElementById("height").value);
// const age = parseFloat(document.getElementById("age").value);
// const PAF = parseFloat(document.getElementById("PAF").value);
document.querySelector("form").addEventListener("reset", () => {
  document.getElementById("results").innerHTML = `<div>
  <p id="BMP">Metabolismo basal:</p>
  <p id="TEE">Calorias de mantenimiento:</p>
  <p>Calorias para volumen:</p>
  <p>Calorias para definir:</p>
  </div>
`;
});
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

  const results = document.getElementById("results");

  const resultHTML = `<div>
          <p id="BMP">Metabolismo basal:  ${cals.BM} kcals</p>
          <p id="TEE">Calorias de mantenimiento:  ${cals.TEE} kcals</p>
          <p>Calorias para volumen:  ${cals.TEE + 500.0} kcals</p>
          <p>Calorias para definir:  ${cals.TEE - 500.0} kcals</p>
          </div>
  `;
  results.innerHTML = resultHTML;

  e.preventDefault();
}
