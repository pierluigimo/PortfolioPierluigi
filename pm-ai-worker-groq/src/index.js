/**
 * Cloudflare Worker - Versione Sicura per Produzione.
 * La chiave API viene letta in modo sicuro dalle variabili di ambiente (env.GROQ_API_KEY).
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
      return new Response("Metodo non consentito", { status: 405, headers: corsHeaders });
    }

    try {
      const { question } = await request.json();

      if (!question) {
        return new Response(JSON.stringify({ error: "Domanda mancante" }), { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      }

      // Identità professionale caricata dinamicamente
      const coreIdentity = `Identità di Pierluigi Monaco: CFO e Strategic Finance Executive. Esperto in trasformazione, governance e ottimizzazione operativa.`;

      const systemPrompt = `Sei l'assistente virtuale professionale di Pierluigi Monaco. Rispondi esclusivamente in LINGUA ITALIANA con tono formale ed Executive. Dati di riferimento: ${coreIdentity}`;

      // Utilizzo sicuro della chiave API tramite env.GROQ_API_KEY
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.GROQ_API_KEY}`
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Groq API Error: ${response.status}`);
      }

      const data = await response.json();
      const answer = data.choices[0].message.content;

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