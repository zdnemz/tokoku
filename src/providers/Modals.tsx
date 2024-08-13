'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalsContextType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export const ModalsContext = createContext<ModalsContextType | undefined>(
  undefined,
);

export function ModalsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  return (
    <ModalsContext.Provider value={{ setOpen, setContent }}>
      {children}
      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {content}
          </div>
        </div>
      )}
    </ModalsContext.Provider>
  );
}
