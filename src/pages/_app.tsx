import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { SUPPORTED_NETWORKS } from "@/configs/networks";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Sphere Protocol",
    alchemyId,
    chains: SUPPORTED_NETWORKS,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense fallback={null}>
        <Head>
          <title>Sphere Protocol</title>
          <meta name="description" content="The Gateway for Decentralize Finance" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <WagmiConfig client={client}>
          <ConnectKitProvider
            theme="midnight"
            customTheme={{
              "--ck-border-radius": 1,
              "--ck-overlay-background": "rgba(0, 0, 0, 0.5)",
              "--ck-body-background": "#0a0c19",
              "--ck-overlay-backdrop-filter": "blur(100px)",
              "--ck-body-background-secondary": "#0a0c19",
              "--ck-body-background-secondary-hover-background": "#131528",
              "--ck-body-background-tertiary": "#131528",
            }}
            options={{ initialChainId: 0 }}
          >
            <Component {...pageProps} />
          </ConnectKitProvider>
        </WagmiConfig>
        <ToastContainer theme="dark" />
      </Suspense>
    </>
  );
}
