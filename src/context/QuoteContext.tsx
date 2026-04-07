import React, { createContext, useContext, useState } from 'react';

interface QuoteContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
}
