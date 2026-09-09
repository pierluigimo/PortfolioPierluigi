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

      const coreIdentity = `
        PIERLUIGI MONACO - PROFILO EXECUTIVE
        CFO & Strategic Finance Executive.
        Esperienza globale 20+ anni (OpenText, HP, Micro Focus, WIND SPIE).
        Specializzazioni: Governance, OPEX optimization, AI in Finance, Cloud transformation.
        Risultati: $205M portfolio oversight, 15% OPEX reduction, automazione payroll WIND SPIE (-98%).
        Certificazioni 2026: CFO Certified (UNI/PdR 104:2021), Specialista Applicazioni IA (Regione Lombardia).
      `;

      const systemPrompt = `Sei l'assistente virtuale professionale di Pierluigi Monaco. 
      Rispondi esclusivamente in LINGUA ITALIANA con tono Executive formale (usa il 'Lei'). 
      Usa queste informazioni: ${coreIdentity}`;

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

      if (!response.ok) throw new Error("Errore durante l'elaborazione della risposta con Groq.");

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