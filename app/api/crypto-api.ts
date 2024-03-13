import { delayResponse } from "../lib/mock";

export default class CryptoApi {
  static async fetchBitcoin(mockDelay?: number): Promise<CryptoItem> {
    const cryptoResp: CryptoResponse = await (
      await fetch(`${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/assets/bitcoin`)
    ).json();
    
    return !mockDelay ? cryptoResp.data : delayResponse(cryptoResp.data, mockDelay);
  }
}
