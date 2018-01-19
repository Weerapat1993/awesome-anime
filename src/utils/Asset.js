const Case = require('case')
const fs = require('fs-extra')

const Asset = (path, keyword) => {
  const word = keyword.split('(')[0].trim()
  const asset = `./src/assets${path}/${Case.kebab(word)}.jpg`
  const noImage = './src/assets/images/no-image.jpg'
  if (!fs.existsSync(asset)){
    return noImage
  }
  return asset
}

module.exports = Asset