import { Navigate } from 'react-router'
import { getDefaultLanguage } from '../utils/languageStorage'
import { localizedPath } from '../utils/routing'

export default function RootRedirect() {
  return <Navigate to={localizedPath(getDefaultLanguage())} replace />
}
