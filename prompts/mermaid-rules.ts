/**
 * Mermaid 图表规则
 * 
 * 构建 Mermaid 图表的使用规则和格式要求
 * 遵循 "Mermaid Safe Mode" 理念，优先保证稳健性而非美观性
 */

import type { SupportedLanguage } from './language-config';

/**
 * 构建 Mermaid 规则段
 */
export function buildMermaidSection(language: SupportedLanguage): string {
	return `# 📋 Mermaid Generation Rules (Strict Comment-First Protocol)

**GOAL:** Generate crash-proof Mermaid code by enforcing a "Think Before You Draw" strategy.

**1. THE "COMMENT-FIRST" PROTOCOL (MANDATORY):**
Mermaid does not allow editing text once written. To prevent bracket mismatches (e.g., \`["...?"}\`), you must follow this 2-step sequence for **EVERY** node:

*   **STEP A: Classify & Comment**
    *   Analyze the text content.
    *   If it contains a **Question Mark (?)**: Write \`%% Type: Decision {}\`
    *   If it is a **Statement/Action**: Write \`%% Type: Action []\`
*   **STEP B: Define Node**
    *   Look at your comment from Step A.
    *   If \`Decision {}\`: You **MUST** use Curly Brackets \`ID{"Text?"}\`.
    *   If \`Action []\`: You **MUST** use Square Brackets \`ID["Text"]\`.

**2. SYNTAX CONSTRAINTS:**
*   **Layout:** Always start with \`graph TD\`.
*   **Node IDs:** Use strict ASCII only (English letters, numbers, underscores). NO spaces or special symbols in IDs (e.g., use \`Step_1\`, not \`Step 1\`).
*   **Sanitization:**
    *   Replace double quotes \`"\` inside labels with single quotes \`'\`.
    *   Replace \`<\` with \`&lt;\` and \`>\` with \`&gt;\`.

**3. ONE-SHOT EXAMPLE (Follow this structure exactly):**

\`\`\`mermaid
graph TD
    %% Type: Action []
    Start["Start System"] --> Init

    %% Type: Action []
    Init["Load Configuration"] --> CheckConfig

    %% Type: Decision {}
    %% (Text has '?', so I MUST use {})
    CheckConfig{"Config Valid?"}

    CheckConfig -->|"Yes"| Run
    CheckConfig -->|"No"| LogError

    %% Type: Action []
    Run["Execute Core Process"] --> CheckTemp

    %% Type: Decision {}
    %% (Text has '?', so I MUST use {})
    CheckTemp{"Temp > 50°C?"}
    
    CheckTemp -->|"Yes"| Shutdown["Emergency Shutdown"]
    CheckTemp -->|"No"| Finish["Finish"]
\`\`\`

**🚫 FATAL MISTAKES TO AVOID:**
*   Never write a node without the \`%% Type: ...\` comment above it.
*   Never use \`[]\` if the text contains \`?\`.
*   Never use \`{}\` if the text does not contain \`?\`.
`;
}
