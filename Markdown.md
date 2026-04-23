Dokumentacja Projektu: Messenger App
 Architektura Systemu
Projekt jest realizowany w nowoczesnym modelu jednostronicowym:

SPA (Single Page Application): Cała logika interfejsu i nawigacja odbywa się po stronie klienta (przeglądarki).

Dynamiczne renderowanie: Widoki są generowane dynamicznie przez JavaScript, co eliminuje przeładowywanie strony przy przechodzeniu między rozmowami.

Asynchroniczność: Komunikacja z bazą danych odbywa się w tle, zapewniając płynność działania UI (User Experience).

 Stack Technologiczny
Technologie podstawowe:
Języki: HTML5, CSS3, JavaScript (ES6+), PHP (Backend).

Formaty: JSON (wymiana danych), Markdown (formatowanie treści).

Frameworki i Biblioteki:
Vite: Nowoczesne narzędzie do budowania i serwowania aplikacji.

Node.js: Środowisko do zarządzania pakietami (npm).

marked.js: Biblioteka zamieniająca składnię Markdown na HTML w wiadomościach.

Bezpieczeństwo:
Przechowywanie tokenów i kluczy API w plikach .env.

Walidacja danych po stronie klienta i serwera.

 Logika Biznesowa
Funkcjonalności i UX:
System wiadomości: Pisanie i odbieranie komunikatów w czasie rzeczywistym.

Obsługa Markdown: Użytkownicy mogą przesyłać sformatowany tekst, listy i bloki kodu.

Zarządzanie stanem: Aplikacja pamięta aktywną rozmowę i statusy użytkowników bez odświeżania strony.

 Grupa Docelowa
Odbiorcy: Deweloperzy i zespoły techniczne.

Potrzeby: Prosty, szybki komunikator z obsługą formatowania technicznego.

 Wymagania Prawne i Standardy
RODO: Zarządzanie prywatnością użytkownika i ciasteczkami (cookies).

Prawa autorskie: Licencja określająca zasady korzystania z kodu.

WCAG 2.1: Dostosowanie interfejsu dla osób z niepełnosprawnościami (czytniki ekranu, kontrast).

SEO: Podstawowa optymalizacja strony wejściowej (Landing Page).

 Dokumentacja Końcowa
Dokumentacja techniczna: Wykorzystanie JSDoc dla kodu JavaScript oraz PHPDoc dla logiki serwerowej.

Opis projektu: Dokumentacja w formacie Markdown opisująca strukturę plików i sposób instalacji.
