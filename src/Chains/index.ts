import type { AddEthereumChainParameter } from '@web3-react/types'

export const POLYGON_ID = 137
export const MUMBAI_ID = 80001
export const LDE_ID = process.env.WEB3_LDE_CHAIN_ID || 31337
export const LDE_URL = process.env.WEB3_LDE_CHAIN_URL || 'http://localhost:8545'

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

interface BasicChainInformation {
  urls: string[]
  name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(<ExtendedChainInformation>chainInformation).nativeCurrency
}

type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const MAINNET_CHAINS: ChainConfig = {
  [POLYGON_ID]: {
    urls: ['https://polygon-rpc.com'].filter(Boolean),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
}

export const TESTNET_CHAINS: ChainConfig = {
  [MUMBAI_ID]: {
    urls: ['https://rpc-mumbai.maticvigil.com'].filter(Boolean),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
}

export const LDE_CHAINS: ChainConfig = {
  [LDE_ID]: {
    urls: [LDE_URL],
    name: 'Polygon LDE',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
}

export const CHAINS: ChainConfig = {
  ...LDE_CHAINS,
  ...TESTNET_CHAINS,
  ...MAINNET_CHAINS,
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

