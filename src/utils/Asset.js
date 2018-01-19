const Case = require('case')
const fs = require('fs-extra')

const Asset = (path, keyword) => {
  const word = keyword.split('(')[0].trim()
  const asset = `./src/assets${path}/${Case.kebab(word)}`
  const noImage = './src/assets/images/no-image.jpg'
  if (!fs.existsSync(`${asset}.jpg`) && !fs.existsSync(`${asset}.png`)){
    return noImage
  }
  if (fs.existsSync(`${asset}.png`)){
    return `${asset}.png`
  }
  return `${asset}.jpg`
}

module.exports = Asset