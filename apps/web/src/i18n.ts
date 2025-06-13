import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { atom } from 'jotai'
import { initReactI18next } from 'react-i18next'

import { resources } from './@types/resources'
import { jotaiStore } from './lib/jotai'

const i18n = i18next.createInstance()
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      'zh-TW': ['zh-TW', 'zh-HK', 'zh-CN', 'en'],
      'zh-HK': ['zh-HK', 'zh-TW', 'zh-CN', 'en'],
      'zh-CN': ['zh-CN', 'zh-TW', 'zh-HK', 'en'],
      default: ['zh-TW', 'zh-HK', 'zh-CN', 'en'],
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
    },
    defaultNS: 'app',
    resources,
  })

export const i18nAtom = atom(i18n)

export const getI18n = () => {
  return jotaiStore.get(i18nAtom)
}
