import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './useLanguage'
import { DEFAULT_LANG, SUPPORTED_LANGS, translate } from './translations'

const STORAGE_KEY = 'kouman-lang'

const loadLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(loadLang)

  // Keep <html lang/dir> and the tab title in sync; CSS keys off these attributes.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.title = translate(lang, 'docTitle')
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'fa' ? 'en' : 'fa')), [])
  const t = useCallback((key, vars) => translate(lang, key, vars), [lang])

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, toggleLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
