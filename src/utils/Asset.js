const Case = require('case')

const Asset = (path, keyword) => {
  const asset = `./src/assets${path}/${Case.kebab(keyword)}.jpg`
  return asset
}

module.exports = Asset