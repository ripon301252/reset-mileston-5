// add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(){
    event.preventDefault(); 
    

    const addMoneyInput =  document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    

    if(pinNumberInput === '1234'){
      
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(addMoneyInput);
       
        const newBalance = balanceNumber + addMoneyNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! please try again')
    }
})