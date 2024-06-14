

const createDataBars = (data) => { //data is given a placeholder as parameter to the arrow function
  // Find the maximum amount
  const maxAmount = data.reduce((max, item) => item.amount > max ? item.amount : max, 0); //🚩When you omit the curly braces, the arrow function has an implicit return, meaning it automatically returns the result of the expression without needing the return keyword.
  //max = accumulator item= currentValue

  console.log("Maximum amount:", maxAmount); // For debugging purposes

  const maxBarHeight = 10; // in rem

  // Loop through the data to calculate and apply heights
  data.forEach(item => {//data is the array of objects passed as a parameter to createDataBars.
    const barHeight = (item.amount / maxAmount) * maxBarHeight;
    const barElement = document.querySelector(`.bar${item.day.charAt(0).toUpperCase() + item.day.slice(1)}`);
    if (barElement) {
      barElement.style.height = `${barHeight}rem`;
    }
       // Targeting  the corresponding amount div and set its content
       const barGrpElement = barElement.parentElement;//🚩the se of parentEloeent was the 🗝️ here 
       const amountElement = barGrpElement.querySelector('.amount');
       if (amountElement) {
         amountElement.innerHTML = item.amount;
       }
  });
};


//------Fetching Data : -----------

const fetchDataAsync = async () => {
  try {
    const response = await fetch('data.json'); // Ensure the path is correct
    const parsedData = await response.json();
    createDataBars(parsedData);// 'parsedData' is the argument
  } catch (error) {
    console.error(error);
  }
};


fetchDataAsync();














/*


From Tool Kit:
const max = numbers.reduce((accumulator, currentValue) => { //accumulator starts with the first element of the array(initial value) (numbers[0]).
  return currentValue > accumulator ? currentValue : accumulator;//On each iteration, it compares currentValue with accumulator. If currentValue is greater, it updates accumulator; otherwise, it keeps the current value of accumulator. - Finally, it returns the maximum value.
}, numbers[0]);// numbers[0] is the initial value is the second argument given to the reduce method

console.log(max); // Output: 8

First try:
iterate through the array items and check each amount on the item
createDataBars.forEach(dayBar.amount => {

  let maxAmountBar = find( //max amount quantity of all the amounts)
});
*/

