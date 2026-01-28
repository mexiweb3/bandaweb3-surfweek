export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-cyan-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-300">Parte de ETH Cinco de Mayo Pop-Up City</span>
          </div>

          {/* Mascot Gallery */}
          <div className="mb-10 flex flex-col md:flex-row gap-4 justify-center items-center">
            <img 
              src="/ape-surfing.png" 
              alt="BandaWeb3 Surf Ape" 
              className="w-full max-w-md rounded-3xl shadow-2xl shadow-orange-500/30 border border-white/10"
            />
            <img 
              src="/ape-barrel.png" 
              alt="BandaWeb3 Ape in Barrel" 
              className="w-full max-w-md rounded-3xl shadow-2xl shadow-cyan-500/30 border border-white/10"
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-cyan-400 bg-clip-text text-transparent">
              Surf Week
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-4 font-light">
            by <span className="text-white font-medium">BandaWeb3</span>
          </p>

          <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-12">
            Una semana de surf, Web3 y networking en el paraíso mexicano
          </p>

          {/* Date & Location Pills */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Fecha</p>
              <p className="text-lg font-semibold">Mayo 18-24, 2026</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-orange-500/20 rounded-2xl">
              <p className="text-xs text-orange-400 uppercase tracking-wider mb-1">Ubicación</p>
              <p className="text-lg font-semibold">Puerto Escondido, Oaxaca</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://twitter.com/BandaWeb3" 
              target="_blank"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all hover:scale-105"
            >
              Seguir @BandaWeb3
            </a>
            <a 
              href="#info" 
              className="px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Más información ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
          </div>
        </div>
      </header>

      {/* What is it */}
      <section id="info" className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-400 font-mono text-sm mb-4">01 — EL EVENTO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Surf + Web3 + Networking
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              La combinación perfecta: olas épicas de día, conversaciones épicas de noche
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏄‍♂️",
                title: "Surf Sessions",
                description: "Clases para todos los niveles con instructores certificados. Spots: La Punta y Carrizalillo.",
                gradient: "from-cyan-500/10 to-blue-500/10",
                border: "border-cyan-500/20"
              },
              {
                icon: "🎙️",
                title: "Podcast Live",
                description: "Episodio especial de BandaWeb3 grabado al atardecer frente al mar.",
                gradient: "from-orange-500/10 to-rose-500/10",
                border: "border-orange-500/20"
              },
              {
                icon: "🤝",
                title: "Networking",
                description: "Conecta con builders, founders e inversores de la comunidad Web3 LATAM.",
                gradient: "from-violet-500/10 to-purple-500/10",
                border: "border-violet-500/20"
              }
            ].map((item) => (
              <div 
                key={item.title}
                className={`bg-gradient-to-br ${item.gradient} border ${item.border} rounded-3xl p-8 hover:scale-[1.02] transition-transform`}
              >
                <span className="text-5xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-mono text-sm mb-4">02 — CALENDARIO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ETH Cinco de Mayo
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Tres semanas de eventos Web3 en Oaxaca
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { date: "Mayo 8-27", title: "ETH Cinco de Mayo Pop-Up City", desc: "Puerto Escondido", active: false },
              { date: "Mayo 14-17", title: "Oaxaca City Buildathon", desc: "Hackathon & Startups Cup", active: false },
              { date: "Mayo 18-24", title: "BandaWeb3 Surf Week", desc: "Surf + Sunset Sessions", active: true },
            ].map((event, i) => (
              <div 
                key={i}
                className={`flex items-center gap-6 p-6 rounded-2xl transition-all ${
                  event.active 
                    ? "bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30" 
                    : "bg-white/5 border border-white/5 hover:border-white/10"
                }`}
              >
                <div className={`text-sm font-mono min-w-[120px] ${event.active ? "text-orange-400" : "text-zinc-500"}`}>
                  {event.date}
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${event.active ? "text-white" : "text-zinc-300"}`}>{event.title}</h4>
                  <p className="text-sm text-zinc-500">{event.desc}</p>
                </div>
                {event.active && (
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                    Nuestro evento
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-rose-400 font-mono text-sm mb-4">03 — INCLUYE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Todo lo que necesitas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏄", label: "Clases de surf" },
              { icon: "🏨", label: "Hospedaje*" },
              { icon: "🎙️", label: "Podcast live" },
              { icon: "🌅", label: "Sunset sessions" },
              { icon: "🍻", label: "Welcome drinks" },
              { icon: "👕", label: "Merch exclusivo" },
              { icon: "📸", label: "Foto & video" },
              { icon: "🎉", label: "Beach parties" },
            ].map((item) => (
              <div 
                key={item.label}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/10 transition-all group"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                <p className="text-sm font-medium text-zinc-300">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-600 text-sm mt-8">* Opciones de hospedaje con descuento para asistentes</p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-zinc-500 font-mono text-sm mb-4">PARTNERS</p>
            <h2 className="text-3xl font-bold">Colaboradores</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "ETH Cinco de Mayo", handle: "@ETHCincoDeMayo" },
              { name: "Frutero Club", handle: "@fruteroclub" },
              { name: "Surf Travel & Friends", url: "surftravelfriends.com" },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url ? `https://${partner.url}` : `https://twitter.com/${partner.handle?.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors text-lg font-medium"
              >
                {partner.handle || partner.url}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-rose-500/20 to-cyan-500/20 border border-white/10 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para surfear?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-lg mx-auto">
                Registro y detalles completos próximamente. Síguenos para no perderte nada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://twitter.com/BandaWeb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @BandaWeb3
                </a>
                <a
                  href="https://twitter.com/meximalist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/10 font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @meximalist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-600 text-sm">
            BandaWeb3 Surf Week · Mayo 2026 · Puerto Escondido, México
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            🇲🇽 Hecho con ❤️ por la comunidad Web3 LATAM
          </p>
        </div>
      </footer>
    </div>
  );
}
