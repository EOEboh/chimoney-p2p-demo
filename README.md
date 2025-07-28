# Chimoney Multi-Currency Wallet Demo

This is a simple Next.js 15 app (App Router) that demonstrates Chimoney's multi-currency wallet features:

- ✅ Create a Chimoney wallet address
- 💸 Transfer funds from one MultiCurrency Chimoney wallet to another

### 🚀 Getting Started

#### 1. Clone this repository

```bash
git clone git@github.com:EOEboh/chimoney-p2p-demo.git // SSH
git clone https://github.com/EOEboh/chimoney-p2p-demo.git // HTTPS
cd chimoney-wallet-demo
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Set your environment variables

Create a .env.local file at the root:

```bash
#.env.local
CHIMONEY_API_KEY=your_api_key_here
CHIMONEY_API_URL=https://api-v2-sandbox.chimoney.io/v0.2
```

You can get a free sandbox API key from Chimoney's dashboard.

#### 4. Run the dev server

```bash
npm run dev
```

Visit http://localhost:3000 to use the app.

### 📁 Pages

    /create-wallet – Create a multi-currency wallet using Chimoney's API.

    /transfer – Make a transfer between multi-currency wallets.

### 🛠 Built With

    Next.js 15 App Router

    Tailwind CSS

    Chimoney API – API Docs
