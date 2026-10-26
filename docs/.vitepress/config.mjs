import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/llamacraft-voice-site/',
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
      { text: 'Commands', link: '/info/commands' },
      { text: 'How to Join', link: '/info/how-to-join' },
      { text: 'Rules', link: '/info/rules' }
    ],

    sidebar: [
      {
        text: 'Enchantments',
        items: [
          { text: 'What Enchants Go on What', link: '/enchants/gear-guide' }
        ]
      },
      {
        text: 'Server Info',
        items: [
          { text: 'Server IP & Details', link: '/info/server-info' },
          { text: 'Fishing & Money', link: '/info/fishing-money' }
        ]
      },
      {
        text: 'Player Guides',
        items: [
          { text: 'Commands List', link: '/info/commands' },
          { text: 'How to Join', link: '/info/how-to-join' },
          { text: 'Protect Your Base (Claims)', link: '/info/claims' },
          { text: 'Voice Chat Setup', link: '/info/voice-chat' },
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
