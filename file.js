const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const Case = require('case')
const { Anime } = require('./src/data')
const { Log, Search } = require('./src/utils')
const log = new Log()
log.info('creating README.md file ...')

let anime2017 = ''

const text = Anime.map((item) => {
  anime2017 += `* [${item.name}](${item.link})\n`
})

const tests = [
  'Hidan no Aria',
  'Ao no Kanata no Four Rhythm',
  'Gakusen Toshi Asterisk',
  'Hidan no Aria',
]

const NUM_ROW = 4
const NO_IMAGE = `| **NO IMAGE** `
const NO_IMAGE_LAST = `| **NO IMAGE** |\n`
const NO_CONTENT = `| `
const NO_CONTENT_LAST = `| |\n`

let testContnet = `
| | | | |
| :------: | :------: | :------: | :------: |
`
for(let i = 0; i < tests.length; i = i + NUM_ROW) {
  for(let j = 0; j < NUM_ROW; j++) {
    if(NUM_ROW === j + 1) 
      testContnet += i + j < tests.length ? `| [<img src="./src/assets/images/readme/${Case.kebab(tests[i + j])}.jpg" />](${Search(tests[i + j])}) |\n` : NO_IMAGE_LAST
    else
      testContnet += i + j < tests.length ? `| [<img src="./src/assets/images/readme/${Case.kebab(tests[i + j])}.jpg" />](${Search(tests[i + j])}) ` : NO_IMAGE
  }
  for(let k = 0; k < NUM_ROW; k++) {
    if(NUM_ROW === k + 1) 
      testContnet += i + k < tests.length ? `| [**${tests[i + k]}**](${Search(tests[i + k])}) |\n` : NO_CONTENT_LAST
    else
      testContnet += i + k < tests.length ? `| [**${tests[i + k]}**](${Search(tests[i + k])}) ` : NO_CONTENT
  }
}

fs.writeFileSync(`${path.join(__dirname, './README.md')}`,
`# Awesome Anime [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/Weerapat1993/awesome-anime)

## Contents
${anime2017}

## Images
${testContnet}
`
)

const contents = [
  'Kore wa Zombie desu ka',
  'Nanoha',
]

contents.map(content => {
  fs.writeFileSync(`${path.join(__dirname, `./src/content/${Case.snake(content)}.md`)}`,
`# ${content}

| ${content} |
| :------:|
| ![${content}](../assets/images/${Case.snake(content)}.jpg) |

## เนื้อเรื่อง

Laboris adipisicing et aliquip do anim amet fugiat veniam duis elit elit non. Elit do reprehenderit est ipsum proident cillum minim dolore culpa id nulla sit. Nisi duis sunt nulla ipsum labore irure amet.

## ตัวละคร

Laboris adipisicing et aliquip do anim amet fugiat veniam duis elit elit non. Elit do reprehenderit est ipsum proident cillum minim dolore culpa id nulla sit. Nisi duis sunt nulla ipsum labore irure amet.

`)
})

log.success('created README.md file success!!')