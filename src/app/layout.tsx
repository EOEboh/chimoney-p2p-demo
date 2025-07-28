// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { WalletProvider } from "./context/WalletContext";

export const metadata = {
  title: "Chimoney Wallet App",
  description: "Demo of Chimoney multi-currency wallet flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <nav className="bg-blue-600 text-white p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <h1 className="text-lg font-semibold">🌐 Chimoney Wallet</h1>
              <div className="space-x-4">
                <Link href="/create-wallet" className="hover:underline">
                  Create Wallet
                </Link>
                <Link href="/transfer" className="hover:underline">
                  Transfer Funds
                </Link>
              </div>
            </div>
          </nav>
          <main className="max-w-4xl mx-auto py-6 px-4">{children}</main>
        </WalletProvider>
      </body>
    </html>
  );
}
