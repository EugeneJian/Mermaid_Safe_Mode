# Prompts Directory

This directory contains all prompt-related files for implementing Mermaid Safe Mode.

## 📁 File Guide

### 🚀 Production Use (Copy-Paste Ready)

#### `system-prompt.txt`
**Purpose**: Direct system prompt for LLM applications  
**Usage**: Copy the entire content into your LLM's system prompt field  
**When to use**: 
- Production deployments
- Quick integration
- When you need the minimal, battle-tested version

**Format**: Plain text, optimized for token efficiency

---

### 📚 Learning & Reference

#### `enhanced-cfp-prompt.md`
**Purpose**: Detailed explanation of the Enhanced Comment-First Protocol  
**Usage**: Read to understand the theory and implementation details  
**When to use**:
- Learning how Safe Mode works
- Customizing the protocol for your use case
- Understanding edge cases and best practices

**Format**: Markdown with examples, code snippets, and explanations

---

### 🔧 Advanced: Complex Mermaid Rules (Tier 2)

#### `mermaid-rules.ts`
**Purpose**: Comprehensive TypeScript implementation for complex diagram generation  
**Usage**: For Tier 2 scenarios (high-fidelity, complex diagrams)  
**When to use**:
- Complex workflows requiring Reasoning models
- Agentic orchestration pipelines
- When you need full Mermaid syntax coverage

**Note**: This is for **advanced use cases** that go beyond the simple Turbo/Safe Mode protocol.

---

## 🎯 Quick Start

**For most users (Tier 1 - Turbo/Safe Mode)**:
1. Copy `system-prompt.txt` into your LLM system prompt
2. Done! Your diagrams will now use Safe Mode

**For learning**:
1. Read `enhanced-cfp-prompt.md` to understand the theory
2. Review examples in `../examples/` directory

**For complex scenarios (Tier 2)**:
1. Use `mermaid-rules.ts` with Reasoning models
2. Implement agentic validation loops
3. See main README for Tier 2 architecture

---

## 📖 Related Documentation

- **Main Protocol**: See [../README.md](../README.md)
- **Theory Deep Dive**: See [../docs/Application-Note-Mitigating-Attention-Drift.md](../docs/Application-Note-Mitigating-Attention-Drift.md)
- **Examples**: See [../examples/](../examples/)

---

## ❓ FAQ

**Q: Which file should I use?**  
A: For 95% of use cases, use `system-prompt.txt`. It's production-ready and battle-tested.

**Q: What's the difference between system-prompt.txt and enhanced-cfp-prompt.md?**  
A: `system-prompt.txt` is the executable prompt. `enhanced-cfp-prompt.md` is the documentation explaining why it works.

**Q: When do I need mermaid-rules.ts?**  
A: Only when you need complex diagrams (Tier 2) with Reasoning models. For Turbo models, `system-prompt.txt` is sufficient.

**Q: What about mermaid-rules.ts?**  
A: Use it only for complex scenarios (Tier 2) with Reasoning models. For most use cases, `system-prompt.txt` is sufficient.

