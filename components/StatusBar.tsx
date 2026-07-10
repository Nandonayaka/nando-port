'use client'

import {
  XCircle,
  AlertTriangle,
  Radio,
  Zap,
  Activity,
  Tv,
  UserCheck,
  Bell,
  ChevronLeft
} from 'lucide-react'

export default function StatusBar() {
  return (
    <div className="bg-[#0c1017] text-[#626a73] text-[12px] h-6 flex items-center justify-between border-t border-[#1f242c] select-none flex-shrink-0 font-sans w-full">

      {/* KELOMPOK KIRI */}
      <div className="flex items-center h-full gap-3">
        {/* Tombol Panel Lipat Toska di Ujung Kiri */}
        <button className="bg-[#70e6d2] text-[#0c1017] h-full w-9 flex items-center justify-center hover:opacity-90 transition-opacity">
          <ChevronLeft size={14} strokeWidth={2.5} />
        </button>

        {/* Indikator Error & Warning */}
        <div className="flex items-center gap-2.5 px-1">
          <button className="flex items-center gap-1 hover:text-[#e1e4e8] transition-colors">
            <XCircle size={13} className="text-[#626a73]" />
            <span>0</span>
          </button>
          <button className="flex items-center gap-1 hover:text-[#e1e4e8] transition-colors">
            <AlertTriangle size={13} className="text-[#626a73]" />
            <span>0</span>
          </button>
          <button className="flex items-center gap-1 hover:text-[#e1e4e8] transition-colors">
            <Radio size={13} className="text-[#626a73]" />
            <span>0</span>
          </button>
        </div>

        {/* Action Items Kiri */}
        <div className="hidden md:flex items-center gap-3.5">
          <button className="flex items-center gap-1 hover:text-[#e1e4e8] transition-colors text-[#8b949e]">
            <Zap size={13} fill="#ff9800" stroke="#ff9800" className="text-[#ff9800]" />
            <span>BLACKBOX Agent</span>
          </button>

          <button className="flex items-center gap-1 hover:text-[#e1e4e8] transition-colors text-[#8b949e]">
            <Activity size={13} className="text-[#626a73]" />
            <span>Reconnect to Discord</span>
          </button>

          <button className="hover:text-[#e1e4e8] transition-colors text-[#8b949e]">
            Open Website
          </button>
        </div>
      </div>

      {/* KELOMPOK KANAN */}
      <div className="flex items-center h-full gap-2 md:gap-4 px-1 md:px-3">
        <button className="hidden sm:flex items-center gap-1 hover:text-[#e1e4e8] transition-colors text-[#8b949e]">
          <Tv size={13} className="text-[#626a73]" />
          <span>Go Live</span>
        </button>

        <button className="hidden sm:flex items-center gap-1 hover:text-[#e1e4e8] transition-colors text-[#8b949e]">
          <Zap size={13} fill="#ff9800" stroke="#ff9800" className="text-[#ff9800]" />
          <span>BLACKBOXAI: Open Chat</span>
        </button>

        <button className="hover:text-[#e1e4e8] transition-colors text-[#626a73]">
          <UserCheck size={14} />
        </button>

        <button className="hover:text-[#e1e4e8] transition-colors text-[#626a73]">
          <Bell size={13} />
        </button>
      </div>

    </div>
  )
}