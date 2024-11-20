const hamburger = () => {
    const menu = document.querySelector('.mobile-items-box');
    const ham = document.querySelector('.mobile-nav').firstElementChild.lastElementChild;

    ham.addEventListener('click', (e) => {
        if (e.currentTarget.firstElementChild.classList.contains("ham-svg")) {
            menu.style.display = "flex";
            e.currentTarget.innerHTML = `<svg class="ham-close-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                             <path d="M10.9391 12.0005L4.96942 17.9702L6.03008 19.0309L11.9998 13.0612L17.9694 19.0309L19.0301 17.9702L13.0604 12.0005L19.0301 6.03087L17.9694 4.97021L11.9998 10.9399L6.03008 4.97021L4.96942 6.03087L10.9391 12.0005Z" fill="white"/>
                                        </svg>`;
            document.querySelector('header').style.background = 'rgba(0,0,0,1)';
        }
        else if (e.currentTarget.firstElementChild.classList.contains("ham-close-svg")) {
            menu.style.display = "none";
            e.currentTarget.innerHTML = `<svg class="ham-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6.75H20V5.25H4V6.75Z" fill="white" />
                        <path d="M20 12.75H4V11.25H20V12.75Z" fill="white" />
                        <path d="M20 18.75H4V17.25H20V18.75Z" fill="white" />
                    </svg>`;
            document.querySelector('header').style.background = 'rgba(0,0,0,0)';
        }
    })

    menu.addEventListener('click',(e)=>{
        if(e.target.classList.contains('mobile-item-list')){
            if(e.target.nextElementSibling.style.display == '' || e.target.nextElementSibling.style.display == 'none'){
                e.target.nextElementSibling.style.display = 'flex';
                e.target.lastElementChild.firstElementChild.classList.add('rotate-svg')
            }
            else{
                e.target.nextElementSibling.style.display = 'none';
                e.target.lastElementChild.firstElementChild.classList.remove('rotate-svg')
            }
        }
        else if(e.target.tagName === 'SPAN'){
            if(e.target.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.nextElementSibling.style.display == 'none'){
                e.target.parentElement.nextElementSibling.style.display = 'flex';
                e.target.nextElementSibling.firstElementChild.classList.add('rotate-svg')
            }
            else{
                e.target.parentElement.nextElementSibling.style.display = 'none';
                e.target.nextElementSibling.firstElementChild.classList.remove('rotate-svg')
            }
        }
        else if(e.target.tagName === 'svg'){
            if(e.target.parentElement.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.parentElement.nextElementSibling.style.display == 'none'){
                e.target.parentElement.parentElement.nextElementSibling.style.display = 'flex';
                e.target.classList.add('rotate-svg')
            }
            else{
                e.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
                e.target.classList.remove('rotate-svg')
            }
        }
        else if(e.target.tagName === 'path'){
            if(e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display == '' || e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display == 'none'){
                e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'flex';
                e.target.parentElement.classList.add('rotate-svg')
            }
            else{
                e.target.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'none';
                e.target.parentElement.classList.remove('rotate-svg')
            }
        }
    })
}

export default hamburger;