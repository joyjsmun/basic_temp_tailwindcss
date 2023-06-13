import type { AppProps } from "next/app";
import { coinbaseWallet, localWallet, metamaskWallet, smartWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { THIRDWEB_API_KEY,FACTOTRY_ADDRESS } from "../const/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[
      smartWallet({
        factoryAddress: FACTOTRY_ADDRESS,
        thirdwebApiKey:THIRDWEB_API_KEY,
        gasless:true,
        personalWallets:[
          metamaskWallet(),
          coinbaseWallet(),
          //if the user comeback to dapp
          localWallet({persist:true})
        ]
      })
    ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
