'use client'

import React, { createContext, useContext, useState } from 'react';

type FileContextType = {
    activeFile: string | null;
    setActiveFile: (fileName: string | null) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: React.ReactNode }) {
    const [activeFile, setActiveFile] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <FileContext.Provider value={{ activeFile, setActiveFile, isMobileMenuOpen, setIsMobileMenuOpen }}>
            {children}
        </FileContext.Provider>
    );
}

export function useFileContext() {
    const context = useContext(FileContext);
    if (context === undefined) {
        throw new Error('useFileContext must be used within a FileProvider');
    }
    return context;
}
