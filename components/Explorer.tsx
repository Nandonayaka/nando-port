'use client'

import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Folder,
  FileCode,
  FilePlus,
  FolderPlus,
  RefreshCw,
  Copy
} from 'lucide-react'
import { useFileContext } from '@/lib/FileContext'

export default function FileExplorer() {
  const { activeFile, setActiveFile, isMobileMenuOpen, setIsMobileMenuOpen } = useFileContext();

  // Data file diubah menjadi struktur perkenalan profil dirimu
  const projectFiles = [
    { name: 'biodata', isFolder: true, color: 'text-red-400', level: 0, isOpen: true },
    { name: 'Nandonayaka.jsx', isFolder: false, isReact: true, level: 1, isSelected: true, isSelectedText: true },
    { name: 'About.md', isFolder: false, color: 'text-sky-500', level: 1, status: 'M' },

    { name: 'skills', isFolder: true, color: 'text-yellow-400', level: 0, isOpen: true },
    { name: 'FrontendDev.tsx', isFolder: false, isReact: true, level: 1, status: 'U' },
    { name: 'React_&_Tailwind.css', isFolder: false, color: 'text-blue-400', level: 1 },
    { name: 'Sales_&_Logos.json', isFolder: false, color: 'text-yellow-500', level: 1 },

    { name: 'experience', isFolder: true, color: 'text-purple-400', level: 0, isOpen: true },
    { name: 'FreelanceHistory.js', isFolder: false, color: 'text-yellow-500', level: 1, status: 'U' },
    { name: 'TEFA_SMKN3Pamekasan.org', isFolder: false, color: 'text-lime-400', level: 1 },

    { name: 'projects', isFolder: true, color: 'text-sky-400', level: 0, isOpen: true },
    { name: 'Pustakaku_Branding', isFolder: true, color: 'text-amber-500', level: 1, hasDot: true },
    { name: 'MedistMandiri_Travel_SEO', isFolder: true, color: 'text-emerald-500', level: 1 },

    { name: 'node_modules', isFolder: true, color: 'text-green-600', level: 0, isIgnored: true },
    { name: 'package.json', isFolder: false, color: 'text-green-500', level: 0 },
    { name: 'README.md', isFolder: false, color: 'text-sky-500', level: 0 },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`
        ${isMobileMenuOpen ? 'flex left-12' : 'hidden md:flex md:left-0'} 
        absolute md:relative z-50 w-[calc(80%-48px)] md:w-60 bg-[#0c1017] border-r border-[#1f242c] flex-col h-full text-[#9099a4] font-sans select-none flex-shrink-0
      `}>

        {/* Explorer Section Title */}
        <div className="h-9 px-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#9099a4] flex-shrink-0">
          <span>Explorer</span>
          <MoreHorizontal size={16} className="text-[#626a73] hover:text-white cursor-pointer" />
        </div>

        {/* Project Header with Action Buttons */}
        <div className="flex items-center justify-between px-2 py-1.5 text-[11px] font-bold text-[#e1e4e8] uppercase tracking-wide cursor-pointer hover:bg-[#161b22] group">
          <div className="flex items-center gap-1 min-w-0">
            <ChevronDown size={14} strokeWidth={2.5} className="flex-shrink-0" />
            <span className="truncate">nando-port</span>
          </div>

          {/* Inline Mini Action Icons on Hover */}
          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-[#8b949e] pl-1 flex-shrink-0">
            <FilePlus size={14} className="hover:text-white" />
            <FolderPlus size={14} className="hover:text-white" />
            <RefreshCw size={13} className="hover:text-white" />
            <Copy size={13} className="hover:text-white" />
          </div>
        </div>

        {/* Main File System Tree */}
        <div className="flex-1 overflow-y-auto text-[13px] px-1 space-y-[1px]">
          {projectFiles.map((file, idx) => {
            const indentStyle = { paddingLeft: `${(file.level * 12) + 12}px` }

            const isSelected = activeFile === file.name || (!activeFile && file.isSelected);
            const isSelectedText = activeFile === file.name || (!activeFile && file.isSelectedText);

            return (
              <div
                key={idx}
                style={indentStyle}
                onClick={() => {
                  if (!file.isFolder) {
                    setActiveFile(file.name);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`flex items-center justify-between pr-3 py-[3px] rounded cursor-pointer group transition-colors ${isSelected
                  ? 'bg-[#1b202a]'
                  : file.isIgnored
                    ? 'text-[#484f58] hover:bg-[#161b22]'
                    : 'hover:bg-[#161b22]'
                  }`}
              >
                <div className="flex items-center gap-1.5 overflow-hidden pr-2 w-full">
                  {file.isFolder ? (
                    file.isOpen ? (
                      <ChevronDown size={14} className="text-[#626a73] flex-shrink-0" />
                    ) : (
                      <ChevronRight size={14} className="text-[#626a73] flex-shrink-0" />
                    )
                  ) : (
                    <div className="w-3.5" />
                  )}

                  {/* File/Folder Custom Logo Icon */}
                  {file.isFolder ? (
                    <Folder size={15} className={`${isSelected ? 'text-yellow-400' : file.color} fill-current opacity-80 flex-shrink-0`} />
                  ) : file.isReact ? (
                    <svg className="w-3.5 h-3.5 text-[#4fc1ff] flex-shrink-0 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                    </svg>
                  ) : (
                    <FileCode size={15} className={`${file.color} flex-shrink-0`} />
                  )}

                  {/* File/Folder Name Color Rules */}
                  <span className={`truncate ${isSelectedText
                    ? 'text-[#e2b853]'
                    : isSelected
                      ? 'text-yellow-400 font-medium'
                      : file.isIgnored
                        ? 'text-[#484f58]'
                        : 'text-[#8b949e] group-hover:text-[#e1e4e8]'
                    }`}>
                    {file.name}
                  </span>
                </div>

                {/* Right Status (Git Info / Dot Notification) */}
                <div className="flex-shrink-0 text-[11px] font-medium font-mono whitespace-nowrap pl-1">
                  {file.status ? (
                    <span className={file.isSelectedText ? 'text-[#e2b853]' : 'text-[#2da44e]'}>
                      {file.status}
                    </span>
                  ) : file.hasDot ? (
                    <span className={`${file.isSelected ? 'text-yellow-400' : 'text-[#626a73]'} text-[14px] leading-none`}>·</span>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Sub-sections */}
        <div className="border-t border-[#1f242c] text-[11px] font-bold uppercase tracking-wider text-[#9099a4] bg-[#0c1017] flex-shrink-0">
          <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:bg-[#161b22]">
            <ChevronRight size={14} strokeWidth={2.5} />
            <span>Outline</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:bg-[#161b22] border-t border-[#1f242c]">
            <ChevronRight size={14} strokeWidth={2.5} />
            <span>Timeline</span>
          </div>
        </div>

      </div>
    </>
  )
}