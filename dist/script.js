const counter = document.querySelector('.quantity')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')

function updateCounter(e) {
  e.preventDefault()

  const element = e.currentTarget.classList
  let count = counter.value

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

// Form Validation

const button = document.querySelector('#submit')
const message = document.querySelector('.success-message')
const selected = document.querySelectorAll('.sticker')

function formValidation(e) {
  e.preventDefault()

  const checkboxes = document.querySelectorAll('input[name="sticker"]:checked')

  const items = []
  checkboxes.forEach((checkbox) => {
    items.push(checkbox.value)
  })

  const counterEmpty = counter.value === '0' || counter.value === ''

  if (counterEmpty) {
    counter.classList.add('error')
    updateCounter()
  } else if (items.length === 0) {
    selected[0].classList.add('error')
  } else {
    message.textContent = 'Formulário enviado com sucesso!'
    selected[0].classList.remove('error')

    setTimeout(() => {
      message.innerHTML = ''
    }, 2000)

    counter.value = ''
    decrease.disabled = true
  }
}

button.addEventListener('click', formValidation)
