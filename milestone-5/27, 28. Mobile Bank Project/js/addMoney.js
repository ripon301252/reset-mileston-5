document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    // console.log(addMoneyInput, pinNumberInput)

    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance);

    if(pinNumberInput === '1234'){
        const addMoneyNumber = parseFloat(addMoneyInput);
        const pinNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + pinNumber
        document.getElementById('account-balance').innerText = newBalance
        
    }
    
})