# AMV-LlamaCpp

> **마이그레이션 안내**: 이 패키지는 `termux-llamacpp`에서 `amv-llamacpp`로 이름이 바뀌었습니다. 기존 `termux-llamacpp` 배포본(PyPI/npm)은 호환을 위해 당분간 유지되나 deprecated 상태이며 더 이상 갱신되지 않습니다. `pip install amv-llamacpp` / `npm install amv-llamacpp`로 전환하십시오.
>
> Android **Termux 환경** 또는 **안드로이드 Linux 커널(루팅 없이 Linux 환경이 구동되는 모든 디바이스)** 에서 동작합니다 — Termux 전용이 아닙니다.

[![PyPI](https://img.shields.io/pypi/v/amv-llamacpp.svg?style=flat-square&color=0369a1)](https://pypi.org/project/amv-llamacpp/)
[![Python](https://img.shields.io/pypi/pyversions/amv-llamacpp.svg?style=flat-square)](https://pypi.org/project/amv-llamacpp/)
[![npm](https://img.shields.io/npm/v/amv-llamacpp.svg?style=flat-square&color=b91c1c)](https://www.npmjs.com/package/amv-llamacpp)
[![npm downloads](https://img.shields.io/npm/dm/amv-llamacpp.svg?style=flat-square&color=b91c1c)](https://www.npmjs.com/package/amv-llamacpp)
[![License](https://img.shields.io/badge/License-Apache_2.0-004499.svg?style=flat-square)](https://github.com/uno-km/amv-llamacpp)

> **디바이스 리소스를 활용한 Android Termux ARM64 전용 GGUF LLM 런타임, 모델 매니저 및 OpenAI 호환 REST/SSE 서버**  
> *Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI Server for Android ARM64*

---

## Architecture & Overview

검증된 Android Bionic ARM64 네이티브 바이너리와 필수 공유 라이브러리, 디바이스 리소스 최적화 연동을 통해 제로 컴파일 로컬 실행과 안정적인 OpenAI 호환 REST/SSE 스트리밍 서버를 제공합니다.

Ships verified Android ARM64 native binaries with bundled shared libraries and device resource optimization, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE server.

---

## Installation & Quickstart

### Python (PyPI)
```bash
pip install amv-llamacpp
```
```python
from termux_llamacpp import LlamaRuntime, RuntimeConfig

# 1. Initialize Runtime with Vulkan GPU Acceleration
config = RuntimeConfig(
    model_path="models/Llama-3.2-1B-Instruct-Q4_K_M.gguf",
    device="auto",
    threads=4,
    context_size=2048
)
runtime = LlamaRuntime(config)

# 2. Synchronous or Streaming Text Generation
output = runtime.generate("한국의 사계절 중 가을의 매력에 대해 설명해줘.", max_tokens=256)
print(output.text)
print(f"Speed: {output.metrics.eval_tokens_per_sec:.2f} t/s (Prompt: {output.metrics.prompt_tokens_per_sec:.2f} t/s)")
```

### Node.js / TypeScript (npm)
```bash
npm install amv-llamacpp
```
```typescript
import { LlamaRuntime } from "amv-llamacpp";

// 1. Initialize ESM Runtime
const runtime = new LlamaRuntime({
  modelPath: "models/Llama-3.2-1B-Instruct-Q4_K_M.gguf",
  device: "auto",
  threads: 4
});

// 2. Generate Completion
const result = await runtime.generate({
  prompt: "Explain the architectural philosophy of edge computing.",
  maxTokens: 256
});
console.log("Response:", result.text);
console.log(`Generation Speed: ${result.metrics.evalTokensPerSec} t/s`);
```

---

## Official Documentation & Benchmarks
- [Official Architecture & API Reference](https://uno-km.vercel.app/lib/llamacpp/)
- [Ecosystem Metrics & Registry Stats](https://uno-km.vercel.app/foundation/metrics)
- [AMEVA Open-Source Foundation Portal](https://uno-km.vercel.app/foundation/index.html)

---

## License
Licensed under the Apache-2.0 License. Copyright (c) 2026 Eunho Kim ([@uno-km](https://github.com/uno-km)).
