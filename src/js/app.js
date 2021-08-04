document.addEventListener('DOMContentLoaded', function() {
//Табы
document.querySelectorAll('.service-list__link').forEach(function(tabsBtn) {
	tabsBtn.addEventListener('click', function(event) {
		const path = event.currentTarget.dataset.path

		document.querySelectorAll('.service-item').forEach(function(tabContent) {
			tabContent.classList.remove('services-item--active')
		})

		document.querySelectorAll('.service-list__link').forEach(function(tabContent) {
			tabContent.classList.remove('service-list__link--active')
		})

		document.querySelector(`[data-path="${path}"]`).classList.add('service-list__link--active')
		document.querySelector(`[data-target="${path}"]`).classList.add('services-item--active')
		})
	})

// Кнопки
document.querySelectorAll('.button-js-open').forEach(function(tabsBtn) {
	tabsBtn.addEventListener('click', function(event) {
		let path = event.currentTarget.dataset.path

		document.querySelectorAll('.blok-js-active').forEach(function(tabContent) {
			tabContent.classList.remove('btn--active','btn--menu')
		})

		let test = document.querySelector(`[data-target="${path}"]`).getAttribute('data-target')
		
		if (test === 'six-btn') {
			document.querySelector(`[data-target="${path}"]`).classList.add('btn--menu')
		} else {
			document.querySelector(`[data-target="${path}"]`).classList.add('btn--active')
		}

		})
	})

// Кнопки Показать все
document.querySelectorAll('.service-brands__link').forEach(function(tabsBtn) {
	tabsBtn.addEventListener('click', function(event) {
		let path = event.currentTarget.dataset.path

		document.querySelector(`[data-target="${path}"]`).classList.add('all-open--active')

		})
	})



})


const swiperService = new Swiper('.swiper-container--service', {
	// Optional parameters
	// loop: true,
	width: 250,
  spaceBetween: 10,
	centeredSlides: true,


	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperBrands = new Swiper('.swiper-container--brands', {
	// Optional parameters
	// loop: true,
	width: 240,
  spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperType = new Swiper('.swiper-container--type', {
	// Optional parameters
	// loop: true,
	width: 240,
  spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperPrice = new Swiper('.swiper-container--price', {
	// Optional parameters
	// loop: true,
	width: 260,
  spaceBetween: 40,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
