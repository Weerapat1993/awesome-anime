const Asset = require('./Asset')
const SearchGoogle = require('./SearchGoogle')

const NUM_ROW = 4
const NO_IMAGE = `| **NO IMAGE** `
const NO_IMAGE_LAST = `| **NO IMAGE** |\n`
const NO_CONTENT = `| `
const NO_CONTENT_LAST = `| |\n`

/**
 * Anime Content
 * @param {[{ name: string }]} arr
 * @return {string}
 */
const AnimeContent = (arr) => {
let animeContent = `
| | | | |
| :------: | :------: | :------: | :------: |
`
  for(let i = 0; i < arr.length; i = i + NUM_ROW) {
    for(let j = 0; j < NUM_ROW; j++) {
      if(NUM_ROW === j + 1) 
        animeContent += (i + j) < arr.length ? `| [<img src="${Asset('/images/readme', arr[i + j].name)}" />](${SearchGoogle(arr[i + j].name)}) |\n` : NO_IMAGE_LAST
      else
        animeContent += (i + j) < arr.length ? `| [<img src="${Asset('/images/readme', arr[i + j].name)}" />](${SearchGoogle(arr[i + j].name)}) ` : NO_IMAGE
    }
    for(let k = 0; k < NUM_ROW; k++) {
      if(NUM_ROW === k + 1) 
        animeContent += (i + k) < arr.length ? `| [**${arr[i + k].name.split('(')[0].trim()}**](${SearchGoogle(arr[i + k].name)}) |\n` : NO_CONTENT_LAST
      else
        animeContent += (i + k) < arr.length ? `| [**${arr[i + k].name.split('(')[0].trim()}**](${SearchGoogle(arr[i + k].name)}) ` : NO_CONTENT
    }
  }
  return animeContent
}

module.exports = AnimeContent