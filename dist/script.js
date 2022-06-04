const counter = document.querySelector('.quantity')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')

counter.addEventListener('change', () => {
  const count = counter.value

  counter.setAttribute('value', count)
  counter.valueAsNumber = count

  if (counter.value < 1) decrease.disabled = true
  else decrease.disabled = false
})

decrease.addEventListener('click', (e) => {
  let count = counter.value

  e.preventDefault()

  if (count > 0) count--

  counter.setAttribute('value', count)
  counter.valueAsNumber = count

  if (counter.value < 1) decrease.disabled = true
  else decrease.disabled = false
})

increase.addEventListener('click', (e) => {
  let count = counter.value

  e.preventDefault()

  if (count >= 0) count++

  counter.setAttribute('value', count)
  counter.valueAsNumber = count

  if (counter.value < 1) decrease.disabled = true
  else decrease.disabled = false
})
