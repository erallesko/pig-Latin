function pigLatin(string){
const regex = /[aeiou]/i;

const words = string.split(" ")

for (let i = 0; i < words.length; i++){
    if (regex.test(words[i][0])){
       words[i] = words[i]  + "way"
    }else{
        const arrayString = words[i].split("")

        arrayString.push(arrayString.shift(), "ay")
        
        words[i] = arrayString.join("")
        }
    }  
    
return words.join(" ")
}

module.exports = pigLatin;
