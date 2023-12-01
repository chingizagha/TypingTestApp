'use strict'
const wordsSet = [
    'do',
    'enough',
    'call',
    'follow',
    'keep',
    'will',
    'important',
    'seem',
    'or',
    'word',
    'him',
    'other',
    'letter',
    'look',
    'around',
    'too',
    'do',
    'enough',
    'call',
    'follow',
    'keep',
    'will',
    'important',
    'seem',
    'or',
    'word',
    'him',
    'other',
    'letter',
    'look',
    'around',
    'too',
    'do',
    'enough',
    'call',
    'follow',
    'keep',
    'will',
    'important',
    'seem',
    'or',
    'word',
    'him',
    'other',
    'letter',
    'look',
    'around',
    'too',
    'do',
    'enough',
    'call',
    'follow',
    'keep',
    'will',
    'important',
    'seem',
    'or',
    'word',
    'him',
    'other',
    'letter',
    'look',
    'around',
    'too',
    'do',
    'enough',
    'call',
    'follow',
    'keep',
    'will',
    'important',
    'seem',
    'or',
    'word',
    'him',
    'other',
    'letter',
    'look',
    'around',
    'too',
];

let randomArr = [];
let divWord = document.querySelector('.div-word')

for(let i=0; i<wordsSet.length; i++){
    randomArr.push(i);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function showWords(){
    shuffle(randomArr);
    divWord.innerHTML = ' ';
    for(let i=0; i<wordsSet.length; i++){
        const html = `<span class="word-box">${wordsSet[randomArr[i]]}</span>`
        divWord.insertAdjacentHTML('beforeend', html);
    }
}
showWords();


let wordSpan = document.querySelectorAll('.word-box')
let inputPlace = document.querySelector('.input-place')
let btnReload = document.querySelector('.btn-reload')
let scoreBox = document.querySelector('.score-box')
let timeBox = document.querySelector(".timer-box")
let divResult = document.querySelector('.div-result')
wordSpan[0].style.backgroundColor = '#ddd';

let randomNumber = 0; 
let isReloaded = false;
let i = 0;
let count = 0;
let timer;
let timerExecuted = false;
let timeBoxColor = false; 

function getAllSpan(){
    wordSpan = document.querySelectorAll('.word-box')
}


inputPlace.addEventListener('keyup', function(e){
    if(e.target.value != wordSpan[i].textContent.substring(0, e.target.value.length)){
        wordSpan[i].style.color = 'red';
        wordSpan[i].style.backgroundColor = '#ddd';
    }
    if(e.target.value == wordSpan[i].textContent.substring(0, e.target.value.length)){
        wordSpan[i].style.color = '#000';
        wordSpan[i].style.backgroundColor = '#ddd';
    }
    if(e.target.value.includes(' ') && inputPlace.value.length > 0){
        if(wordSpan[i].textContent == inputPlace.value.trim()){
            ++count;
            wordSpan[i].style.backgroundColor = '#fff';
            wordSpan[i].style.color = 'green';
            debugger;
            wordSpan[i+1].style.backgroundColor = '#ddd';
            inputPlace.value = '';
            ++i;
        }
        else if(wordSpan[i].textContent != inputPlace.value.length > 0){
            wordSpan[i].style.color = 'red';
            wordSpan[i].style.backgroundColor = '#fff';
            wordSpan[i+1].style.backgroundColor = '#ddd';
            debugger; 
            inputPlace.value = '';
            ++i;
        }
    }
    if(e.target.value.includes(' ') && inputPlace.value.length == 0)
    {
        inputPlace.value = '';
        return;
    }
});

inputPlace.addEventListener('input', runFunctionOnce);

function setTimer(){
    function tick(){
        const min = Math.trunc(time/60);
        const sec = String(time % 60).padStart(2, 0);
        timeBox.textContent = `${min}:${sec}`;
        if(time === 0){
            clearInterval(timer);
            isReloaded = false;
            showResult();
            console.log(count / (time/60));
        }

        time--;
    };

    let time = 10;
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
};

//Executing time for first time
function runFunctionOnce() {
    if (!timerExecuted) {
        if(timer) clearInterval(timer)
        timer = setTimer();
        timerExecuted = true;
    }
};

function showResult() {
    if(isReloaded){
        inputPlace.disabled = false;
        divWord.style.display = 'block';
        divResult.style.display = 'none';
    }
    if(!isReloaded){
        divResult.innerHTML = '';
        const html = `Result: ${count}`;
        divResult.insertAdjacentHTML('beforeend', html);
        inputPlace.disabled = true;
        divWord.style.display = 'none';
        divResult.style.display = 'block';    
    }
}

//Button for reloading everything
btnReload.addEventListener('click', function(e){
    e.preventDefault();
    if(timer) clearInterval(timer)
    // wordSpan[i].style.backgroundColor = '#fff';
    timerExecuted = false;
    i = 0;
    count = 0;
    timeBox.textContent = '1:00';
    // scoreBox.textContent = 'Score:'
    wordSpan.forEach((elem => {
        elem.style.color = 'black';
    }))
    inputPlace.value = "";
    isReloaded = true;
    showResult();
    debugger;   
    showWords();
    getAllSpan();
    wordSpan[0].style.backgroundColor = '#ddd';
})
//Button for hiding time in box
timeBox.addEventListener('click', function(e){
    e.preventDefault();
    if(!timeBoxColor){
        timeBox.style.color = "#177D4E";
        timeBoxColor = true;
    } 
    else{
        timeBox.style.color = "white";
        timeBoxColor = false;
    }
})


