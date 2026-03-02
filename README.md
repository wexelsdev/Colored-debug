# <img src="assets/icon.png" width="40" height="40"> Colored debug 🎨

<p align="left">
  <a href="https://marketplace.visualstudio.com/items?itemName=wexelsdev.colored-debug">
    <img src="https://img.shields.io/visual-studio-marketplace/v/wexelsdev.colored-debug?style=for-the-badge&label=Marketplace&logo=visual-studio-code&color=0078d7" alt="VS Marketplace Version">
  </a>

  <a href="https://open-vsx.org/extension/wexelsdev/colored-debug">
    <img src="https://img.shields.io/open-vsx/v/wexelsdev/colored-debug?style=for-the-badge&label=Open%20VSX&logo=visual-studio-code&logoColor=white&color=purple" alt="Open VSX Version">
  </a>

  <a href="https://github.com/wexelsdev/Colored-debug/releases">
    <img src="https://img.shields.io/github/v/release/wexelsdev/Colored-debug?style=for-the-badge&label=GitHub%20VSIX&logo=github&color=orange" alt="GitHub Release Version">
  </a>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Colored debug** is a lightweight VS Code extension that repairs broken ANSI color sequences in the Debug Console. 

If your debugger outputs raw escape codes like `e[90m` or `\e[32m` instead of colored text, this extension will intercept and fix them on the fly.

## 🚀 Features
- **Automatic Repair:** Converts literal `e[` or `\e[` sequences into real ANSI Escape characters.
- **Zero Configuration:** Works out of the box for all debuggers (Node.js, Python, C++, Go, etc.).
- **Performance:** Minimal footprint; only processes active debug output strings.
- **Universal:** Compatible with official VS Code, VSCodium, and custom forks.

## 📸 How it works
| Before | After |
| :--- | :--- |
| ![Before](https://github.com/wexelsdev/Colored-debug/blob/main/assets/before.png?raw=true) | ![After](https://github.com/wexelsdev/Colored-debug/blob/main/assets/after.png?raw=true) |

## 📦 Installation
1. Open VS Code / VSCodium.
2. Go to **Extensions**.
3. Search for `Colored debug`.
4. Click **Install**.

## 🛠 Manual Installation
If you prefer to install the `.vsix` manually:
1. Download the latest `.vsix` from the [Releases](https://github.com/wexelsdev/Colored-debug/releases) page.
2. In VS Code, run the command `Extensions: Install from VSIX...`.

## 🤝 Contributing
Issues and pull requests are welcome! If you encounter a specific escape sequence that isn't being caught, please open an issue with the raw log output.

---
Created with ❤️ for the developer community.
