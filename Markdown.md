Projekt: Streamline Messenger (Real-time Communication)
Architektura
SPA (Single Page Application): Błyskawiczne przełączanie między konwersacjami bez odświeżania, z zachowaniem stanu scrollowania.

REST API + WebSockets: REST do autoryzacji i pobierania historii; WebSockets (np. Socket.io) do przesyłania wiadomości w czasie rzeczywistym i statusów "pisze...".

Stack technologiczny
Języki: JavaScript (ES6+), PHP (Backend/API), HTML5, CSS3 (Flexbox/Grid), JSON.

Narzędzia: Node.js (Vite do budowy frontendu), npm do zarządzania zależnościami.

Logika biznesowa i podział treści
1. Kategorie konwersacji (Widok główny)
Czaty Prywatne (DM): Bezpośrednia komunikacja 1:1.

Grupy (Channels):

Publiczne: Otwarte kanały tematyczne.

Prywatne: Zamknięte grupy znajomych/zespołów.

2. System statusów i interakcji
Statusy obecności: Dostępny, Zaraz wracam, Nie przeszkadzać (sterowane logicznie przez backend).

Reakcje: Możliwość dodania emoji do konkretnej wiadomości (przechowywane jako powiązane ID w bazie danych).

System powiadomień: Licznik nieprzeczytanych wiadomości (Badge) aktualizowany dynamicznie.

3. UX/UI i Prezentacja
Lista czatów (Sidebar): Awatary użytkowników, podgląd ostatniej wiadomości, czas otrzymania.

Okno rozmowy (Main View):

Dymki wiadomości: Rozróżnienie wizualne (lewo/prawo) dla nadawcy i odbiorcy.

Rich Text: Wsparcie dla markdown (renderowane przez marked.js) – np. pogrubienia lub bloki kodu w wiadomościach.

Multimedia: Inline preview dla linków i obrazków.

Layout: "Double Column" na desktopie, widok pełnoekranowy rozmowy na mobile.

Grupa docelowa
Odbiorca: Zespoły projektowe lub grupy znajomych potrzebujące lekkiego, autorskiego narzędzia do komunikacji.

Potrzeby: Brak opóźnień (low latency), bezpieczne logowanie, czytelna historia rozmów.

Wymagania techniczne i standardy
Bezpieczeństwo i Dostępność
WCAG 2.1: Wysoki kontrast tekstu, obsługa czytników ekranu dla wiadomości przychodzących, nawigacja klawiaturą (Tabowanie po listach czatów).

Sanitaryzacja: Obowiązkowe oczyszczanie danych wejściowych (XSS prevention) po stronie PHP i JS.

Dokumentacja
Technical Docs: Dokumentacja API w formacie OpenAPI/Swagger oraz komentarze JSDoc/PHPDoc.

Struktura danych: Dokument Markdown opisujący schemat bazy (Tabela: users, messages, conversations).
