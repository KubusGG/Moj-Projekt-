

---

#  Projekt: ElectroCore

### 1. O co chodzi?
Buduję nowoczesny sklep z elektroniką (coś jak Media Expert). Chcę, żeby był szybki na telefonach i łatwy do znalezienia w Google.

### 2. Architektura
* **Headless:** Rozdzielam wygląd (Front) od silnika (Back).
* **SSR + SPA:** Strona działa płynnie, ale serwer pomaga ją ładować pod SEO.
* **API:** Dane latają w JSON przez REST API.
* **MVC:** Klasyczny porządek w kodzie.

### 3. Technologie (Stack)
* **Języki:** JS (ES6+) oraz PHP 8.
* **Front:** Vite (szybki build), Tailwind (style), Marked.js (opisy produktów).
* **Back:** Laravel + Node.js.
* **Baza:** PostgreSQL + Redis do przyspieszenia sesji.

### 4. Co w środku? (Funkcje)
* **Filtry:** Wybieranie sprzętu po parametrach (fasetowe).
* **Porównywarka:** Zestawienie specyfikacji dwóch produktów.
* **Koszyk:** Obsługa kodów rabatowych i system ratalny.
* **Konto:** Historia zamówień i panel reklamacji.

### 5. Dla kogo?
* Zwykli ludzie (B2C) i firmy (B2B).
* Ma być **Mobile First** – telefon to podstawa.

### 6. Prawo i Standardy
* **Zasady:** RODO, Omnibus (historia cen), WCAG 2.1 (dostępność).
* **SEO:** Przyjazne linki i tagi dla Google.
* **Licencje:** Tylko darmowe, open-source (MIT/Apache).

### 7. Dokumentacja
* Komentarze w kodzie: **JSDoc / PHPDoc**.
* Dokumentacja API: **Swagger**.
