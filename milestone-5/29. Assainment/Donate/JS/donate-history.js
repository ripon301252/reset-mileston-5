
// show the HISTORY
document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('transaction-container').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
   
    document.getElementById('btn-history').classList.add('bg-lime-400');
    document.getElementById('btn-donate').classList.remove('bg-lime-400');

    document.getElementById('btn-history').classList.remove('bg-slate-200');
    document.getElementById('btn-donate').classList.add('bg-slate-200');

})


// show the DONATION
document.getElementById('btn-donate').addEventListener('click', function(){
    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    document.getElementById('btn-donate').classList.add('bg-lime-400');
    document.getElementById('btn-history').classList.remove('bg-lime-400');

    document.getElementById('btn-history').classList.add('bg-slate-200');
    document.getElementById('btn-donate').classList.remove('bg-slate-200');
})





























