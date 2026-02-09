import Link from "next/link";
import { RhodiumConnectButton } from "../components/rhodium-connect-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-rh-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              RH
            </div>
            <span className="text-sm text-white/60">rhodium.xyz</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
            <a className="hover:text-white" href="#features">
              Features
            </a>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <div className="text-xs uppercase tracking-[0.4em] text-white/50">
              Wallet orchestration
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Rhodium <span className="text-metallic">RH</span> integra wallets
              crypto en minutos.
            </h1>
            <p className="max-w-xl text-base text-white/70">
              API + SDK premium para juegos y comercios que quieren aceptar pagos
              en crypto con una experiencia ultra minimalista, segura y
              embebida.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <RhodiumConnectButton />
              <Link
                href="/dashboard"
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 hover:border-white/30 hover:text-white"
              >
                Ir al Dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-8">
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Built on Dynamic
                </div>
                <p className="mt-2 text-lg text-white/80">
                  Embedded wallets, external connectors y fallback con Wagmi +
                  WalletConnect v2.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm text-white/70">
                    Onboard con email, firma social y políticas de riesgo
                    configurables.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm text-white/70">
                    Multi-chain EVM + Solana, tipos seguros y webhooks listos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "API Unificada",
              copy: "Endpoints simples para conectar wallets, crear pagos y monitorear transacciones."
            },
            {
              title: "SDK RH",
              copy: "Componentes listos para integrar en apps de juegos y comercios premium."
            },
            {
              title: "Infra Fintech",
              copy: "Arquitectura preparada para compliance, analytics y escalado en Vercel."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white/90">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.copy}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
