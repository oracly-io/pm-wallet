import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect-v2'

export function getConnName(connector: Connector): string {
  if (connector instanceof MetaMask) return 'injected'
  if (connector instanceof WalletConnect) return 'walletconnect'
  if (connector instanceof CoinbaseWallet) return 'coinbase'
  if (connector instanceof Network) return 'network'

  return 'Unknown'
}

