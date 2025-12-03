# Complex Workflow Example

This example demonstrates Mermaid Safe Mode on a realistic industrial diagnostic workflow with multiple decision points and actions.

## Generated Diagram

```mermaid
graph TD
    %% Type: Stadium ([...])
    Start(["Start Diagnosis"])
    
    %% Type: Action []
    Init["Initialize Diagnostic System"]
    
    %% Type: Action []
    LoadConfig["Load Configuration"]
    
    %% Type: Decision {}
    ConfigValid{"Configuration Valid?"}
    
    %% Type: Action []
    CheckPower["Check Power Supply"]
    
    %% Type: Decision {}
    PowerOK{"Power Supply Normal?"}
    
    %% Type: Action []
    CheckTemp["Measure Temperature"]
    
    %% Type: Decision {}
    TempOK{"Temperature &lt; 50°C?"}
    
    %% Type: Action []
    CheckPressure["Measure Pressure"]
    
    %% Type: Decision {}
    PressureOK{"Pressure &gt; 100 kPa?"}
    
    %% Type: Action []
    RunTest["Execute System Test"]
    
    %% Type: Decision {}
    TestPass{"All Tests Passed?"}
    
    %% Type: Action []
    GenerateReport["Generate Diagnostic Report"]
    
    %% Type: Stadium ([...])
    End(["End Diagnosis"])
    
    Start --> Init
    Init --> LoadConfig
    LoadConfig --> ConfigValid
    ConfigValid -->|No| LoadConfig
    ConfigValid -->|Yes| CheckPower
    CheckPower --> PowerOK
    PowerOK -->|No| End
    PowerOK -->|Yes| CheckTemp
    CheckTemp --> TempOK
    TempOK -->|No| End
    TempOK -->|Yes| CheckPressure
    CheckPressure --> PressureOK
    PressureOK -->|No| End
    PressureOK -->|Yes| RunTest
    RunTest --> TestPass
    TestPass -->|No| End
    TestPass -->|Yes| GenerateReport
    GenerateReport --> End
```

## Key Features Demonstrated

1. **Multiple Decision Nodes**: All question-based nodes correctly use `{}`
2. **Start/End Nodes**: Correctly use Stadium shape `([...])`
3. **Action Nodes**: All process steps use `[]`
4. **Special Characters**: HTML entities (`&lt;`, `&gt;`) for `<` and `>`
5. **Complex Logic**: Multiple conditional branches

## Without Safe Mode (What Would Fail)

```mermaid
graph TD
    Start(["Start Diagnosis"])
    Init["Initialize Diagnostic System"]
    CheckPower["Check Power Supply"]
    PowerOK{"Power Supply Normal?"]}  ❌ BRACKET MISMATCH
```

The model would generate `["Check Power Supply"]` but close with `}` because the question mark in the next node causes attention drift.

## With Safe Mode (What Works)

Every node has an explicit comment with both type and symbols, ensuring perfect bracket matching throughout the entire diagram.

