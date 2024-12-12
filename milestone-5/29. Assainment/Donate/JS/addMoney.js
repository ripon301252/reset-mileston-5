
document.getElementById('btn-donate-now-1').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-1');
    const balance = getTextFieldValueById('account-balance-1');
    const cashOut = getTextFieldValueById('cash-out');

    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }
    

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-1').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

   

    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        
       <p class="text-center px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('model').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('header').classList.add('hidden');
    document.getElementById('transaction-section').appendChild(div);
})




document.getElementById('btn-donate-now-2').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-2');
    const balance = getTextFieldValueById('account-balance-2');
    const cashOut = getTextFieldValueById('cash-out');


    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

   

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-2').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

 
    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <p class="text-center px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('model').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('header').classList.add('hidden');
    document.getElementById('transaction-section').appendChild(div);
})






document.getElementById('btn-donate-now-3').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-3');
    const balance = getTextFieldValueById('account-balance-3');
    const cashOut = getTextFieldValueById('cash-out');

    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }


    const newBalance = addMoney + balance;
    document.getElementById('account-balance-3').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;


     
    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <p class="text-center px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('model').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('header').classList.add('hidden');
    document.getElementById('transaction-section').appendChild(div);
})
