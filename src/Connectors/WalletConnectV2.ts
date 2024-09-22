import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { MAINNET_CHAINS } from '../Chains'

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number)

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: '6bc5fc9fe0861ed78b16c5c7fabb74ee',
        chains: [mainnet],
        optionalChains,
        showQrModal: true,
        // @walletconnect/sign-client at @2.13.1 version requires metadata to be defined or infered from meta tags in html
        metadata: {
          name: 'Oracly',
          description: 'Oracly',
          url: window.location.origin,
          icons: [''],
        },
      },
    })
)
