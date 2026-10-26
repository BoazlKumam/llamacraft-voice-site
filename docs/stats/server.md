# Server Statistics & Infrastructure

Complete technical breakdown of the LlamaCraft server architecture, hardware specifications, performance benchmarks, and network configuration.

---

## Technical Specifications

| Metric | Specification | Notes |
| :--- | :--- | :--- |
| **Server Engine** | Paper 1.21.x (Build 26.3) | Optimized Spigot fork with asynchronous chunk loading |
| **Target Tick Rate** | 20.0 TPS | Monitored with automated spark profiler |
| **Average MSPT** | < 18.0 ms per tick | Retains 32ms headroom below the 50ms tick threshold |
| **Host Operating System** | Linux (Ubuntu Server) | Dedicated local hardware cluster |
| **Process Supervisor** | Crafty Controller 4 | Auto-watchdog with crash detection & scheduled backups |
| **Total Dimensions** | 6 Active Dimensions | Overworld, Nether, End, Medieval Hub, Siyon, SurvSpawn |
| **Active Plugins** | 60+ Bukkit Plugins | Modular integration with zero unvetted vibe-code scripts |

---

## Network Endpoints & Ports

| Service | Protocol | Port | Description |
| :--- | :--- | :--- | :--- |
| **Java Edition** | TCP | `25565` | Standard Minecraft multiplayer connection |
| **Bedrock Edition** | UDP | `19132` | Geyser & Floodgate cross-play gateway |
| **Simple Voice Chat** | UDP | `24454` | Dedicated 3D spatial audio socket (Opus codec) |
| **BlueMap 3D Web Map** | HTTP | `8100` | Full 3D browser map showing live players and claims |
| **WAN Tunnel** | TCP/UDP | `9256` | Playit.gg egress routing for players outside home LAN |

---

## World Dimensions & Boundaries

| World Name | Dimension Type | World Border | Claim Rules |
| :--- | :--- | :--- | :--- |
| `world` | Overworld | 30,000 x 30,000 blocks | Full GriefPrevention claims & active siege windows |
| `the_nether` | Nether | 10,000 x 10,000 blocks | Claims enabled, full mob spawning, ceiling accessible |
| `the_end` | The End | 15,000 x 15,000 blocks | Outer islands open, Elytra looting active |
| `medievallobby` | Custom (Hub) | 500 x 500 blocks | Admin claim protected, non-PVP spawn sanctuary |
| `survspawn` | Survival Hub | 1,000 x 1,000 blocks | Community shop bazaar, enchanting altars, tutorial zone |
| `siyonocean` | Ocean World | Restricted | Private sanctuary world |

---

## Mob Spawner & Boss Drop Modifiers

SmartSpawner guarantees high-tier drops from legendary boss mobs:
- **Warden**: 100% guaranteed drop table including specialized catalysts and rare relic fragments.
- **Evoker**: 100% Totem of Undying drop rate with guaranteed emerald currency yield.
- **Wither**: Nether star drop guaranteed with custom XP multiplier.
- **Ender Dragon**: Respawnable via standard End Crystal placement on the bedrock portal frame.
