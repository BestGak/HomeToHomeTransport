// header menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));

const mobileItems = document.querySelectorAll('.menu nav ul li a');
mobileItems.forEach((item) => item.addEventListener('click' , () => document.querySelector('html').classList.toggle('active')))

// behavior scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
	