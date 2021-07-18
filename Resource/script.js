const button = document.getElementById("countButton")
const letters = document.getElementById("lettersDiv");
const words = document.getElementById("wordsDiv");
const criarp = document.createElement("p")
const criarp2 = document.createElement("p")

function criarPLetters(){

  letters.appendChild(criarp)
  const textLetters = "Letras: "
  criarp.innerText = textLetters
}
criarPLetters()


function criarPWords(){

  words.appendChild(criarp2)
  const textLetters = "Palavras: "
  criarp2.innerText = textLetters
}
criarPWords()


button.addEventListener("click", function(){
  let typedText = document.getElementById("textInput").value;
  
  typedText = typedText.toLowerCase(); 
  
  typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
  const letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i]
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1; 
    } else { 
      letterCounts[currentLetter]++; 
    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span"); 
    letters.appendChild(span);  
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;     
    
  }


  const wordCounts = {};
  let word = typedText.split(" ");
  
  for (let i = 0; i < word.length; i++) {
    let currentword = word[i]
    if (wordCounts[currentword] === undefined) {
      wordCounts[currentword] = 1; 
    } else { 
      wordCounts[currentword]++; 
    }
  }
   
  for (let word in wordCounts) {
    const span = document.createElement("span"); 
    words.appendChild(span);  
    const textContent = `"${word}": ${wordCounts[word]}, `;
    span.innerText = textContent;     
    
  }
  
})

