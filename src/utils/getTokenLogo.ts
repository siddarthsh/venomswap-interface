import { Blockchain } from '@venomswap/sdk'
import { BLOCKCHAIN } from '../connectors'
import slothTokenLogo from '../assets/images/sloth-token-logo.png'
import cobraTokenLogo from '../assets/images/cobra-token-logo.png'

export default function getTokenLogo(): string {
  switch (BLOCKCHAIN) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return cobraTokenLogo
    case Blockchain.HARMONY:
      return slothTokenLogo
    default:
      return slothTokenLogo
  }
}
