function countLetters(count){
 var object = {}

for (const x of count) {

if (x === " ") {

 } else if (object[x] === undefined) {
   object[x] = 1
 } else {
   object[x] ++
 }

}
return object
}

console.log(countLetters("This is a test string"))