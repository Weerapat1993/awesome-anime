const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const { Anime } = require('./src/data')
const { Log } = require('./src/utils')
const log = new Log()
log.info('creating README.md file ...')

let anime2017 = ''
const text = Anime.map((item) => {
  anime2017 += `* [${item.name}](#)\n`
})

fs.writeFileSync(`${path.join(__dirname, './README.md')}`,
`# Awesome Anime

**Anime 2017**
${anime2017}
`
)

log.success('created README.md file success!!')