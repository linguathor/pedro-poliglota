"use client";

import { useState } from "react";

export function CouponCopy() {
  const [copyStatus, setCopyStatus] = useState("");
  const couponCode = "IDIOMA2026";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopyStatus("Copiado ✅");
      console.log("[track] coupon_copied", { code: couponCode });
      setTimeout(() => setCopyStatus(""), 1800);
    } catch {
      setCopyStatus("No se pudo copiar (copia manualmente).");
      setTimeout(() => setCopyStatus(""), 2200);
    }
  };

  return (
    <div className="coupon" aria-label="Cupón de descuento">
      <span className="muted">Código de descuento:</span>
      <div className="flex items-center gap-3 mt-2">
        <code className="bg-slate-100 px-3 py-1 rounded">{couponCode}</code>
        <button className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded" type="button" onClick={handleCopy} aria-label="Copiar código">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <rect x="9" y="9" width="10" height="10" rx="2" strokeWidth={1.5} />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Copiar</span>
        </button>
        <span className="small text-sm ml-2" aria-live="polite">{copyStatus}</span>
      </div>
    </div>
  );
}
