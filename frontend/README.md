# AsoOke: MarketPlace for native wears

## Overview

Aso Ebi is a decentralized fashion marketplace and showcase platform to connect local fabric sellers, global cloth merchants, fashion designers, and fashion enthusiasts. It provides a space for users to buy fabrics like Aso Oke and other native textiles, discover designers, and purchase bespoke clothing, all while showcasing the skills and creations of local and global fashion designers.

In building this project, we used Alchemy as an RPC provider, as defined in the hardhat configuration. 
Here are some important notes:

- We split our contract logic into Marketplace, Escrow, and Auction
- Asoebi Contract Repo: https://github.com/youngancient/kimiko-contract
  
---

## Quick Links

- [Features](#features)
- [User Roles](#user-roles)

## Getting Started

To clone:
```bash
git clone https://github.com/Web3bidgeAsoOke/frontend.git
```

To install the necessary dependencies:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## Folder Structure
A breakdown of the project file structure:

```
Frontend
├── node_modules
├── public
│   ├── favicon.svg
│   └── assets
      
└── src
    ├── components
    ├── constants
    ├── hooks
    ├── pages
        ├── LandingPage.tsx
        ├── Test.tsx
    ├── utils
    ├── utils
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── vite.config.ts
```



---

## Features

- **Decentralized fabric and fashion marketplace**
  
- **Bespoke clothing orders**
  
- **Real-Time Rewards**
  
- **NFT-backed garments and fashion collectibles**
  
- **Secure, escrow-based payments**

---

## User Roles

### 1. **Buyer**
   - Can purchase attire
   - Can place an order for bespoke attire
   - Can bid for a rare attire
   - Can initiate escrow through payment

### 2. **Seller**
   - Create store
   - add attires
   - manage order
     
### 3. **Designer**
   - Create portfolio
   - add items
   - manage store
---
