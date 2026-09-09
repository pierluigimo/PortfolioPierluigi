/**
 * Cloudflare Worker - Versione Aggiornata CV 2026.
 * Questa versione non contiene chiavi in chiaro.
 */
export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    try {
      const { question } = await request.json();

      // IDENTITÀ AGGIORNATA IN BASE AL NUOVO CV (WIND SPIE, AI, etc.)
      const coreIdentity = `
        PIERLUIGI MONACO - FINANCE BUSINESS PARTNER
        Sintesi: Esperto nella trasformazione di dipartimenti finance in hub di efficienza tramite automazione (Power Query) e AI. Generati $4M di ricavi e $9M di ottimizzazioni.
        
        ESPERIENZA RECENTE:
        1. WIND SPIE Srl (Apr 2026 - Mag 2026): Finance Manager & Process Optimization Lead.
           - Automazione payroll e riconciliazioni SAP via Power Query: tempi ridotti da 2 settimane a 2 ore/mese (-98%). Risparmio €45K/anno.
           - Sviluppo modello P&L a progetto (full cost allocation), portando margini dal 100% al 55% reale.
        
        2. OpenText (Apr 2023 - Mag 2025): Worldwide Commercial Finance Manager.
           - Gestione $205M ricavi e $95M costi. Implementata policy di finanziamento su operazioni da $6B.
           - Promozione FY25 per impatto del -10% sui costi operativi.
        
        3. OpenText (Apr 2022 - Apr 2023): Worldwide Commercial Business Partner.
           - Transizione modello Subscription, +$6.9M nuovo business.
        
        4. Micro Focus (Apr 2018 - Apr 2022): Finance Business Partner.
           - Ottimizzazione FX Turchia (Lira->USD) neutralizzando rischio su $35M.
        
        5. Hewlett Packard (2003 - 2018): Finance Lead EMEA e Senior Credit Analyst.
        
        CERTIFICAZIONI E FORMAZIONE:
        - CFO Certification (UNI/PdR 104:2021) - Sole 24 Ore (Marzo 2026)
        - Specialista in Applicazioni di Intelligenza Artificiale - PAL-GOL (Marzo 2026)
        - Master in Finanza / Laurea in Economia Cattolica.
      `;

      const systemPrompt = `Sei l'assistente professionale di Pierluigi Monaco. 
      Rispondi in ITALIANO. Usa un tono Executive. Basa le tue risposte SOLO su questi dati:
      ${coreIdentity}`;

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.GROQ_API_KEY}` // Usa la variabile sicura
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: question }
          ],
          temperature: 0.1,
          max_tokens: 1000
        })
      });

      const data = await response.json();
      return new Response(JSON.stringify({ answer: data.choices[0].message.content }), {
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