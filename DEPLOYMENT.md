# Schronisko Orzechowce - Przewodnik Wdrożenia

## 🚀 Szybki Start - Krok po kroku

### Krok 1: Przygotuj Supabase (5 minut)

1. **Utwórz konto na Supabase**
   - Idź na https://supabase.com
   - Kliknij "Start your project"
   - Zaloguj się przez GitHub

2. **Utwórz nowy projekt**
   - Kliknij "New Project"
   - Wybierz organizację
   - Nazwa projektu: \`schronisko-orzechowce\`
   - Hasło do bazy danych: zapisz je bezpiecznie!
   - Region: Frankfurt (najbliżej Polski)
   - Kliknij "Create new project"
   - Poczekaj 2-3 minuty na setup

3. **Utwórz bazę danych**
   - Po lewej stronie kliknij ikonę "SQL Editor"
   - Kliknij "New query"
   - Otwórz plik \`supabase/schema.sql\` z tego projektu
   - Skopiuj **całą** zawartość
   - Wklej do edytora SQL w Supabase
   - Kliknij "Run" (lub Ctrl+Enter)
   - Powinieneś zobaczyć "Success. No rows returned"

4. **Skopiuj klucze API**
   - Po lewej stronie kliknij ikonę "Settings" (koło zębate)
   - Kliknij "API"
   - Zapisz:
     - **Project URL** (np. \`https://xxxxx.supabase.co\`)
     - **anon public** key (długi string zaczynający się od \`eyJ...\`)

### Krok 2: Przygotuj GitHub (3 minuty)

1. **Utwórz repozytorium na GitHub**
   - Idź na https://github.com
   - Kliknij "+" → "New repository"
   - Nazwa: \`schronisko-orzechowce\`
   - Ustaw jako Private lub Public
   - **NIE** zaznaczaj "Add a README file"
   - Kliknij "Create repository"

2. **Wypchnij kod na GitHub**
   Otwórz terminal w folderze projektu i wykonaj:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit - new adoption site"
   git branch -M main
   git remote add origin https://github.com/TWOJA-NAZWA-UŻYTKOWNIKA/schronisko-orzechowce.git
   git push -u origin main
   \`\`\`

### Krok 3: Wdróż na Vercel (5 minut)

1. **Utwórz konto na Vercel**
   - Idź na https://vercel.com
   - Kliknij "Sign Up"
   - Wybierz "Continue with GitHub"
   - Autoryzuj Vercel

2. **Importuj projekt**
   - Na dashboardzie Vercel kliknij "Add New..."
   - Wybierz "Project"
   - Znajdź \`schronisko-orzechowce\` z listy repozytoriów
   - Kliknij "Import"

3. **Skonfiguruj zmienne środowiskowe**
   - Rozwiń sekcję "Environment Variables"
   - Dodaj 3 zmienne:
   
   **Zmienna 1:**
   - Key: \`NEXT_PUBLIC_SUPABASE_URL\`
   - Value: Twój Project URL z Supabase (np. \`https://xxxxx.supabase.co\`)
   
   **Zmienna 2:**
   - Key: \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
   - Value: Twój anon public key z Supabase
   
   **Zmienna 3:**
   - Key: \`ADMIN_PASSWORD\`
   - Value: Wymyśl bezpieczne hasło (np. \`Schronisko2026!\`)

4. **Deploy!**
   - Kliknij "Deploy"
   - Poczekaj 2-3 minuty
   - Gotowe! 🎉

### Krok 4: Przetestuj stronę (2 minuty)

1. **Otwórz stronę**
   - Vercel pokaże URL (np. \`schronisko-orzechowce.vercel.app\`)
   - Kliknij "Visit" lub otwórz URL w przeglądarce

2. **Sprawdź stronę publiczną**
   - Powinieneś zobaczyć 5 przykładowych zwierząt (Luna, Max, Mruczek, Bella, Rex)
   - Przetestuj filtry (Psy/Koty)

3. **Zaloguj się do panelu admin**
   - Kliknij "Panel Administracyjny" w prawym górnym rogu
   - Wprowadź hasło, które ustawiłeś w kroku 3
   - Sprawdź listę zwierząt

4. **Dodaj pierwsze zwierzę**
   - Kliknij "Dodaj zwierzę"
   - Wypełnij formularz
   - Dla zdjęcia możesz użyć tymczasowego URL, np.:
     \`https://images.unsplash.com/photo-1543466835-00a7907e9de1\`
   - Zapisz i sprawdź na stronie głównej

## 🖼️ Dodawanie Zdjęć - Szczegółowo

### Opcja A: Supabase Storage (Zalecana)

1. **Utwórz bucket**
   - W Supabase kliknij "Storage" w menu
   - Kliknij "Create a new bucket"
   - Nazwa: \`pets\`
   - Ustaw jako Public
   - Kliknij "Create bucket"

2. **Prześlij zdjęcie**
   - Kliknij na bucket "pets"
   - Kliknij "Upload file"
   - Wybierz zdjęcie (najlepiej kwadratowe, min 500x500px)
   - Po przesłaniu kliknij na plik
   - Skopiuj "Public URL"

3. **Dodaj URL do konfiguracji**
   - Otwórz plik \`next.config.js\`
   - Znajdź linię: \`domains: ['YOUR_SUPABASE_PROJECT_ID.supabase.co']\`
   - Zamień \`YOUR_SUPABASE_PROJECT_ID\` na swój ID projektu
     (np. jeśli URL to \`https://abc123.supabase.co\`, użyj \`abc123.supabase.co\`)
   - Zapisz plik
   - Wypchnij zmiany:
     \`\`\`bash
     git add next.config.js
     git commit -m "Update Supabase domain for images"
     git push
     \`\`\`
   - Vercel automatycznie wdroży zmiany

### Opcja B: Imgur (Najprostsze)

1. Idź na https://imgur.com
2. Kliknij "New post"
3. Przeciągnij zdjęcie
4. Po przesłaniu kliknij prawym na zdjęcie → "Copy image address"
5. Wklej URL w formularzu

### Opcja C: Unsplash (Do testów)

Użyj darmowych zdjęć:
- Psy: \`https://images.unsplash.com/photo-1543466835-00a7907e9de1\`
- Koty: \`https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba\`
- Więcej: https://unsplash.com/s/photos/dog

## 🔐 Zarządzanie Hasłem Admin

### Zmiana hasła

**Lokalnie:**
- Edytuj plik \`.env\`
- Zmień \`ADMIN_PASSWORD=nowe_hasło\`

**Na Vercel:**
1. Idź do swojego projektu na Vercel
2. Kliknij "Settings"
3. Kliknij "Environment Variables"
4. Znajdź \`ADMIN_PASSWORD\`
5. Kliknij trzypunktowy przycisk → "Edit"
6. Wprowadź nowe hasło
7. Kliknij "Save"
8. **Ważne:** Idź do "Deployments" i kliknij "Redeploy"

## 🎨 Personalizacja Strony

### Zmiana kolorów

Edytuj [tailwind.config.js](tailwind.config.js):
\`\`\`javascript
colors: {
  primary: {
    500: '#ef4444', // Zmień na swój kolor (hex)
    600: '#dc2626',
    // ...
  },
}
\`\`\`

Następnie:
\`\`\`bash
git add .
git commit -m "Change colors"
git push
\`\`\`

### Zmiana tekstów

Wszystkie teksty są w plikach:
- [app/page.tsx](app/page.tsx) - strona główna
- [app/admin/page.tsx](app/admin/page.tsx) - panel admin
- [app/admin/add/page.tsx](app/admin/add/page.tsx) - formularz dodawania

### Dodanie logo

1. Dodaj plik logo (np. \`logo.png\`) do folderu \`public/\`
2. W \`app/page.tsx\` zamień \`<PawPrint>\` na:
   \`\`\`tsx
   <Image src="/logo.png" alt="Logo" width={32} height={32} />
   \`\`\`

## 🔗 Własna Domena

### Połącz domenę z Vercel

1. W projekcie Vercel kliknij "Settings"
2. Kliknij "Domains"
3. Wprowadź swoją domenę (np. \`adopcje.schroniskoorzechowce.pl\`)
4. Vercel poda rekordy DNS do dodania
5. W panelu swojego providera domeny dodaj podane rekordy
6. Poczekaj 24-48h na propagację DNS

## 📊 Monitorowanie

### Vercel Analytics
- Automatycznie włączone
- Zobacz statystyki w "Analytics" na Vercel

### Supabase Monitoring
- Kliknij "Reports" w Supabase
- Zobacz liczbę zapytań, użytkowników, itp.

## 🆘 Pomoc i Rozwiązywanie Problemów

### Problem: "Error: Invalid Supabase URL"
**Rozwiązanie:**
- Sprawdź czy URL w zmiennych środowiskowych jest poprawny
- Upewnij się, że zaczyna się od \`https://\`
- Nie ma spacji na końcu

### Problem: "Unauthorized" przy dodawaniu zwierzęcia
**Rozwiązanie:**
- Sprawdź czy wykonałeś pełny skrypt SQL (włącznie z politykami RLS)
- W Supabase idź do "Authentication" → "Policies"
- Upewnij się, że polityki są włączone

### Problem: Zdjęcia nie ładują się
**Rozwiązanie:**
- Sprawdź czy domena jest dodana w \`next.config.js\`
- Upewnij się, że URL zdjęcia jest publiczny
- Otwórz URL w przeglądarce - czy działa?

### Problem: Nie mogę się zalogować do admin
**Rozwiązanie:**
- Sprawdź czy \`ADMIN_PASSWORD\` jest ustawione w Vercel
- Otwórz console (F12) i sprawdź czy są błędy
- Wyczyść cache przeglądarki (Ctrl+Shift+R)

## 📞 Kontakt i Wsparcie

Jeśli potrzebujesz pomocy:
1. Przeczytaj ten przewodnik ponownie
2. Sprawdź [README.md](README.md)
3. Zobacz logi w Vercel ("Deployments" → kliknij na deployment → "Logs")
4. Zobacz logi w Supabase ("Logs")

## ✅ Checklist Przed Startem

- [ ] Utworzyłem projekt w Supabase
- [ ] Wykonałem skrypt SQL
- [ ] Mam URL i klucz API z Supabase
- [ ] Utworzyłem repozytorium na GitHub
- [ ] Wypchnąłem kod na GitHub
- [ ] Utworzyłem projekt na Vercel
- [ ] Dodałem zmienne środowiskowe
- [ ] Strona jest wdrożona i działa
- [ ] Przetestowałem dodawanie zwierzęcia
- [ ] Zmieniłem domyślne hasło admin

---

**Powodzenia! Niech każde zwierzę znajdzie kochający dom! 🐾❤️**
