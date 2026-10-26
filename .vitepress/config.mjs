import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  ignoreDeadLinks: true,
  base: process.env.BASE_URL || '/',
  title: 'LlamaCraft',
  description: 'The Official LlamaCraft Minecraft Server Guide',
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/llama.jpg' }],
    ['meta', { name: 'theme-color', content: '#3B9B6A' }]
  ],
  themeConfig: {
    logo: '/llama.jpg',
    siteTitle: 'LlamaCraft',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Enchants Guide', link: '/enchants/gear-guide' },
      { text: 'Enchant Conflicts', link: '/enchants/conflicts' },
      { text: 'Domain Expansions', link: '/info/domains' },
      { text: 'Commands', link: '/info/commands' },
      { text: 'How to Join', link: '/info/how-to-join' }
    ],

    sidebar: [
      {
        text: 'Enchantments',
        items: [
          { text: 'What Enchants Go on What', link: '/enchants/gear-guide' },
          { text: 'Enchant Conflicts & Drawbacks', link: '/enchants/conflicts' }
        ]
      },
      {
        text: 'Special Gameplay',
        items: [
          { text: 'Domain Expansions Guide', link: '/info/domains' },
          { text: 'Fishing & Magic Books', link: '/info/fishing-money' },
          { text: 'Protect Your Base (Claims)', link: '/info/claims' },
          { text: 'Voice Chat Setup', link: '/info/voice-chat' }
        ]
      },
      {
        text: 'Server Info & Rules',
        items: [
          { text: 'Server IP & Details', link: '/info/server-info' },
          { text: 'Commands List', link: '/info/commands' },
          { text: 'How to Join', link: '/info/how-to-join' },
          { text: 'Server Rules', link: '/info/rules' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BoazlKumam/llamacraft-voice-site' }
    ],

    footer: {
      message: 'LlamaCraft Minecraft Community',
      copyright: 'Copyright © 2026 LlamaCraft'
    }
  }
})
