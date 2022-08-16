//write a function that will take string and return the number/count of instances of vowels in that string
function getNumberOfVowels(str){
    // code here 
    let vowels = 0
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] == 'a' || str[i] =='e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u')
        vowels++
    } return vowels
    
   }
   console.log(getNumberOfVowels("hello world"))// 3

   console.log(getNumberOfVowels("fishing")) //2

// let string = "helloworld"
// string[0] ==> "h"
// string[2] ==> "l"