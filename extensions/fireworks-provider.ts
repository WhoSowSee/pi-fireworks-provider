import type { ExtensionAPI, ProviderModelConfig } from "@earendil-works/pi-coding-agent";

function model(
  id: string,
  name: string,
  ctx: number,
  out: number,
  reason = false,
  vision = true,
  extras: Pick<ProviderModelConfig, "thinkingLevelMap" | "compat"> = {}
) {
  return {
    id,
    name,
    api: "openai-completions",
    provider: "fireworks",
    baseUrl: "https://api.fireworks.ai/inference/v1",
    reasoning: reason,
    input: vision ? (["text", "image"] as const) : (["text"] as const),
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: ctx,
    maxTokens: out,
    ...(extras.thinkingLevelMap ? { thinkingLevelMap: extras.thinkingLevelMap } : {}),
    ...(extras.compat ? { compat: extras.compat } : {}),
  };
}

const deepseekV4Reasoning = {
  thinkingLevelMap: {
    off: "none",
    minimal: "high",
    low: "high",
    medium: "high",
    high: "high",
    xhigh: "max",
  },
  compat: {
    supportsDeveloperRole: false,
    supportsReasoningEffort: true,
  },
};

const standardReasoning = {
  thinkingLevelMap: {
    off: "none",
    minimal: "low",
    low: "low",
    medium: "medium",
    high: "high",
    xhigh: "high",
  },
  compat: {
    supportsDeveloperRole: false,
    supportsReasoningEffort: true,
  },
};

const alwaysOnReasoning = {
  thinkingLevelMap: {
    off: null,
    minimal: "low",
    low: "low",
    medium: "medium",
    high: "high",
    xhigh: "high",
  },
  compat: {
    supportsDeveloperRole: false,
    supportsReasoningEffort: true,
  },
};

export default function (pi: ExtensionAPI) {
  pi.registerProvider("fireworks", {
    name: "Fireworks AI",
    baseUrl: "https://api.fireworks.ai/inference/v1",
    apiKey: "$FIREWORKS_API_KEY",
    api: "openai-completions",
    models: [
      // ── Top-tier (Fireworks recommended) ──
      model("accounts/fireworks/models/deepseek-v4-pro",  "DeepSeek V4 Pro",  1048576, 32768, true, false, deepseekV4Reasoning),
      model("accounts/fireworks/models/deepseek-v4-flash", "DeepSeek V4 Flash", 1048576, 32768, true, false, deepseekV4Reasoning),
      model("accounts/fireworks/models/kimi-k2p6",         "Kimi K2.6",         262144, 16384, true, true, standardReasoning),
      model("accounts/fireworks/models/glm-5p1",           "GLM 5.1",           202752, 16384, true, false, {
        thinkingLevelMap: {
          off: "none",
          minimal: "high",
          low: "high",
          medium: "high",
          high: "high",
          xhigh: "high",
        },
        compat: {
          supportsDeveloperRole: false,
          supportsReasoningEffort: true,
        },
      }),
      model("accounts/fireworks/models/glm-5p2",           "GLM 5.2",          1064960, 131072, true, false, {
        thinkingLevelMap: {
          off: "none",
          minimal: "high",
          low: "high",
          medium: "high",
          high: "high",
          xhigh: "max",
        },
        compat: {
          supportsDeveloperRole: false,
          supportsReasoningEffort: true,
        },
      }),
      model("accounts/fireworks/models/qwen3p6-plus",      "Qwen3.6 Plus",      262144, 16384, true, true, standardReasoning),
      model("accounts/fireworks/models/minimax-m2p7",      "MiniMax M2.7",      196608, 16384, true, false, alwaysOnReasoning),
      model("accounts/fireworks/models/gpt-oss-120b",      "GPT-OSS 120B",      131072, 16384, true, false, alwaysOnReasoning),
      // ── New arrivals (June 2026) ──
      model("accounts/fireworks/models/kimi-k2p7-code",    "Kimi K2.7 Code",    262144, 16384, true, false, standardReasoning),
      model("accounts/fireworks/models/qwen3p7-plus",      "Qwen3.7 Plus",      262144, 16384, true, true, standardReasoning),
      model("accounts/fireworks/models/minimax-m3",        "MiniMax M3",        512000, 16384, true, true, alwaysOnReasoning),
    ],
  });
}
