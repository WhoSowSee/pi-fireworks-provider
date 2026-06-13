# pi-fireworks-provider

Pi package: **Fireworks AI provider** with 10 open-source models for pi coding agent.

Up-to-date model list (June 2026): DeepSeek V4 Pro/Flash, Kimi K2.6/2.7 Code, Qwen3.6/3.7 Plus, MiniMax M2.7/M3, GLM 5.1, GPT-OSS 120B.

🇷🇺 [Русская версия](README.ru.md)

## Models

| Model | Context | Vision | Notes |
|-------|---------|--------|-------|
| DeepSeek V4 Pro | 1M | ❌ | Top-tier reasoning |
| DeepSeek V4 Flash | 1M | ❌ | Fast, cheap ($0.14/M) |
| Kimi K2.6 | 256K | ✅ | Agents & tool use |
| Kimi K2.7 Code | 256K | ✅ | New — code specialized |
| Qwen3.6 Plus | 256K | ✅ | Vision & summarization |
| Qwen3.7 Plus | 256K | ✅ | New — exclusive on Fireworks |
| MiniMax M2.7 | 196K | ❌ | Fast classification |
| MiniMax M3 | 512K | ✅ | New — 512K context |
| GLM 5.1 | 200K | ❌ | General reasoning |
| GPT-OSS 120B | 128K | ❌ | OpenAI's open model |

## Install

```bash
# 1. Fireworks API key
export FIREWORKS_API_KEY=fw_...

# 2. Install the package
pi install git:github.com/WhoSowSee/pi-fireworks-provider

# 3. Reload extensions
# In pi: /reload
```

## Usage

Select any model via `/model`:

```
/model DeepSeek V4 Flash
/model Kimi K2.6
```

Or set as default in your config.

## Requirements

- Pi 0.78+
- Fireworks API key ([fireworks.ai](https://fireworks.ai))

## Structure

```
pi-fireworks-provider/
├── package.json
├── README.md
├── README.ru.md
└── extensions/
    └── fireworks-provider.ts   # Registers Fireworks provider with 10 models
```
