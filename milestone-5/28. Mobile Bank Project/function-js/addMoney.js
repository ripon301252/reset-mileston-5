
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
        // const p = document.createElement('p');
        // p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;

            // should be a common function
        // document.getElementById('transaction-container').appendChild(p);


        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-purple-300'); 
        div.innerHTML = `
            <h4 class="text-2xl font-bold px-5 pt-5 ">Add Money</h4>
            <p class="px-5 pb-5">Add Money ${addMoney} Tk. New Balance ${newBalance} Tk.</p>
        `
        // should be a common function
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to add money! please try again');
    }
})