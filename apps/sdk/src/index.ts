import type { PaymentRequest } from "@rhodium/core";

export interface RhodiumClientConfig {
  apiBaseUrl: string;
  apiKey?: string;
}

export class RhodiumClient {
  constructor(private readonly config: RhodiumClientConfig) {}

  async requestPayment(payload: PaymentRequest) {
    const response = await fetch(`${this.config.apiBaseUrl}/api/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(this.config.apiKey ? { Authorization: `Bearer ${this.config.apiKey}` } : {})
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Failed to request payment");
    }

    return response.json();
  }
}
