window.addEventListener('DOMContentLoaded', () => {
    const li = document.querySelectorAll('.header__list-item')
    const wrapper = document.querySelector('.wrapper')

    const header = document.querySelector('header')

    const homeS = document.querySelector('section.hello')
    const servicesS = document.querySelector('section.services')
    const pricingS = document.querySelector('section.price')
    const faqS = document.querySelector('section.faq')
    const contactusS = document.querySelector('section.contact')

    const burgerBtn = document.querySelector('.header__burger')
    const burgerBody = document.querySelector('ul.header__list')

    const openBurger = () => {
        burgerBtn.classList.add('show')
        burgerBody.style.top = '50%'
    }

    const closeBurger = () => {
        burgerBtn.classList.remove('show')
        burgerBody.style.top = '-100%'
    }

    burgerBtn.addEventListener('click', () => {
        if(burgerBtn.classList.contains('show')){
            closeBurger()
        } else openBurger()
    })

    li.forEach(el => el.addEventListener('click', () => {
        const scrolling = (section) => {
            wrapper.scrollTo({ top: (section.offsetTop - header.clientHeight), behavior: "smooth" })
        }
        switch (el.id) {
            case 'home': scrolling(homeS)
                break;
            case 'services': scrolling(servicesS)
                break;
            case 'pricing': scrolling(pricingS)
                break;
            case 'faq': scrolling(faqS)
                break;
            case 'contact-us': scrolling(contactusS)
                break;
        }
    }))
})