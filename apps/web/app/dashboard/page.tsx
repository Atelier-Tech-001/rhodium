import { transactions, users } from "../../lib/mock-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-rh-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Merchant Console
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Dashboard</h1>
          </div>
          <div className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
            RH-OPS-001
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Volumen (24h)", value: "$128,440" },
            { label: "Transacciones", value: "1,284" },
            { label: "Usuarios activos", value: "3,912" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {stat.label}
              </p>
              <p className="mt-4 text-2xl font-semibold text-white/90">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Transacciones recientes</h2>
              <span className="text-xs text-white/50">UTC</span>
            </div>
            <div className="mt-6 space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3"
                >
                  <div>
                    <p className="text-sm text-white/80">{tx.merchant}</p>
                    <p className="text-xs text-white/40">{tx.timestamp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/90">{tx.amount}</p>
                    <p className="text-xs text-white/40">{tx.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Usuarios activos</h2>
            <div className="mt-6 space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3"
                >
                  <div>
                    <p className="text-sm text-white/80">{user.name}</p>
                    <p className="text-xs text-white/40">{user.wallet}</p>
                  </div>
                  <span className="text-xs text-white/60">{user.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
