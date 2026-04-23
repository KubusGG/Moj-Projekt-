Projekt: Twitch Stream Explorer (Live Hub)
Architektura
SPA (Single Page Application): Dynamiczne przełączanie między typami streamów i kategoriami bez przeładowania strony.

REST API: Backend w PHP służący jako proxy dla API Twitcha (autoryzacja OAuth2) oraz przechowujący metadane o obserwowanych tagach w bazie danych.

Stack technologiczny
Języki: JS (ES6+), PHP, HTML, CSS, JSON.

Narzędzia: Node.js (wyłącznie do kompilacji Vite), Vite.

Logika biznesowa i podział treści
1. Kategorie główne (Stream Types)
Gaming:

Sub-grupa: Esports (turnieje i pro-playerzy).

Sub-grupa: Speedrun (przechodzenie gier na czas).

IRL & Creative:

Sub-grupa: Just Chatting (rozmowy, podcasty).

Sub-grupa: Software & Dev (programowanie i technologia).

2. System filtrowania i Tagi
Menu Tagi: Interaktywny panel pobierający aktualne tagi z Twitcha (np. No Backseating, Drops Enabled, Level Up, Tutorial).

Filtrowanie Live: Dynamiczne odświeżanie listy streamów na podstawie:

Liczby widzów (od najpopularniejszych / od niszowych).

Języka transmisji (np. tylko polskie kanały).

Wybranej sub-grupy.

3. UX/UI i Prezentacja
Karta Streamu (Live Card Design):

Dynamiczny Thumbnail: Podgląd live (klatki z transmisji).

Status Live: Pulsujący wskaźnik "LIVE" z aktualną liczbą widzów.

Opis kanału: Renderowany przez marked.js (pobierany z sekcji "O mnie" streamera).

Layout: Nowoczesny, ciemny motyw (Dark Mode) z responsywną siatką (CSS Grid).

Grupa docelowa
Odbiorca: Użytkownicy Twitcha szukający nowych treści poza algorytmem strony głównej.

Potrzeby: Szybki podgląd tego, co dzieje się na platformie w konkretnych niszach tematycznych.
