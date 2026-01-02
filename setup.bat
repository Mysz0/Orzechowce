@echo off
REM Schronisko Orzechowce - Setup Script for Windows
REM This script helps you set up the project quickly

echo.
echo 🐾 Witaj w Schronisku Orzechowce Setup!
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install it first:
    echo    https://nodejs.org/
    exit /b 1
)

echo ✅ Node.js is installed
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed. Please install Node.js first.
    exit /b 1
)

echo ✅ npm is installed
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo.

REM Check if .env exists
if not exist .env (
    echo ⚙️  Creating .env file from template...
    copy .env.example .env
    echo ✅ .env file created!
    echo.
    echo ⚠️  IMPORTANT: Edit .env file and add your Supabase credentials:
    echo    - NEXT_PUBLIC_SUPABASE_URL
    echo    - NEXT_PUBLIC_SUPABASE_ANON_KEY
    echo    - ADMIN_PASSWORD
) else (
    echo ✅ .env file already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo 📖 Next steps:
echo    1. Edit .env file with your Supabase credentials
echo    2. Run: npm run dev
echo    3. Open: http://localhost:3000
echo.
echo 📚 Read DEPLOYMENT.md for full setup instructions
echo.

pause
