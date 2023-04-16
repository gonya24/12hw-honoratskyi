function removeElement (a,b) {
   let index = a.indexOf(b)
    return a.splice(index,1)
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
