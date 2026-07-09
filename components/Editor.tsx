'use client'

import { 
  X, 
  FilePlus, 
  FolderOpen, 
  FolderPlus, 
  GitFork, 
  Link2, 
  Sparkles, 
  Lightbulb, 
  Zap, 
  Layout, 
  Play, 
  MoreHorizontal 
} from 'lucide-react'
import { useState } from 'react'

export default function Editor() {
  const [activeTab, setActiveTab] = useState('welcome')

  const startItems = [
    { label: 'New File...', icon: <FilePlus size={18} /> },
    { label: 'Open File...', icon: <FolderOpen size={18} /> },
    { label: 'Open Folder...', icon: <FolderPlus size={18} /> },
    { label: 'Clone Git Repository...', icon: <GitFork size={18} /> },
    { label: 'Connect to...', icon: <Link2 size={18} /> },
  ]

  const walkthroughs = [
    {
      title: 'Get Started with VS Code',
      description: 'Discover the best customizations to make VS Code yours.',
      icon: <Sparkles size={18} className="text-[#4fc1ff]" />,
      progress: 65,
    },
    {
      title: 'Learn the Fundamentals',
      icon: <Lightbulb size={18} className="text-[#4fc1ff]" />,
    },
    {
      title: 'Boost your Productivity',
      icon: <Zap size={18} className="text-[#4fc1ff]" />,
    },
  ]

  const recentProjects = [
    { name: 'nando-port', path: 'D:\\coding' },
    { name: 'Portofolio', path: 'D:\\coding' },
    { name: 'rara-v3-fastapi', path: 'D:\\' },
    { name: 'laravel-agentoo', path: 'D:\\coding' },
    { name: 'c', path: 'D:\\coding\\codingnando' },
  ]

  return (
    <div className="flex-1 flex flex-col bg-[#181a1f] h-screen text-[#cccccc] font-sans overflow-hidden select-none">
      {/* Tab Bar / Top Navigation */}
      <div className="bg-[#1f2428] h-9 flex items-center justify-between border-b border-[#24292e] px-2 flex-shrink-0">
        <div className="flex items-center h-full">
          <div
            className={`h-full px-4 flex items-center gap-2 text-xs border-t-2 cursor-pointer relative ${
              activeTab === 'welcome'
                ? 'border-[#4fc1ff] bg-[#181a1f] text-[#ffffff]'
                : 'border-transparent text-[#959da5] hover:bg-[#24292e]'
            }`}
            onClick={() => setActiveTab('welcome')}
          >
            <span className="text-[#4fc1ff] text-[10px]">✨</span>
            <span>Welcome</span>
            <X size={12} className="ml-2 text-[#959da5] hover:bg-[#2f363d] hover:text-white rounded p-0.5 transition-colors" />
          </div>
        </div>
        
        {/* Top Right Controls Window */}
        <div className="flex items-center gap-3 text-[#959da5]">
          <Play size={14} className="hover:text-white cursor-pointer" />
          <Layout size={14} className="hover:text-white cursor-pointer" />
          <MoreHorizontal size={14} className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#181a1f] flex justify-center items-start">
        <div className="w-full max-w-5xl px-16 py-20 grid grid-cols-12 gap-x-16">
          
          {/* Left / Header Area */}
          <div className="col-span-12 mb-10">
            <h1 className="text-4xl font-light text-[#e1e4e8] mb-2 tracking-wide">Visual Studio Code</h1>
            <p className="text-lg text-[#6a737d] font-light">Editing evolved</p>
          </div>

          {/* LEFT COLUMN: Start & Recent */}
          <div className="col-span-5 space-y-10">
            {/* Start Section */}
            <div>
              <h2 className="text-sm font-medium text-[#e1e4e8] mb-4">Start</h2>
              <div className="space-y-2.5">
                {startItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-[#4fc1ff] hover:text-[#79c0ff] cursor-pointer group text-sm"
                  >
                    <span className="text-[#4fc1ff] opacity-90">{item.icon}</span>
                    <span className="group-hover:underline">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Section */}
            <div>
              <h2 className="text-sm font-medium text-[#e1e4e8] mb-4">Recent</h2>
              <div className="space-y-2">
                {recentProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex items-baseline gap-3 text-sm cursor-pointer group"
                  >
                    <span className="text-[#4fc1ff] group-hover:underline font-normal">{project.name}</span>
                    <span className="text-[#586069] text-xs font-mono">{project.path}</span>
                  </div>
                ))}
                <div className="text-[#4fc1ff] hover:text-[#79c0ff] text-sm cursor-pointer mt-3 block">
                  More...
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Walkthroughs */}
          <div className="col-span-7">
            <h2 className="text-sm font-medium text-[#e1e4e8] mb-4">Walkthroughs</h2>
            <div className="space-y-4">
              {walkthroughs.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pb-3 border-b border-[#24292e] last:border-0 cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-medium text-[#e1e4e8] group-hover:text-[#4fc1ff] transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-xs text-[#6a737d] mt-1 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#24292e]">
                    {item.progress !== undefined && (
                      <div
                        className="h-full bg-[#005cc5]"
                        style={{ width: `${item.progress}%` }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}