"use client";

import { useState } from "react";
import { useWallet } from "@/app/context/WalletContext";

export default function WalletTransferPage() {
  const [form, setForm] = useState({
    amountToSend: "",
    originCurrency: "USD",
    destinationCurrency: "USD",
    narration: "P2P Payment",
    email: "",
    phoneNumber: "",
  });

  const [response, setResponse] = useState<any>(null);
  const { walletId } = useWallet();

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); };

  return (
    <div className="p-4 min-h-screen bg-slate-100">
      <h2 className="text-xl mb-4 font-semibold">Wallet Transfer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["amountToSend", "email", "phoneNumber"].map((field) => (
          <input
            key={field}
            name={field}
            value={(form as any)[field]}
            onChange={handleChange}
            placeholder={field}
            className="border border-gray-400 p-2 rounded w-full"
          />
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Transfer
        </button>
      </form>

      {response && (
        <pre className="mt-6 bg-white p-4 rounded shadow text-sm">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
