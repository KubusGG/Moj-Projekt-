## 1. Informacje o Projekcie

* **Nazwa:** CyberStore (wersja 1.0)

* **Rodzaj aplikacji:** Aplikacja internetowa na jednej stronie

* **Status:** Wersja podstawowa

* **Technologia:** Część klienta

* **Autor:** [Twoje Imię i Nazwisko]

---

## 2. Jak działa System

Cały projekt został zrobiony w architekturze aplikacji na jednej stronie. To oznacza, że strona ładuje się tylko raz, a potem wszystkie inne rzeczy dzieją się dynamicznie w przeglądarce, bez potrzeby odświeżania strony.

### Jak to działa: Model-Widok-Kontroler

Chociaż to jest projekt klienta, użyłem podziału kodu, który przypomina Model-Widok-Kontroler:

1. **Dane:**

* W pliku `script.js` jest stała `products`, która jest tablicą obiektów JSON.

* Służy jako lokalna baza danych, w której są ID, nazwy, ceny, kategorie i zdjęcia.

2. **Widok:**

* Plik `index.html` jest odpowiedzialny za strukturę strony.

* Plik `style.css` jest odpowiedzialny za wygląd (jak się wszystko wyświetla na różnych urządzeniach i w trybie ciemnym).

* Widok jest tworzony dynamicznie przez JavaScript.

3. **Kontroler:**

* Funkcje w `script.js` kontrolują, co się dzieje z danymi.

* Przykłady: dodawanie do koszyka, filtrowanie produktów i wyświetlanie ich.

[Obraz architektury MVC dla aplikacji internetowej]

---

## 3. Technologie

### Część Klienta

* **HTML5:** Użyty do zbudowania strony w sposób zrozumiały dla ludzi i maszyn.

* **CSS3:**

* **CSS Grid:** Do stworzenia siatki produktów, która się dostosowuje do różnych ekranów.

* **Flexbox:** Do ułożenia nawigacji i koszyka w sposób elastyczny.

* **Zmienne CSS:** Do łatwego zarządzania kolorami w trybie ciemnym i innymi stylami.

* **JavaScript (ES6+):**

* Użyty czysty JavaScript bez dodatkowych bibliotek.

* Użyto nowoczesne funkcje, jak strzałki, łączenie stringów i metody na tablicach.

### Narzędzia i Biblioteki

* **JSON:** Format, w jakim są przechowywane dane o produktach.

* **FontAwesome:** Biblioteka ikon wektorowych (np. koszyk, lupka, ikony mediów społecznościowych).

* **Google Fonts:** Rodzina czcionek *Poppins*.

* **Markdown / Marked.js:** Użyte do tworzenia i wyświetlania tej dokumentacji.

### Środowisko Programistyczne

* **Node.js / Vite:** Można użyć jako serwer deweloperski, aby szybko zobaczyć zmiany.

---

## 4. Jak to Działa

Aplikacja robi to, co powinien robić sklep internetowy:

### Przepływ Danych:

1. **Początek:** Gdy wejdziesz na stronę, skrypt pobiera dane i rysuje kafelki produktów.

2. **Wyszukiwanie:** Gdy wpiszesz coś, JavaScript filtruje tablicę w czasie rzeczywistym i aktualizuje listę produktów.

3. **Filtrowanie:** Kliknięcie w przycisk (np. “Gaming") zmienia wyświetlane produkty bez odświeżania strony.

4. **Koszyk:**

* Dodanie produktu aktualizuje licznik w nagłówku.

* Pojawi się powiadomienie potwierdzające.

* Koszyk jest przechowywany w pamięci przeglądarki.

---

## 5. Dla Kogo Jest

* **Dla kogo:** Graczy, miłośników technologii, ludzi szukających sprzętu komputerowego.

* **Co potrzebują:**

* **Szybkość:** Strona musi działać szybko (zaleta aplikacji na jednej stronie).

* **Tryb ciemny:** Ciemny motyw jest standardem w branży gier i mniej męczy oczy.

* **Dostosowanie do urządzeń:** Możliwość wygodnego przeglądania na telefonie.

---

## 6. Wymagania Techniczne i Prawne

### Prawne

* **Licencja:** Projekt jest na licencji **MIT** (Otwarte Oprogramowanie).

* **Prawa autorskie:** Zdjęcia produktów są z serwisu **Unsplash**, gdzie można je używać za darmo.

* **Ochrona danych:**

* Aplikacja działa w pamięci przeglądarki.

* W tej wersji **nie są zbierane** żadne dane osobowe.

### Standardy i Dostępność

* **Dostępność:**

* Duży kontrast kolorów.

* Obrazki mają opisy dla czytników ekranowych.

* Można sterować klawiaturą.

* **Optymalizacja:**

* Prawidłowa struktura nagłówków.

* Tagi meta dla odpowiedniej wyświetlania na urządzeniach.

---

## 7. Jak Uruchomić

1. Pobierz folder z projektem.

2. Upewnij się, że masz pliki: `index.html`, `style.css`, `script.js`.

3. Otwórz `index.html` w przeglądarce.

4. **Potrzebne połączenie z internetem:** Aplikacja ładuje czcionki i zdjęcia z zewnętrznych serwerów.

---
