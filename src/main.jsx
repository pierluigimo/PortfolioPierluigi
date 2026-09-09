import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Briefcase, GraduationCap, Cpu, Award, Download, Mail, 
  Linkedin, Send, Bot, User, ArrowRight, ShieldCheck, 
  TrendingUp, BarChart3, FileText, ExternalLink, Sparkles, CheckCircle2,
  Layers, Code, Database, Globe, Phone, MapPin, Check
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
  
  :root {
    --bg-main: #0B0F19;
    --bg-card: rgba(19, 27, 46, 0.75);
    --bg-card-hover: rgba(26, 36, 61, 0.9);
    --border-color: rgba(56, 189, 248, 0.15);
    --border-glow: rgba(56, 189, 248, 0.4);
    --accent: #38BDF8;
    --accent-purple: #818CF8;
    --accent-emerald: #34D399;
    --accent-glow: rgba(56, 189, 248, 0.35);
    --text-main: #F8FAFC;
    --text-muted: #94A3B8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
  body { background-color: var(--bg-main); color: var(--text-main); line-height: 1.6; overflow-x: hidden; }
  
  .glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glass-card:hover {
    border-color: var(--accent);
    box-shadow: 0 10px 35px -5px var(--accent-glow);
    transform: translateY(-2px);
  }

  .gradient-text {
    background: linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #C084FC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.5));
  }

  .neon-border {
    position: relative;
    border: 1px solid rgba(56, 189, 248, 0.3);
    box-shadow: inset 0 0 15px rgba(56, 189, 248, 0.1), 0 0 15px rgba(56, 189, 248, 0.2);
  }

  .neon-button {
    background: linear-gradient(135deg, #38BDF8 0%, #2563EB 100%);
    color: #0B0F19;
    font-weight: 700;
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
    transition: all 0.25s ease;
  }
  .neon-button:hover {
    box-shadow: 0 0 35px rgba(56, 189, 248, 0.7);
    transform: scale(1.02);
    color: #ffffff;
  }

  .badge-fluo {
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38BDF8;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .tag-pill {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.15);
    color: #E2E8F0;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
  }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--bg-main); }
  ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--accent); }
`;

export function App() {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Buongiorno. Sono l\'assistente esecutivo di Pierluigi Monaco. Posso fornirle informazioni dettagliate sul suo percorso ventennale in finanza strategica, dall\'ottimizzazione payroll in WIND SPIE, alla gestione di portafogli da 205M$ in OpenText, fino ai modelli di simulazione del rischio.' 
    }
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
      // Chiamata diretta al Worker Cloudflare
      const response = await fetch('https://pm-ai-worker-groq.pierluigimonaco.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer || "Risposta non disponibile al momento." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Impossibile collegarsi al motore AI. Puoi contattare direttamente Pierluigi via email a pierluigimonaco2@gmail.com o su LinkedIn." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      <style>{styles}</style>

      {/* TOP GLOW BACKGROUND */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '400px', background: 'radial-gradient(circle at center, rgba(56,189,248,0.12) 0%, rgba(129,140,248,0.05) 50%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* HEADER SECTION */}
      <header style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          
          <div style={{ flex: '1 1 650px' }}>
            <div className="badge-fluo" style={{ marginBottom: '18px' }}>
              <Sparkles size={14} /> Certified Chief Financial Officer (UNI/PdR 104:2021)
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
              Pierluigi <span className="gradient-text">Monaco</span>
            </h1>
            
            <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#E2E8F0', marginBottom: '14px' }}>
              Finance Business Partner | Strategic Finance Executive | AI in Finance Specialist
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '820px', marginBottom: '24px' }}>
              Finance Business Partner con un percorso di carriera focalizzato sulla trasformazione di dipartimenti finance complessi in hub di efficienza. Guida strategica dell'evoluzione dei processi aziendali integrando automazione, AI applicata e nuove tecnologie per ridurre la manualità e creare valore misurabile. Esperto nel tradurre dati operativi complessi in decisioni di Board: ha supportato la generazione di <strong style={{ color: '#38BDF8' }}>$4M di ricavi aggiuntivi</strong> e ottimizzato costi operativi per <strong style={{ color: '#34D399' }}>$9M</strong>, unendo la solidità contabile (IFRS/US GAAP) alla leadership esecutiva.
            </p>

            {/* BARRA RECAPITI & ACTION */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '28px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} color="#38BDF8" /> Milano, Italia</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Phone size={16} color="#38BDF8" /> +39 348 8513668</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Mail size={16} color="#38BDF8" /> pierluigimonaco2@gmail.com</span>
              <a href="https://www.pierluigimonaco.it" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38BDF8', textDecoration: 'none' }}><Globe size={16} /> pierluigimonaco.it</a>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/CV_Pierluigi_Monaco.pdf" download="CV_Pierluigi_Monaco.pdf" className="neon-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 26px', textDecoration: 'none' }}>
                <Download size={18} /> Scarica CV Completo (PDF)
              </a>
              <a href="https://www.linkedin.com/in/pierluigi-monaco" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600' }}>
                <Linkedin size={18} color="#38BDF8" /> LinkedIn Profile
              </a>
              <a href="mailto:pierluigimonaco2@gmail.com" className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600' }}>
                <Mail size={18} color="#38BDF8" /> Contatta Direttamente
              </a>
            </div>
          </div>

          {/* FOTO PROFILO UFFICIALE (Risoluzione del caricamento con fallback) */}
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              position: 'relative', width: '220px', height: '220px', borderRadius: '50%', 
              padding: '6px', background: 'linear-gradient(135deg, #38BDF8, #818CF8, #C084FC)',
              boxShadow: '0 0 45px rgba(56, 189, 248, 0.4)'
            }}>
              <img 
                src="/Profile.png" 
                alt="Pierluigi Monaco" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', background: '#131B2E', display: 'block' }}
                onError={(e) => { 
                  // Prova alternativa tutto minuscolo se non trova Profile.png
                  if (e.target.src.includes('Profile.png')) {
                    e.target.src = '/profile.png';
                  }
                }}
              />
            </div>
          </div>

        </div>

        {/* STATS STRATEGICHE KPI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginTop: '40px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--accent)', marginBottom: '4px' }}>$205M</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#F8FAFC' }}>Portfolio Ricavi Monitorato</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>OpenText Worldwide Commercial Finance</div>
          </div>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#34D399', marginBottom: '4px' }}>-98%</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#F8FAFC' }}>Tempi Processo Payroll</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>WIND SPIE (da 2 settimane a 2 ore/mese)</div>
          </div>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#A78BFA', marginBottom: '4px' }}>$6B+</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#F8FAFC' }}>Operazioni Globali Regolate</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Standardizzazione policy di finanziamento</div>
          </div>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#F472B6', marginBottom: '4px' }}>$9M / 15%</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#F8FAFC' }}>Ottimizzazione Costi & OPEX</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Micro Focus, HP COE e OpenText</div>
          </div>
        </div>
      </header>

      {/* GRID DEI CONTENUTI PRINCIPALI */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px', marginTop: '20px' }}>
        
        {/* COLONNA SINISTRA: ESPERIENZE COMPLETE + PROGETTI ANALITICI + COMPETENZE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* ESPERIENZE PROFESSIONALI DETTAGLIATE */}
          <section className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Briefcase className="gradient-text" size={26} /> Esperienze Professionali
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* WIND SPIE */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>WIND SPIE Srl</h3>
                  <span className="badge-fluo" style={{ fontSize: '12px' }}>Aprile 2026 - Maggio 2026</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent)', marginBottom: '14px' }}>
                  Finance Manager - Process Optimization Lead
                </div>
                <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><strong>Automazione Payroll & Riconciliazioni SAP:</strong> Progettazione e implementazione di un sistema di automazione Power Query per le registrazioni mensili del payroll e le riconciliazioni contabili, riducendo i tempi di elaborazione da 2 settimane a 2 ore al mese (-98% del tempo di processo), con un risparmio stimato di circa €45K/anno in capacità operativa riallocata ad attività ad alto valore.</li>
                  <li><strong>Modellizzazione P&L di Progetto:</strong> Sviluppo e deployment di un modello P&L a livello commessa con logica di <em>full cost allocation</em>, riallineando i margini effettivi di progetto da un 100% fittizio/non allocato a un realistico 55%.</li>
                  <li><strong>Governance & Centri di Costo SAP:</strong> Rimappatura organica dei centri di costo SAP e ricostruzione delle linee di reporting P&L locale allineate al modello Corporate, rafforzando i controlli sul month-end close.</li>
                  <li><strong>Riconciliazione Storica & Costi Flotta:</strong> Riconciliazione di 4 mesi di dati storici payroll-SAP applicando logica GMAT per riallocare con precisione i costi della flotta veicoli ai progetti operativi.</li>
                </ul>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              {/* OPENTEXT - COMMERCIAL FINANCE MANAGER */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>OpenText</h3>
                  <span style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: '600' }}>Aprile 2023 - Maggio 2025</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent)', marginBottom: '14px' }}>
                  Worldwide Commercial Finance Manager
                </div>
                <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><strong>Strategic Advisory C-Level:</strong> Advisor finanziario strategico per tre SVP globali; governance e supervisione di un portafoglio ricavi da <strong>$205M</strong> e struttura di costo da <strong>$95M</strong> distribuiti su EMEA, Nord America e APAC, a supporto di oltre 425 FTE.</li>
                  <li><strong>Global Financing Policy ($6B):</strong> Concezione e deployment della policy di finanziamento globale a supporto di operazioni commerciali fino a $6B, ottimizzando i tempi medi di incasso a 30 giorni e riducendo l'esposizione al rischio insolvenze.</li>
                  <li><strong>Pianificazione & Varianze (-15% deviazione):</strong> Ottimizzazione del processo FP&A e allocazione risorse, comprimendo la varianza di budget del 15% e massimizzando l'accuratezza previsionale.</li>
                  <li><strong>Implementazione AI nel Bid Management:</strong> Adozione e pilotaggio di tool IA per il pre-sales e il bid structuring (+5% incremento di produttività commerciale iniziale con scala fino al 15%).</li>
                  <li><strong>Alleanza Strategica SAP:</strong> Governance e visibilità ricavi per il canale SAP, con generazione di oltre $5M di ricavi incrementali e forecast accuracy migliorata del 20%.</li>
                  <li><strong>Riconoscimento FY25:</strong> Promozione e assegnazione stock grant FY25 per leadership finanziaria globale e ottimizzazione del 10% sui costi operativi su 3 regioni.</li>
                </ul>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              {/* OPENTEXT - COMMERCIAL BUSINESS PARTNER */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>OpenText</h3>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Aprile 2022 - Aprile 2023</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent)', marginBottom: '14px' }}>
                  Worldwide Commercial Business Partner
                </div>
                <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><strong>Transizione SaaS / Subscription:</strong> Implementazione del modello di governance finanziaria per la transizione dal licensing tradizionale al modello Cloud Subscription con impatto diretto su <strong>$58M di fatturato</strong>.</li>
                  <li><strong>Deal Closing Strategici:</strong> Chiusura di accordi strategici multi-year Cloud per oltre <strong>$4M</strong> in collaborazione diretta con Sales, Legal e Product Management.</li>
                  <li><strong>Analisi Scenari P&L:</strong> Creazione di framework decisionali per testare la redditività contrattuale multi-scenario e la marginalità netta (ASC 606).</li>
                  <li><strong>Mitigazione Perdita Contratti:</strong> Dimezzamento del tasso di abbandono contrattuale (dal 20% al 10%) tramite pricing dinamico e modelli predittivi.</li>
                </ul>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              {/* MICRO FOCUS */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>Micro Focus (acquisita da OpenText)</h3>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Aprile 2018 - Aprile 2022</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent)', marginBottom: '14px' }}>
                  Finance Business Partner - North, South, DACH & International Pre-Sales
                </div>
                <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>Gestione di <strong>$51M di ricavi</strong> e <strong>$37M di costi</strong> operativi su 11 nazioni, supportando 166 FTE in un ecosistema a matrice complessa.</li>
                  <li><strong>Conversione Valutaria Turchia:</strong> Conversione della valuta funzionale dell'entità turca in USD in regime di iperinflazione, neutralizzando il rischio di cambio su un portafoglio superiore a <strong>$35M/anno</strong> e superando gli audit IFRS/US GAAP senza perdita di clienti.</li>
                  <li><strong>Integrazione Post-Merger Rebate:</strong> Armonizzazione dei flussi MDF/Rebate per $9M post-acquisizione con chiusure mensili accelerate su EMEA e LATAM.</li>
                  <li><strong>Crediti Scaduti:</strong> Recupero crediti deteriorati per oltre $1M attraverso riallineamento dei controlli e formazione dei team contabili locali.</li>
                </ul>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              {/* HEWLETT PACKARD */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>Hewlett Packard</h3>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Aprile 2003 - Aprile 2018</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent)', marginBottom: '14px' }}>
                  Finance Lead - Support & Professional Services (2007-2018) | Senior Credit Analyst (2003-2007)
                </div>
                <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><strong>FP&A EMEA Support:</strong> Gestione P&L divisioni Support e Consulting a livello EMEA; varianza forecast mantenuta costantemente sotto al 5%.</li>
                  <li><strong>Gross Margin Modeling:</strong> Progettazione del modello standard di analisi margine lordo esteso a livello EMEA (+95% coerenza dati).</li>
                  <li><strong>Shared Service Center COE:</strong> Centralizzazione del controllo costi in COE (Centro di Servizi Condiviso), generando una riduzione del 15% dei costi operativi nel primo anno.</li>
                  <li><strong>Trattative Enterprise ($0.8M - $2M):</strong> Negoziazione e supporto finanziario a contratti strategici (ENEL, WIND, INPS, Poste Italiane).</li>
                  <li><strong>Governance del Rischio Credito:</strong> Gestione di un'esposizione creditizia >$200M su oltre 20 partner di canale e implementazione factoring europeo; riduzione DSO di 6 giorni. Premiato <em>Employee of the Year 2005</em>.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* PROGETTI CORE DI BUSINESS E WEB APP */}
          <section className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Cpu className="gradient-text" size={26} /> Progetti Core & Business Case
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              
              <div className="neon-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(11, 15, 25, 0.6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#F8FAFC' }}>Automazione Finance & P&L Commessa</h3>
                  <span className="badge-fluo">WIND SPIE (2026)</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Costruzione da zero del sistema di automazione end-to-end per payroll booking e riconciliazioni SAP tramite Power Query. Ristrutturazione modello P&L di progetto con full cost allocation.
                </p>
                <div style={{ fontSize: '13.5px', color: '#38BDF8', fontWeight: '600' }}>
                  ✦ Risultato: -98% tempo di processo (da 2 settimane a 2 ore/mese), risparmio €45K/anno, allineamento margini commessa al 55%.
                </div>
              </div>

              <div className="neon-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(11, 15, 25, 0.6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#F8FAFC' }}>Trasformazione Modello Subscription</h3>
                  <span className="badge-fluo">OpenText (2022-2023)</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Migrazione da licenza perpetua a modello Cloud Subscription su Vertica e Portfolio. Redazione nuovi schemi di governance e revenue recognition.
                </p>
                <div style={{ fontSize: '13.5px', color: '#34D399', fontWeight: '600' }}>
                  ✦ Risultato: +$6.9M nuovo business subscription generato; dimezzato il tasso di perdita manutenzione (dal 20% al 10%).
                </div>
              </div>

              <div className="neon-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(11, 15, 25, 0.6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#F8FAFC' }}>Ottimizzazione FX & Iperinflazione Turchia</h3>
                  <span className="badge-fluo">Micro Focus (2018-2022)</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Adozione del Dollaro come valuta funzionale in Turchia con armonizzazione US GAAP su 10+ stakeholder e rinegoziazione contratti.
                </p>
                <div style={{ fontSize: '13.5px', color: '#F472B6', fontWeight: '600' }}>
                  ✦ Risultato: Esposizione valutaria neutralizzata su un portafoglio di oltre $35M/anno senza attrito commerciale.
                </div>
              </div>

              <div className="neon-border" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(11, 15, 25, 0.6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#F8FAFC' }}>Decision-Making OS & Web Application</h3>
                  <span className="badge-fluo">Tech & AI Tools</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  Sviluppo di piattaforme interattive per la finanza: simulazione di scenari estremi Black Swan (Python) e navigazione della complessità strategica con framework Cynefin (React).
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="https://cynefin-livid.vercel.app/" target="_blank" rel="noreferrer" className="neon-button" style={{ padding: '8px 18px', fontSize: '13px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Cynefin Tool Live <ExternalLink size={14} />
                  </a>
                  <a href="https://black-swan-cfo.streamlit.app/" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '8px 18px', fontSize: '13px', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Black Swan CFO Live <ExternalLink size={14} color="#38BDF8" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* COMPETENZE & STRUMENTI COMPLETI */}
          <section className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Layers className="gradient-text" size={26} /> Competenze Tecniche & Piattaforme
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Analisi & Finanza Strategica</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Pianificazione Multi-Scenario', 'Sensitivity Analysis', 'DCF & Multipli', 'Monte Carlo Simulation', 'M&A Due Diligence', 'Capital Budgeting', 'ASC 606 / SaaS Finance', 'Hedging & Copertura FX'].map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Governance, Compliance & Processi</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['IFRS / US GAAP', 'SOX Compliance', 'Internal Audit', 'Risk Management', 'Month-End Close Automation', 'Shared Services COE', 'Full Cost Allocation'].map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Sistemi ERP, EPM & Digital Tools</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['OneStream (Avanzato)', 'SAP & SAP-RM (Avanzato)', 'Hyperion & Essbase (Avanzato)', 'Power Query & Advanced Excel (Avanzato)', 'Power BI', 'Salesforce', 'Oracle'].map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>AI & Automation in Finance</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Specialista Applicazioni IA (EQF 4)', 'RPA & Automazione Flussi', 'Machine Learning Finance', 'Prompt Engineering', 'Llama 3 / Cloudflare Workers', 'Python Finance Modeling'].map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* COLONNA DESTRA: ASSISTENTE AI EXECUTIVE + TITOLI & CERTIFICAZIONI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* ASSISTENTE AI INTERATTIVO CONFEZIONATO AD HOC */}
          <section className="glass-card" style={{ padding: '26px', display: 'flex', flexDirection: 'column', height: '620px', position: 'sticky', top: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(56,189,248,0.2)', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', background: '#34D399', borderRadius: '50%', boxShadow: '0 0 10px #34D399' }}></div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>AI Strategic Advisor</h3>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>Llama 3.3 70B</span>
            </div>

            {/* BOX CHAT MESSAGGI */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingRight: '6px', marginBottom: '18px' }}>
              {messages.map((m, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  gap: '10px', 
                  flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
                }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', 
                    background: m.role === 'user' ? 'linear-gradient(135deg, #38BDF8, #2563EB)' : '#1E293B',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {m.role === 'user' ? <User size={15} /> : <Bot size={15} color="#38BDF8" />}
                  </div>
                  <div style={{ 
                    padding: '12px 16px', 
                    borderRadius: '14px', 
                    background: m.role === 'user' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(11, 15, 25, 0.8)',
                    border: `1px solid ${m.role === 'user' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.15)'}`,
                    fontSize: '13px',
                    lineHeight: '1.5',
                    maxWidth: '82%',
                    color: '#F8FAFC'
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#38BDF8', fontSize: '12px' }}>
                  <Bot size={14} /> Elaborazione contesto executive in corso...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* PROMPT INPUT */}
            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Chiedi dettagli su OpenText, WIND SPIE, SAP..." 
                style={{ 
                  flex: 1, background: '#0B0F19', border: '1px solid rgba(56, 189, 248, 0.25)', 
                  borderRadius: '10px', padding: '12px 14px', color: '#F8FAFC', fontSize: '13px', outline: 'none' 
                }}
              />
              <button type="submit" className="neon-button" style={{ width: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={16} />
              </button>
            </form>
          </section>

          {/* CERTIFICAZIONI ED EDUCAZIONE COMPLETA */}
          <section className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award className="gradient-text" size={22} /> Certificazioni & Studi
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '14.5px' }}>CFO Certification (UNI/PdR 104:2021)</div>
                <div style={{ color: 'var(--accent)', fontSize: '13px', marginTop: '2px' }}>Certified Chief Financial Officer | Marzo 2026</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>Business School "Il Sole 24 Ore", Milano</div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              <div>
                <div style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '14.5px' }}>Specialista Applicazioni IA (EQF 4)</div>
                <div style={{ color: 'var(--accent)', fontSize: '13px', marginTop: '2px' }}>Attestato PAL-GOL Regione Lombardia | Marzo 2026</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>40 ore. Analisi dati complessi, integrazione flussi AI avanzati</div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              <div>
                <div style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '14.5px' }}>Master in Finanza, Amministrazione e Controllo</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '2px' }}>Business School "Il Sole 24 Ore", Milano (2006/2007)</div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              <div>
                <div style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '14.5px' }}>Laurea in Economia e Gestione Aziendale</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '2px' }}>Università Cattolica del Sacro Cuore, Milano</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '12px', fontStyle: 'italic', marginTop: '2px' }}>"La valutazione del capitale economico tramite il metodo dei multipli"</div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(56,189,248,0.1)' }} />

              <div>
                <div style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '14px', marginBottom: '6px' }}>Competenze Linguistiche</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  <strong>Italiano:</strong> Madrelingua | <strong>Inglese:</strong> Avanzato / Fluente professionale | <strong>Tedesco:</strong> Intermedio
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);