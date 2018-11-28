function index(word) {
 var characters = {}
   for (var i = 0; i < word.length; i++) {
     var letter = word[i]
     if (characters[letter] !== undefined) {
       characters[letter].push(i)
     } else {
   characters[letter] = [i]
 }
     }
   return characters;
 }

console.log(index("lighthouseinthehouse"))
