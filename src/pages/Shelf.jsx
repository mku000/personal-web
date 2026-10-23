import React from 'react';
import { MdOutlineKeyboardBackspace, MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { 
  FiServer, FiSmartphone, FiCpu, FiDatabase, 
  FiLayers, FiGitBranch, FiTerminal, FiCheck
} from 'react-icons/fi';

const architectureHighlights = [
  {
    title: "High-Throughput RESTful API & Notifications",
    category: "Backend Engine",
    description: "Merancang API berkinerja tinggi yang siap menangani puluhan ribu permintaan, sistem antrean push notification terdistribusi, serta integrasi webhook secara real-time.",
    techStack: ["Node.js", "Express.js", "RESTful API", "PM2 Process Manager"],
    metrics: { capacity: "10K+ Notifications/sec", latency: "< 50ms Response" },
    icon: <FiServer className="w-5 h-5" />
  },
  {
    title: "Enterprise Database & Query Optimization",
    category: "Database Architecture",
    description: "Spesialisasi dalam pengolahan data masif, penyusunan Stored Procedure tingkat lanjut, indexing otomatis, perancangan temporary table, dan visualisasi agregasi data ribuan transaksi harian.",
    techStack: ["SQL Server", "Stored Procedures", "Query Tuning", "Execution Plan"],
    metrics: { transaction: "100K+ Daily Records", optimization: "80% Execution Time Cut" },
    icon: <FiDatabase className="w-5 h-5" />
  },
  {
    title: "Multi-Platform Hybrid Ecosystem",
    category: "Cross-Platform Engineering",
    description: "Pengembangan aplikasi terpadu yang berjalan secara simultan di Android, iOS, dan Web Dashboard, memfasilitasi integrasi data antar platform tanpa deviasi logic.",
    techStack: ["React.js", "Ionic Framework", "Android Studio", "Tailwind CSS"],
    metrics: { support: "Android / iOS / Web", sync: "Real-time State Sync" },
    icon: <FiSmartphone className="w-5 h-5" />
  },
  {
    title: "Legacy-to-Modern Industrial Integration",
    category: "System Bridge & IoT",
    description: "Menghubungkan aplikasi legacy seperti VB6 / VB.NET dan hardware produksi (RFID Kiosk, Mesin IoT, MES/ERP) dengan ekosistem web & cloud modern.",
    techStack: ["Visual Basic 6", "VB.NET", "Serial/RFID Hardware", "CodeIgniter"],
    metrics: { compatibility: "Legacy & Modern Hybrid", uptime: "99.9% Production Floor" },
    icon: <FiCpu className="w-5 h-5" />
  }
];

const technicalStackList = [
  { category: "Backend & API", items: ["Node.js", "Express.js", "CodeIgniter", "RESTful API Architecture", "PM2"] },
  { category: "Frontend & Mobile", items: ["React.js", "Ionic Framework", "Android Studio", "Tailwind CSS", "Ant Design"] },
  { category: "Database & Legacy", items: ["SQL Server", "Advanced Stored Procedures", "VB6 / VB.NET", "MES / ERP Integration"] },
  { category: "Tools & Collaboration", items: ["Git Version Control", "VS Code", "AI-Assisted Engineering", "Postman", "Windows Server"] }
];

const Shelf = () => {
  return (
    <div className="p-6 antialiased bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Header (Selaras dengan Landing) */}
        <header role="banner" className="relative grid grid-cols-3 md:gap-2">
          <div>
            <Link id="logo" to="/" title="Back to About" className="font-serif text-4xl leading-[1.1em] text-right [writing-mode:vertical-rl] rotate-180 hover:opacity-70 transition-opacity">
              <h1>Muhammad<br />Khaerul</h1>
            </Link>
          </div>
          <nav className="col-span-2">
            <ul className="grid grid-cols-3 gap-2">
              <li>
                <Link to="/" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> About </Link>
              </li>
              <li>
                <a aria-current="page" href="/shelf" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top underline decoration-[1.5px] underline-offset-4 hover:underline p-6 -mt-6 -ml-6"> Shelf </a>
              </li>
              <li>
                <Link to="/rnd" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> R&D </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="mt-9">
          {/* Top Title & Executive Summary */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-300 dark:border-neutral-700">
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2">
                <MdOutlineKeyboardBackspace className="text-base" /> Back to About
              </Link>
              <h1 className="text-3xl font-serif font-medium">Software Engineering & Architecture</h1>
            </div>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              Multi-Platform • High Concurrency • Database Engineering
            </span>
          </div>


          {/* Bento Grid: Core Architectural Domains */}
          <section className="mb-12">
            <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
              <FiLayers className="text-neutral-400" /> Architectural Domains
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {architectureHighlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-neutral-200 dark:border-neutral-800 rounded flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 border border-neutral-200 dark:border-neutral-800 rounded text-neutral-600 dark:text-neutral-300">
                        {item.icon}
                      </div>
                      <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Key Performance Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                      {Object.entries(item.metrics).map(([key, val], mIdx) => (
                        <div key={mIdx} className="text-xs">
                          <span className="block text-[10px] font-mono uppercase text-neutral-400">{key}</span>
                          <span className="font-mono text-neutral-700 dark:text-neutral-300">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 rounded text-[11px] font-mono text-neutral-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Ecosystem & Tooling Grid */}
          <section className="p-6 border border-neutral-200 dark:border-neutral-800 rounded">
            <h2 className="text-xl font-serif font-medium mb-1 flex items-center gap-2">
              <FiTerminal className="text-neutral-400" /> Technical Stack Matrix
            </h2>
            <p className="text-xs text-neutral-500 mb-6 font-mono">
              Teknologi, framework, dan lingkungan kerja yang digunakan dalam pengembangan sistem
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalStackList.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-1">
                    {group.category}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.items.map((techItem, iIdx) => (
                      <li key={iIdx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                        <FiCheck className="text-neutral-400 flex-shrink-0" />
                        <span>{techItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer (Selaras dengan Landing) */}
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

export default Shelf;