const findingXYZ = (number) => {
  if (number <= 1) {
    return 3
  }
  return findingXYZ(number-1) + ((number-1) * 2)
}

for (let index = 1; index <= 8; index++) {
  console.log(findingXYZ(index)) 
}
