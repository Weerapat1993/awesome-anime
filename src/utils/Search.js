const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q='

const Search = (keyword) => {
  let word = keyword
  try {
    word = keyword.split('(')[0].trim()
  } catch(error) {
    word = keyword.trim()
  }
  return GOOGLE_SEARCH_URL + word.replace(new RegExp(' ', 'g'), '+')
}

module.exports = Search