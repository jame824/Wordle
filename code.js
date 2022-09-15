//Recreation of "Wordle," a popular game made by Josh Wardle
//Using reference from code.org App Lab "Wordle Evil"
//Words taken from wordle source code on github, by cfreshmen
var wordList = ["aback", "agent", "alive", "blaze", "being", "choke", "choir", "ditto", "dirty", "ethos", "faith", "false", "globe", "hello", "intro", "jumbo", "kevin", "labor", "manic", "novel", "organ", "peach", "quick", "quest", "rally", "sully", "turnt", "toxic", "under", "vivid", "vigil", "where", "woman", "youth", "young", "zebra", "zesty"];
var alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//Obtains a single random word for the game
var randomIndex = randomNumber(0, wordList.length - 1);
var randomWord = wordList[randomIndex];
//Displays the word picked on the Debug Console
console.log(randomWord);

//Checks letter and position and changes corresponding letter to green, yellow, or gray
function letterCheck(rowIndex, columnIndex) {
  var letter = getText("row"+rowIndex+"Letter"+columnIndex).toLowerCase();
  if(letter !="")
  {
    if (randomWord[columnIndex-1] == letter)
    {
      setProperty("row"+rowIndex+"Letter"+columnIndex, "background-color", "green");
      setProperty(letter+"key", "background-color", "green");
      //console.log(greenCounter);
      //console.log(row);
      greenCounter += 1;

      //Displays win or lose screen
      if (row === 6 && greenCounter < 5){ 
        showElement("winOrLoseBox");
        setProperty("winOrLoseBox", "text", "\n \n Nice Try!");
        deleteElement("optionsBox");
        deleteElement("darkMode");
        deleteElement("lightMode");
        deleteElement("exitImage");
      } else if (greenCounter == 5) {
          showElement("winOrLoseBox");
          setProperty("winOrLoseBox", "text", "\n \n Good Job!");
          //This looks crazy but this is so that you cannot type after you reach the win screen
          row = 1114; 
          deleteElement("optionsBox");
          deleteElement("darkMode");
          deleteElement("lightMode");
          deleteElement("exitImage");
      }
    }
    // Letter correct but in wrong place
    else if (randomWord.includes(letter))
    {
      setProperty("row"+rowIndex+"Letter"+columnIndex, "background-color", "yellow");
      setProperty(letter+"key", "background-color", "yellow");
    }
    // Letter incorrect
    else
    {
      setProperty("row"+rowIndex+"Letter"+columnIndex, "background-color", "#9c9a9a");
      setProperty(letter+"key", "background-color", "#9c9a9a");
    }
  }
}


row = 1;
column = 1;
//Counts correct letters
greenCounter = 0;

//Puts the key pressed in the next box
function handleKeyPress(keyPress) {
  if (keyPress === "BACK"){
    //console.log(1);
    if (column > 1)
    {column--;}
    setText("row"+row+"Letter"+column,"");
  }
  else if (keyPress === "ENTER"){
   //console.log(2);
   greenCounter = 0;
    for (var i = 1; i <= 5; i++) {
      letterCheck(row, i);
    } 
    if (row<6)
      {row++;}
    column = 1;
  }
  else{
    //console.log(3);
    if (column <= 5)
    {
      setText("row"+row+"Letter"+column,keyPress.toUpperCase());
      column++;
    }
  }
}

//Handles backspace, enter, and alphabet keypress functions
onEvent("gameScreen","keydown",function(event){
  if (event.key == "Backspace"){
    handleKeyPress("BACK");
  }
  else if (event.key == "Enter"){
    handleKeyPress("ENTER");
  }
  else{((event.key).indexOf(alphabet)!=-1)
    handleKeyPress(event.key);
  }
  //console.log(event.key);
})

//Keypress call
onEvent("deletekey","click",function(){
    handleKeyPress("BACK");
  })
  
onEvent("enterkey","click",function(){  
    handleKeyPress("ENTER");
  })

onEvent("akey","click",function(){    
    handleKeyPress("a");
})

onEvent("bkey","click",function(){    
    handleKeyPress("b");
})

onEvent("ckey","click",function(){    
    handleKeyPress("c");
})

onEvent("dkey","click",function(){    
    handleKeyPress("d");
})

onEvent("ekey","click",function(){    
    handleKeyPress("e");
})

onEvent("fkey","click",function(){    
    handleKeyPress("f");
})

onEvent("gkey","click",function(){    
    handleKeyPress("g");
})

onEvent("hkey","click",function(){    
    handleKeyPress("h");
})

onEvent("ikey","click",function(){    
    handleKeyPress("i");
})

onEvent("jkey","click",function(){    
    handleKeyPress("j");
})

onEvent("kkey","click",function(){    
    handleKeyPress("k");
})

onEvent("lkey","click",function(){    
    handleKeyPress("l");
})

onEvent("mkey","click",function(){    
    handleKeyPress("m");
})

onEvent("nkey","click",function(){    
    handleKeyPress("n");
})

onEvent("okey","click",function(){    
    handleKeyPress("o");
})

onEvent("pkey","click",function(){    
    handleKeyPress("p");
})

onEvent("qkey","click",function(){    
    handleKeyPress("q");
})

onEvent("rkey","click",function(){    
    handleKeyPress("r");
})

onEvent("skey","click",function(){    
    handleKeyPress("s");
})

onEvent("tkey","click",function(){    
    handleKeyPress("t");
})

onEvent("ukey","click",function(){    
    handleKeyPress("u");
})

onEvent("vkey","click",function(){    
    handleKeyPress("v");
})

onEvent("wkey","click",function(){    
    handleKeyPress("w");
})

onEvent("xkey","click",function(){    
    handleKeyPress("x");
})

onEvent("ykey","click",function(){    
    handleKeyPress("y");
})

onEvent("zkey","click",function(){    
    handleKeyPress("z");
})

//Hides screen elements
hideElement("optionsBox");
hideElement("darkMode");
hideElement("lightMode");
hideElement("exitImage");
hideElement("winOrLoseBox");

//Press settings gear shows dark and light mode options
onEvent("settingsGear", "click", function( ) {
  showElement("optionsBox");
  showElement("darkMode");
  showElement("lightMode");
  showElement("exitImage");
});

//Light Mode
onEvent("lightMode", "click", function( ) {
  setProperty("gameScreen", "background-color", rgb(255, 255, 255));
  setProperty("wordleText", "background-color", rgb(255, 255, 255));
  setProperty("wordleText", "text-color", rgb(0, 0, 0));
  setProperty("settingsGear", "icon-color", rgb(0, 0, 0));
  setProperty("wordleText", "border-color", rgb(0, 0, 0, 0.3));
});

//Dark Mode
onEvent("darkMode", "click", function(){
  setProperty("gameScreen", "background-color", rgb(0, 0, 0));
  setProperty("wordleText", "text-color", rgb(255, 255, 255));
  setProperty("wordleText", "background-color", rgb(0, 0, 0));
  setProperty("settingsGear", "icon-color", rgb(255, 255, 255));
  setProperty("wordleText", "border-color", rgb(255, 255, 255));
});

//Exit out of options
onEvent("exitImage", "click", function( ) {
  hideElement("optionsBox");
  hideElement("darkMode");
  hideElement("lightMode");
  hideElement("exitImage");
});

