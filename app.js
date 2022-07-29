// https://calculator.swiftutors.com/return-on-capital-employed-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonCapitalEmployedRadio = document.getElementById('returnonCapitalEmployedRadio');
const profitbeforeInterestRadio = document.getElementById('profitbeforeInterestRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let returnonCapitalEmployed;
let profitbeforeInterest = v1;
let totalAssets = v2;
let currentLiabilities = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

returnonCapitalEmployedRadio.addEventListener('click', function() {
  variable1.textContent = 'Profit before Interest';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Current Liabilities';
  profitbeforeInterest = v1;
  totalAssets = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

profitbeforeInterestRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital Employed (ROCE)';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Current Liabilities';
  returnonCapitalEmployed = v1;
  totalAssets = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital Employed (ROCE)';
  variable2.textContent = 'Profit before Interest';
  variable3.textContent = 'Current Liabilities';
  returnonCapitalEmployed = v1;
  profitbeforeInterest = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital Employed (ROCE)';
  variable2.textContent = 'Profit before Interest';
  variable3.textContent = 'Total Assets';
  returnonCapitalEmployed = v1;
  profitbeforeInterest = v2;
  totalAssets = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonCapitalEmployedRadio.checked)
    result.textContent = `Return on Capital Employed = ${computeReturnonCapitalEmployed().toFixed(2)} %`;

  else if(profitbeforeInterestRadio.checked)
    result.textContent = `Profit before Interest = ${computeProfitbeforeInterest().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

function computeReturnonCapitalEmployed() {
  return (Number(profitbeforeInterest.value) / (Number(totalAssets.value) - Number(currentLiabilities.value))) * 100;
}

function computeProfitbeforeInterest() {
  return (Number(returnonCapitalEmployed.value) / 100) * (Number(totalAssets.value) - Number(currentLiabilities.value));
}

function computeTotalAssets() {
  return (Number(profitbeforeInterest.value) / (Number(returnonCapitalEmployed.value) / 100)) + Number(currentLiabilities.value);
}

function computeCurrentLiabilities() {
  return Number(totalAssets.value) - (Number(profitbeforeInterest.value) / (Number(returnonCapitalEmployed.value) / 100));
}