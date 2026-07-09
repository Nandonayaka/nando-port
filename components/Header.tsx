'use client'

import {
  ArrowLeft,
  ArrowRight,
  Search,
  Columns,
  Minus,
  Square,
  X,
  PanelLeft,
  PanelBottom,
  PanelRight
} from 'lucide-react'

export default function TitleBar() {
  const menus = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help']

  return (
    <div className="bg-[#0c1017] text-[#9099a4] text-[12px] h-9 px-3 flex items-center justify-between border-b border-[#1f242c] select-none flex-shrink-0 font-sans relative">

      {/* SEKSI KIRI: Logo & Menu Bar */}
      <div className="flex items-center gap-3.5 h-full z-10">
        {/* VS Code Logo Resmi */}
        <svg className="w-3.5 h-3.5 text-[#007acc] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.922 16.916a.747.747 0 0 0-.214-.523l-3.35-3.323 3.364-3.323a.753.753 0 0 0 .01-.54 1.13 1.13 0 0 0-.25-.4l-4.14-3.66a.748.748 0 0 0-.962.036l-7.393 6.643-3.64-2.735a.747.747 0 0 0-.934.026L.18 11.666a.752.752 0 0 0 0 1.066l6.233 2.548a.748.748 0 0 0 .934-.026l3.64-2.734 7.393 6.643a.746.746 0 0 0 .962.036l4.14-3.66a1.135 1.135 0 0 0 .44-.623zM17.473 12l-4.475-4.02 5.347-4.805 3.107 2.748L17.473 12z" />
        </svg>

        {/* List Menu */}
        <div className="hidden md:flex items-center gap-3">
          {menus.map((menu) => (
            <button
              key={menu}
              className="hover:text-[#e1e4e8] transition-colors font-normal py-1"
            >
              {menu}
            </button>
          ))}
        </div>
      </div>

      {/* SEKSI TENGAH: Global Search Bar (Center Positioned) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center z-0">
        {/* History Arrows */}
        <div className="flex items-center gap-1.5 text-[#5f6670] mr-2">
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <ArrowLeft size={14} strokeWidth={2.5} />
          </button>
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Search Input Box */}
        <div className="w-[480px] bg-[#1b202a] border border-[#262c36] rounded-md h-[24px] flex items-center justify-center text-[#767f8d] hover:border-[#323945] cursor-pointer px-2 gap-2">
          <Search size={12} className="text-[#616975]" />
          <span className="text-[11px] font-normal text-[#848e9c]">nando-port [Administrator]</span>
        </div>
      </div>

      {/* SEKSI KANAN: Layout & Window Controls */}
      <div className="flex items-center h-full justify-end gap-1 z-10">
        {/* Layout Panel Toggles */}
        <div className="hidden md:flex items-center gap-2 text-[#848e9c] pr-3 border-r border-[#1f242c]/50 my-1.5">
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <PanelLeft size={15} strokeWidth={1.75} />
          </button>
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <PanelBottom size={15} strokeWidth={1.75} />
          </button>
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <PanelRight size={15} strokeWidth={1.75} />
          </button>
          <button className="hover:text-[#e1e4e8] transition-colors p-0.5">
            <Columns size={15} strokeWidth={1.75} />
          </button>
        </div>

        {/* Windows OS Window Controls */}
        <div className="flex items-center h-full -mr-3 pl-1">
          <button className="w-11 h-full flex items-center justify-center hover:bg-[#1c212b] text-[#848e9c] hover:text-white transition-colors">
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <button className="w-11 h-full flex items-center justify-center hover:bg-[#1c212b] text-[#848e9c] hover:text-white transition-colors">
            <Square size={10} strokeWidth={2} />
          </button>
          <button className="w-11 h-full flex items-center justify-center hover:bg-[#e81123] text-[#848e9c] hover:text-white transition-colors">
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </div>
  )
}