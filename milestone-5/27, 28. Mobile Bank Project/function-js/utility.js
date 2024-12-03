// 28.3 no. video 
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
} 

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber;
}

function showSectionById(id){
    document.getElementById('btn-show-add-money').classList.add('hidden')
    document.getElementById('btn-show-cash-out').classList.add('hidden')
    document.getElementById('btn-show-transaction').classList.add('hidden')

    
    document.getElementById(id).classList.remove('hidden')





}