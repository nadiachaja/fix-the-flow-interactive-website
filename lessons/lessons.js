
// menu openen en sluiten 
let button = document.querySelector('#menuToggle');
let navigation = document.querySelector('header');

button.addEventListener("click", function() {
    navigation.classList.toggle('show-menu');
   

// tabindex voor menu open en dicht 
if (navigation.classList.contains('show-menu')) {
    button.setAttribute('tabindex', '18'); 
} else {
    button.setAttribute('tabindex', '7'); 
    button.focus(); 
}
});
    


//andere svg als het menu open is en als het menu dicht is 
const menuIcon = document.getElementById('menuIcon');

button.addEventListener('click', function() {
    if (menuIcon.innerHTML.includes('M 6.0626 19.5390')) {
        // Nieuwe SVG voor het open menu
        menuIcon.innerHTML = '<path d="M16 8L8 16M8 8L16 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
        menuIcon.setAttribute('viewBox', '0 0 24 24'); // Nieuwe viewBox instellen
    } else {
        // Terug naar de originele SVG voor het gesloten menu
        menuIcon.innerHTML = '<path d="M 6.0626 19.5390 L 49.9144 19.5390 C 50.8984 19.5390 51.7187 18.7656 51.7187 17.7812 C 51.7187 16.7968 50.8984 16 49.9144 16 L 6.0626 16 C 5.0782 16 4.2813 16.7968 4.2813 17.7812 C 4.2813 18.7656 5.0782 19.5390 6.0626 19.5390 Z M 6.0626 29.7578 L 49.9144 29.7578 C 50.8984 29.7578 51.7187 28.9843 51.7187 28 C 51.7187 26.9921 50.8984 26.1953 49.9144 26.1953 L 6.0626 26.1953 C 5.0782 26.1953 4.2813 26.9921 4.2813 28 C 4.2813 28.9843 5.0782 29.7578 6.0626 29.7578 Z M 6.0626 40 L 49.9144 40 C 50.8984 40 51.7187 39.2031 51.7187 38.1953 C 51.7187 37.2109 50.8984 36.4375 49.9144 36.4375 L 6.0626 36.4375 C 5.0782 36.4375 4.2813 37.2109 4.2813 38.1953 C 4.2813 39.2031 5.0782 40 6.0626 40 Z"/>';
        menuIcon.setAttribute('viewBox', '0 0 56 56'); // Terug naar originele viewBox
    }
});



//wobble effecten op de kopje in het menu 

const huis = document.querySelector('.huis');

// Wobble effect on hover
huis.addEventListener('mouseenter', () => {
    huis.classList.add('wobble');
});

huis.addEventListener('mouseleave', () => {
    huis.classList.remove('wobble');
});


const testen = document.querySelector('.testen');

// Wobble effect on hover
testen.addEventListener('mouseenter', () => {
    testen.classList.add('wobble');
});

testen.addEventListener('mouseleave', () => {
    testen.classList.remove('wobble');
});


const les = document.querySelector('.les');

// Wobble effect on hover
les.addEventListener('mouseenter', () => {
    les.classList.add('wobble');
});

les.addEventListener('mouseleave', () => {
    les.classList.remove('wobble');
});


const doelen = document.querySelector('.doelen');

// Wobble effect on hover
doelen.addEventListener('mouseenter', () => {
    doelen.classList.add('wobble');
});

doelen.addEventListener('mouseleave', () => {
    doelen.classList.remove('wobble');
});


const gebruiker = document.querySelector('.gebruiker');

// Wobble effect on hover
gebruiker.addEventListener('mouseenter', () => {
    gebruiker.classList.add('wobble');
});

gebruiker.addEventListener('mouseleave', () => {
    gebruiker.classList.remove('wobble');
});


// 1
// select button dat je kan filteren naar een story
const filterSelect = document.querySelectorAll('select') //dit selecteer het alle selects in de DOM
filterSelect.forEach(function changeCards(filter) { //kijkt door alle select heen 
    filter.addEventListener('change', function(element){ //select element luister naar veranderingen en voor de fuctie uit
        filterAnimals(element.target.value) //worden de waarde van de geselecteerde select opgehaald 
    });
})


function filterAnimals(filter){ //dit is de fuctie 
    const animals = document.querySelectorAll('.story-card'); //dit selecteert alle stories
    animals.forEach(animal => { //loopt door alle story-card heen
        
        if (filter ==='*' || animal.classList.contains(filter)){ //als de filter hetzelfde is als * voert die geen filter uit en laat die alle stories zien. Als er wel een story is met class die geselecteert is laat die alleen de geselcteerde zien
            animal.classList.remove('hidden'); //zoja, dan verwijdert die de hidden class om zo de geselecteerde stories te laten zien
        } else {
            animal.classList.add('hidden'); // zo niet, dat blijft de hidden erop en laat de niet geselecteerde stories niet zien
        }
    })
}














