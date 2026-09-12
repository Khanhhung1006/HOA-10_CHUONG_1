import React, { useState } from 'react';
import { X, Search, Zap } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface ElementData {
  z: number;
  symbol: string;
  name: string;
  mass: number;
  config: string;
  type: 'kim-loai' | 'phi-kim' | 'khi-hiem';
  outerE: number;
}

const elements20: ElementData[] = [
  { z: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, config: '1s¹', type: 'phi-kim', outerE: 1 },
  { z: 2, symbol: 'He', name: 'Helium', mass: 4.003, config: '1s²', type: 'khi-hiem', outerE: 2 },
  { z: 3, symbol: 'Li', name: 'Lithium', mass: 6.94, config: '1s² 2s¹', type: 'kim-loai', outerE: 1 },
  { z: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, config: '1s² 2s²', type: 'kim-loai', outerE: 2 },
  { z: 5, symbol: 'B', name: 'Boron', mass: 10.81, config: '1s² 2s² 2p¹', type: 'phi-kim', outerE: 3 },
  { z: 6, symbol: 'C', name: 'Carbon', mass: 12.011, config: '1s² 2s² 2p²', type: 'phi-kim', outerE: 4 },
  { z: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, config: '1s² 2s² 2p³', type: 'phi-kim', outerE: 5 },
  { z: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, config: '1s² 2s² 2p⁴', type: 'phi-kim', outerE: 6 },
  { z: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, config: '1s² 2s² 2p⁵', type: 'phi-kim', outerE: 7 },
  { z: 10, symbol: 'Ne', name: 'Neon', mass: 20.18, config: '1s² 2s² 2p⁶', type: 'khi-hiem', outerE: 8 },
  { z: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, config: '1s² 2s² 2p⁶ 3s¹', type: 'kim-loai', outerE: 1 },
  { z: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, config: '1s² 2s² 2p⁶ 3s²', type: 'kim-loai', outerE: 2 },
  { z: 13, symbol: 'Al', name: 'Aluminium', mass: 26.982, config: '1s² 2s² 2p⁶ 3s² 3p¹', type: 'kim-loai', outerE: 3 },
  { z: 14, symbol: 'Si', name: 'Silicon', mass: 28.085, config: '1s² 2s² 2p⁶ 3s² 3p²', type: 'phi-kim', outerE: 4 },
  { z: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, config: '1s² 2s² 2p⁶ 3s² 3p³', type: 'phi-kim', outerE: 5 },
  { z: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, config: '1s² 2s² 2p⁶ 3s² 3p⁴', type: 'phi-kim', outerE: 6 },
  { z: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, config: '1s² 2s² 2p⁶ 3s² 3p⁵', type: 'phi-kim', outerE: 7 },
  { z: 18, symbol: 'Ar', name: 'Argon', mass: 39.95, config: '1s² 2s² 2p⁶ 3s² 3p⁶', type: 'khi-hiem', outerE: 8 },
  { z: 19, symbol: 'K', name: 'Potassium', mass: 39.098, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹', type: 'kim-loai', outerE: 1 },
  { z: 20, symbol: 'Ca', name: 'Calcium', mass: 40.08, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', type: 'kim-loai', outerE: 2 },
];

interface PeriodicTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({ isOpen, onClose }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedEl, setSelectedEl] = useState<ElementData | null>(elements20[0]);

  if (!isOpen) return null;

  const filtered = elements20.filter(el => 
    el.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    el.symbol.toLowerCase().includes(filterQuery.toLowerCase()) ||
    el.z.toString() === filterQuery.trim()
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-[#FFFDF9] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-amber-200/80 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2D2115] via-[#0F3A3E] to-[#0A272A] text-white flex items-center justify-between shrink-0 border-b border-amber-900/40">
          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight">
                Bảng 20 Nguyên Tố Đầu Tiên (Z = 1 → 20)
              </h3>
              <p className="text-xs text-cyan-200">Tra cứu nhanh cấu hình electron & nguyên tử khối</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="p-2 text-cyan-200 hover:text-white bg-cyan-900/50 hover:bg-cyan-800/60 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-800/60" />
            <input
              type="text"
              placeholder="Nhập tên, kí hiệu hoặc số Z (ví dụ: Na, 11, Chlorine)..."
              value={filterQuery}
              onChange={e => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-amber-50/50 border border-amber-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-600 text-amber-950 font-medium"
            />
          </div>

          {/* Grid of 20 Elements */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
            {filtered.map(el => {
              const isSelected = selectedEl?.z === el.z;
              let badgeBg = 'bg-cyan-50/80 border-cyan-200 text-cyan-950';
              if (el.type === 'kim-loai') badgeBg = 'bg-amber-100/70 border-amber-300 text-amber-950';
              if (el.type === 'khi-hiem') badgeBg = 'bg-amber-200/50 border-amber-300 text-amber-950';

              return (
                <button
                  key={el.z}
                  onClick={() => {
                    soundEffects.playClick();
                    setSelectedEl(el);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer select-none flex flex-col justify-between h-24 ${badgeBg} ${
                    isSelected ? 'ring-2 ring-cyan-600 scale-[1.02] shadow-xs' : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-white/80 border border-black/5">
                      Z = {el.z}
                    </span>
                    <span className="text-[10px] text-amber-900/70 font-semibold">{el.mass}</span>
                  </div>

                  <div className="text-center py-1">
                    <div className="text-xl font-extrabold tracking-tight text-amber-950">{el.symbol}</div>
                    <div className="text-[11px] truncate font-bold text-amber-900">{el.name}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Element Details Drawer */}
          {selectedEl && (
            <div className="bg-[#102B2E] text-white rounded-2xl p-5 space-y-3 shadow-md border border-cyan-900/60">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-900 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-cyan-700 text-white font-extrabold text-xl flex items-center justify-center border border-cyan-500/40">
                    {selectedEl.symbol}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-white">{selectedEl.name} (Z = {selectedEl.z})</h4>
                    <p className="text-xs text-cyan-200">
                      Nguyên tử khối: <strong className="text-amber-300">{selectedEl.mass} amu</strong>
                    </p>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedEl.type === 'kim-loai' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                  selectedEl.type === 'khi-hiem' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                  'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                }`}>
                  {selectedEl.type === 'kim-loai' ? 'Kim loại' : selectedEl.type === 'khi-hiem' ? 'Khí hiếm' : 'Phi kim'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-[#091C1E] p-3 rounded-xl border border-cyan-800/50">
                  <span className="text-cyan-200/80 block mb-1">Cấu hình electron:</span>
                  <code className="font-bold text-amber-300 text-sm">{selectedEl.config}</code>
                </div>

                <div className="bg-[#091C1E] p-3 rounded-xl border border-cyan-800/50">
                  <span className="text-cyan-200/80 block mb-1">Số e lớp ngoài cùng:</span>
                  <span className="font-bold text-cyan-300 text-sm">{selectedEl.outerE} e</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
