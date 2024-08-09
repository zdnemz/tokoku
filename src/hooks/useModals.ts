import { ModalsContext } from '@/providers/Modals';
import { useContext } from 'react';

export function useModals() {
  const context = useContext(ModalsContext);
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalsProvider');
  }
  return context;
}
