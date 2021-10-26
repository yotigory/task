import { useState } from 'react';

export const useIsOpenToggle = (state) => {
  const [isOpen, setIsOpen] = useState(state)
  const toggle = () => {
		setIsOpen(!isOpen)
  }
  return {
    isOpen,
    toggle,
  }
}