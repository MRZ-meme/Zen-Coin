import React from "react";
import { RocketIcon, LockIcon } from "lucide-react";

export default function ZenCoinLaunch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-zinc-900 text-white flex flex-col items-center justify-center p-6 space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        🚀 ZEN COIN is Coming
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 text-center max-w-2xl">
        Meme meets meditation. A token for true believers in calm, chaos, and crypto. 
        ZEN COIN is brewing silently on BNB Chain. Be ready.
      </p>

      <div className="w-full max-w-xl bg-zinc-800/50 border border-zinc-700 p-6 space-y-4 rounded-xl">
        <div>
          <p className="text-sm text-zinc-400">Contract Address</p>
          <p className="text-md font-mono break-all">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            Buy on PancakeSwap
          </a>
          <a
            href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center border border-purple-600 text-purple-300 hover:bg-purple-900 px-4 py-2 rounded-md"
          >
            View on BscScan
          </a>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <LockIcon className="w-4 h-4" />
          LP Lock Coming Soon
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <RocketIcon className="w-4 h-4" />
          Launch Mode: Stealth
        </div>
      </div>

      <footer className="pt-10 text-xs text-zinc-500">
        © 2025 ZEN COIN. Ride the vibe. Stay zen.
      </footer>
    </div>
  );
}
