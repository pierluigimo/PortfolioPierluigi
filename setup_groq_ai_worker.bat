@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   CONFIGURAZIONE WORKER AI SICURA (GITHUB COMPLIANT)
echo ========================================================
echo.
echo Questo script prepara la cartella del Worker senza chiavi in chiaro.
echo La chiave segreta verra' gestita tramite Cloudflare Secrets.
echo.

set WORKER_DIR=pm-ai-worker-groq
if not exist "%WORKER_DIR%" mkdir "%WORKER_DIR%"
cd "%WORKER_DIR%"
if not exist "src" mkdir "src"

echo [1/2] Generazione file wrangler.toml...
echo name = "pm-ai-worker-groq" > wrangler.toml
echo main = "src/index.js" >> wrangler.toml
echo compatibility_date = "2024-02-19" >> wrangler.toml

echo.
echo [2/2] NOTA DI SICUREZZA:
echo La chiave API di Groq NON e' stata salvata nei file.
echo Per attivarla sul server Cloudflare, eseguire il comando:
echo.
echo   npx wrangler secret put GROQ_API_KEY
echo.
echo Quando richiesto, incoli la Sua chiave gsk_... e prema INVIO.
echo.
pause