import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/llamacraft-voice-site/',
  title: 'LlamaCraft',
  description: 'Official Server Statistics, Custom Enchantments & Player Knowledge Base',
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/llama.jpg' }],
    ['meta', { name: 'theme-color', content: '#3B9B6A' }]
  ],
  themeConfig: {
    logo: '/llama.jpg',
    siteTitle: 'LlamaCraft Stats & Wiki',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'What Enchants Go Where', link: '/enchants/gear-matrix' },
      { text: 'Server Specs', link: '/stats/server' },
      { text: 'Loot & Economy', link: '/stats/economy' },
      { text: 'Commands', link: '/info/commands' },
      { text: 'How to Join', link: '/info/how-to-join' }
    ],

    sidebar: [
      {
        text: 'Enchantment Compendium',
        items: [
          { text: 'What Enchants Go Where (Gear Matrix)', link: '/enchants/gear-matrix' }
        ]
      },
      {
        text: 'Server Statistics & Infrastructure',
        items: [
          { text: 'Hardware, Ports & Specs', link: '/stats/server' },
          { text: 'Fishing Probabilities & Economy', link: '/stats/economy' }
        ]
      },
      {
        text: 'General Server Information',
        items: [
          { text: 'Master Commands Reference', link: '/info/commands' },
          { text: 'How to Join (Java, Bedrock, Console)', link: '/info/how-to-join' },
          { text: 'Land Claims & Siege Mechanics', link: '/info/claims-siege' },
          { text: 'Proximity Voice Chat Guide', link: '/info/voice-chat' },
          { text: 'Server Rules & Code of Conduct', link: '/info/rules' },
          { text: 'Frequently Asked Questions', link: '/info/faq' }
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
      message: 'Official LlamaCraft Server Intelligence & Player Manual.',
      copyright: 'Copyright © 2026 LlamaCraft'
    }
  }
})
