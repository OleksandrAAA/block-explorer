$(document).ready(function() {
  /* Add custom javascript code here */
});

function numberToCurrencyWithUnit(inputString) {

  const resultString = inputString.replace(/,/g, '');
  const number = parseFloat(resultString);

  if (isNaN(number))
    return "";

  if (number >= 1000000000)
    return (number / 1000000000).toFixed(2) + "B";
  
  if (number >= 1000000)
    return (number / 1000000).toFixed(2) + "M";

  if (number >= 1000)
    return (number / 1000).toFixed(2) + "K";

  return number.toString();
}
