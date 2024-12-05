// option-1
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}


// option-2
document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})


document.getElementById('user-email').addEventListener('keyup', function(event){
    console.log(event.target.value);
})


