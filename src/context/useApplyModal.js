import { useContext } from 'react'
import { ApplyModalContext } from './ApplyModalContext.js'

export function useApplyModal() {
  const context = useContext(ApplyModalContext)
  if (!context) {
    throw new Error('useApplyModal must be used within ApplyModalProvider')
  }
  return context
}
