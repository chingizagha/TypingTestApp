// 'use strict'
// const wordsSet = [
//     'do',
//     'enough',
//     'call',
//     'follow',
//     'keep',
//     'will',
//     'important',
//     'seem',
//     'or',
//     'word',
//     'him',
//     'other',
//     'letter',
//     'look',
//     'around',
//     'too',
//     'do',
//     'enough',
//     'call',
//     'follow',
//     'keep',
//     'will',
//     'important',
//     'seem',
//     'or',
//     'word',
//     'him',
//     'other',
//     'letter',
//     'look',
//     'around',
//     'too',
//     'do',
//     'enough',
//     'call',
//     'follow',
//     'keep',
//     'will',
//     'important',
//     'seem',
//     'or',
//     'word',
//     'him',
//     'other',
//     'letter',
//     'look',
//     'around',
//     'too',
//     'do',
//     'enough',
//     'call',
//     'follow',
//     'keep',
//     'will',
//     'important',
//     'seem',
//     'or',
//     'word',
//     'him',
//     'other',
//     'letter',
//     'look',
//     'around',
//     'too',
//     'do',
//     'enough',
//     'call',
//     'follow',
//     'keep',
//     'will',
//     'important',
//     'seem',
//     'or',
//     'word',
//     'him',
//     'other',
//     'letter',
//     'look',
//     'around',
//     'too',
// ];
// let divWord = document.querySelector('.div-word')
// function showWords(){
//     divWord.innerHTML = ' ';
//     for(let i=0; i<wordsSet.length; i++){
//         const html = `<span class="word-box">${wordsSet[i]}</span>`

//         divWord.insertAdjacentHTML('beforeend', html);
//     }
// }
// showWords();




 
// let i = 0;
// let count = 0;
// let timer;
// let timerExecuted = false;
// let timeBoxColor = false;
// wordSpan[i].style.backgroundColor = '#ddd';

// inputPlace.addEventListener('keyup', function(e)
// {
//     if(e.key === ' '){
//         if(wordsSet[i] === inputPlace.value.trim()){
//             // scoreBox.textContent = `Score:${++count}`;
//             wordSpan[i].style.backgroundColor = '#fff';
//             wordSpan[i].style.color = 'green';

//         }
//         else if(wordsSet[i] != inputPlace.value.trim()){
//             wordSpan[i].style.color = 'red';
//             wordSpan[i].style.backgroundColor = '#fff';
//         }

            
//     wordSpan[i+1].style.backgroundColor = '#ddd';
//     inputPlace.value = '';
//     ++i;
//     }
// });

// inputPlace.addEventListener('input', checkValue);

// function checkValue(e){
//     if(e.target.value != wordsSet[i].substring(0, e.target.value.length)){
//         wordSpan[i].style.color = 'red';
//         wordSpan[i].style.backgroundColor = '#ddd';
//     }
//     if(e.target.value == wordsSet[i].substring(0, e.target.value.length)){
//         wordSpan[i].style.color = '#000';
//         wordSpan[i].style.backgroundColor = '#ddd';
//     }
// }

// inputPlace.addEventListener('input', runFunctionOnce);

// function setTimer(){
//     function tick(){
//         const min = Math.trunc(time/60);
//         const sec = String(time % 60).padStart(2, 0);

//         timeBox.textContent = `${min}:${sec}`;


//         if(time === 0){
//             clearInterval(timer);
//             console.log(count / (time/60));
//         }
//         time--;
//     };

//     let time = 60;

//     tick();
//     const timer = setInterval(tick, 1000);

//     return timer;
// };

// function runFunctionOnce() {
//     if (!timerExecuted) {
//         if(timer) clearInterval(timer)
//         timer = setTimer();
//         timerExecuted = true;
//     }
// };

// btnReload.addEventListener('click', function(e){
//     e.preventDefault();

//     if(timer) clearInterval(timer)
//     wordSpan[i].style.backgroundColor = '#fff';
//     timerExecuted = false;
//     i = 0;
//     count = 0;
//     timeBox.textContent = '1:00';
//     // scoreBox.textContent = 'Score:'
//     wordSpan.forEach((elem => {
//         elem.style.color = 'black';
//     }))
//     inputPlace.value = "";
//     wordSpan[0].style.backgroundColor = '#ddd';
// })

// timeBox.addEventListener('click', function(e){
//     e.preventDefault();

//     if(!timeBoxColor){
//         timeBox.style.color = "#177D4E";
//         timeBoxColor = true;
//     } 
//     else{
//         timeBox.style.color = "white";
//         timeBoxColor = false;
//     }
// })

let divWord = document.querySelector('.div-word')
let wordSpan = document.querySelectorAll('.word-box')
let inputPlace = document.querySelector('.input-place')
let btnReload = document.querySelector('.btn-reload')
let scoreBox = document.querySelector('.score-box')
let timeBox = document.querySelector(".timer-box")

let i = 0;
let count = 0;
let timer;
let timerExecuted = false;
let timeBoxColor = false;

class App {

    wordsSet = [
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
    constructor(){
        this._showWords();

        btnReload.addEventListener('click', this._reload.bind(this));
        timeBox.addEventListener('click', this._timeBoxHide.bind(this));
        inputPlace.addEventListener('keyup', this._spaceButton.bind(this));
        inputPlace.addEventListener('input', this._checkValue.bind(this));
        inputPlace.addEventListener('input', this._runFunctionOnce);
    }

    _showWords(){
        divWord.innerHTML = ' ';
        for(let i=0; i<this.wordsSet.length; i++){
            const html = `<span class="word-box">${this.wordsSet[i]}</span>`

            divWord.insertAdjacentHTML('beforeend', html);
        }
    }

    _reload(){
        if(timer) clearInterval(timer)
        wordSpan[i].style.backgroundColor = '#fff';
        timerExecuted = false;
        i = 0;
        count = 0;
        timeBox.textContent = '1:00';
        // scoreBox.textContent = 'Score:'
        wordSpan.forEach((elem => {
            elem.style.color = 'black';
        }))
        inputPlace.value = "";
        wordSpan[0].style.backgroundColor = '#ddd';
    }

    _timeBoxHide(){

        if(!timeBoxColor){
            timeBox.style.color = "#177D4E";
            timeBoxColor = true;
        } 
        else{
            timeBox.style.color = "white";
            timeBoxColor = false;
        }
    }
    _spaceButton(e){
        if(e.key === ' '){
            if(this.wordsSet[i] === inputPlace.value.trim()){
                // scoreBox.textContent = `Score:${++count}`;
                wordSpan[i].style.backgroundColor = '#fff';
                wordSpan[i].style.color = 'green';
    
            }
            else if(this.wordsSet[i] != inputPlace.value.trim()){
                wordSpan[i].style.color = 'red';
                wordSpan[i].style.backgroundColor = '#fff';
            }
    
                
        wordSpan[i ++].style.backgroundColor = '#ddd';
        inputPlace.value = '';
        ++i;
        }
    }

    _checkValue(e){
        if(e.target.value != this.wordsSet[i].substring(0, e.target.value.length)){
            wordSpan[i].style.color = 'red';
            wordSpan[i].style.backgroundColor = '#ddd';
        }
        if(e.target.value == this.wordsSet[i].substring(0, e.target.value.length)){
            wordSpan[i].style.color = '#000';
            wordSpan[i].style.backgroundColor = '#ddd';
        }
    }

    _setTimer(){
        function tick(){
            const min = Math.trunc(time/60);
            const sec = String(time % 60).padStart(2, 0);
    
            timeBox.textContent = `${min}:${sec}`;
    
            if(time === 0){
                clearInterval(timer);
                console.log(count / (time/60));
            }
            time--;
        };
    
        let time = 60;
    
        tick();
        timer = setInterval(tick, 1000);
    
        return timer;
    }

    _runFunctionOnce() {
        if (!timerExecuted) {
            if(timer) clearInterval(timer)
            timer = _setTimer();
            timerExecuted = true;
        }
    }
}

const app = new App();




