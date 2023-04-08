const navBtn = document.querySelector('.nav__burger')
const barsIcon = document.querySelector('.bx-menu')
const xIcon = document.querySelector('.bx-x')
const navList = document.querySelector('.nav__list--mobile')
const navListItem = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const scrollUp = document.querySelector('.scroll-up')
const footerYear = document.querySelector('.footer__year')

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

window.onscroll = () => {
	if (scrollY > 99) {
		scrollUp.classList.remove('hide')
	} else {
		scrollUp.classList.add('hide')
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

///////////////////////////

let swiper1 = new Swiper('.homeSwiper', {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let swiper = new Swiper('.tips__box', {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		620: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		console.log(scrollY)
	})
})

///////////////////////////

const sectionAnimation = ScrollReveal({
	origin: 'bottom',
	distance: '4rem',
	duration: 2500,
	delay: 400,
})
sectionAnimation.reveal('.needtosee__title, .needtosee__text, .tips__header, .tips__text')

sectionAnimation.reveal('.rome__box--first, .naples__box--first, .amalfi__box--first, .procida__box--first', {
	origin: 'left',
	delay: 100,
	duration: 1500,
})

sectionAnimation.reveal('.rome__box--second, .naples__box--second, .amalfi__box--second, .procida__box--second', {
	origin: 'right',
	delay: 100,
	duration: 1500,
})
