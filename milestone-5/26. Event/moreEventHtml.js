document.getElementById('text-field').addEventListener('focus', function(){
    console.log('event focus')
})

document.getElementById('text-field').addEventListener('blur', function(){
    console.log('event blur')
})

document.getElementById('text-field').addEventListener('keydown', function(){
    console.log(event.target.value)
})

 document.getElementById('text-field').addEventListener('keypress', function(){
    console.log(event.target.value)
})

document.getElementById('text-field').addEventListener('keyup', function(){
    console.log(event.target.value)
})

document.getElementById('btn-more').addEventListener('click', function(){
    console.log('event click')
})

document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('event mousemove');
})
       
        