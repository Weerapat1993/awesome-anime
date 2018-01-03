const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const Case = require('case')
const { Anime } = require('./src/data')
const { Log, AnimeContent } = require('./src/utils')
const log = new Log()
log.info('creating README.md file ...')

let anime2017 = ''

const text = Anime.map((item) => {
  anime2017 += `* [${item.name}](${item.link})\n`
})

const tests = [
  'Hidan no Aria (อาเรียกระสุนแดงเดือด)',
  'Ao no Kanata no Four Rhythm',
  'Gakusen Toshi Asterisk',
  'Charlotte',
  'Gakkou Gurashi'
]

const testContnet = AnimeContent(tests)

fs.writeFileSync(`${path.join(__dirname, './README.md')}`,
`# Awesome Anime [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/Weerapat1993/awesome-anime)

## Contents
${anime2017}

## Anime Lists
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