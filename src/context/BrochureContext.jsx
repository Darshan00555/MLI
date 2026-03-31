/* eslint-disable react-refresh/only-export-components */
import { BrochureModal } from '../components/ui/BrochureModal';

import React, { createContext, useContext, useState } from 'react';

const BrochureContext = createContext();

export const BrochureProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('General Portfolio');

  const openBrochureModal = (title = 'General Portfolio') => {
    setProjectTitle(title);
    setIsOpen(true);
  };

  const closeBrochureModal = () => {
    setIsOpen(false);
  };

  return (
    <BrochureContext.Provider value={{ openBrochureModal, closeBrochureModal }}>
      {children}
      <BrochureModal open={isOpen} onOpenChange={setIsOpen} projectTitle={projectTitle} />
    </BrochureContext.Provider>
  );
};

export const useBrochure = () => {
  const context = useContext(BrochureContext);
  if (!context) {
    throw new Error('useBrochure must be used within a BrochureProvider');
  }
  return context;
};
