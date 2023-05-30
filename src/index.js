(function weatherApp () {
  const searchBar = document.querySelector('#search')
  const submitBtn = document.querySelector('#submit')
  const resetBtn = document.querySelector('#reset')
  let searchQuery
  const symbol = document.querySelector('#symbol')

  // Result
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

      resultSection.classList.remove('hidden')

      getGif(condition)
    } catch (error) {
      resetBtn.click()
      searchBar.setAttribute('placeholder', "Couldn't find the location!")
      console.error(error)
    }
  }

  async function getGif (keyword) {
    try {
      const imageData = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=cewBcJgxDHHLhP5fADlJ51t7qP8PtrXQ&s=weather-${keyword}-sky`,
        { mode: 'cors' })

      const imageDataJSON = await imageData.json()
      const imageURL = imageDataJSON.data.images.original.url
      gif.setAttribute(
        'style',
        `background: url(${imageURL}) no-repeat center;
        background-size: stretch`)
    } catch (error) {
      console.error(error)
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

  closeBtn.addEventListener('click', () => resultSection.classList.add('hidden'))
  tempSwitch.addEventListener('click', switchTempUnit)
})()
