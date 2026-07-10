'use client'

import {
  Files,
  Search,
  GitBranch,
  Bug,
  Blocks,
  UserCircle2,
  Settings
} from 'lucide-react'
import { useFileContext } from '@/lib/FileContext'
import { useState } from 'react'

export default function ActivityBar() {
  const [activeIcon, setActiveIcon] = useState(0)
  const { isMobileMenuOpen } = useFileContext()

  const topIcons = [
    { icon: Files, label: 'Explorer', badge: null },
    { icon: Search, label: 'Search', badge: null },
    { icon: GitBranch, label: 'Source Control', badge: 30 },
    { icon: Bug, label: 'Run & Debug', badge: null },
    { icon: Blocks, label: 'Extensions', badge: null },
  ]

  return (
    <div className={`${isMobileMenuOpen ? 'flex' : 'hidden md:flex'} absolute md:relative z-50 w-12 bg-[#0c1017] border-r border-[#1f242c] flex-col items-center py-2 justify-between h-full flex-shrink-0 select-none font-sans`}>

      {/* KELOMPOK IKON ATAS */}
      <div className="w-full flex flex-col items-center gap-1">
        {topIcons.map((item, idx) => {
          const Icon = item.icon
          const isActive = activeIcon === idx

          return (
            <button
              key={idx}
              onClick={() => setActiveIcon(idx)}
              className={`w-full h-11 flex items-center justify-center relative group transition-colors ${isActive ? 'text-[#e1e4e8]' : 'text-[#626a73] hover:text-[#e1e4e8]'
                }`}
              title={item.label}
            >
              {/* Garis Indikator Aktif di Sisi Kiri */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#70e6d2]" />
              )}

              <Icon size={22} strokeWidth={isActive ? 1.5 : 1.25} />

              {/* Badge Notifikasi Toska Bulat Sempurna */}
              {item.badge && (
                <span className="absolute bottom-1 right-1 bg-[#70e6d2] text-[#0c1017] text-[9px] font-bold w-[15px] h-[15px] rounded-full flex items-center justify-center border border-[#0c1017] shadow-sm">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* KELOMPOK IKON BAWAH */}
      <div className="w-full flex flex-col items-center gap-0.5">
        {/* Akun / Profile */}
        <button className="w-full h-10 flex items-center justify-center text-[#626a73] hover:text-[#e1e4e8] relative" title="Accounts">
          <UserCircle2 size={22} strokeWidth={1.25} />
          {/* Badge Profil Angka 1 */}
          <span className="absolute bottom-1 right-1 bg-[#70e6d2] text-[#0c1017] text-[9px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center border border-[#0c1017] shadow-sm">
            1
          </span>
        </button>

        {/* Settings */}
        <button className="w-full h-10 flex items-center justify-center text-[#626a73] hover:text-[#e1e4e8]" title="Settings">
          <Settings size={22} strokeWidth={1.25} />
        </button>
      </div>

    </div>
  )
}