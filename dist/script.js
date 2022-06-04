const counter = document.querySelector('.quantity')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')

function updateCounter(e) {
  let count = counter.value
  const element = e.currentTarget.classList

  e.preventDefault()

  if (element.contains('decrease') && count > 0) count--
  else if (element.contains('increase') && count >= 0) count++

  counter.setAttribute('value', count)
  counter.valueAsNumber = count

  if (counter.value < 1) decrease.disabled = true
  else decrease.disabled = false

  if (counter.value > 0) counter.classList.remove('error')
}

counter.addEventListener('change', updateCounter)
decrease.addEventListener('click', updateCounter)
increase.addEventListener('click', updateCounter)
