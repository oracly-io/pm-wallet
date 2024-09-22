import { Web3ReactHooks } from '@web3-react/core';
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import type { MetaMask } from '@web3-react/metamask';
import type { Network } from '@web3-react/network';
import type { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
export declare const Connectors: [MetaMask | WalletConnectV2 | CoinbaseWallet | Network, Web3ReactHooks][];
