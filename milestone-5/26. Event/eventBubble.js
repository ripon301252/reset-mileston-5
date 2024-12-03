document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 click');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 second click');
   
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 third click');
    
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 fourth click');
    
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 fifth click');
    
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul click');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section to click');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('main to click');
})

