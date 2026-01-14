export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-cyan-500/20" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-orange-400 font-mono text-sm mb-4">
            ETH Cinco de Mayo Pop-Up City
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            BandaWeb3 Surf Week
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Surf, Web3 y networking en Puerto Escondido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="px-6 py-3 bg-white/10 rounded-full text-lg font-medium">
              Mayo 18-24, 2026
            </span>
            <span className="px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full text-lg font-medium">
              Puerto Escondido, Oaxaca
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Evento Principal */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">El Evento</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold mb-3">Surf Week</h3>
              <p className="text-zinc-400">
                Una semana de clases de surf para todos los niveles en colaboración
                con Surf Travel & Friends. Spots: La Punta, Carrizalillo.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-bold mb-3">Sunset Session</h3>
              <p className="text-zinc-400">
                Episodio en vivo del podcast BandaWeb3 al atardecer.
                Networking, drinks y buena vibra con la comunidad Web3 LATAM.
              </p>
            </div>
          </div>
        </section>

        {/* Itinerario */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Itinerario</h2>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-orange-400 font-mono text-sm min-w-[100px]">
                  Mayo 8-27
                </span>
                <div>
                  <h4 className="font-bold">ETH Cinco de Mayo Pop-Up City</h4>
                  <p className="text-zinc-400 text-sm">Puerto Escondido - Evento principal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-cyan-400 font-mono text-sm min-w-[100px]">
                  Mayo 14-17
                </span>
                <div>
                  <h4 className="font-bold">Oaxaca City Buildathon</h4>
                  <p className="text-zinc-400 text-sm">Oaxaca Ciudad - Hackathon & Startups Cup</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-orange-500/10 -mx-4 px-4 py-3 rounded-lg">
                <span className="text-orange-400 font-mono text-sm min-w-[100px]">
                  Mayo 18-24
                </span>
                <div>
                  <h4 className="font-bold text-orange-300">BandaWeb3 Surf Week</h4>
                  <p className="text-zinc-400 text-sm">Puerto Escondido - Surf + Sunset Session</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incluye */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Surf Week Incluye</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏄", text: "Clases de surf" },
              { icon: "🎙️", text: "Episodio en vivo" },
              { icon: "🍻", text: "Networking" },
              { icon: "🌅", text: "Sunset Session" },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a
              href="https://twitter.com/ETHCincoDeMayo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              @ETHCincoDeMayo
            </a>
            <a
              href="https://twitter.com/fruteroclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              @fruteroclub
            </a>
            <a
              href="https://www.surftravelfriends.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Surf Travel & Friends
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Registro y más detalles próximamente. Síguenos para actualizaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/BandaWeb3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                @BandaWeb3
              </a>
              <a
                href="https://twitter.com/meximalist"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/10 font-medium rounded-full hover:bg-white/20 transition-colors"
              >
                @meximalist
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 text-center text-zinc-500 text-sm">
        <p>BandaWeb3 Surf Week - Mayo 2026</p>
        <p className="mt-2">Puerto Escondido, Oaxaca, Mexico</p>
      </footer>
    </div>
  );
}
