export default function PokerTournament() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-emerald-600/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <a href="/" className="inline-block mb-8 text-zinc-400 hover:text-white transition-colors">
            ← Volver a Surf Week
          </a>
          <div className="text-6xl mb-6">🎰</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Poker Night
            </span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Torneo de póquer en La Punta, Puerto Escondido
          </p>
          <img 
            src="/ape-poker.png" 
            alt="Poker Tournament" 
            className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl shadow-green-500/30 border border-white/10"
          />
        </div>
      </header>

      {/* Tournament Info */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Información del Torneo</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-green-400 mb-4">📅 Fecha y Hora</h3>
              <p className="text-2xl font-bold mb-2">Por Determinar</p>
              <p className="text-zinc-400">Durante BandaWeb3 Surf Week</p>
              <p className="text-zinc-500 text-sm mt-2">Mayo 18-24, 2026</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-green-400 mb-4">📍 Ubicación</h3>
              <p className="text-2xl font-bold mb-2">La Punta</p>
              <p className="text-zinc-400">Puerto Escondido, Oaxaca</p>
              <p className="text-zinc-500 text-sm mt-2">Bar de playa con vista al mar</p>
            </div>
          </div>

          {/* Tournament Details */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Detalles del Torneo</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-green-400">$500</p>
                <p className="text-zinc-400 text-sm mt-1">MXN Buy-in</p>
              </div>
              <div>
                <p className="text-4xl font-black text-green-400">20</p>
                <p className="text-zinc-400 text-sm mt-1">Jugadores máx</p>
              </div>
              <div>
                <p className="text-4xl font-black text-green-400">4</p>
                <p className="text-zinc-400 text-sm mt-1">Horas máx</p>
              </div>
              <div>
                <p className="text-4xl font-black text-green-400">3</p>
                <p className="text-zinc-400 text-sm mt-1">Premios</p>
              </div>
            </div>
          </div>

          {/* Format */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Formato</h3>
            <div className="space-y-4">
              {[
                { icon: "🃏", title: "Texas Hold'em No Limit", desc: "Formato clásico de torneo" },
                { icon: "⏱️", title: "Blinds incrementales", desc: "Niveles de 15-20 minutos" },
                { icon: "🎯", title: "Single table / Multi table", desc: "Dependiendo de inscripciones" },
                { icon: "🏆", title: "Pago a top 3", desc: "50% / 30% / 20% del prize pool" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prize Pool Example */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Prize Pool Estimado</h3>
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
              <p className="text-zinc-400 mb-4">Con 20 jugadores × $500 MXN = <span className="text-white font-bold">$10,000 MXN</span></p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><span className="text-2xl">🥇</span> 1er lugar</span>
                  <span className="font-bold text-yellow-400">$5,000 MXN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><span className="text-2xl">🥈</span> 2do lugar</span>
                  <span className="font-bold text-zinc-300">$3,000 MXN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><span className="text-2xl">🥉</span> 3er lugar</span>
                  <span className="font-bold text-orange-400">$2,000 MXN</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-zinc-400 mb-6">Registro próximamente. Síguenos para enterarte cuando abra.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/BandaWeb3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-all hover:scale-105"
              >
                @BandaWeb3
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/10 font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                ← Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-zinc-600 text-sm">
            BandaWeb3 Poker Night · Mayo 2026 · Puerto Escondido
          </p>
        </div>
      </footer>
    </div>
  );
}
