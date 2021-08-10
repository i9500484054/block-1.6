/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./js/app.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./css/main.css");
// import _ from 'lodash';


// import './scss/main.scss';


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5jY2UxZTVkMmVlMzdkZjNkMWJmMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0MsMENBQTBDLEtBQUs7QUFDL0MsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hELElBQUk7QUFDSiwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7VUNqSUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FCO0FBQ0c7QUFDeEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nzcy9tYWluLmNzcz80NDgyIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4vL9Ci0LDQsdGLXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWxpc3RfX2xpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYnNCdG4pIHtcclxuXHR0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGNvbnN0IHBhdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aFxyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0dGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlcy1pdGVtLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1saXN0X19saW5rJykuZm9yRWFjaChmdW5jdGlvbih0YWJDb250ZW50KSB7XHJcblx0XHRcdHRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZS1saXN0X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXRoPVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2UtbGlzdF9fbGluay0tYWN0aXZlJylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlcy1pdGVtLS1hY3RpdmUnKVxyXG5cdFx0fSlcclxuXHR9KVxyXG5cclxuLy8g0JrQvdC+0L/QutC4XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tanMtb3BlbicpLmZvckVhY2goZnVuY3Rpb24odGFic0J0bikge1xyXG5cdHRhYnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bGV0IHBhdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aFxyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9rLWpzLWFjdGl2ZScpLmZvckVhY2goZnVuY3Rpb24odGFiQ29udGVudCkge1xyXG5cdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tYWN0aXZlJywnYnRuLS1tZW51JylcclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXHJcblx0XHRcclxuXHRcdGlmICh0ZXN0ID09PSAnc2l4LWJ0bicpIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbWVudScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYnRuLS1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cclxuXHRcdH0pXHJcblx0fSlcclxuXHJcbi8vINCa0L3QvtC/0LrQuCDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1icmFuZHNfX2xpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYnNCdG4pIHtcclxuXHR0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxldCBwYXRoID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhdGhcclxuXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWxsLW9wZW4tLWFjdGl2ZScpXHJcblxyXG5cdFx0fSlcclxuXHR9KVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHN3aXBlclNlcnZpY2UgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lci0tc2VydmljZScsIHtcclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcblx0Ly8gbG9vcDogdHJ1ZSxcclxuXHR3aWR0aDogMjUwLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cclxuXHQvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuXHRzY3JvbGxiYXI6IHtcclxuXHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyQnJhbmRzID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXItLWJyYW5kcycsIHtcclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcblx0Ly8gbG9vcDogdHJ1ZSxcclxuXHR3aWR0aDogMjQwLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cclxuXHQvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHR0eXBlOiAnYnVsbGV0cycsXHJcblx0XHRcdGNsaWNrYWJsZTogJ3RydWUnLFxyXG5cdFx0fSxcclxuXHJcblx0Ly8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcblx0c2Nyb2xsYmFyOiB7XHJcblx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlclR5cGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lci0tdHlwZScsIHtcclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcblx0Ly8gbG9vcDogdHJ1ZSxcclxuXHR3aWR0aDogMjQwLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cclxuXHQvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHR0eXBlOiAnYnVsbGV0cycsXHJcblx0XHRcdGNsaWNrYWJsZTogJ3RydWUnLFxyXG5cdFx0fSxcclxuXHJcblx0Ly8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcblx0c2Nyb2xsYmFyOiB7XHJcblx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlclByaWNlID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXItLXByaWNlJywge1xyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuXHQvLyBsb29wOiB0cnVlLFxyXG5cdHdpZHRoOiAyNjAsXHJcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuXHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHJcblxyXG5cdC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdHR5cGU6ICdidWxsZXRzJyxcclxuXHRcdFx0Y2xpY2thYmxlOiAndHJ1ZScsXHJcblx0XHR9LFxyXG5cclxuXHQvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuXHRzY3JvbGxiYXI6IHtcclxuXHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdH0sXHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XHJcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xyXG4vLyBpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9