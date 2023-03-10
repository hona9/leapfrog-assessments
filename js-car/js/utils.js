const generateIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const distance = (x1, y1, x2, y2) => {
  const X = x2 - x1
  const Y = y2 - y1

  return Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))
}