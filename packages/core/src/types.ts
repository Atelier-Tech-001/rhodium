export type EvmAddress = `0x${string}`;
export type SolanaAddress = string;

export type RhodiumChain =
  | {
      id: number;
      name: string;
      network: "evm";
      rpcUrl?: string;
    }
  | {
      id: string;
      name: string;
      network: "solana";
      rpcUrl?: string;
    };

export interface PaymentRequest {
  amount: string;
  currency: string;
  recipient: EvmAddress | SolanaAddress;
  memo?: string;
}
