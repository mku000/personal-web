import React from 'react'
import "./RandD.css"
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace, MdMail } from 'react-icons/md'

const rndEntries = [
  {
    date: "20-10-2026",
    title: "AI-Driven Autonomous Quantitative Trading Bot via MCP Protocol",
    category: "AI Agents & Algo-Trading",
    description: "Eksperimen integrasi LLM sebagai agen analisis pasar mandiri menggunakan Model Context Protocol (MCP). Bot terhubung langsung via REST/WebSocket ke exchange lokal (Indodax) dan global (Bybit) untuk eksekusi otomatis strategi Funding Rate Arbitrage dan Liquidity Cascade Catching."
  },
  {
    date: "14-08-2026",
    title: "AI Agent MCP Server for Live Financial & Market Intelligence",
    category: "MCP & Market Systems",
    description: "Riset pembentukan kustom MCP Server yang menghubungkan data pasar finansial real-time (Yahoo Finance & Financial Modeling Prep API) langsung ke AI coding workspace untuk analisis risiko kuantitatif berbasis prompt."
  },
  {
    date: "02-05-2026",
    title: "Industrial Computer Vision for Assembly Line Quality Inspection",
    category: "Edge AI & Factory Automation",
    description: "Eksperimen pemanfaatan model Computer Vision ringan di perangkat Edge (Raspberry Pi/Jetson Nano) untuk deteksi cacat fisik otomatis pada komponen perakitan secara real-time sebelum memasuki tahap pengemasan."
  },
  {
    date: "18-01-2026",
    title: "Offline-First Local Mesh Network for Production Floor Sensor Logs",
    category: "Industrial IoT Protocol",
    description: "Prototiping jaringan komunikasi lokal (Mesh LoRa/ESP-NOW) di area pabrik tanpa bergantung pada koneksi internet utama. Memastikan telemetry log mesin tetap tersimpan dan tersinkronisasi otomatis saat server kembali online."
  },
  {
    date: "09-09-2025",
    title: "Autonomous Webhook Listener & Adaptive Rate-Limiting Gateway",
    category: "Backend Micro-Architecture",
    description: "Riset pembuatan API gateway adaptif berbasis Node.js yang secara otomatis mengatur kuota alur data masuk (rate-limiting) dan pemulihan mandiri (self-healing queue) saat terjadi lonjakan trafik berlebih."
  },
  {
    date: "27-03-2024",
    title: "Teachers Pocket & Academic Utility Toolkit",
    category: "EdTech & Experimental Utility",
    description: "Eksperimen awal pengembangan perangkat portabel digital berbasis React dan Ionic untuk membantu pendidik mengelola rekapitulasi nilai, presensi, serta manajemen tugas secara offline-first."
  }
];

const RandD = () => {
  return (
    <div className="p-6 antialiased bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Header (Selaras dengan Landing & Shelf) */}
        <header role="banner" className="relative grid grid-cols-3 md:gap-2">
          <div>
            <Link id="logo" to="/" title="About" className="font-serif text-4xl leading-[1.1em] text-right [writing-mode:vertical-rl] rotate-180 hover:opacity-70 transition-opacity">
              <h1>Muhammad<br />Khaerul</h1>
            </Link>
          </div>
          <nav className="col-span-2">
            <ul className="grid grid-cols-3 gap-2">
              <li>
                <Link to="/" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> About </Link>
              </li>
              <li>
                <Link to="/shelf" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> Shelf </Link>
              </li>
              <li>
                <a aria-current="page" href="/rnd" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top underline decoration-[1.5px] underline-offset-4 hover:underline p-6 -mt-6 -ml-6"> R&D </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="mt-9">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-300 dark:border-neutral-700">
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2">
                <MdOutlineKeyboardBackspace className="text-base" /> Back to About
              </Link>
              <h1 className="text-3xl font-serif font-medium">Research & Development Lab</h1>
            </div>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              Experimental Concepts • Algo-Trading • MCP Protocols • Edge AI
            </span>
          </div>

          {/* Table Header / Column Labels */}
          <div className="grid grid-cols-12 gap-4 py-4 mt-6 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <div className="col-span-3 md:col-span-2">Date</div>
            <div className="col-span-9 md:col-span-10">Research Topic & Experimental Prototype</div>
          </div>

          {/* Entries List */}
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {rndEntries.map((item, index) => (
              <div key={index} className="py-6 grid grid-cols-12 gap-4 items-start group hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors px-2 rounded-lg">
                <div className="col-span-3 md:col-span-2 font-mono text-xs text-neutral-500 pt-1">
                  {item.date}
                </div>
                <div className="col-span-9 md:col-span-10">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-500">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-[1.5px] underline-offset-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </main>

        {/* Footer (Selaras) */}
        <footer className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600 text-sm">
          <p className='flex items-center gap-2 my-1'>
            <MdMail />
            <a href="mailto:muhammed.khaerul.umam@gmail.com" target="_blank" rel="noreferrer" title='Send Email' className="hover:underline">
              muhammed.khaerul.umam@gmail.com
            </a> 
            <span>— Brebes, Central Java.</span>
          </p>
          <p className="mt-2 text-xs">
            Made with <a href="https://react.dev/" target="_blank" rel="noreferrer" className="underline">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline">Tailwind</a>, hosted on <a href="https://vercel.com" target="_blank" rel="noreferrer" className="underline">Vercel</a>.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default RandD;