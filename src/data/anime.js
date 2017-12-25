const { Anime } = require('../model')

// Anime
const anime = [
  'Himouto! Umaru-chan',
  'Himouto! Umaru-chan R',
  'Yuuki Yuuna wa Yuusha de Aru',
  'Yuuki Yuuna wa Yuusha de Aru Washio no Shou',
  'Yuuki Yuuna wa Yuusha de Aru Yuusha no Shou',
  'Assassination Classroom',
  'Saki (เซียนสาวไพ่นกกระจอก)',
  'Saki Episode of Side A (เซียนสาวไพ่นกกระจอก - บทเสริม ภาคอิจิกะ)',
  'Saki Zenkoku Hen (เซียนสาวไพ่นกกระจอก - ภาคระดับประเทศ)',
  'Kore wa Zombie desu ka?',
  'Kore wa Zombie desu ka? of The Dead',
  'One Punch Man',
  'Nagi no Asukara',
  'Gakkou Gurashi',
  'No Game No Life',
  'Ao no Kanata no Four Rhythm',
  'Strike Witch',
  'Brave Witch',
  'Kantai Collection',
  'Girl and Panzer',
  'Boku dake ga Inai Machi',
  'Koutetsujou no Kabaneri (ผ่าพิภพซอมบี้)',
  'Kyoukai no Kantana',
  'New Game!',
  'New Game!!',
  'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka',
  'Fate/Zero',
  'Fate/Stay Night',
  'Fate/Ultimate Blade Works',
  'Fate/kaleid liner PRISMA ILLYA',
  'Fate/kaleid liner PRISMA ILLYA 2wei Herz!',
  'Fate/kaleid liner PRISMA ILLYA 3rei!!',
  'Hai to Gensou no Grimgar (ขี้เถ้าในแดนกริมการ์)',
  'High School Fleet',
  'Nanoha The Movie 1st',
  'Nanoha The Movie 2nd',
  'Nanoha The Movie 3rd Reflection',
  'Mahou Shoujo Lyrical Nanoha Striker',
  'Mahou Shoujo Lyrical Nanoha Vivid',
  'Vivid Strike',
  'Magical Girl Rising Project (โครงการสาวน้อยเวทย์มนต์)',
  'Mahou Shoujo Madoka Magika',
  'Re:Zero',
  'Magi',
  'Hidan no Aria',
  'Hidan no Aria AA',
  'Black Bullet',
]

const mapArr = anime.map((item, id) => ({
  id: id + 1,
  name: item
}))

module.exports = Anime(mapArr).orderBy('name','asc').get()