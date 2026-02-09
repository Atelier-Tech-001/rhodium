"use client";

import { DynamicWidget } from "../app/providers";

export function RhodiumConnectButton() {
  return (
    <div className="flex items-center gap-3">
      <DynamicWidget
        innerButtonComponent={
          <button
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10"
            type="button"
          >
            Conectar Wallet
          </button>
        }
      />
    </div>
  );
}
