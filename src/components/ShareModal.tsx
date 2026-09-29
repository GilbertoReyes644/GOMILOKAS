import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Share2, PhoneCall } from 'lucide-react';
import { BUSINESS_CONFIG, LOGO_URL } from '../data/mockData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ais-dev-yab4jnlaw36buqiayamhiv-461287933818.us-east5.run.app';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}&color=000000&bgcolor=ffffff&margin=10`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(
    `¡Checa los aros de manzana enchilados de GOMILOKAS! Bolsa de 100g a solo $15 MXN. Entregas en la Uni y en Villa de Tezontepec:\n${currentUrl}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1b1b1d] border-2 border-[#fde400] w-full max-w-md rounded-3xl p-6 relative shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#201f21] border border-[#353437] text-white hover:text-[#fde400] transition-colors cursor-pointer"
          aria-label="Cerrar modal de compartir"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={LOGO_URL}
            alt="GOMILOKAS"
            className="w-12 h-12 rounded-xl object-contain bg-[#131315] border border-[#353437] p-1"
          />
          <div>
            <span className="text-[10px] font-mono text-[#fde400] uppercase font-bold tracking-widest block">
              COMPARTIR CON TUS COMPAS
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight font-headline">
              GOMILOKAS EN TU CELULAR
            </h3>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="bg-[#131315] p-5 rounded-2xl border border-[#2a2a2c] flex flex-col items-center justify-center space-y-3 mb-5">
          <div className="bg-white p-3 rounded-xl shadow-lg">
            <img
              src={qrUrl}
              alt="Código QR de Gomilokas"
              className="w-48 h-48 rounded object-contain"
            />
          </div>
          <span className="text-xs font-mono text-[#cdc7aa] text-center">
            Escanea con la cámara del celular para abrir la página al instante
          </span>
        </div>

        {/* Copy Link Input */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 bg-[#201f21] border border-[#353437] rounded-xl p-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="bg-transparent text-xs text-white font-mono flex-1 outline-none px-2 select-all"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Share Button */}
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#25D366] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Pasar enlace por WhatsApp a mis amigos</span>
          </a>
        </div>

      </div>
    </div>
  );
};
