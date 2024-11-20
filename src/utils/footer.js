const footer = () => {
    const menu = document.querySelector('.sliders_box')

    if (window.innerWidth < 1024) {
        menu.addEventListener('click', (e) => {
            console.log(e.target, e.currentTarget)
            if (e.target.classList.contains('slider')) {
                if (e.target.nextElementSibling.style.display == '' || e.target.nextElementSibling.style.display == 'none') {
                    e.target.nextElementSibling.style.display = 'block';
                    e.target.lastElementChild.firstElementChild.classList.add('rotate-svg')
                }
                else {
                    e.target.nextElementSibling.style.display = 'none';
                    e.target.lastElementChild.firstElementChild.classList.remove('rotate-svg')
                }
            }
            else if (e.target.tagName === 'SPAN') {
                if (e.target.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.nextElementSibling.style.display == 'none') {
                    e.target.parentElement.nextElementSibling.style.display = 'block';
                    e.target.nextElementSibling.firstElementChild.classList.add('rotate-svg')
                }
                else {
                    e.target.parentElement.nextElementSibling.style.display = 'none';
                    e.target.nextElementSibling.firstElementChild.classList.remove('rotate-svg')
                }
            }
            else if (e.target.tagName === 'svg') {
                if (e.target.parentElement.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.parentElement.nextElementSibling.style.display == 'none') {
                    e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
                    e.target.classList.add('rotate-svg')
                }
                else {
                    e.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
                    e.target.classList.remove('rotate-svg')
                }
            }
            else if (e.target.tagName === 'path') {
                if (e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display == 'none') {
                    e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'block';
                    e.target.parentElement.classList.add('rotate-svg')
                }
                else {
                    e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'none';
                    e.target.parentElement.classList.remove('rotate-svg')
                }
            }
        })
    }
}

export default footer;