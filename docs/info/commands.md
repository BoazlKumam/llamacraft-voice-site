# Master Commands Reference

Quick reference of essential player commands available on LlamaCraft.

---

## 1. Navigation & Teleportation

| Command | Description | Notes |
| :--- | :--- | :--- |
| `/menu` | Opens the master interactive server GUI menu | Bedrock & Java compatible |
| `/spawn` | Teleports to the survival hub spawn | 3-second combat warmup |
| `/tpa <player>` | Sends a teleport request to another player | Expires after 60 seconds |
| `/tpaccept` | Accepts the most recent teleport request | Cancelled if moving during warmup |
| `/tpdeny` | Denies a pending teleport request | Silent rejection |
| `/sethome [name]`| Sets a private teleport waypoint at your location | Default limit: 3 homes |
| `/home [name]` | Teleports to your saved waypoint | Cancelled on incoming damage |
| `/back` | Returns to your previous death or teleport point | 5-minute cooldown |
| `/rtp` | Randomly teleports to safe wilderness coordinates | Minimum 1,500 blocks from spawn |

---

## 2. Land Protection (GriefPrevention)

| Command | Description | Notes |
| :--- | :--- | :--- |
| `/claim` | Creates a new claim box (requires golden shovel) | Set two opposite corners |
| `/trust <player>` | Grants full build and chest access to a player | Works across whole claim |
| `/containertrust <player>` | Grants chest, hopper, furnace, and inventory access | Cannot break or place blocks |
| `/accesstrust <player>` | Grants button, lever, and door access | For public base visitors |
| `/untrust <player>` | Revokes all permissions from a player | Immediate effect |
| `/abandonclaim` | Deletes the claim you are currently standing inside | Refunds claim blocks |
| `/claimslist` | Displays all your active claims and remaining claim blocks | Lists coordinates |

---

## 3. Economy & Player Markets

| Command | Description | Notes |
| :--- | :--- | :--- |
| `/bal` or `/balance` | Displays your current wallet balance | Formats with k/m/b suffixes |
| `/pay <player> <amount>` | Transfers funds directly to another player | Supports shorthand (`/pay Steve 50k`) |
| `/shop` | Opens the server item marketplace GUI | Buy and sell basic commodities |
| `/ah` | Opens the global player auction house | Search by enchant, tool, or player |
| `/ah sell <price>` | Lists the item in your main hand on the auction house | 48-hour expiration |

---

## 4. Voice Chat & Combat

| Command | Description | Notes |
| :--- | :--- | :--- |
| `/voice` or `/audio` | Generates your private proximity audio web link | For Bedrock & mobile players |
| `/duel <player>` | Challenges a player to an arena duel | Preserves survival inventory |
| `/duel accept <player>`| Accepts an arena duel invitation | Teleports to duel stadium |
