**Katalog Ofert Pracy**

**Cel strony:**
Strona, na której będzie można znaleźć oferty pracy dopasowane do profilu i potrzeb użytkownika, np. Kasjer, Magazynier, Sprzedawca itp.

### 1. Logika Biznesowa

* **Model Kategoryzacji:** Oferty pracy są pogrupowane w predefiniowane kategorie branżowe (np. Handel detaliczny, Logistyka, Gastronomia). Jedno ogłoszenie (np. stanowisko kasjera) przypisane jest do jednej kategorii głównej.
* **Dynamiczne Filtrowanie (Real-time):** Po wybraniu kategorii przez kandydata, aplikacja wysyła zapytanie do bazy danych z filtrem `WHERE category = 'wybrana_nazwa'` (np. 'Handel').
* **Zasada "No-Reload":** Zmiana kategorii nie odświeża całej strony, a jedynie komponent z listą dostępnych wakatów.
* **Zarządzanie treścią:** Dane o ofertach pracy są odseparowane od kodu – edycja nazwy stanowiska, wymagań lub stawki godzinowej w bazie danych natychmiast aktualizuje stronę u wszystkich szukających pracy.

### 2. Stos Technologiczny

**Frontend:**
* **React.js:** Odpowiada za dynamiczny interfejs.
* **Tailwind CSS:** System klas do szybkiego budowania wyglądu (odpowiada za responsywność, czyli wygodne przeglądanie ofert pracy na telefonach).

**Backend:**
* **Baza danych**

### 3. Kluczowe Funkcje

* **Dynamiczny Pasek Kategorii:** Główne menu (np. Obsługa Klienta, Magazyn, Produkcja, Ochrona), które po kliknięciu błyskawicznie filtruje listę ogłoszeń bez odświeżania całej strony.
* **Wyszukiwarka Live:** Pole tekstowe pozwalające znaleźć konkretne stanowisko lub pracodawcę po nazwie (np. wpisanie słowa "Kasjer" filtruje wyniki w czasie rzeczywistym podczas pisania).
* **Sortowanie wyników:** Możliwość ułożenia ofert pracy według:
    * Alfabetycznie (A-Z) – ułożenie po nazwie stanowiska lub nazwie firmy zatrudniającej.

### Cele na przyszłość:

* Dodanie lokalizacji miejsc pracy po wybraniu konkretnej oferty (np. mapa z dokładnym adresem marketu, w którym potrzebny jest kasjer).
* System dodawania opinii o pracodawcach z różnych branż (jak traktowani są pracownicy, terminowość wypłat).
* Dodanie opcji faworyzacji branż (np. "Handel"), aby oferty z tych kategorii wyświetlały się na początku listy przy kolejnych wizytach na stronie.
