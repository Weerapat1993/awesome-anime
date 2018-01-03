const Case = require('case')

const Asset = (path, keyword) => {
  const word = keyword.split('(')[0].trim()
  const asset = `./src/assets${path}/${Case.kebab(word)}.jpg`
  return asset
}

module.exports = Asset