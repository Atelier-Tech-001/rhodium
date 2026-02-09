"use client";

import {
  DynamicContextProvider,
  DynamicWidget
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { WagmiConnector } from "@dynamic-labs/wagmi-connector";

const dynamicEnvId =
  process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ||
  process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ||
  "";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: dynamicEnvId,
        walletConnectors: [EthereumWalletConnectors, WagmiConnector]
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}

export { DynamicWidget };
