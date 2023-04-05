const navBtn = document.querySelector('.nav__burger')
const barsIcon = document.querySelector('.bx-menu')
const xIcon = document.querySelector('.bx-x')
const navList = document.querySelector('.nav__list--mobile')
const navListItem = document.querySelectorAll('.nav__item')

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

const handleNav = () => {
	barsIcon.classList.toggle('hide')
	xIcon.classList.toggle('hide')
	navList.classList.toggle('show-navigation')

	navListItem.forEach(listItem => {
		listItem.addEventListener('click', () => {
			xIcon.classList.add('hide')
			barsIcon.classList.remove('hide')
			navList.classList.remove('show-navigation')
		})
	})
}

navBtn.addEventListener('click', handleNav)
