import { useCallback, useMemo, useState } from 'react'
import { ApplyModalContext } from './ApplyModalContext.js'
import { TELEGRAM_USERNAME } from '../config/site.js'

export function ApplyModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [roleTitle, setRoleTitle] = useState('')

  const openApplyModal = useCallback((title) => {
    setRoleTitle(title)
    setIsOpen(true)
  }, [])

  const closeApplyModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      roleTitle,
      openApplyModal,
      closeApplyModal,
      telegramUsername: TELEGRAM_USERNAME,
    }),
    [isOpen, roleTitle, openApplyModal, closeApplyModal],
  )

  return (
    <ApplyModalContext.Provider value={value}>
      {children}
    </ApplyModalContext.Provider>
  )
}
