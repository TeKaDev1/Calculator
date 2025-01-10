function calculateBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let heightCm = parseFloat(document.getElementById('height').value);
  let heightM = heightCm / 100; // Convert height from cm to m
  if (weight && heightM) {
    let bmi = (weight / (heightM * heightM)).toFixed(2);
    document.getElementById('bmi-result').value = 'BMI: ' + bmi;
  } else {
    document.getElementById('bmi-result').value = 'Please enter valid weight and height';
  }
}

function convertTemperature() {
  let temp = parseFloat(document.getElementById('temp-input').value);
  let unit = document.getElementById('temp-unit').value;
  let result;
  if (unit === 'C') {
    result = (temp * 9/5) + 32;
    unit = 'F';
  } else {
    result = (temp - 32) * 5/9;
    unit = 'C';
  }
  document.getElementById('temp-result').value = 'Result: ' + result.toFixed(2) + '°' + unit;
}
