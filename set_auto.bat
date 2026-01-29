@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo      AUTO-SETUP PORTFOLIO DI PIERLUIGI MONACO
echo ========================================================
echo.

:: 1. Creazione Struttura Cartelle
echo [1/5] Creazione cartelle di progetto...
if not exist "src" mkdir src
if not exist "public" mkdir public

:: 2. Creazione File di Configurazione Automatici
echo [2/5] Generazione file di configurazione (Vite, Package.json, Gitignore)...

:: Creazione package.json
(
echo {
echo   "name": "portfolio-pierluigi",
echo   "private": true,
echo   "version": "1.0.0",
echo   "type": "module",
echo   "scripts": {
echo     "dev": "vite",
echo     "build": "vite build",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "react": "^18.2.0",
echo     "react-dom": "^18.2.0",
echo     "lucide-react": "^0.344.0"
echo   },
echo   "devDependencies": {
echo     "@vitejs/plugin-react": "^4.2.1",
echo     "vite": "^5.1.4"
echo   }
echo }
) > package.json

:: Creazione vite.config.js
(
echo import { defineConfig } from 'vite'
echo import react from '@vitejs/plugin-react'
echo.
echo // https://vitejs.dev/config/
echo export default defineConfig^({
echo   plugins: [react^(^)],
echo ^}^)
) > vite.config.js

:: Creazione .gitignore
(
echo logs
echo *.log
echo node_modules
echo dist
echo .env
echo .DS_Store
) > .gitignore

:: 3. Spostamento File Sorgente
echo [3/5] Organizzazione file...

if exist App.jsx (
    move App.jsx src\
    echo   - App.jsx spostato in src/
) else (
    echo   ATTENZIONE: App.jsx non trovato! Assicurati di averlo scaricato qui.
)

if exist main.jsx (
    move main.jsx src\
    echo   - main.jsx spostato in src/
) else (
    echo   ATTENZIONE: main.jsx non trovato!
)

:: Gestione Asset Publici (CV e Foto)
if exist "CV ITALIANO FINALE (1).pdf" (
    copy "CV ITALIANO FINALE (1).pdf" "public\CV_Pierluigi_Monaco.pdf" >nul
    echo   - CV copiato e rinominato in public/
)
if exist "CV_Pierluigi_Monaco.pdf" (
    move "CV_Pierluigi_Monaco.pdf" public\ >nul
)

if exist profile.png (
    move profile.png public\ >nul
    echo   - Foto profilo spostata in public/
)

:: 4. Inizializzazione GIT
echo [4/5] Inizializzazione Repository Git...
git init
git add .
git commit -m "Initial commit: Portfolio Pierluigi Monaco"
git branch -M main

echo.
echo ========================================================
echo      SETUP COMPLETATO CON SUCCESSO!
echo ========================================================
echo.
echo ORA DEVI SOLO MANDARLO ONLINE:
echo.
echo 1. Vai su https://github.com/new e crea un repository chiamato 'portfolio-pierluigi'
echo 2. Copia i 3 comandi che GitHub ti mostra (sotto '...or push an existing repository')
echo    Solitamente sono simili a:
echo      git remote add origin https://github.com/TUO-USER/portfolio-pierluigi.git
echo      git push -u origin main
echo 3. Incollali qui sotto nel terminale (o in un nuovo terminale) e premi INVIO.
echo 4. Vai su Vercel.com -> Add New Project -> Importa da GitHub.
echo.
pause