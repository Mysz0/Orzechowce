# Schronisko Orzechowce - Nowa Strona Adopcyjna

Nowoczesna strona internetowa dla Schroniska dla Bezdomnych Zwierząt w Orzechowcach, zaprojektowana, aby zwiększyć szanse zwierząt na adopcję.

## ✨ Funkcje

### Dla Odwiedzających
- 📱 **Responsywny design** - działa świetnie na telefonach, tabletach i komputerach
- 🐕 **Atrakcyjne karty zwierząt** - duże zdjęcia, opisy, informacje o wieku i płci
- 🔍 **Filtrowanie** - łatwe wyszukiwanie psów lub kotów
- 💖 **Przyjazny interfejs** - nowoczesny design zachęcający do adopcji

### Dla Administratorów
- ➕ **Łatwe dodawanie zwierząt** - prosty formularz z podglądem
- ✏️ **Edycja informacji** - aktualizacja danych i zdjęć
- 🗑️ **Usuwanie zwierząt** - po adopcji lub zmianie statusu
- 📊 **Zarządzanie statusem** - dostępny, zarezerwowany, adoptowany
- 🔒 **Prosty system logowania** - zabezpieczony panel administracyjny

## 🚀 Technologie

- **Next.js 14** - framework React z App Router
- **TypeScript** - typowanie dla bezpieczeństwa kodu
- **Tailwind CSS** - nowoczesne style i animacje
- **Supabase** - baza danych PostgreSQL i autentykacja
- **Vercel** - hosting i automatyczne wdrożenia
- **Lucide Icons** - piękne ikony

## 📦 Instalacja

### 1. Sklonuj repozytorium
\`\`\`bash
git clone <your-repo-url>
cd Orzechowce
\`\`\`

### 2. Zainstaluj zależności
\`\`\`bash
npm install
\`\`\`

### 3. Skonfiguruj Supabase

#### Utwórz projekt w Supabase
1. Idź do [supabase.com](https://supabase.com)
2. Utwórz nowy projekt
3. Skopiuj URL projektu i klucz API (anon key)

#### Utwórz bazę danych
1. W panelu Supabase idź do **SQL Editor**
2. Otwórz plik \`supabase/schema.sql\`
3. Skopiuj całą zawartość i wklej do SQL Editor
4. Wykonaj zapytanie (kliknij "Run")

To utworzy:
- Tabelę \`pets\` z wszystkimi potrzebnymi kolumnami
- Indeksy dla szybszych zapytań
- Row Level Security (RLS) policies
- Przykładowe dane testowe

### 4. Skonfiguruj zmienne środowiskowe
\`\`\`bash
cp .env.example .env
\`\`\`

Edytuj plik \`.env\` i dodaj swoje dane:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
\`\`\`

### 5. Uruchom lokalnie
\`\`\`bash
npm run dev
\`\`\`

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 🌐 Wdrożenie na Vercel

### Metoda 1: Przez GitHub (Zalecana)

1. **Stwórz repozytorium na GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/schronisko-orzechowce.git
   git push -u origin main
   \`\`\`

2. **Połącz z Vercel**
   - Idź do [vercel.com](https://vercel.com)
   - Kliknij "New Project"
   - Importuj swoje repozytorium GitHub
   - Vercel automatycznie wykryje Next.js

3. **Dodaj zmienne środowiskowe**
   - W ustawieniach projektu w Vercel
   - Idź do "Settings" → "Environment Variables"
   - Dodaj:
     - \`NEXT_PUBLIC_SUPABASE_URL\`
     - \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
     - \`ADMIN_PASSWORD\`

4. **Deploy!**
   - Kliknij "Deploy"
   - Każdy push do main będzie automatycznie wdrażany

### Metoda 2: Przez Vercel CLI

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

## 🔒 Bezpieczeństwo

### Panel Administracyjny
- Domyślne hasło: \`admin123\`
- **WAŻNE**: Zmień hasło przed wdrożeniem produkcyjnym!
- Hasło przechowywane w zmiennej środowiskowej \`ADMIN_PASSWORD\`

### Supabase Row Level Security (RLS)
- Wszyscy mogą przeglądać zwierzęta dostępne do adopcji
- Tylko uwierzytelnieni użytkownicy mogą dodawać/edytować/usuwać
- Dane są bezpieczne nawet jeśli klucz API wycieknie

## 📸 Dodawanie Zdjęć

### Opcja 1: Supabase Storage (Zalecana)
1. W panelu Supabase idź do "Storage"
2. Utwórz bucket "pets"
3. Prześlij zdjęcia
4. Skopiuj publiczny URL
5. Wklej URL w formularzu dodawania zwierzęcia

### Opcja 2: Zewnętrzny hosting
- Imgur, Cloudinary, itp.
- Wklej URL bezpośrednio w formularzu

## 🎨 Personalizacja

### Kolory
Edytuj [tailwind.config.js](tailwind.config.js):
\`\`\`javascript
colors: {
  primary: {
    // Zmień tutaj kolory
  }
}
\`\`\`

### Logo i Nagłówek
Edytuj [app/page.tsx](app/page.tsx) i [app/admin/page.tsx](app/admin/page.tsx)

### Treści
Wszystkie teksty są w plikach TSX - łatwo edytowalne

## 📱 Responsywność

Strona jest w pełni responsywna:
- 📱 Mobile: 1 kolumna
- 💻 Tablet: 2 kolumny
- 🖥️ Desktop: 3-4 kolumny

## 🐛 Rozwiązywanie problemów

### Zwierzęta nie ładują się
- Sprawdź zmienne środowiskowe w \`.env\`
- Sprawdź czy tabela \`pets\` istnieje w Supabase
- Sprawdź console w przeglądarce (F12) czy są błędy

### Nie mogę się zalogować do panelu admin
- Sprawdź hasło w \`.env\`
- Dla produkcji: sprawdź zmienne w ustawieniach Vercel

### Zdjęcia nie wyświetlają się
- Sprawdź czy URL jest poprawny
- Dodaj domenę do \`next.config.js\` w sekcji \`images.domains\`

## 📞 Wsparcie

Jeśli masz problemy:
1. Sprawdź ten README
2. Zobacz logi w konsoli (F12)
3. Sprawdź logi Supabase
4. Sprawdź logi Vercel

## 📄 Licencja

Ten projekt jest stworzony dla Schroniska Orzechowce.

## 🙏 Podziękowania

Stworzone z ❤️ dla zwierząt szukających domu.

---

**Pamiętaj**: Każda adopcja to uratowane życie! 🐾
