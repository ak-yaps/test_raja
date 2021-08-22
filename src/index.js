require("../src/stylesheets/main.scss");


const test = document.getElementById('nb-select');
const result = document.getElementById('showExo');
console.log(test);

test.addEventListener('change', () => {
  let getNb = test.value;

  if (!isNaN(getNb)) {

    let isEven = getNb % 2;

    if (isEven === 0) {
      console.log('PAIR');
    } else {
      console.log('IMPAIR');
    }

  } else {
    console.log('it Not a Number')
  }
  result.innerHTML = getNb;
})