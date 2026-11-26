    const plansza = document.getElementById('plansza');
    // Przykładowy obrazek z internetu (300x300 px) - możesz tu wpisać ścieżkę do własnego pliku, np. "moj_obrazek.jpg"
    const obrazekURL = '../Obrazy/gra.jpeg'; 
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
        kafelek.style.backgroundSize = '300px 300px';
        kafelek.style.backgroundPosition = `-${x}px -${y}px`;

        kafelek.addEventListener('click', () => klikniecieKafelka(kafelek));
        kafelki.push(kafelek);
      }

      // 2. Losowe mieszanie kafelków
      kafelki.sort(() => Math.random() - 0.5);

      // 3. Dodanie kafelków na planszę
      kafelki.forEach(kafelek => plansza.appendChild(kafelek));
    }

    function klikniecieKafelka(kafelek) {
      // Jeśli żaden nie jest wybrany - zaznacz kliknięty
      if (!wybranyKafelek) {
        wybranyKafelek = kafelek;
        kafelek.classList.add('wybrany');
        return;
      }

      // Jeśli kliknięto ten sam - odznacz
      if (wybranyKafelek === kafelek) {
        kafelek.classList.remove('wybrany');
        wybranyKafelek = null;
        return;
      }

      // Zamiana dwóch kafelków miejscami w strukturze HTML
      zamienKafelki(wybranyKafelek, kafelek);
      
      wybranyKafelek.classList.remove('wybrany');
      wybranyKafelek = null;

      sprawdzWygrana();
    }

    function zamienKafelki(kafelek1, kafelek2) {
      const rodzic = kafelek1.parentNode;
      const nastepny1 = kafelek1.nextSibling === kafelek2 ? kafelek1 : kafelek1.nextSibling;
      rodzic.insertBefore(kafelek1, kafelek2);
      rodzic.insertBefore(kafelek2, nastepny1);
    }

    function sprawdzWygrana() {
      const aktualneKafelki = document.querySelectorAll('.kafelek');
      let wygrana = true;

      aktualneKafelki.forEach((kafelek, indeks) => {
        if (parseInt(kafelek.dataset.poprawnaPozycja) !== indeks) {
          wygrana = false;
        }
      });

      if (wygrana) {
        setTimeout(() => alert('Brawo! Obrazek ułożony!'), 100);
      }
    }

    // Start gry po załadowaniu strony
    stworzGre();