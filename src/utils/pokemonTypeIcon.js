export const getPokemonTypeIcon = (type) => {
  switch (type) {
    case 'normal':
      return 'โฌ๏ธ'
    case 'fighting':
      return '๐'
    case 'flying':
      return 'โ๏ธ'
    case 'poison':
      return '๐งช'
    case 'ground':
      return '๐ชฑ'
    case 'rock':
      return '๐ชจ'
    case 'bug':
      return '๐'
    case 'ghost':
      return '๐ฑ'
    case 'steel':
      return 'โ'
    case 'fire':
      return '๐ฅ'
    case 'water':
      return '๐ง'
    case 'grass':
      return '๐ฟ'
    case 'electric':
      return 'โก๏ธ'
    case 'psychic':
      return '๐ฎ'
    case 'ice':
      return '๐ง'
    case 'dragon':
      return '๐ฒ'
    case 'dark':
      return 'โฌ๏ธ'
    case 'fairy':
      return '๐งโโ๏ธ'
    case 'shadow':
      return '๐ฅ'
    default:
      break
  }
}
