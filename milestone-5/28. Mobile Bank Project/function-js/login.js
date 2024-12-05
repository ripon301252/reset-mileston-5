// // search: form submit reloading the page

// // step-1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){

//     // step-2: prevent default behavior(reloading browser) only form submit
//     event.preventDefault(); 

//     //step-3: get the phone number and the pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
    
//     // step-4: validate phone and pin
//     //this is temporaty. you should do kike this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         // step-5: allow user to use the website
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
// })

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault(); 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = 'home.html';
                 
    }
    else{
        alert('wrong phone number or pin')
    }
})