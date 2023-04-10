const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateBMI();
});

const calculateBMI = () => {
  let formulaBMI = weight.value / (height.value / 100) ** 2;
  let resultBMICalculate = formulaBMI.toFixed(1);

  let weightCategories = '';
  if (resultBMICalculate < 18.5) {
    weightCategories = 'Underweight';
  }
  if (resultBMICalculate >= 18.5 && resultBMICalculate <= 24.9) {
    weightCategories = 'Normal';
  }
  if (resultBMICalculate >= 25 && resultBMICalculate <= 29.9) {
    weightCategories = 'Overweight';
  }
  if (resultBMICalculate >= 30) {
    weightCategories = 'Obesity';
  }

  form.reset();
  result.innerHTML = `Your BMI is <span class="result">${resultBMICalculate}</span> which means You are <span class="result">${weightCategories}</span>`;
};
