var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(x, y){
  var newx = x.slice()
  newx.unshift(y)
  return newx
}

function destructivelyAddElementToBeginningOfArray(x,y){
  x.unshift(y)
  return x
}

function addElementToEndOfArray(x,y){
  var newx = x.slice()
  newx.push(y)
  return newx
}
  
function destructivelyAddElementToEndOfArray(x,y){
  x.push(y)
  return(x)
}

function accessElementInArray(x,y){
  return x[y]
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  return x.shift()
}

function 