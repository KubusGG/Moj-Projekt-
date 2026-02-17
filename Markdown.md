# 📘 Dokumentacja Techniczna Projektu: CyberStore

## 1. Metryka Projektu
* **Nazwa projektu:** CyberStore 
* **Typ aplikacji:** SPA (Single Page Application) – Aplikacja jednostronicowa
* **Status:** MVP (Minimum Viable Product – Wersja demonstracyjna)
* **Technologia:** Frontend (Client-Side)
* **Autor:** [Jakub Kloskowski 1Kl]

---

## 2. Architektura Systemu

Projekt został zrealizowany w architekturze **SPA (Single Page Application)**. Oznacza to, że strona ładuje się tylko raz, a wszystkie kolejne interakcje (filtrowanie, dodawanie do koszyka) odbywają się dynamicznie po stronie przeglądarki, bez konieczności przeładowywania strony.

### Zastosowany Wzorzec: MVC (Model-View-Controller)
Chociaż jest to projekt frontendowy, zastosowałem logiczny podział kodu wzorowany na MVC:

1.  **MODEL (Dane):**
    * Plik `script.js` zawiera stałą `products` – tablicę obiektów JSON.
    * Pełni ona rolę lokalnej bazy danych (ID, nazwa, cena, kategoria, zdjęcie).
2.  **VIEW (Widok):**
    * Plik `index.html` odpowiada za strukturę DOM.
    * Plik `style.css` odpowiada za warstwę wizualną (responsywność, motyw Neon/Dark Mode).
    * Widok jest generowany dynamicznie przez JavaScript (DOM Manipulation).
3.  **CONTROLLER (Logika):**
    * Funkcje w `script.js` sterują przepływem danych.
    * Przykłady: `addToCart()` (dodawanie), `filterProducts()` (filtrowanie), `renderProducts()` (wyświetlanie).



[Image of MVC architecture diagram for web application]


---

## 3. Stack Technologiczny (Użyte technologie)

### Frontend (Warstwa Klienta)
* **HTML5:** Semantyczna budowa strony (użycie znaczników `<header>`, `<main>`, `<footer>`, `<section>`).
* **CSS3:**
    * **CSS Grid:** Do stworzenia responsywnej siatki produktów.
    * **Flexbox:** Do układu nawigacji i koszyka.
    * **Zmienne CSS (`:root`):** Do łatwego zarządzania kolorami motywu.
* **JavaScript (ES6+):**
    * Wykorzystanie **Vanilla JS** (czysty JS bez frameworków).
    * Użycie funkcji strzałkowych, Template Literals oraz metod tablicowych (`.map`, `.filter`, `.reduce`).

### Narzędzia i Biblioteki
* **JSON:** Format przechowywania danych o produktach.
* **FontAwesome:** Biblioteka ikon wektorowych (koszyk, lupka, ikony społecznościowe).
* **Google Fonts:** Typografia (rodzina czcionek *Poppins*).
* **Markdown / Marked.js:** Użyte do generowania i wyświetlania niniejszej dokumentacji technicznej.

### Środowisko Deweloperskie
* **Node.js / Vite:** (Opcjonalnie) Wykorzystywane jako lokalny serwer deweloperski do szybkiego podglądu zmian.

---

## 4. Logika Biznesowa (UX/UI)

Aplikacja realizuje kluczowe procesy sklepu internetowego:

### Przepływ Danych (Data Flow):
1.  **Inicjalizacja:** Po wejściu na stronę skrypt pobiera dane z tablicy i "rysuje" kafelki produktów.
2.  **Wyszukiwanie (Live Search):** Użytkownik wpisuje frazę -> JS filtruje tablicę w czasie rzeczywistym -> Lista produktów jest odświeżana.
3.  **Filtrowanie Kategorii:** Kliknięcie w przycisk (np. "Gaming") błyskawicznie zmienia wyświetlane produkty bez odświeżania strony.
4.  **Obsługa Koszyka:**
    * Dodanie produktu aktualizuje licznik w nagłówku.
    * Wyświetla się powiadomienie typu "Toast" (dymek z potwierdzeniem).
    * Koszyk jest przechowywany w pamięci tymczasowej (zmienna `cart`).



---

## 5. Grupa Docelowa

* **Odbiorca:** Gracze (Gamers), entuzjaści technologii, osoby szukające sprzętu komputerowego.
* **Potrzeby:**
    * **Szybkość:** Strona musi działać natychmiastowo (zaleta SPA).
    * **Dark Mode:** Ciemny motyw jest standardem w branży gamingowej i mniej męczy wzrok.
    * **Responsywność:** Możliwość wygodnego przeglądania na telefonie (Mobile First).

---

## 6. Wymagania Techniczne i Prawne

### Wymagania Prawne
* **Licencja Kodu:** Projekt udostępniony na licencji **MIT** (Open Source).
* **Prawa Autorskie (Grafika):** Wszystkie zdjęcia produktów pochodzą z serwisu **Unsplash**, który oferuje darmową licencję do użytku komercyjnego i edukacyjnego.
* **RODO (Prywatność):**
    * Aplikacja działa w oparciu o pamięć przeglądarki (Session Storage).
    * W wersji demonstracyjnej **nie są zbierane ani wysyłane** żadne dane osobowe użytkowników na zewnętrzne serwery.

### Standaryzacja i Dostępność
* **WCAG 2.1:**
    * Zadbano o wysoki kontrast (jasny tekst na ciemnym tle).
    * Obrazki posiadają atrybuty `alt` dla czytników ekranowych.
    * Interfejs jest obsługiwalny za pomocą klawiatury (Tabindex).
* **SEO (Search Engine Optimization):**
    * Prawidłowa hierarchia nagłówków (`h1`, `h2`, `h3`).
    * Meta tagi responsywności (`viewport`).

---

## 7. Instrukcja Uruchomienia

1.  Pobierz folder z projektem.
2.  Upewnij się, że posiadasz pliki: `index.html`, `style.css`, `script.js`.
3.  Otwórz plik `index.html` w dowolnej nowoczesnej przeglądarce (Chrome, Edge, Firefox).
4.  **Wymagane połączenie z Internetem:** Aplikacja pobiera fonty i zdjęcia z zewnętrznych serwerów (CDN).

---