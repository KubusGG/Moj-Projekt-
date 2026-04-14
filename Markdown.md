 Projekt: ElectroCore 
1. Architektura i Koncepcja
Model: Headless (oddzielny front i back).

Typ: SPA z obsługą SSR (żeby Google widziało produkty).

Komunikacja: REST API (wymiana JSON-ów).

Logika: MVC (klasyczny podział na modele, widoki i kontrolery).

2. Stack Technologiczny
Języki: JavaScript (ES6+), PHP 8.x.

Front-end: Vite + Tailwind CSS (szybkie stylowanie) + Marked.js (opisy produktów).

Back-end: Laravel + Node.js (do SSR i mikroserwisów).

Baza danych: PostgreSQL (główna) + Redis (szybki cache/sesje).

3. Funkcje (Co będzie działać?)
Wyszukiwanie: Filtry fasetowe (np. wybór marki, ceny, RAMu).

Zakupy: Koszyk, kody zniżkowe, płatność na raty.

User Experience: Porównywarka sprzętu i panel klienta ze statusami zamówień.

4. Grupa Docelowa
Ludzie szukający elektroniki (B2C) i firmy (B2B).

Priorytet: Sklep musi być "Mobile First" (wygodny na telefonie).

5. Wymagania Prawne i Standardy
Prawo: RODO, polityka cookies i Omnibus (historia cen).

Dostępność: WCAG 2.1 (żeby każdy mógł korzystać ze strony).

SEO: Przyjazne linki, SSR i dane strukturalne dla Google.

6. Dokumentacja
W kodzie: JSDoc oraz PHPDoc.

Techniczna: Dokumentacja API w Swaggerze.

Opis projektu: Pliki .md z opisem procesów biznesowych.
