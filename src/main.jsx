import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowRight, 
  Download,
  Zap, 
  Loader2, 
  MessageSquare, 
  Send, 
  BarChart3, 
  ShieldCheck, 
  Layout, 
  Target, 
  Globe, 
  Code2, 
  ExternalLink, 
  Menu, 
  X,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const base = "/"; 

  useEffect(() => {
    document.title = "Pierluigi Monaco | CFO & Strategic Finance Executive";
  }, []);

  const personalInfo = {
    name: "Pierluigi Monaco",
    title: "Strategic Finance Executive | Data Analysis & Logistics Optimization",
    location: "Milano, Italia",
    email: "pierluigimonaco2@gmail.com",
    phone: "+39 348 8513668",
    summary: "Finance Business Partner con un percorso di carriera focalizzato sulla trasformazione di dipartimenti finance complessi in hub di efficienza. Ho da sempre guidato l'evoluzione dei processi aziendali integrando automazione e nuove tecnologie per ridurre la manualità e creare valore. Esperto nel tradurre i dati in decisioni, supportando il Board nella generazione di $4M di ricavi aggiuntivi e ottimizzato costi operativi per $9M. Unisco la solidità tecnica (IFRS/GAAP) alla capacità di costruire team coesi e proattivi."
  };

  const highImpactResults = [
    { label: "Portfolio Oversight", value: "$205M Ricavi / $95M Costi" },
    { label: "Nuovi Ricavi Cloud", value: "+$4M Contratti Strategici" },
    { label: "Automazione Payroll", value: "-98% Tempi Processo" },
    { label: "Ottimizzazione Costi", value: "$9M / 15% OPEX" }
  ];

  const experience = [
    {
      company: "WIND SPIE Srl",
      role: "Finance Manager - Process Optimization Lead",
      period: "Apr 2026 — Mag 2026",
      highlights: [
        "Progettazione e implementazione di un sistema di automazione Power Query per le registrazioni mensili del payroll e le riconciliazioni SAP, riducendo i tempi di elaborazione da 2 settimane a 2 ore al mese (-98% del tempo di processo), con un risparmio stimato di circa €45K/anno in capacità operativa riallocata ad attività a maggior valore aggiunto.",
        "Sviluppo e deployment di un modello P&L a livello progetto con logica di full cost allocation, riallineando i margini di progetto da un 100% non allocato a un realistico 55%.",
        "Rimappatura dei centri di costo SAP e ricostruzione delle linee di reporting P&L locale allineate al modello Corporate, rafforzando i controlli di month-end close.",
        "Riconciliazione di 4 mesi di dati storici payroll-SAP applicando logica GMAT per riallocare i costi della flotta veicoli ai progetti operativi."
      ]
    },
    {
      company: "OpenText",
      role: "Worldwide Commercial Finance Manager",
      period: "Apr 2023 — Mag 2025",
      highlights: [
        "Advisor finanziario strategico per tre SVP globali: gestione di un portafoglio ricavi di $205M e una struttura di costi di $95M su EMEA, Nord America e APAC, a supporto dell'allocazione di risorse per oltre 425 FTE.",
        "Implementazione di una policy di finanziamento globale per operazioni da $6B, ottimizzando i tempi medi di incasso a 30 giorni, la governance finanziaria e la gestione del rischio di insolvenze.",
        "Ottimizzazione dei processi di pianificazione delle risorse nel rispetto del budget assegnato, riducendo le deviazioni di budget del 15% e migliorando l'accuratezza del forecast.",
        "Test e implementazione degli strumenti AI per il bid management e il pre-sales, ottenendo un incremento iniziale del 5% nella produttività commerciale, con potenziale scalabilità fino al 15%.",
        "Supervisione di progetti di governance finanziaria e visibilità dei ricavi per il canale strategico SAP, generando oltre $5M di ricavi incrementali e migliorando la precisione del forecast del 20%.",
        "Promozione e stock grant FY25 per performance eccezionali e leadership finanziaria globale, con un impatto del -10% sui costi operativi in tre regioni."
      ]
    },
    {
      company: "OpenText",
      role: "Worldwide Commercial Business Partner",
      period: "Apr 2022 — Apr 2023",
      highlights: [
        "Responsabile dell'implementazione del modello di governance finanziaria per la transizione dal modello a licenza perpetua al modello cloud/subscription, con impatto su $58M di ricavi.",
        "Responsabile commerciale per la chiusura di accordi cloud strategici per oltre $4M, a supporto di trattative complesse e trasformazione del modello di business.",
        "Ricerca e sviluppo di strumenti di analisi P&L multi-scenario per migliorare la visibilità sulla redditività contrattuale e supportare i processi decisionali.",
        "Ottimizzazione e standardizzazione del framework di controllo e reporting, in linea con gli obiettivi corporate e con effetti positivi sulla qualità delle previsioni.",
        "Responsabile della riduzione del tasso di perdita contrattuale dal 20% al 10% grazie all'implementazione di modelli finanziari più accurati e un miglior allineamento con Sales e Product."
      ]
    },
    {
      company: "Micro Focus (Acquisita da OpenText)",
      role: "Finance Business Partner - North, South, DACH & Int. Pre-Sales",
      period: "Apr 2018 — Apr 2022",
      highlights: [
        "Gestione di $51M in ricavi e $37M in costi su 11 Paesi, supportando 166 FTE in un contesto internazionale a matrice complessa.",
        "Riferimento del progetto core di conversione valutaria in Turchia, adottando il dollaro come valuta funzionale per mitigare il rischio cambio e garantire la conformità IFRS/US GAAP, senza perdita di clienti e con audit superato.",
        "Guida dell'integrazione post-fusione dei processi MDF/rebate per $9M, standardizzando e ottimizzando gli accantonamenti e migliorando la visibilità finanziaria nonché i tempi di chiusura mensili in EMEA e LATAM.",
        "Guida del progetto finalizzato al recupero di oltre $1M in crediti scaduti: selezione e formazione dei team contabili, rafforzamento della compliance. Obiettivo raggiunto nel rispetto di modi, tempi e budget stabiliti.",
        "Riconosciuto come 'Support Person of the Month' per l'impatto su modellistica finanziaria e analisi delle varianze a supporto delle decisioni executive."
      ]
    },
    {
      company: "Hewlett Packard",
      role: "Finance Lead - Support & Professional Services (2007-2018) | Senior Credit Analyst (2003-2007)",
      period: "Apr 2003 — Apr 2018",
      highlights: [
        "Gestione di P&L e processi FP&A per le divisioni Support e Consulting a livello EMEA, mantenendo una deviazione forecast inferiore al 5%.",
        "Studio e implementazione di un modello di analisi del margine lordo adottato a livello EMEA, migliorando la coerenza dei dati del 95%.",
        "Centralizzazione del controllo dei costi in un Centro Servizi Condiviso (COE), con una riduzione dei costi del 15% nel primo anno.",
        "Supporto finanziario per trattative strategiche ($0,8M-$2M) con clienti enterprise (ENEL, WIND, INPS, Poste). Promozione a 'Finance Ambassador' per l'Italia.",
        "Gestione di oltre $200M di esposizione creditizia su più di 20 partner commerciali, standardizzazione dei processi di factoring e lancio di un Centro di Competenza Europeo per la governance del rischio credito (DSO ridotto di 6 giorni). Premiato come Employee of the Year (2005)."
      ]
    }
  ];

  const education = [
    {
      title: "CFO Certification (UNI/PdR 104:2021)",
      institution: "Business School 'Il Sole 24 Ore', Milano",
      period: "Marzo 2026",
      description: "Certified Chief Financial Officer, attestazione di conformità alla prassi di riferimento UNI/PdR 104:2021 per la qualifica professionale di CFO."
    },
    {
      title: "Specialista in Applicazioni di Intelligenza Artificiale",
      institution: "Attestato PAL-GOL Regione Lombardia (EQF 4) - YOUS Srl",
      period: "Marzo 2026",
      description: "Corso intensivo 40 ore: analisi avanzata dei dati, AI per contenuti digitali, valutazione delle fonti e automazione dei flussi decisionali con strumenti di IA generativa."
    },
    {
      title: "Master in Finanza, Amministrazione e Controllo",
      institution: "Business School 'Il Sole 24 Ore', Milano",
      period: "2006 — 2007"
    },
    {
      title: "Laurea in Economia e Gestione Aziendale",
      institution: "Università Cattolica del Sacro Cuore, Milano",
      period: "1997 — 1998",
      description: "Tesi: 'La valutazione del capitale economico tramite il metodo dei multipli'"
    }
  ];

  const projects = [
    {
      title: "Automazione Finance - Settore Energetico",
      companyTag: "WIND SPIE Srl (2026)",
      tech: ["Power Query", "SAP", "P&L Full Cost", "GMAT"],
      desc: "Progettazione e implementazione di un sistema di automazione end-to-end per payroll booking e riconciliazioni SAP tramite Power Query. Ricostruzione del modello P&L di progetto con logica di full cost allocation e riallocazione costi flotta. Risultato: -98% tempi di processo (da 2 settimane a 2 ore/mese), risparmio €45K/anno, margini di progetto riallineati dal 100% al 55%.",
      link: null
    },
    {
      title: "Trasformazione Modello Subscription",
      companyTag: "OpenText (2022-2023)",
      tech: ["Cloud SaaS", "ASC 606", "ARR/MRR", "Churn Mitigation"],
      desc: "Guida del passaggio da licensing tradizionale a subscription per Vertica e Portfolio. Definizione di nuovi modelli di governance, P&L e revenue recognition con Sales e Legal. Risultato: +$6.9M nuovo business subscription, riduzione del tasso di perdita manutenzione dal 20% al 10%.",
      link: null
    },
    {
      title: "Ottimizzazione FX & US GAAP Turchia",
      companyTag: "Micro Focus (2018-2022)",
      tech: ["US GAAP", "Hedging", "Hyperinflation", "Rebate"],
      desc: "Conversione della valuta funzionale dell'entità turca da Lira a USD, eliminando l'esposizione al rischio di cambio in contesto di iperinflazione su un portafoglio >$35M/anno senza attrito con i clienti strategici e con pieno superamento degli audit.",
      link: null
    },
    {
      title: "Policy Globale di Finanziamento ($6B)",
      companyTag: "OpenText (2023-2025)",
      tech: ["Treasury", "Risk Mitigation", "Credit Policy", "Working Capital"],
      desc: "Studio e progettazione di una strategia finanziaria globale in collaborazione con Treasury per supportare le operazioni worldwide, standardizzando le policy interne di finanziamento e pagamento su oltre $6B di deal value con DSO a 30 giorni.",
      link: null
    },
    {
      title: "Cynefin Framework Tool",
      companyTag: "Web App Esecutiva",
      tech: ["React", "Decision Making", "Complex Systems"],
      desc: "Strumento digitale interattivo per il decision-making strategico basato sul framework Cynefin. Aiuta a categorizzare le sfide operative in domini di complessità per determinare la risposta manageriale ottimale.",
      link: "https://cynefin-livid.vercel.app/"
    },
    {
      title: "CFO Playbook OS (Black Swan)",
      companyTag: "Piattaforma Finanziaria",
      tech: ["Python", "Pandas", "Streamlit", "Risk Simulation"],
      desc: "Sistema Operativo finanziario progettato per CFO moderni. Include moduli automatizzati per il forecasting, la gestione della liquidità e la simulazione di scenari estremi di rischio ('Black Swan').",
      link: "https://black-swan-cfo.streamlit.app/" 
    }
  ];

  const coreCompetencies = [
    {
      category: "Finanza Strategica",
      icon: <Target className="text-[#64ffda]" size={20} />,
      skills: ["Pianificazione Scenari", "Analisi di Sensibilità", "DCF & Multipli", "M&A Due Diligence", "Capital Budgeting", "Monte Carlo Simulation"]
    },
    {
      category: "Governance & Audit",
      icon: <ShieldCheck className="text-[#64ffda]" size={20} />,
      skills: ["IFRS & US GAAP", "Compliance SOX", "Audit Interno", "Gestione Rischio", "Revenue Rec (ASC 606)", "Full Cost Allocation"]
    },
    {
      category: "Cloud & Subscription",
      icon: <Layout className="text-[#64ffda]" size={20} />,
      skills: ["SaaS Finance", "ARR/MRR Modeling", "Pricing Strategy", "Churn Analysis", "Cloud Cost Optimization", "Working Capital Management"]
    },
    {
      category: "AI & Eccellenza Operativa",
      icon: <BarChart3 className="text-[#64ffda]" size={20} />,
      skills: ["RPA & Automazione Processi", "Power Query Avanzato", "Predictive Analytics", "Machine Learning Finance", "Shared Services COE", "Hedging & Rischio Cambio"]
    }
  ];

  const digitalTools = [
    { name: "OneStream", level: "Avanzato" },
    { name: "SAP / SAP-RM", level: "Avanzato" },
    { name: "Hyperion / Essbase", level: "Avanzato" },
    { name: "Power Query / Excel", level: "Avanzato" },
    { name: "PowerPoint", level: "Avanzato" },
    { name: "Python / Streamlit", level: "Avanzato" },
    { name: "Salesforce", level: "Intermedio" },
    { name: "Power BI / BI Tools", level: "Intermedio" },
    { name: "Oracle", level: "Intermedio" },
    { name: "AI Tools & LLM", level: "Intermedio" }
  ];

  const askAI = async () => {
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    setAiResponse("");
    setError(null);

    const endpoint = "https://pm-ai-worker-groq.pierluigimonaco2.workers.dev/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({ question: aiQuery })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Errore Server ${response.status}: ${errorText || 'Nessuna risposta dal server'}`);
      }

      const data = await response.json();
      
      if (data.error) {
         throw new Error(data.error);
      }
      
      setAiResponse(data.answer || "L'assistente non ha restituito una risposta valida.");
    } catch (err) {
      console.error("Dettagli errore Assistente AI:", err);
      setError("Si è verificato un problema tecnico di comunicazione con il Worker AI. Riprova tra poco.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const el = document.createElement("textarea");
      el.value = personalInfo.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navItems = [
    { label: 'profilo', id: 'profilo' },
    { label: 'esperienza', id: 'esperienza' },
    { label: 'formazione', id: 'formazione' },
    { label: 'progetti', id: 'progetti' },
    { label: 'competenze', id: 'competenze' },
    { label: 'strumenti', id: 'strumenti' },
    { label: 'assistente ai', id: 'assistenteai' },
    { label: 'contatti', id: 'contatti' }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] font-sans selection:bg-[#233554] selection:text-[#64ffda] overflow-x-hidden">
      
      {/* Barra di Navigazione */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/95 backdrop-blur-md z-50 px-6 h-20 border-b border-[#233554]/50 shadow-lg flex items-center justify-center">
        <div className="w-full max-w-[1400px] flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            <div className="text-[#64ffda] font-mono font-bold text-2xl tracking-tighter drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]">PM.</div>
            <div className="hidden sm:flex border border-[#64ffda] rounded px-3 py-1.5 bg-[#64ffda]/5 items-center">
              <span className="text-[10px] font-mono font-bold text-[#64ffda] uppercase tracking-[0.15em] animate-pulse">
                AGGIORNATO 2026
              </span>
            </div>
          </div>

          <div className="hidden xl:flex gap-6 font-mono text-[11px] tracking-[0.1em] items-center">
            {navItems.map((item, idx) => (
              <a key={item.id} href={`#${item.id}`} className="text-[#ccd6f6] hover:text-[#64ffda] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] lowercase">
                <span className="text-[#64ffda] mr-1">0{idx+1}.</span> {item.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <a 
              href={`${base}CV_Pierluigi_Monaco.pdf`} 
              download="CV_Pierluigi_Monaco.pdf"
              className="hidden sm:flex px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-[11px] font-mono rounded font-medium hover:bg-[#64ffda]/10 transition-all uppercase tracking-widest items-center gap-2"
            >
              <Download size={14} /> Scarica CV
            </a>
            <a 
              href="#contatti"
              className="px-5 py-2.5 bg-[#64ffda] text-[#0a192f] text-[11px] font-mono rounded font-bold hover:bg-[#64ffda]/80 transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(100,255,218,0.4)]"
            >
              Contattami
            </a>
            
            <button 
              className="xl:hidden text-[#64ffda] ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-[#112240] border-b border-[#233554] shadow-xl animate-in slide-in-from-top-2">
             <div className="flex flex-col p-6 gap-4 font-mono text-sm">
                <a 
                  href={`${base}CV_Pierluigi_Monaco.pdf`} 
                  download="CV_Pierluigi_Monaco.pdf"
                  className="flex items-center gap-2 text-[#64ffda] py-2 border-b border-[#233554]/30 lowercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download size={14} /> scarica cv
                </a>
                {navItems.map((item, idx) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    className="text-[#ccd6f6] hover:text-[#64ffda] py-2 border-b border-[#233554]/30 lowercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-[#64ffda] mr-2">0{idx+1}.</span> {item.label}
                  </a>
                ))}
             </div>
          </div>
        )}
      </nav>

      {}
      <section id="profilo" className="pt-36 pb-16 px-6 max-w-6xl mx-auto scroll-mt-28">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start">
          <div className="flex-1 space-y-6">
            <p className="font-mono text-[#64ffda] text-sm tracking-widest animate-pulse italic drop-shadow-[0_0_8px_rgba(100,255,218,0.6)]">01. Introduzione</p>
            <h1 className="text-5xl md:text-8xl font-bold text-[#e6f1ff] tracking-tight leading-none">
              Pierluigi Monaco<span className="text-[#64ffda] drop-shadow-[0_0_10px_rgba(100,255,218,0.8)]">.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] leading-[1.1]">
              <span className="text-[#64ffda] animate-pulse drop-shadow-[0_0_5px_rgba(100,255,218,0.4)]">Strategic Finance</span> <br className="hidden md:block"/>
              <span className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">Engineering Growth.</span>
            </h2>
            <p className="max-w-2xl text-[#8892b0] text-lg leading-relaxed pt-4 font-light">
              {personalInfo.summary}
            </p>
          </div>
          
          {/* FOTO PROFILO (con fallback robusto maiuscolo/minuscolo) */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 border-2 border-[#64ffda] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 rounded-sm"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-[#112240] rounded-sm overflow-hidden border border-[#233554]">
               <img 
                 src={`${base}profile.jpg`} 
                 alt="Pierluigi Monaco" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                 onError={(e) => {
                   if (e.currentTarget.src.includes('Profile.jpg')) {
                     e.currentTarget.src = `${base}profile.jpg`;
                   } else {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-[#233554] flex items-center justify-center text-[#64ffda] font-mono text-4xl font-bold">PM</div>';
                   }
                 }}
               />
            </div>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {highImpactResults.map((result, idx) => (
             <div key={idx} className="p-6 bg-[#112240] border border-[#233554] rounded-sm hover:border-[#64ffda]/40 transition-all group">
                <div className="text-2xl font-bold text-[#64ffda] group-hover:translate-x-1 transition-transform drop-shadow-[0_0_5px_rgba(100,255,218,0.4)] animate-pulse">{result.value}</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8892b0] mt-2 leading-relaxed">{result.label}</div>
             </div>
           ))}
        </div>
      </section>

      {}
      <section id="esperienza" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span> Esperienza Professionale
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="group relative pl-8 border-l border-[#233554] hover:border-[#64ffda] transition-all duration-300">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#0a192f] border border-[#64ffda] rounded-full group-hover:scale-125 transition-all group-hover:bg-[#64ffda] group-hover:shadow-[0_0_10px_#64ffda]"></div>
              <h4 className="text-xl font-bold text-[#e6f1ff] tracking-tight">{exp.role} <span className="text-[#64ffda] text-sm">@ {exp.company}</span></h4>
              <p className="text-xs font-mono text-[#495670] mb-4 uppercase tracking-widest mt-1">{exp.period}</p>
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-[#8892b0] text-[15px] leading-relaxed group/item">
                    <span className="text-[#64ffda] mr-3 mt-1.5 opacity-50 flex-shrink-0 text-[10px]">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="formazione" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">03.</span> Formazione & Certificazioni
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="group relative pl-8 border-l border-[#233554] hover:border-[#64ffda] transition-all">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#0a192f] border border-[#64ffda] rounded-full group-hover:scale-125 transition-all group-hover:bg-[#64ffda] group-hover:shadow-[0_0_10px_#64ffda]"></div>
              <h4 className="text-xl font-bold text-[#e6f1ff]">{edu.title}</h4>
              <p className="text-sm font-semibold text-[#ccd6f6] mt-1 italic">{edu.institution}</p>
              <p className="text-xs font-mono text-[#495670] mt-2 uppercase tracking-widest">{edu.period}</p>
              {edu.description && <p className="text-sm text-[#8892b0] mt-4 leading-relaxed font-light">{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="progetti" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">04.</span> Progetti Core & Web App
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-[#112240] p-6 rounded-sm border border-[#233554] hover:border-[#64ffda]/50 transition-all group flex flex-col hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[11px] font-mono text-[#64ffda] uppercase tracking-wider border border-[#64ffda]/30 px-2 py-0.5 rounded bg-[#64ffda]/5">
                  {proj.companyTag}
                </span>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors" aria-label="External Link">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h4 className="text-lg font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition-colors">{proj.title}</h4>
              <p className="text-[#8892b0] text-sm mb-4 flex-grow leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-[#233554]/60">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono text-[#64ffda] opacity-80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="competenze" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">05.</span> Competenze Chiave
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((cat, idx) => (
            <div key={idx} className="p-8 border border-[#233554] rounded-sm bg-[#112240]/20 hover:bg-[#112240]/50 transition-all group hover:border-[#64ffda]/30 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]">
              <div className="mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h4 className="font-mono text-[10px] text-[#64ffda] uppercase tracking-[0.2em] mb-6 border-b border-[#233554] pb-2 drop-shadow-[0_0_2px_rgba(100,255,218,0.5)]">{cat.category}</h4>
              <ul className="space-y-3">
                 {cat.skills.map(skill => (
                   <li key={skill} className="flex items-center text-[#8892b0] text-[12px] group/skill">
                     <span className="text-[#64ffda] mr-2 opacity-30 group-hover/skill:opacity-100 transition-opacity">▸</span> {skill}
                   </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="strumenti" className="py-16 px-6 max-w-4xl mx-auto text-center scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">06.</span> Strumenti Digitali & Sistemi
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
           {digitalTools.map((tool, idx) => (
             <div key={idx} className="px-6 py-3 bg-[#112240] border border-[#233554] rounded-sm hover:border-[#64ffda]/30 transition-all hover:text-[#64ffda] cursor-default hover:shadow-[0_0_10px_rgba(100,255,218,0.2)]">
                <span className="text-sm font-semibold text-[#e6f1ff]">{tool.name}</span>
                <span className="block text-[9px] font-mono text-[#64ffda] uppercase tracking-widest mt-1 opacity-70">{tool.level}</span>
             </div>
           ))}
        </div>
      </section>

      {}
      <section id="assistenteai" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">07.</span> Assistente Digitale
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="bg-[#112240] p-8 rounded-sm border border-[#233554] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-[#64ffda]"><Zap size={120} /></div>
          <div className="relative z-10">
            <p className="text-[#495670] text-[11px] font-mono mb-6 uppercase tracking-widest">
              Addestrato sul CV Ufficiale Aggiornato (2026)
            </p>
            <p className="text-[#8892b0] text-sm mb-6 flex items-center gap-2 italic">
              <MessageSquare size={16} className="text-[#64ffda]" />
              Fai una domanda sul progetto di ottimizzazione in WIND SPIE o sui risultati a livello globale in OpenText.
            </p>
            <div className="flex gap-2 mb-6 flex-col sm:flex-row">
              <input 
                type="text" value={aiQuery} 
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && askAI()}
                placeholder="Chiedi all'assistente..."
                className="flex-1 bg-[#0a192f] border border-[#233554] p-3 rounded text-sm text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-all"
              />
              <button onClick={askAI} disabled={isAiLoading}
                className="bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-mono text-xs uppercase tracking-widest hover:bg-[#64ffda]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isAiLoading ? <Loader2 className="animate-spin" size={14} /> : <Send size={14} />} Invia
              </button>
            </div>
            {aiResponse && (
              <div className="bg-[#0a192f]/50 p-6 rounded border border-[#64ffda]/20 animate-in fade-in slide-in-from-top-4">
                <p className="text-xs font-mono text-[#64ffda] mb-2 uppercase tracking-widest">Risposta dell'Assistente:</p>
                <p className="text-[#ccd6f6] text-sm leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
              </div>
            )}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded text-red-400 text-xs font-mono mt-4 flex flex-col gap-2">
                <p className="font-bold underline uppercase tracking-widest">Errore tecnico rilevato:</p>
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {}
      <footer id="contatti" className="py-20 px-6 max-w-3xl mx-auto text-center scroll-mt-24">
        <h3 className="text-5xl font-bold text-[#e6f1ff] mb-8 tracking-tighter animate-pulse drop-shadow-[0_0_10px_rgba(100,255,218,0.4)]">Parliamo di Impatto</h3>
        <p className="text-[#8892b0] mb-12 max-w-lg mx-auto">
          Sono sempre interessato a nuove opportunità strategiche, advisory e sfide in ambito Finance & Process Transformation.
        </p>
        <div className="flex flex-col items-center gap-4 mb-16 relative">
          <div className="flex bg-[#112240] p-4 rounded border border-[#233554] items-center gap-4 group transition-colors hover:border-[#64ffda]/30 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]">
            <span className="text-sm font-mono text-[#ccd6f6] tracking-wider">{personalInfo.email}</span>
            <button onClick={copyEmail} className="text-[#64ffda] hover:text-white p-1" aria-label="Copy Email">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <div className={`transition-all duration-300 transform ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <p className="text-[10px] font-mono text-[#64ffda] tracking-[0.3em] uppercase">Email Copiata!</p>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-2 px-10 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-all text-[11px] tracking-[0.2em] uppercase font-bold mt-4 hover:shadow-[0_0_10px_#64ffda]">
            Avvia una conversazione <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="flex justify-center gap-10 text-[#8892b0]">
           <a href="https://www.linkedin.com/in/pierluigi-monaco" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Linkedin size={22} /></a>
           <a href="https://github.com/pierluigimo" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Github size={22} /></a>
        </div>
        <p className="mt-20 font-mono text-[9px] text-[#495670] uppercase tracking-[0.4em]">Strategic Finance Executive Portfolio — 2026</p>
      </footer>
    </div>
  );
};

export default App;

if (typeof window !== 'undefined') {
  const isSandbox = window.location?.hostname?.includes('usercontent.goog') || window.location?.hostname?.includes('csb.app');
  
  if (!isSandbox) {
    import('react-dom/client')
      .then(({ createRoot }) => {
        const rootElement = document.getElementById('root');
        if (rootElement && !rootElement._reactRootContainer) {
          const root = createRoot(rootElement);
          rootElement._reactRootContainer = root;
          root.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
          );
        }
      })
      .catch(err => console.warn("Montaggio manuale di React saltato", err));
  }
}