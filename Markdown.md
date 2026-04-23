#  Twitch Stream Explorer (Live Hub)

Nowoczesna aplikacja typu **SPA (Single Page Application)** służąca do odkrywania treści na platformie Twitch, oferująca zaawansowane filtrowanie niszowe i dynamiczny interfejs użytkownika.

##  Architektura Systemu

* **SPA (Single Page Application):** Frontend oparty na dynamicznym przełączaniu między widokami bez przeładowywania strony, co zapewnia szybkość działania i płynność nawigacji.
* **REST API (PHP Proxy):** Backend pełniący rolę bezpiecznego pośrednika dla API Twitcha. Odpowiada za:
    * Autoryzację OAuth2 (ukrywanie kluczy przed użytkownikiem).
    * Pobieranie danych o streamach i kategoriach.
    * Zarządzanie metadanymi o obserwowanych tagach w bazie danych.

## 🛠️ Stack Technologiczny

* **Języki Programowania:** JavaScript (ES6+), PHP, HTML5, CSS3.
* **Format Danych:** JSON (wymiana danych między PHP a JS).
* **Narzędzia Deweloperskie:** Vite (szybkie budowanie i HMR), Node.js (wyłącznie do procesów kompilacji).
* **Biblioteki Zewnętrzne:** `marked.js` do renderowania opisów kanałów z formatu Markdown.

##  Logika Biznesowa i Podział Treści

### 1. Kategorie Główne (Stream Types)
Aplikacja kategoryzuje treści w sposób bardziej precyzyjny niż standardowy katalog Twitcha:
* **Gaming:**
    * *Esports*: Transmisje z turniejów i pro-playerzy.
    * *Speedrun*: Przechodzenie gier na czas.
* **IRL & Creative:**
    * *Just Chatting*: Rozmowy, podcasty i interakcja z czatem.
    * *Software & Dev*: Live-coding, elektronika i technologia.

### 2. System Filtrowania i Tagi
* **Menu Tagi:** Interaktywny panel, który pobiera i wyświetla aktualne tagi bezpośrednio z serwerów Twitcha (np. *No Backseating*, *Drops Enabled*, *Level Up*).
* **Dynamiczne Filtrowanie:** Natychmiastowe odświeżanie listy na podstawie:
    * Popularności (sortowanie od największych lub najmniejszych transmisji).
    * Języka (np. wybór wyłącznie kanałów polskojęzycznych).
    * Przynależności do wybranej sub-grupy tematycznej.

##  UX/UI i Prezentacja

### Live Card Design (Karta Streamu)
Każdy stream prezentowany jest w formie nowoczesnej karty:
* **Dynamic Thumbnail:** Podgląd na żywo pobierany z Twitcha w formie klatek z transmisji.
* **Status Live:** Pulsujący wskaźnik "LIVE" wraz z dynamicznie aktualizowaną liczbą widzów.
* **Opis Kanału:** Sekcja "O mnie" streamera, renderowana z formatu Markdown przy użyciu biblioteki `marked.js`.

### Wygląd i Układ
* **Dark Mode:** Nowoczesny, ciemny motyw graficzny wykorzystujący estetykę Twitcha (odcienie fioletu i szarości).
* **Layout:** Responsywna siatka (CSS Grid), która dostosowuje liczbę kolumn do szerokości ekranu (Desktop / Mobile).

##  Wymagania Techniczne i Standardy

### Dostępność (WCAG 2.1)
* Zachowanie wysokiego kontrastu tekstów i elementów nawigacyjnych.
* Czytelne etykiety (Aria-labels) dla czytników ekranu, szczególnie przy dynamicznie zmieniających się licznikach widzów.

### Dokumentacja Projektowa
* **Kod źródłowy:** Pełne opisy funkcji i logiki autoryzacji w standardzie JSDocs (dla JS) oraz PHPDoc (dla PHP).
* **Struktura JSON:** Dokumentacja Markdown opisująca mapowanie pól z natywnego API Twitcha na format wykorzystywany przez frontend aplikacji.

##  Grupa Docelowa
Użytkownicy Twitcha poszukujący nowych, ciekawych twórców poza głównym algorytmem strony głównej, szczególnie zainteresowani konkretnymi niszami tematycznymi (np. programowanie, speedruny).
