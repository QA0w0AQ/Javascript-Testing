function removeDuplicate(numbers) {
  let duplicatesRemoved = []
  
  for(const number of numbers) {
    if (!duplicatesRemoved.includes(number)) {
      duplicatesRemoved.push(number)
    }
  }
  
  return duplicatesRemoved
}