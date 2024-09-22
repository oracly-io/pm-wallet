import { Web3ReactHooks } from '@web3-react/core'
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { MetaMask } from '@web3-react/metamask'
import type { Network } from '@web3-react/network'
import type { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { hooks as coinbaseWalletHooks, coinbaseWallet } from '../Connectors/CoinbaseWallet'
import { hooks as metaMaskHooks, metamask } from '../Connectors/Metamask'
import { hooks as networkHooks, network } from '../Connectors/Network'
import { hooks as walletConnectV2Hooks, walletConnectV2 } from '../Connectors/WalletConnectV2'

export const Connectors: [MetaMask | WalletConnectV2 | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metamask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]
