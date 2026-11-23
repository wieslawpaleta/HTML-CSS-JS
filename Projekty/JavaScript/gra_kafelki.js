const plansza = document.getElementById('plansza');
// Przykładowy obrazek z internetu (300x300 px) - możesz tu wpisać ścieżkę do własnego pliku, np. "moj_obrazek.jpg"
const obrazekURL = 'https://picsum.photos'; 
const rozmiar = 3; // Siatka 3x3 (9 elementów)
let wybranyKafelek = null;

function stworzGre() {
    plansza.innerHTML = '';
    wybranyKafelek = null;
    let kafelki = [];

    // 1. Tworzenie 9 kafelków i wycinanie odpowiedniego fragmentu obrazka
    for (let i = 0; i < rozmiar * rozmiar; i++) {
    const kafelek = document.createElement('div');
    kafelek.classList.add('kafelek');
    kafelek.dataset.poprawnaPozycja = i;

    // Obliczanie przesunięcia tła (CSS Sprite)
    const x = (i % rozmiar) * 100;
    const y = Math.floor(i / rozmiar) * 100;

    kafelek.style.backgroundImage = `url('${obrazekURL}')`;
    kafelek.style.backgroundPosition = `-${x}px -${y}px`;

    kafelek.addEventListener('click', () =>)
    }
}