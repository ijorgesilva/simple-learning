import CryptoApi from "@/app/api/crypto-api"
import { CryptoNews as CryptoNewsClient } from "./CryptoNews.client";

export default async function CryptoNews( p: {} ){
  const crypto = await CryptoApi.fetchBitcoin();
  return(<>
    <CryptoNewsClient initialData={crypto}/>
  </>)
}