# pi-fireworks-provider

Pi-пакет: **провайдер Fireworks AI** с 10 опенсорсными моделями для pi coding agent.

Актуальный список моделей (июнь 2026): DeepSeek V4 Pro/Flash, Kimi K2.6/2.7 Code, Qwen3.6/3.7 Plus, MiniMax M2.7/M3, GLM 5.1, GPT-OSS 120B.

🇬🇧 [English version](README.md)

## Модели

| Модель | Контекст | Vision | Примечания |
|--------|----------|--------|------------|
| DeepSeek V4 Pro | 1M | ❌ | Топ для reasoning |
| DeepSeek V4 Flash | 1M | ❌ | Быстрый, дёшево ($0.14/M) |
| Kimi K2.6 | 256K | ✅ | Агенты и tool use |
| Kimi K2.7 Code | 256K | ✅ | Новинка — заточен под код |
| Qwen3.6 Plus | 256K | ✅ | Vision и саммаризация |
| Qwen3.7 Plus | 256K | ✅ | Новинка — эксклюзив Fireworks |
| MiniMax M2.7 | 196K | ❌ | Быстрая классификация |
| MiniMax M3 | 512K | ✅ | Новинка — 512K контекст |
| GLM 5.1 | 200K | ❌ | Общий reasoning |
| GPT-OSS 120B | 128K | ❌ | Опенсорс-модель OpenAI |

## Установка

```bash
# 1. API-ключ Fireworks
export FIREWORKS_API_KEY=fw_...

# 2. Установить пакет
pi install git:github.com/WhoSowSee/pi-fireworks-provider

# 3. Перезагрузить расширения
# В pi: /reload
```

## Использование

Выбор модели через `/model`:

```
/model DeepSeek V4 Flash
/model Kimi K2.6
```

Или задать как модель по умолчанию в конфиге.

## Требования

- Pi 0.78+
- Fireworks API ключ ([fireworks.ai](https://fireworks.ai))

## Структура

```
pi-fireworks-provider/
├── package.json
├── README.md
├── README.ru.md
└── extensions/
    └── fireworks-provider.ts   # Регистрирует провайдер Fireworks с 10 моделями
```
