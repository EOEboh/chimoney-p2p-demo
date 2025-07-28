"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type WalletContextType = {
  walletId: string;
  setWalletId: (id: string) => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [walletId, setWalletId] = useState("");

  console.log("walletId", walletId);

  return (
    <WalletContext.Provider value={{ walletId, setWalletId }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
export default WalletContext;
