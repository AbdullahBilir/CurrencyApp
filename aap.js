let firstOption = document.querySelector("#changesDöviz");
let secondOption = document.querySelector("#changeDöviz");
let firstİnput = document.querySelector("#firstİnput");
let button = document.querySelector(".padding");
let secondİnput = document.querySelector("#secondİnput");

let ArrayOption = [
  "EUR",
  "USD",
  "TRY",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "ZAR",
];

runEventListener();
cereateOption();
function runEventListener() {
  button.addEventListener("click", () => {
    firstCurency = firstOption.options[firstOption.selectedIndex].textContent;

    secondCurency =
      secondOption.options[secondOption.selectedIndex].textContent;

    getCurrenty(firstCurency, secondCurency);
  });
}

async function getCurrenty(firstCurency, secondCurency) {
  let url =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Fo9eaZMR3ODJ2zwMUZJiD0EvBQCYUaGwTNYavgy6&base_currency=";
  let response = await fetch(`${url}${firstCurency}`);

  let result = await response.json();

  let xhr = await result.data;

  let firstvalue = await xhr[secondCurency];
  let sonuc = Number(firstİnput.value) * firstvalue;
  secondİnput.value = sonuc;
}

function cereateOption() {
  ArrayOption.forEach((value) => {
    let option = document.createElement("option");
    option.textContent = value;
    firstOption.appendChild(option);

    let option1 = document.createElement("option");
    option1.textContent = value;
    secondOption.appendChild(option1);
  });
}
