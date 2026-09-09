/**
 * Cloudflare Worker - Modello nativo @cf/meta/llama-3.2-3b-instruct
 * Nessuna chiave API esterna richiesta, sfrutta l'infrastruttura Cloudflare AI.
 */
export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { question } = await request.json();

      if (!question) {
        return new Response(JSON.stringify({ error: "Domanda mancante" }), { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      }

      // BACKGROUND TOTALE ANALITICO ESTRATTO DAL CV UFFICIALE
      const coreIdentity = `
        PROFILO PROFESSIONALE ESECUTIVO:
        Pierluigi Monaco - CFO & Strategic Finance Executive | Finance Business Partner con oltre 20 anni di esperienza internazionale.
        Recapiti: Milano, Tel: +39 348 8513668, pierluigimonaco2@gmail.com, Sito: www.pierluigimonaco.it.
        
        RISULTATI CHIAVE SINTETICI:
        - Portfolio ricavi gestito: $205M (OpenText). Cost structure: $95M.
        - Riduzione costi operativi: -$9M / 15% OPEX.
        - Ottimizzazione processi: Automazione Power Query per WIND SPIE che ha ridotto i tempi di elaborazione payroll del 98% (da 2 settimane a 2 ore mensili), risparmio €45K/anno.
        - Supporto Board: Generazione di oltre $4M di ricavi cloud strategici e implementazione policy finanziamento per operazioni fino a $6B.
        
        DETTAGLIO ESPERIENZE:
        1. WIND SPIE Srl (Aprile 2026 - Maggio 2026) - Finance Manager / Process Optimization Lead:
           - Sistema di automazione Power Query per payroll booking e riconciliazioni SAP (-98% tempo, da 2 settimane a 2 ore/mese, saving €45K/anno).
           - Modello P&L commessa con full cost allocation, riallineando margini effettivi dal 100% al 55%.
           - Rimappatura centri di costo SAP e riconciliazione 4 mesi payroll con logica GMAT per flotta veicoli.
        2. OpenText (Aprile 2023 - Maggio 2025) - Worldwide Commercial Finance Manager:
           - Advisor per 3 SVP globali, portfolio $205M ricavi, $95M costi, 425 FTE su EMEA, NA e APAC.
           - Policy finanziamento globale per operazioni da $6B, DSO a 30 giorni.
           - Riduzione deviazioni di budget del 15%. Test e deployment AI bid management (+5% produttività). Canale SAP (+$5M ricavi).
           - Promozione e stock grant FY25 (-10% costi in tre regioni).
        3. OpenText (Aprile 2022 - Aprile 2023) - Worldwide Commercial Business Partner:
           - Governance transizione licenze a Cloud/Subscription ($58M impatto). Chiusura contratti cloud >$4M.
           - Riduzione churn/perdita contrattuale dal 20% al 10%. Modelli P&L multi-scenario (ASC 606).
        4. Micro Focus (Aprile 2018 - Aprile 2022) - Finance Business Partner Pre-Sales:
           - $51M ricavi e $37M costi su 11 Paesi (166 FTE).
           - Conversione valutaria Turchia da Lira a USD contro rischio iperinflazione (portafoglio >$35M/anno) con audit superati.
           - Recupero >$1M crediti deteriorati.
        5. Hewlett Packard (Aprile 2003 - Aprile 2018) - Finance Lead & Senior Credit Analyst:
           - Gestione P&L EMEA Support/Consulting, varianza <5%.
           - Centralizzazione costi Shared Service Center (COE) con -15% costi nel primo anno.
           - Gestione credito per oltre $200M e factoring europeo. Employee of the Year 2005.

        STUDI E CERTIFICAZIONI:
        - Certified Chief Financial Officer (UNI/PdR 104:2021), rilasciata a Marzo 2026 da Il Sole 24 Ore Business School.
        - Specialista Applicazioni di Intelligenza Artificiale (Attestato PAL-GOL Regione Lombardia EQF 4, Marzo 2026).
        - Master in Finanza, Amministrazione e Controllo (Il Sole 24 Ore Business School, 2006/2007).
        - Laurea in Economia e Gestione Aziendale (Università Cattolica del Sacro Cuore di Milano).

        STRUMENTI: OneStream, SAP, Hyperion, Essbase, Power Query, Excel Avanzato, Power BI, Python, React.
      `;

      const systemPrompt = `Sei l'assistente esecutivo e professionale di Pierluigi Monaco. Rispondi esclusivamente in ITALIANO con tono distinto, formale ed Executive (usa rigorosamente il 'Lei'). Basa le tue risposte unicamente sui dati forniti: ${coreIdentity}. Fornisci dettagli precisi, percentuali ed evidenze numeriche senza omettere nulla.`;

      // Esecuzione tramite Cloudflare Workers AI binding
      const aiResponse = await env.AI.run("@cf/meta/llama-3.2-3b-instruct", {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question }
        ]
      });

      const answer = aiResponse.response || "Risposta non disponibile.";

      return new Response(JSON.stringify({ answer }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};