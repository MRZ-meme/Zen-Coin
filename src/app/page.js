import React from "react";

export default function ZenCoinLaunch() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #2e1065, #000000, #18181b)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      gap: "2.5rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
        🚀 ZEN COIN is Coming
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#d4d4d8", textAlign: "center", maxWidth: "40rem" }}>
        Meme meets meditation. A token for true believers in calm, chaos, and crypto. 
        ZEN COIN is brewing silently on BNB Chain. Be ready.
      </p>

      <div style={{ backgroundColor: "#27272a", border: "1px solid #3f3f46", padding: "1.5rem", borderRadius: "1rem", width: "100%", maxWidth: "36rem" }}>
        <p style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>Contract Address</p>
        <p style={{ fontFamily: "monospace", wordBreak: "break-all" }}>
          0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
             target="_blank" rel="noopener noreferrer"
             style={{ textAlign: "center", backgroundColor: "#9333ea", padding: "0.5rem", borderRadius: "0.5rem", color: "white", textDecoration: "none" }}>
            Buy on PancakeSwap
          </a>
          <a href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
             target="_blank" rel="noopener noreferrer"
             style={{ textAlign: "center", border: "1px solid #9333ea", padding: "0.5rem", borderRadius: "0.5rem", color: "#d8b4fe", textDecoration: "none" }}>
            View on BscScan
          </a>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", color: "#a1a1aa" }}>
        <div>🔒 LP Lock Coming Soon</div>
        <div>🚀 Launch Mode: Stealth</div>
      </div>

      <footer style={{ paddingTop: "2.5rem", fontSize: "0.75rem", color: "#71717a" }}>
        © 2025 ZEN COIN. Ride the vibe. Stay zen.
      </footer>
    </div>
  );
}
