# LinkedIn Editor  

LinkedIn Editor is a Chrome extension that enhances your LinkedIn and X.com (formerly Twitter) post creation experience by allowing you to format text with bold, italic, and underline styles directly within the compose screen.  

## Features  
- **Text Styling**: Apply bold, italic, and underline formatting to selected text.  
- **Keyboard Shortcuts**: Use `Ctrl+B` for bold, `Ctrl+I` for italic, and `Ctrl+U` for underline.  
- **Context-Specific Activation**: The extension activates only on LinkedIn post creation pages (`/overlay/create-post/`) and X.com compose pages.  
- **Unicode Support**: Formats text into Unicode-compatible styles to ensure compatibility across platforms.  

## Screenshots  
![Example Screenshot](path-to-your-screenshot.png)  
_Add relevant screenshots or gifs here._  

## Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/<your-username>/linkedin-editor.git  
   cd linkedin-editor  

2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer Mode** by toggling the switch in the top-right corner.  
4. Click **Load unpacked** and select the folder containing the extension files.  
5. The extension will now appear in your Chrome toolbar.  

## Usage  
1. Navigate to a LinkedIn post creation page or an X.com compose page.  
2. Highlight the text you want to format.  
3. Use the following keyboard shortcuts to apply text styling:  
   - `Ctrl+B` for bold  
   - `Ctrl+I` for italic  
   - `Ctrl+U` for underline  
4. Styled text is converted into Unicode-compatible characters to maintain the formatting across platforms.  

## Keyboard Shortcuts  
| Shortcut | Action          |  
|----------|-----------------|  
| `Ctrl+B` | Apply Bold       |  
| `Ctrl+I` | Apply Italic     |  
| `Ctrl+U` | Apply Underline  |  

## File Structure  
```plaintext
linkedin-editor/
│
│── icon-16.png   (16x16 icon for the extension)  
│── icon-48.png   (48x48 icon for the extension)  
│── icon-128.png  (128x128 icon for the extension)  
├── manifest.json      (Configuration file for the Chrome extension)  
├── contentScript.js   (Script to handle text styling on specific pages)  
├── popup.html         (Popup UI for the extension)  
└── README.md          (Documentation for the repository)  
