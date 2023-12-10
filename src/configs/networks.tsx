import {
  bsc,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  avalanche,
  fantom,
  celo,
  gnosis,
  zkSync
} from "wagmi/chains";

export interface INetworkConfig {
  name: string;
  chainId: number;
  logo: string;
}

export const SUPPORTED_NETWORKS = [
  bsc,
  mainnet,
 
];

export const NetworksConfig: INetworkConfig[] = SUPPORTED_NETWORKS.map(
  (chain) => {
    return {
      name: chain.name,
      chainId: chain.id,
      logo: `icons/chains/${chain.id}.svg`,
    };
  }
);

export const CONFIRMATION_WAIT_BLOCKS: { [chainId: number]: number } = {
  56: 1,
  1: 1,
  137: 2,
  42161: 1,
  10: 1,
  43114: 1,
  250: 1,
  42220: 1,
  100: 1,
};
