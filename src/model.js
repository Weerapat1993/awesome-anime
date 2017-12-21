const Collection = require('array-collection')
const Model = (data, primaryKey) => new Collection(data, primaryKey)

// Models
const Anime = data => Model(data, 'id')

exports.Anime = Anime