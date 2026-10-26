# Proximity Voice Chat Setup

LlamaCraft supports high-performance 3D spatial directional proximity voice chat. Sound originates from player models in real-time with realistic distance roll-off, wall muffling, and environmental reverberation.

---

## How It Works

Proximity voice uses a dedicated audio socket running alongside the game server. When players move, in-game coordinate packets update the audio engine to adjust volume and stereo panning.

- **Proximity Distance**: Active within 24 blocks.
- **Directional Panning**: Left and right ear stereo balancing based on player orientation.
- **Sneak Whisper**: Decreases broadcast range to 4 blocks for private strategy.
- **Sprint Shout**: Expands broadcast range to 48 blocks across large battlefields.

---

## Setup by Platform

### Java Edition (Modded Client)
If you play on Java, you can install the **Simple Voice Chat** client mod for the most seamless native experience:
1. Ensure you have **Fabric** or **Forge** installed for Minecraft 1.21.
2. Download the matching **Simple Voice Chat** mod jar from Modrinth or CurseForge.
3. Place the `.jar` into your `.minecraft/mods` folder.
4. Join the server and press `V` to open your voice settings, test your microphone, and set Push-to-Talk or Voice Activation.

---

### Bedrock (Windows PC, iOS, Android, Consoles)
Bedrock players do **not** need to install any modified Minecraft clients. 

#### Option 1: Web Link (Zero Downloads)
1. Join the server in Minecraft.
2. Type `/voice` or `/audio` in chat.
3. Click the secure link sent to you in chat.
4. Open the link in Chrome, Safari, or Edge on your phone or computer.
5. Allow microphone access when prompted. The web client automatically links to your player session.

#### Option 2: Bedrock Voice Chat Companion App
1. Download the free companion app for Windows, iOS, or Android.
2. Open the app and enter the server IP: `164.152.106.210`.
3. The app authenticates your Gamertag and routes low-latency Opus audio in the background while you play.

---

## Recommended Audio Settings

- **Microphone Input**: Select your headset microphone, not your built-in monitor mic.
- **Activation Mode**: Push-to-Talk or Voice Activity with noise suppression.
- **Volume Normalization**: Enable AGC (Automatic Gain Control) to keep party levels balanced.
