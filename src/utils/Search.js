const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q='

const Search = (keyword) => {
  const word = keyword.split('(')[0].trim()
  return GOOGLE_SEARCH_URL + word.replace(new RegExp(' ', 'g'), '+')
}

module.exports = Search