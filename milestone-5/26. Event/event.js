// option-1: Directly set on the click
    // <h1 onclick="console.log('I am ckicked')">DOM er ajke special event</h1>
    // <button onclick="console.log(7)">click me</button>
    // <button onclick="console.log(65)">another button</button>  <br><br>

// option-2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// option-3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


// option-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option-4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});



// option-4 Final
document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor = 'orange';
})