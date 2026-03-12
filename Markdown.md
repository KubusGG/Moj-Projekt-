# Dokumentacja Projektu CyberStore

## 1. Informacje o Projekcie

* Nazwa projektu: CyberStore

* Rodzaj aplikacji: Aplikacja jednostronicowa

* Status: Wersja demonstracyjna

* Technologia: Frontend

* Autor: Jakub Kloskowski

---

## 2. Jak Działa Nasz System

Nasza strona ładuje się tylko raz, a wszystkie kolejne interakcje odbywają się dynamicznie bez potrzeby przeładowywania strony.

### Nasz Wzorzec: Model-Widok-Kontroler

Chociaż jest to projekt frontendowy, użyliśmy logiki podobnej do Model-Widok-Kontroler:

1. **Dane:**

* Mamy plik `script.js` z danymi w formacie JSON.

* To nasza lokalna baza danych.

2. **Widok:**

* Plik `index.html` to struktura naszej strony.

* Plik `style.css` to nasz wygląd.

* Widok generowany jest dynamicznie przez JavaScript.

3. **Logika:**

* Funkcje w `script.js` sterują naszymi danymi.

* Przykłady: dodawanie do koszyka, filtrowanie produktów, wyświetlanie.

---

## 3. Technologie, które Używamy

### Frontend

* **HTML5:** Użyliśmy semantycznych znaczników.

* **CSS3:**

* **CSS Grid:** Do stworzenia responsywnej siatki.

* **Flexbox:** Do układu nawigacji i koszyka.

* **Zmienne CSS:** Do łatwego zarządzania kolorami.

* **JavaScript:**

* Użyliśmy czystego JavaScript bez frameworków.

* Wykorzystaliśmy nowe funkcje, takie jak strzałkowe funkcje i template literals.

### Narzędzia

* **JSON:** Format przechowywania danych.

* **FontAwesome:** Biblioteka ikon.

* **Google Fonts:** Typografia.

* **Markdown:** Użyliśmy go do tworzenia dokumentacji.

### Środowisko Deweloperskie

* **Node.js / Vite:** Opcjonalnie używane jako lokalny serwer.

---

## 4. Jak Działa Nasz Sklep

Nasza aplikacja realizuje kluczowe procesy sklepu internetowego:

### Przepływ Danych:

1. **Inicjalizacja:** Po wejściu na stronę, skrypt pobiera dane i “rysuje” produkty.

2. **Wyszukiwanie:** Użytkownik wpisuje frazę -> JavaScript filtruje dane -> Lista produktów jest odświeżana.

3. **Filtrowanie:** Kliknięcie w przycisk zmienia wyświetlane produkty bez odświeżania strony.

4. **Koszyk:**

* Dodanie produktu aktualizuje licznik.

* Wyświetla się powiadomienie.

* Koszyk jest przechowywany w pamięci tymczasowej.

---

## 5. Dla Kogo Jest Nasz Sklep

* **Odbiorca:** Gracze, entuzjaści technologii, osoby szukające sprzętu komputerowego.

* **Potrzeby:**

* **Szybkość:** Strona musi działać szybko.

* **Dark Mode:** Ciemny motyw jest standardem.

* **Responsywność:** Możliwość wygodnego przeglądania na telefonie.

---

## 6. Wymagania Techniczne i Prawne

### Wymagania Prawne

* **Licencja:** Projekt udostępniony na licencji MIT.

* **Prawa Autorskie:** Zdjęcia produktów pochodzą z serwisu Unsplash.

* **Prywatność:** Aplikacja działa w oparciu o pamięć przeglądarki.

### Standaryzacja i Dostępność

* **WCAG 2.1:** Zadbano o wysoki kontrast i dostępność.

* **SEO:** Prawidłowa hierarchia nagłówków i meta tagi.
