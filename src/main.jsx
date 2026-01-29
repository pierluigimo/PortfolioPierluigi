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
  X 
} from 'lucide-react';

/**
 * Componente principale App consolidato.
 * RISOLUZIONE ERRORE: Ho rimosso ReactDOM.createRoot() perché l'ambiente di anteprima
 * gestisce il rendering automaticamente. Questo risolve il TypeError 'reading S'.
 */
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
    summary: "Strategic Finance Executive con oltre 20 anni di esperienza globale nella guida di progetti di trasformazione, governance finanziaria e ottimizzazione operativa. Ho conseguito una riduzione del 15% dei costi operativi (OPEX) e incrementato la produttività del 5% con strumenti di finanza basati su AI. Collaboro con leadership C-level a livello globale, influenzando investimenti per oltre 6 miliardi di dollari."
  };

  const highImpactResults = [
    { label: "Portfolio Oversight", value: "$205M Ricavi / $95M Costi" },
    { label: "New Cloud Revenue", value: "+$4M Nuovi Ricavi Cloud" },
    { label: "Cost Optimization", value: "15% Riduzione OPEX" },
    { label: "Risk Mitigation", value: "Audit & Compliance 100%" }
  ];

  const experience = [
    {
      company: "OpenText",
      role: "Worldwide Commercial Finance Manager",
      period: "Apr 2023 — Mag 2025",
      highlights: [
        "Advisor finanziario strategico per tre SVP globali: gestione di un portafoglio ricavi di $205M e costi di $95M su EMEA, Nord America e APAC.",
        "Implementazione di una policy di finanziamento globale per operazioni da $6M, ottimizzando i tempi medi di incasso a 30 giorni.",
        "Ottimizzazione pianificazione risorse umane, riducendo le deviazioni di budget del 15% e migliorando l'accuratezza del forecast.",
        "Lancio di strumenti AI per bid management e pre-sales, ottenendo un incremento iniziale del 5% nella produttività commerciale.",
        "Generazione di oltre $5M di ricavi incrementali nel canale strategico SAP con miglioramento precisione forecast del 20%."
      ]
    },
    {
      company: "OpenText",
      role: "Worldwide Commercial Business Partner",
      period: "Apr 2022 — Apr 2023",
      highlights: [
        "Responsabile governance finanziaria per la transizione da licenze perpetue a modello cloud/subscription (impatto su $58M ricavi).",
        "Chiusura accordi cloud strategici per oltre $4M e riduzione tasso di perdita contrattuale dal 20% al 10%.",
        "Sviluppo strumenti di analisi P&L multi-scenario per migliorare visibilità sulla redditività contrattuale.",
        "Ottimizzazione framework di controllo e reporting in linea con obiettivi corporate."
      ]
    },
    {
      company: "Micro Focus (Acquisita da OpenText)",
      role: "Finance Business Partner - Int. Pre-Sales",
      period: "Apr 2018 — Apr 2022",
      highlights: [
        "Gestione di $51M in ricavi e $37M in costi su 11 Paesi, supportando 166 FTE in contesto internazionale.",
        "Guida del progetto di conversione valutaria in Turchia (Lira -> USD), mitigando il rischio cambio su un portafoglio da $35M.",
        "Integrazione post-fusione processi MDF/rebate ($9M) e recupero di oltre $1M in crediti scaduti."
      ]
    },
    {
      company: "Hewlett Packard",
      role: "Finance Lead - Support & Professional Services",
      period: "Apr 2007 — Apr 2018",
      highlights: [
        "Gestione P&L e processi FP&A per divisioni Support e Consulting EMEA, mantenendo deviazione forecast < 5%.",
        "Centralizzazione controllo costi in Shared Service Center con riduzione costi del 15% nel primo anno.",
        "Supporto finanziario per trattative strategiche ($0.8M-$2M) con clienti enterprise (ENEL, WIND, Poste)."
      ]
    }
  ];

  const education = [
    {
      title: "CFO Program - PDR UNI 104:2021",
      institution: "Sole 24 Ore Business School, Milano",
      period: "Nov 2025 (In corso)",
      description: "Certificazione Executive accreditata UNI."
    },
    {
      title: "Master in Finanza, Amministrazione e Controllo",
      institution: "Sole 24 Ore Business School, Milano",
      period: "2006 — 2007"
    },
    {
      title: "Laurea in Economia e Gestione Aziendale",
      institution: "Università Cattolica del Sacro Cuore, Milano",
      period: "1997 — 1998",
      description: 'Tesi: "La valutazione del capitale economico tramite il metodo dei multipli"'
    }
  ];

  const projects = [
    {
      title: "Cynefin Framework Tool",
      tech: ["React", "Web App", "Strategic Decision"],
      desc: "Strumento digitale interattivo per il decision-making strategico basato sul framework Cynefin. Aiuta a categorizzare le sfide operative in domini di complessità per determinare la risposta manageriale ottimale.",
      link: "https://cynefin-livid.vercel.app/"
    },
    {
      title: "CFO Playbook OS (Black Swan)",
      tech: ["Python", "Pandas", "Streamlit"],
      desc: "Sistema Operativo finanziario progettato per CFO moderni. Include moduli automatizzati per il forecasting, la gestione della liquidità e la simulazione di scenari di rischio ('Black Swan').",
      link: "https://black-swan-cfo.streamlit.app/" 
    }
  ];

  const coreCompetencies = [
    {
      category: "Finanza Strategica",
      icon: <Target className="text-[#64ffda]" size={20} />,
      skills: ["Business Case", "Analisi Investimenti", "M&A & Due Diligence", "Valutazione", "Capital Budgeting"]
    },
    {
      category: "Governance",
      icon: <ShieldCheck className="text-[#64ffda]" size={20} />,
      skills: ["IFRS & US GAAP", "Compliance SOX", "Audit Interno", "Gestione Rischio", "Revenue Rec (ASC 606)"]
    },
    {
      category: "Cloud Business",
      icon: <Layout className="text-[#64ffda]" size={20} />,
      skills: ["SaaS Finance", "ARR/MRR Analysis", "Pricing Strategy", "Churn Analysis", "Cloud Cost Opt"]
    },
    {
      category: "AI & Tech",
      icon: <BarChart3 className="text-[#64ffda]" size={20} />,
      skills: ["Predictive Analytics", "Automazione Processi", "Machine Learning", "RPA", "NLP"]
    }
  ];

  const digitalTools = [
    { name: "OneStream", level: "Avanzato" },
    { name: "SAP / SAP-RM", level: "Avanzato" },
    { name: "Hyperion / Essbase", level: "Avanzato" },
    { name: "Salesforce", level: "Intermedio" },
    { name: "Excel / PowerPoint", level: "Avanzato" },
    { name: "Python / Streamlit", level: "Avanzato" },
    { name: "Power BI", level: "Intermedio" },
    { name: "Oracle", level: "Intermedio" }
  ];

  const askAI = async () => {
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    setAiResponse("");
    setError(null);

    try {
      const response = await fetch(
        "https://pm-ai-worker.pierluigimonaco2.workers.dev/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: aiQuery })
        }
      );

      if (!response.ok) throw new Error("Servizio AI non disponibile");

      const data = await response.json();
      setAiResponse(data.answer || "Nessuna risposta ricevuta.");
    } catch (err) {
      setError("Assistente AI momentaneamente non disponibile. Contattami su LinkedIn.");
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
                AGGIORNATO GEN 2026
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
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-[#112240] border-b border-[#233554] shadow-xl animate-in slide-in-from-top-2">
             <div className="flex flex-col p-6 gap-4 font-mono text-sm">
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

      {/* Hero / Introduzione */}
      <section id="profilo" className="pt-36 pb-16 px-6 max-w-6xl mx-auto scroll-mt-28">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start">
          <div className="flex-1 space-y-6">
            <p className="font-mono text-[#64ffda] text-sm tracking-widest animate-pulse italic drop-shadow-[0_0_8px_rgba(100,255,218,0.6)]">01. Introduzione</p>
            <h1 className="text-5xl md:text-8xl font-bold text-[#e6f1ff] tracking-tight leading-none">
              Pierluigi Monaco<span className="text-[#64ffda] drop-shadow-[0_0_10px_rgba(100,255,218,0.8)]">.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] leading-[1.1]">
              <span className="text-[#64ffda] animate-pulse drop-shadow-[0_0_5px_rgba(100,255,218,0.4)]">Strategic Finance</span> <br className="hidden md:block"/>
              <span className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 animate-pulse">Engineering Growth.</span>
            </h2>
            <p className="max-w-2xl text-[#8892b0] text-lg leading-relaxed pt-4 font-light">
              {personalInfo.summary}
            </p>
          </div>
          <div className="relative group shrink-0">
            <div className="absolute inset-0 border-2 border-[#64ffda] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 rounded-sm"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-[#112240] rounded-sm overflow-hidden border border-[#233554]">
               <img 
                 src={`${base}profile.png`} 
                 alt="Pierluigi Monaco" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-[#233554] flex items-center justify-center text-[#64ffda] font-mono text-4xl font-bold">PM</div>';
                 }}
               />
            </div>
          </div>
        </div>
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {highImpactResults.map((result, idx) => (
             <div key={idx} className="p-6 bg-[#112240] border border-[#233554] rounded-sm hover:border-[#64ffda]/40 transition-all group">
                <div className="text-2xl font-bold text-[#64ffda] group-hover:translate-x-1 transition-transform drop-shadow-[0_0_5px_rgba(100,255,218,0.4)] animate-pulse">{result.value}</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8892b0] mt-2 leading-relaxed">{result.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* 02. Esperienza Professionale - Titolo Lampeggiante */}
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

      {/* 03. Formazione - Titolo Lampeggiante */}
      <section id="formazione" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">03.</span> Formazione
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

      {/* 04. Progetti & Codice - Titolo Lampeggiante */}
      <section id="progetti" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">04.</span> Progetti & Codice
          </h3>
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-[#112240] p-6 rounded-sm border border-[#233554] hover:border-[#64ffda]/50 transition-all group flex flex-col hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]">
              <div className="flex justify-between items-start mb-4">
                <Code2 size={40} className="text-[#64ffda] opacity-80" />
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h4 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition-colors">{proj.title}</h4>
              <p className="text-[#8892b0] text-sm mb-4 flex-grow leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-[#64ffda] opacity-80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Competenze Chiave - Titolo Lampeggiante */}
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

      {/* 06. Strumenti Digitali - Titolo Lampeggiante */}
      <section id="strumenti" className="py-16 px-6 max-w-4xl mx-auto text-center scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] bg-[#233554] w-full opacity-50 shadow-[0_0_10px_rgba(100,255,218,0.2)]"></div>
          <h3 className="text-2xl font-bold text-[#e6f1ff] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_rgba(100,255,218,0.4)]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">06.</span> Strumenti Digitali
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

      {/* 07. Assistente Digitale - Titolo Lampeggiante */}
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
              Powered by Cloudflare Workers
            </p>
            <p className="text-[#8892b0] text-sm mb-6 flex items-center gap-2 italic">
              <MessageSquare size={16} className="text-[#64ffda]" />
              Fai una domanda sulla carriera di Pierluigi (es. "Quali sono i risultati in OpenText?")
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
            {error && <p className="text-red-400 text-xs font-mono mt-4 italic">{error}</p>}
          </div>
        </div>
      </section>

      {/* Footer / Contatti */}
      <footer id="contatti" className="py-20 px-6 max-w-3xl mx-auto text-center scroll-mt-24">
        <h3 className="text-5xl font-bold text-[#e6f1ff] mb-8 tracking-tighter animate-pulse drop-shadow-[0_0_10px_rgba(100,255,218,0.4)]">Parliamo di Impatto</h3>
        <p className="text-[#8892b0] mb-12 max-w-lg mx-auto">
          Sono sempre interessato a nuove opportunità strategiche e sfide in ambito Finance.
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
           <a href="https://linkedin.com/in/pierluigimonaco" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Linkedin size={22} /></a>
           <a href="https://github.com/pierluigimo" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Github size={22} /></a>
        </div>
        <p className="mt-20 font-mono text-[9px] text-[#495670] uppercase tracking-[0.4em]">Strategic Finance Portfolio — 2026</p>
      </footer>
    </div>
  );
};

export default App;