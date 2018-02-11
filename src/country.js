const normalizeCountry = function (country) {
  if (country) return country.toLowerCase() === 'fr' ? 'fr' : 'en'
  return null
}

const getCountryByIp = function () {
  return fetch('//ipinfo.io/json')
    .then(res => res.json())
    .catch(() => {
      console.warn('Impossible to determine country, fallback to en')
      return {country: 'en'}
    })
    .then(data => normalizeCountry(data.country))
}

const getCountryByStorage = function () {
  if (localStorage) return normalizeCountry(localStorage.getItem('country'))
  return null
}

const setCountryToStorage = function (country) {
  console.log('Set country to storage: ', country)
  if (localStorage) localStorage.setItem('country', normalizeCountry(country))
}

const getCountry = function () {
  // get from storage
  let countryFromStorage = getCountryByStorage()

  if (countryFromStorage) {
    console.log('Country from storage: ', countryFromStorage)
    return Promise.resolve(countryFromStorage)
  } else {
    // fallback to ipinfo service
    return getCountryByIp()
      .then(countryByIp => {
        console.log('Country by IP: ', countryByIp)
        setCountryToStorage(countryByIp)
        return countryByIp
      })
  }
}

export {
  getCountry,
  getCountryByIp,
  getCountryByStorage,
  setCountryToStorage
}
