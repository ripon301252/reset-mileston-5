const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '8px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '7px'
    section.style.backgroundColor = 'lightgray';
}   

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';
placesContainer.style.textAlign = 'center';
placesContainer.style.listStyle = 'none'
placesContainer.classList.add('list-style');




