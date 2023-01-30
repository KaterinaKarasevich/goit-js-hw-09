
const formEl = document.querySelector(".form");
console.log(formEl)
formEl.addEventListener("submit", onFormSubmit);

let timerId = null;

function onFormSubmit(e) {
  e.preventDefault();
  clearTimeout(timerId);

  const { delay, step, amount } = e.target.elements;
  let stepValue = Number(delay.value);

  for (let position = 1; position <= amount.value; position +=1) {
    createPromise(position, stepValue)
  
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    stepValue += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
     setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
 }, delay);
 });
}



