export function setupCounter(element, secondElement) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    secondElement.innerHTML = `<button>tlacitko</button>second use of counter: ${count}`;
  }

  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
