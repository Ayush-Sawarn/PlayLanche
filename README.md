# PlayLanche

## Overview

PlayLanche is a decentralized gaming platform built on the Avalanche blockchain. It is designed as a hub where users can join and play various blockchain-powered games. While the platform is architected to support multiple games, the current release features an innovative NFT-based card game. Players can create or join battles, use unique NFT cards, and compete in a trustless, transparent environment.

## Features

- **Decentralized Game Zone:** All game logic and assets are managed by smart contracts on Avalanche, ensuring fairness and transparency.
- **NFT Card Game:** Each player uses unique NFT cards with randomized attributes to battle others.
- **Battle System:** Players can create new battles or join existing ones, with all actions recorded on-chain.
- **Future-Proof:** The platform is designed to support additional games in the future.

## Tech Stack

### Frontend

- **React**: Modern UI library for building interactive interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Ethers.js**: Blockchain interaction library
- **Web3Modal**: Wallet connection management
- **React Router**: Routing for single-page application

### Smart Contracts / Backend

- **Solidity**: Smart contract language (ERC-1155 standard for NFTs)
- **Hardhat**: Ethereum development environment
- **OpenZeppelin Contracts**: Secure, community-vetted smart contract library
- **Avalanche Fuji Testnet**: Current deployment network (can be extended to subnets or mainnet)

## Why Decentralized Game Zones?

Traditional online games rely on centralized servers, which can be prone to manipulation, downtime, and lack of transparency. Decentralized game zones leverage blockchain technology to solve these issues:

- **Trustless Gameplay:** Game logic is enforced by smart contracts, not a central authority.
- **True Ownership:** Players own their in-game assets (NFTs) and can trade or use them across platforms.
- **Transparency:** All actions and outcomes are verifiable on the blockchain.
- **Censorship Resistance:** No single entity can ban or restrict access to the game zone.
- **Interoperability:** NFTs and tokens can be used in other games or marketplaces.

## Advantages

- **Security:** Immutable smart contracts reduce cheating and hacking risks.
- **Fairness:** Randomness and outcomes are verifiable and cannot be manipulated by game operators.
- **Community Driven:** Open-source and extensible, allowing the community to propose and add new games.
- **Scalability:** Built on Avalanche, benefiting from high throughput and low fees.

## Getting Started

### Prerequisites

- Node.js & npm
- Core or any Web3 wallet

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd nft-card-game
   ```
2. **Install dependencies:**
   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Smart Contracts:
     ```bash
     cd ../web3
     npm install
     ```
3. **Run the frontend:**
   ```bash
   cd ../client
   npm run dev
   ```
4. **Deploy contracts (optional, for developers):**
   ```bash
   cd ../web3
   npx hardhat run scripts/deploy.js --network fuji
   ```

### Usage

- Connect your wallet.
- Register as a player and mint your NFT card.
- Create or join a battle and start playing!

## Roadmap

- [x] NFT Card Game
- [ ] Add more games to the Game Zone
- [ ] Marketplace for trading NFTs
- [ ] Leaderboards and rewards

## License

MIT
