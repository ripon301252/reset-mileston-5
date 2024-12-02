    // 1. where to add
    const placesList = document.getElementById('places-container');

    // 2. what to be added
    const li = document.createElement('li');
    li.innerText = 'pahartoli ban';

    const li4 = document.createElement('li')
    li4.innerText = 'sundor ban'

    // 3. add the child
    placesList.appendChild(li);
    placesList.appendChild(li4);
    

console.log('-------------------------------')
    // 1. where to add
    const mainContainer = document.getElementById('main-container');

    // 2. what to be added
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Food List'
    section.appendChild(h1);

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerText = 'biryani';

    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.innerText = 'bohani';

    ul.appendChild(li2);
    const li3 = document.createElement('li');
    li3.innerText = 'salad';
    ul.appendChild(li3);
    

    // 3. add the child
    mainContainer.appendChild(section);
    section.appendChild(ul)

console.log('-------------------------------')

    // set innerHTML directly
    const sectioDress = document.createElement('section');
    sectioDress.innerHTML = `
    
    <h1>My Dress section</h1>
    <ul>
        <li>T-shirt</li>
        <li>lungi</li>
        <li>Ganji</li>
    </ul>
    `
    mainContainer.appendChild(sectioDress);
