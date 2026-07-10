import Sidebar from '@/components/Sidebar'
import Explorer from '@/components/Explorer'
import Header from '@/components/Header'
import Editor from '@/components/Editor'
import StatusBar from '@/components/StatusBar'
import { FileProvider } from '@/lib/FileContext'

export default function Home() {
  return (
    <FileProvider>
      <div className="h-screen flex flex-col bg-[#1e1e1e]">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Sidebar */}
          <Sidebar />

          {/* Explorer Panel */}
          <Explorer />

          {/* Editor */}
          <Editor />
        </div>

        {/* Status Bar */}
        <StatusBar />
      </div>
    </FileProvider>
  )
}
