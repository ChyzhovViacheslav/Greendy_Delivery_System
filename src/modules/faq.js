const text = document.querySelectorAll('.faq__item-text')
const btn = document.querySelectorAll('.faq__item-title')
const title = document.querySelectorAll('.faq__item-title h4')
const container = document.querySelectorAll('.faq__item')
const plus1 = document.querySelectorAll('.s1')
const plus2 = document.querySelectorAll('.s2')

text.forEach(el => {
    el.style.maxHeight = '0px'
    el.style.overflow = 'hidden'
    el.style.marginTop = '0px'
})

const showText = (index) => {
    text[index].classList.add('active')
    text[index].style.marginTop = '16px'
    text[index].style.maxHeight = `${text[index].scrollHeight}px`
    title[index].style.color = '#00B871'
    container[index].style.border = '1.5px solid #00B871'
    plus1[index].style.transform = 'translate(-50%, -50%) rotate(180deg)'
    plus1[index].style.backgroundColor = '#00B871'
    plus2[index].style.transform = 'translate(-50%, -50%) rotate(360deg)'
    plus2[index].style.opacity = '0'
}

const hideText = (index) => {
    text[index].classList.remove('active')
    text[index].style.marginTop = '0px'
    text[index].style.maxHeight = '0px'
    title[index].style.color = '#161E2E'
    container[index].style.border = '1.5px solid #D2D6DC'
    plus1[index].style.transform = 'translate(-50%, -50%) rotate(0deg)'
    plus1[index].style.backgroundColor = '#6B7280'
    plus2[index].style.transform = 'translate(-50%, -50%) rotate(90deg)'
    plus2[index].style.opacity = '1'
}

btn.forEach((el, i) => {
    el.addEventListener('click' , () => {
        if(text[i].classList.contains('active')){
            hideText(i)
        } else{
            showText(i)
        }
    })
})