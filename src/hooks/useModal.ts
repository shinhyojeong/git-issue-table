import { useState } from 'react'

type UseModalReturnType = {
  isOpen: boolean
  open(): void
  close(): void
}

export const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }
}
