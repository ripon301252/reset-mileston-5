    console.log('hello from js');
    console.log(document.body);

console.log('--------------------------')

    const fruit = document.getElementById('fruits-title');
    fruit.innerText = 'fruits changed by JS';

console.log('--------------------------')

    const place = document.getElementById('places-title');
    console.log(place);

console.log('--------------------------')

    const liPlaces = document.getElementsByClassName('important-places');
    for(const liPlace of liPlaces){
        console.log(liPlace.innerText)
    }

console.log('--------------------------')

    const othersPlaces = document.getElementsByClassName('others-places');
    console.log(othersPlaces);

console.log('--------------------------')

    const fruits = document.querySelectorAll('fruits-container ');
    console.log(fruits);

console.log('--------------------------')   

    const someLi = document.querySelectorAll('.fruits-container li');
    // console.log(someLi);
    for(const li of someLi){
        console.log(li.innerText);
    }

    const some = document.querySelector('.fruits-container li');
    console.log(some);
    