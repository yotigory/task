import { useState } from 'react';

export const useIsOpenToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
		setIsOpen(!isOpen)
  }
  return {
    isOpen,
    toggle,
  }
}