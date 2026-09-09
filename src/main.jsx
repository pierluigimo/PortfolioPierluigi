import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Briefcase, GraduationCap, Cpu, Award, Download, Mail, 
  Linkedin, Send, Bot, User, ShieldCheck, ExternalLink, Sparkles 
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
  
  :root {
    --bg-main: #0B0F19;
    --bg-card: #131B2E;
    --border-color: #1E293B;
    --accent: #38BDF8;
    --text-main: #F8FAFC;
    --text-muted: #94A3B8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
  body { background-color: var(--bg-main); color: var(--text-main); line-height: 1.6; }
  
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
  }

  .accent-text { color: var(--accent); }

  a { color: inherit; text-decoration: none; }
  
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg-main); }
  ::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 3px; }
`;

export function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Buongiorno. Sono l\'assistente virtuale di Pierluigi Monaco. Come posso illustrarle il suo percorso in Strategic Finance o i progetti di automazione?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('https://pm-ai-worker-groq.pierluigimonaco.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer || "Risposta non disponibile." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connessione temporaneamente non disponibile. Può contattare direttamente Pierluigi via email." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '60px' }}>
      <style>{styles}</style>

      {/* HEADER */}
      <header style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CFO & Strategic Finance Executive
            </div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '12px' }}>
              Pierluigi Monaco
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7' }}>
              Finance Business Partner con un percorso focalizzato sulla trasformazione di dipartimenti finance complessi in hub di efficienza. Integrazione di automazione e nuove tecnologie per ridurre la manualità e generare valore strategico.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/CV_Pierluigi_Monaco.pdf" download="CV_Pierluigi_Monaco.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'var(--accent)', color: '#0B0F19', fontWeight: '600', borderRadius: '8px', fontSize: '14px' }}>
                <Download size={16} /> Scarica CV
              </a>
              <a href="mailto:pierluigimonaco2@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', fontWeight: '600', borderRadius: '8px', fontSize: '14px' }}>
                <Mail size={16} /> Contatta
              </a>
              <a href="https://www.linkedin.com/in/pierluigi-monaco" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', fontWeight: '600', borderRadius: '8px', fontSize: '14px' }}>
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '2px solid var(--border-color)', overflow: 'hidden', background: 'var(--bg-card)' }}>
              <img 
                src="/profile.png" 
                alt="Pierluigi Monaco" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = '/Profile.png'; }}
              />
            </div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', marginTop: '30px' }}>
          <div className="card" style={{ marginBottom: 0, padding: '18px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: '700' }}>$205M</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Portfolio Ricavi (OpenText)</div>
          </div>
          <div className="card" style={{ marginBottom: 0, padding: '18px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: '700' }}>-98%</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tempi Payroll (WIND SPIE)</div>
          </div>
          <div className="card" style={{ marginBottom: 0, padding: '18px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: '700' }}>-$9M / 15%</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Ottimizzazione Costi Operativi</div>
          </div>
          <div className="card" style={{ marginBottom: 0, padding: '18px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: '700' }}>+$4M</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Ricavi Cloud Generati</div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
        
        {/* ESPERIENZE */}
        <div>
          <section className="card">
            <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase size={20} className="accent-text" /> Esperienze Professionali
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '1.05rem' }}>WIND SPIE Srl</strong>
                  <span className="accent-text">Aprile 2026 - Maggio 2026</span>
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Finance Manager - Process Optimization Lead</div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Automazione Power Query per payroll e riconciliazioni SAP (-98% tempi di processo, da 2 settimane a 2 ore/mese, risparmio €45K/anno). P&L di progetto con full cost allocation (margini riallineati dal 100% al 55%).
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid var(--border-color)' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '1.05rem' }}>OpenText</strong>
                  <span className="accent-text">2022 - 2025</span>
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Worldwide Commercial Finance Manager & Business Partner</div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Gestione portfolio ricavi $205M e costi $95M. Transizione Cloud ($58M impatto), policy di finanziamento globale per operazioni da $6B, riduzione deviazioni di budget del 15%.
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid var(--border-color)' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '1.05rem' }}>Micro Focus</strong>
                  <span className="accent-text">2018 - 2022</span>
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Finance Business Partner</div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Gestione $51M ricavi su 11 Paesi. Conversione valutaria in Turchia (da Lira a USD) contro iperinflazione su portafoglio >$35M.
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid var(--border-color)' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '1.05rem' }}>Hewlett Packard</strong>
                  <span className="accent-text">2003 - 2018</span>
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Finance Lead & Senior Credit Analyst</div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Centralizzazione controllo costi in COE (-15% costi). Gestione esposizione creditizia >$200M. Employee of the Year 2005.
                </p>
              </div>
            </div>
          </section>

          {/* PROGETTI */}
          <section className="card">
            <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={20} className="accent-text" /> Progetti & Web App
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <div style={{ padding: '12px', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>Automazione Finance WIND SPIE</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>Power Query payroll & SAP reconciliation (-98% tempo, €45K/anno saving).</p>
              </div>
              <div style={{ padding: '12px', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>CFO Playbook & Cynefin Tool</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>Web app interattive per simulazione scenari Black Swan e decision-making.</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '12px' }}>
                  <a href="https://cynefin-livid.vercel.app/" target="_blank" rel="noreferrer" className="accent-text">Cynefin Tool ↗</a>
                  <a href="https://black-swan-cfo.streamlit.app/" target="_blank" rel="noreferrer" className="accent-text">Black Swan CFO ↗</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR: AI CHAT & CERTIFICAZIONI */}
        <div>
          <section className="card" style={{ display: 'flex', flexDirection: 'column', height: '520px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={18} className="accent-text" /> Chiedi all'Assistente AI
            </h3>

            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', paddingRight: '4px', marginBottom: '12px' }}>
              {messages.map((m, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', gap: '8px', 
                  flexDirection: m.role === 'user' ? 'row-reverse' : 'row' 
                }}>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', background: m.role === 'user' ? '#1E293B' : 'var(--bg-main)', border: '1px solid var(--border-color)', maxWidth: '85%' }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Elaborazione...</div>}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '6px' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Fai una domanda sul CV..."
                style={{ flex: 1, background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '13px', outline: 'none' }}
              />
              <button type="submit" style={{ background: 'var(--accent)', border: 'none', borderRadius: '6px', width: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={14} color="#0B0F19" />
              </button>
            </form>
          </section>

          <section className="card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} className="accent-text" /> Certificazioni (2026)
            </h3>
            <ul style={{ listStyle: 'none', fontSize: '13.5px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>CFO Certification (UNI/PdR 104:2021)</strong><br/><span style={{ fontSize: '12px' }}>Il Sole 24 Ore Business School (Marzo 2026)</span></li>
              <li><strong>Specialista Applicazioni IA</strong><br/><span style={{ fontSize: '12px' }}>Attestato PAL-GOL Regione Lombardia (Marzo 2026)</span></li>
              <li><strong>Master in Finanza e Controllo</strong><br/><span style={{ fontSize: '12px' }}>Il Sole 24 Ore Business School</span></li>
            </ul>
          </section>
        </div>

      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);