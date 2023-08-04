(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

(function weatherApp () {
  const backgroundImage = document.querySelector('.background-image')
  const searchBar = document.querySelector('#search')
  const submitBtn = document.querySelector('#submit')
  const resetBtn = document.querySelector('#reset')
  let searchQuery
  const symbol = document.querySelector('#symbol')

  // Result Section
  const resultSection = document.querySelector('.result-section')
  const closeBtn = document.querySelector('#close')
  const weatherResult = document.querySelector('.weather-result')
  const celsius = document.querySelector('.celsius')
  const fahrenheit = document.querySelector('.fahrenheit')
  const tempSwitch = document.querySelector('#switch')

  const gif = document.querySelector('.gif')

  function cacheQuery () {
    searchQuery = searchBar.value.toLowerCase().replace(/(\s+)\b/g, '-')
  }

  async function getWeatherData () {
    try {
      const weatherData = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1bbbe4c22d9e4677aac144521232105&q=${searchQuery}`,
        { mode: 'cors' })
      const weatherDataJson = await weatherData.json()
      celsius.innerHTML = await weatherDataJson.current.temp_c + ' &#8451'
      fahrenheit.innerHTML = await weatherDataJson.current.temp_f + ' &#8457'
      const condition = await weatherDataJson.current.condition.text
      weatherResult.textContent = condition

      const icon = await weatherDataJson.current.condition.icon
      symbol.setAttribute('src', `${icon}`)
      if (window.innerWidth > 600) {
        resultSection.classList.remove('hidden')
      }

      backgroundImage.classList.add('slide-down')

      getGif(condition)
    } catch (error) {
      resetBtn.click()
      searchBar.setAttribute('placeholder', 'Location not Found!')
      console.error(error)
    }
  }

  async function getGif (keyword) {
    try {
      const imageData = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=cewBcJgxDHHLhP5fADlJ51t7qP8PtrXQ&s=weather-climate-${keyword}`,
        { mode: 'cors' })

      const imageDataJSON = await imageData.json()
      const imageURL = imageDataJSON.data.images.original.url
      gif.setAttribute(
        'style',
        `background: url(${imageURL}) no-repeat center;
        background-size: stretch`)
    } catch (error) {
      console.error(error)
      const placeholderImage = symbol.getAttribute('src')
      gif.setAttribute(
        'style',
        `background: url(${placeholderImage}) no-repeat center;
        background-size: stretch`)
    }
  }

  function switchTempUnit () {
    if (tempSwitch.checked) {
      celsius.classList.add('hidden')
      fahrenheit.classList.remove('hidden')
    } else {
      fahrenheit.classList.add('hidden')
      celsius.classList.remove('hidden')
    }
  }

  function renderResult () {
    cacheQuery()
    getWeatherData()
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    renderResult()
  })

  closeBtn.addEventListener('click', () => {
    if (window.innerWidth > 600) {
      return resultSection.classList.add('hidden')
    } else {
      backgroundImage.classList.add('slide-up')
      setTimeout(() => {
        backgroundImage.classList.remove('slide-down')
        backgroundImage.classList.remove('slide-up')
      }, 1000)
      resultSection.classList.add('hidden')
    }
  })
  tempSwitch.addEventListener('click', switchTempUnit)
})()


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsWUFBWTtBQUN4RyxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsUUFBUTtBQUN0SCxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYXRoZXJBcHAgKCkge1xyXG4gIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWltYWdlJylcclxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJylcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0JylcclxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpXHJcbiAgbGV0IHNlYXJjaFF1ZXJ5XHJcbiAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bWJvbCcpXHJcblxyXG4gIC8vIFJlc3VsdCBTZWN0aW9uXHJcbiAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtc2VjdGlvbicpXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKVxyXG4gIGNvbnN0IHdlYXRoZXJSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1yZXN1bHQnKVxyXG4gIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cycpXHJcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0JylcclxuICBjb25zdCB0ZW1wU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaCcpXHJcblxyXG4gIGNvbnN0IGdpZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWYnKVxyXG5cclxuICBmdW5jdGlvbiBjYWNoZVF1ZXJ5ICgpIHtcclxuICAgIHNlYXJjaFF1ZXJ5ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFxccyspXFxiL2csICctJylcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MWJiYmU0YzIyZDllNDY3N2FhYzE0NDUyMTIzMjEwNSZxPSR7c2VhcmNoUXVlcnl9YCxcclxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YUpzb24gPSBhd2FpdCB3ZWF0aGVyRGF0YS5qc29uKClcclxuICAgICAgY2Vsc2l1cy5pbm5lckhUTUwgPSBhd2FpdCB3ZWF0aGVyRGF0YUpzb24uY3VycmVudC50ZW1wX2MgKyAnICYjODQ1MSdcclxuICAgICAgZmFocmVuaGVpdC5pbm5lckhUTUwgPSBhd2FpdCB3ZWF0aGVyRGF0YUpzb24uY3VycmVudC50ZW1wX2YgKyAnICYjODQ1NydcclxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYXdhaXQgd2VhdGhlckRhdGFKc29uLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxuICAgICAgd2VhdGhlclJlc3VsdC50ZXh0Q29udGVudCA9IGNvbmRpdGlvblxyXG5cclxuICAgICAgY29uc3QgaWNvbiA9IGF3YWl0IHdlYXRoZXJEYXRhSnNvbi5jdXJyZW50LmNvbmRpdGlvbi5pY29uXHJcbiAgICAgIHN5bWJvbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2ljb259YClcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwKSB7XHJcbiAgICAgICAgcmVzdWx0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2xpZGUtZG93bicpXHJcblxyXG4gICAgICBnZXRHaWYoY29uZGl0aW9uKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzZXRCdG4uY2xpY2soKVxyXG4gICAgICBzZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMb2NhdGlvbiBub3QgRm91bmQhJylcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEdpZiAoa2V5d29yZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PWNld0JjSmd4REhITGhQNWZBRGxKNTF0N3FQOFB0clhRJnM9d2VhdGhlci1jbGltYXRlLSR7a2V5d29yZH1gLFxyXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH0pXHJcblxyXG4gICAgICBjb25zdCBpbWFnZURhdGFKU09OID0gYXdhaXQgaW1hZ2VEYXRhLmpzb24oKVxyXG4gICAgICBjb25zdCBpbWFnZVVSTCA9IGltYWdlRGF0YUpTT04uZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsXHJcbiAgICAgIGdpZi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ3N0eWxlJyxcclxuICAgICAgICBgYmFja2dyb3VuZDogdXJsKCR7aW1hZ2VVUkx9KSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogc3RyZXRjaGApXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlckltYWdlID0gc3ltYm9sLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgZ2lmLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAnc3R5bGUnLFxyXG4gICAgICAgIGBiYWNrZ3JvdW5kOiB1cmwoJHtwbGFjZWhvbGRlckltYWdlfSkgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IHN0cmV0Y2hgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoVGVtcFVuaXQgKCkge1xyXG4gICAgaWYgKHRlbXBTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyUmVzdWx0ICgpIHtcclxuICAgIGNhY2hlUXVlcnkoKVxyXG4gICAgZ2V0V2VhdGhlckRhdGEoKVxyXG4gIH1cclxuXHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgcmVuZGVyUmVzdWx0KClcclxuICB9KVxyXG5cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLXVwJylcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLWRvd24nKVxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS11cCcpXHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICAgIHJlc3VsdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgIH1cclxuICB9KVxyXG4gIHRlbXBTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUZW1wVW5pdClcclxufSkoKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=