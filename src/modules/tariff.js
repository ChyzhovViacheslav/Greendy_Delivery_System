const month = document.querySelector('#month')
const year = document.querySelector('#year')
const current = document.querySelector('#current')

const basic = document.querySelector('#basic')
const pro = document.querySelector('#pro')
const premium = document.querySelector('#premium')
const currentTariff = document.querySelectorAll('#current-tariff')

current.style.height = `${month.offsetHeight}px`
current.style.width = `${month.offsetWidth + 8}px`
current.style.left = '8px'
month.classList.add('active')
const monthClickHandler = () => {
    current.style.width = `${month.offsetWidth + 8}px`
    current.style.left = '8px'
    basic.textContent = `$49`
    pro.textContent = `$99`
    premium.textContent = `$128`
    currentTariff.forEach(el => el.textContent = 'monthly')
    year.classList.remove('active')
    month.classList.add('active')
}

const yearClickHandler = () => {
    current.style.width = `${year.offsetWidth}px`
    current.style.left = `${8 + month.offsetWidth + 12}px`
    basic.textContent = `$${49 * 12}`
    pro.textContent = `$${99 * 12}`
    premium.textContent = `$${128 * 12}`
    currentTariff.forEach(el => el.textContent = 'yearly')
    month.classList.remove('active')
    year.classList.add('active')
}

month.addEventListener('click', () => monthClickHandler())
year.addEventListener('click', () => yearClickHandler())
