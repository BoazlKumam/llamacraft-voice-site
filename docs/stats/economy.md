# Economy, Loot & Fishing Probabilities

Statistical breakdown of LlamaCraft's dynamic fishing distribution, Sealed Tome drop rates, and player market economy.

---

## Sealed Tome Drop Rates (Custom Enchants via Fishing)

Custom enchantments on LlamaCraft are discovered dynamically by fishing up **Sealed Tomes** via EvenMoreFish integration. Players right-click a tome to unlock a random enchantment from that rarity tier.

| Tome Tier | Weight | Catch Probability | Avg Catches Per Tome | Global Broadcast |
| :--- | :--- | :--- | :--- | :--- |
| **Enchanted Tome (Uncommon)** | `60` | `~4.66%` | 1 in every 21.5 catches | No |
| **Arcane Tome (Rare)** | `30` | `~2.33%` | 1 in every 43.0 catches | No |
| **Relic Tome (Mythic)** | `8` | `~0.62%` | 1 in every 161.3 catches | **Yes (Global Alert)** |

### Fishing Pool Baseline Weights
Fish weights are calibrated on a 10x scale to prevent inventory flooding while maintaining rewarding progression:
- **Common Tier**: Weight `1,000`
- **Rare Tier**: Weight `100`
- **Junk Tier**: Weight `50`
- **Epic Tier**: Weight `30`
- **Legendary Tier**: Weight `10`

---

## Currency Scaling & Denominations

The LlamaCraft economy scales dynamically across four primary denomination tiers with built-in shorthand formatting:

| Notation | Suffix | Value Range | Common Sources |
| :--- | :--- | :--- | :--- |
| **Coins (K)** | `k` | `$1,000 - $999,999` | Starter quests, basic crop farming, mob bounty |
| **Millions (M)** | `m` | `$1,000,000 - $999,999,999` | Rare ore mining, enchanted gear trades, fish tournaments |
| **Billions (B)** | `b` | `$1,000,000,000 - $999,999,999,999` | Clan territory monopolies, automated spawner farms |
| **Trillions (T)** | `t` | `$1,000,000,000,000+` | Top clan treasuries and server market titans |

---

## Market Tax & Anti-Inflation Rules
- **Player-to-Player `/pay`**: Zero transaction tax for personal transfers between friends.
- **Chest Shop Listings**: Fixed 2% transaction fee deposited into the community server chest to curb hyperinflation.
- **Auction House (`/ah`)**: 48-hour expiration on unsold goods with automatic inventory reclamation.
