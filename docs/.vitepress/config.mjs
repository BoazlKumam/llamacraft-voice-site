import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LlamaCraft',
  description: 'Official Cross-Play Minecraft Server & Proximity Voice Chat',
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
      { text: 'Voice Chat', link: '/guide/voice-chat' },
      { text: 'How to Join', link: '/guide/how-to-join' },
      { text: 'Rules', link: '/guide/rules' },
      { text: 'FAQ', link: '/guide/faq' }
    ],

    sidebar: [
      {
        text: 'Server Guides',
        items: [
          { text: 'How to Join (Cross-Play)', link: '/guide/how-to-join' },
          { text: 'Proximity Voice Chat', link: '/guide/voice-chat' },
          { text: 'Server Rules & Code of Conduct', link: '/guide/rules' },
          { text: 'Frequently Asked Questions', link: '/guide/faq' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg' }
    ],

    footer: {
      message: 'Self-hosted on PaperMC with Bedrock & Java Cross-Play.',
      copyright: 'Copyright © 2026 LlamaCraft'
    }
  }
})
