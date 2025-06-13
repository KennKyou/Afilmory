const langs = ['en', 'zh-CN', 'zh-HK', 'zh-TW', 'jp', 'ko'] as const
export const currentSupportedLanguages = [...langs].sort() as string[]
export type MainSupportedLanguages = (typeof langs)[number]

export const ns = ['app'] as const
export const defaultNS = 'app' as const
