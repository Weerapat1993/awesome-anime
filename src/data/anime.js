const { Anime } = require('../model')
const { SearchGoogle } = require('../utils')

// Anime
const anime = [
  'Himouto! Umaru-chan',
  'Himouto! Umaru-chan R',
  'Yuuki Yuuna wa Yuusha de Aru (ตำนานผู้กล้ายูนะ)',
  'Yuuki Yuuna wa Yuusha de Aru - Washio Sumi no Shou (ตำนานผู้กล้ายูนะ ภาควาชิโอะ)',
  'Yuuki Yuuna wa Yuusha de Aru - Yuusha no Shou (ตำนานผู้กล้ายูนะ ภาคผู้กล้า)',
  'Assassination Classroom (ห้องเรียนลอบสังหาร)',
  'Saki (เซียนสาวไพ่นกกระจอก)',
  'Saki Episode of Side A (เซียนสาวไพ่นกกระจอก - บทเสริม ภาคอิจิกะ)',
  'Saki Zenkoku Hen (เซียนสาวไพ่นกกระจอก - ภาคระดับประเทศ)',
  'Kore wa Zombie desu ka?',
  'Kore wa Zombie desu ka? of The Dead',
  'One Punch Man',
  'Nagi no Asukara',
  'Gakkou Gurashi (โรงเรียนของเราน่าอยู่)',
  'No Game No Life',
  'Ao no Kanata no Four Rhythm',
  'Strike Witch',
  'Brave Witch',
  'Kantai Collection',
  'Girl and Panzer',
  'Boku dake ga Inai Machi',
  'Attack on Titan (ผ่าพิภพไททั่น)',
  'Koutetsujou no Kabaneri (ผ่าพิภพซอมบี้)',
  'Kyoukai no Kanata',
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
  'Nanoha The Movie 4th Detonation',
  'Mahou Shoujo Lyrical Nanoha Striker',
  'Mahou Shoujo Lyrical Nanoha Vivid',
  'Vivid Strike (ก้าวแรกสู่สังเวียน เวอร์ชั่นสาวน้อย)',
  'Magical Girl Rising Project (โครงการสาวน้อยเวทย์มนต์)',
  'Mahou Shoujo Madoka Magika (สาวน้อยเวทย์มนตร์ มาโดกะ)',
  'Re:Zero (รีเซ็ตชีวิตผ่าวิกฤตต่างโลก)',
  'Magi The Labyrinth of Magic (อาละดินผจญภัย)',
  'Hidan no Aria (อาเรียกระสุนแดงเดือด)',
  'Hidan no Aria AA (อาเรียกระสุนแดงเดือด AA)',
  'Black Bullet (กระสุนมรณะ นัยตาอสูร)',
  'To Aru Kagaku no Railgun (เรลกัน แฟ้มลับคดีวิทยาศาสตร์)',
  'To Aru Kagaku no Railgun S (เรลกัน แฟ้มลับคดีวิทยาศาสตร์ -ภาค Sister-)',
  'To Aru Majutsu no Index (อินเด็กซ์ คัมภรีคถาต้องห้าม)',
  'To Aru Majutsu no Index SS2 (อินเด็กซ์ คัมภรีคถาต้องห้าม ภาค 2)',
  'Strike Blood (สายเลือดแท้ที่ 4)',
  'Selector Infected WIXOSS',
  'Selector Spread WIXOSS',
  'Lostorage Incited WIXOSS',
  'Lostorage Conflated WIXOSS',
  'Aldnoah Zero',
  'Another!',
  'Noragami',
  'Noragami Aragoto',
  'Shirobako! (สารคดีวงการ Animator)',
  'Tamako Market',
  'Gakusen Toshi Asterisk',
  'Gakusen Toshi Asterisk SS2',
  'AKB0048',
  'AKB0048 Next Stage'
]

const mapArr = anime.map((item, id) => ({
  id: id + 1,
  name: item,
  link: SearchGoogle(item)
}))

module.exports = Anime(mapArr).orderBy('name','asc').get()