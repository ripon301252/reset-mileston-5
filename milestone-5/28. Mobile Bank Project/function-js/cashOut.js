
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(isNaN(cashOut)){
        alert('Failed to Cash out!')
        return;
    }


    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        
        if(cashOut > balance){
            alert(' Enough Not money!')
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
        // const p = document.createElement('p');
        // p.innerText = `Cash Out: ${cashOut} Tk. New Balance: ${newBalance}`;

            // should be a common function
        // document.getElementById('transaction-container').appendChild(p);

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-blue-300'); 
        div.innerHTML = `
            <h4 class="text-2xl font-bold px-5 pt-5 ">Cash Out</h4>
            <p class="px-5 pb-5"> withdraw ${cashOut} Tk. New Balance ${newBalance} Tk.</p>
        `
        // should be a common function
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Cash out! please try again')
    }
})