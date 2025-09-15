# VS Code & Deno Setup Guide 🚀

## 1. VS Code Extension Setup 🔌

First, install these essential extensions:
1. Code Runner
2. Prettier
3. Tokyo Night (Theme)

## 2. Deno Installation 🦕

Open PowerShell and run:
```powershell
irm https://deno.land/install.ps1 | iex
```

Verify installation:
```powershell
deno --version
```

## 3. VS Code Settings Configuration ⚙️

Open VS Code settings.json (File > Preferences > Settings > Open Settings JSON) and add/update these settings:

```json
{
  "editor.fontSize": 20,
  "editor.fontFamily": "Cascadia Code PL",
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.colorTheme": "Tokyo Night",
  "code-runner.executorMap": {
    "typescript": "C:\\Users\\melih\\.deno\\bin\\deno.exe run"
  },
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true
}
```

## Key Settings Explained 📝

- `"editor.fontSize": 20` - Sets comfortable text size
- `"editor.fontFamily": "Cascadia Code PL"` - Uses Cascadia Code font
- `"editor.formatOnSave": true` - Auto-formats code on save
- `"files.autoSave": "afterDelay"` - Auto-saves your work
- `"code-runner.executorMap"` - Configures Deno as TypeScript runner
- `"code-runner.runInTerminal": true` - Runs code in integrated terminal
- `"code-runner.saveFileBeforeRun": true` - Saves file before running

## Usage 🎯

1. Create a TypeScript file (`.ts` extension)
2. Write your code
3. Use Code Runner (play button) or `Ctrl + Alt + N` to run

## Troubleshooting 🔍

If Deno commands aren't working:
1. Verify Deno installation path: `C:\Users\[YourUsername]\.deno\bin\deno.exe`
2. Check if Code Runner extension is installed
3. Make sure settings.json is properly configured

## Note 📌

The path in `code-runner.executorMap` should match your Deno installation path. Adjust the username part if needed:
```json
"typescript": "C:\\Users\\[YourUsername]\\.deno\\bin\\deno.exe run"
```