# EnhanceIn 

EnhanceIn is a Chrome extension that enhances your LinkedIn post-creation experience by directly formatting text with bold, italic, and list styles within the compose screen.  

## Features  
- **Text Styling**: Apply bold, italic, and list formatting to selected text.  
- **Keyboard Shortcuts**: Use `Ctrl+B` for bold, `Ctrl+I` for italic, `Ctrl+U` for numbered list, and `Ctrl+Y` for bullet list.  
- **Context-Specific Activation**: The extension activates only on LinkedIn post creation pages.
  
![Copy of ExtensionDemoImage2 0](https://github.com/user-attachments/assets/a702dbfa-2b00-4aa3-a9a7-734db1baf323)

## Demo Video

https://github.com/user-attachments/assets/98aa98a2-6389-457e-bc6f-e6b94a313df8


## Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/ankitsingh2105/Linkedin-Editor.git
     
   cd linkedin-editor  

2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Do an `npm run build` command to create a dist folder.
5. Click **Load unpacked** and select the `dist` folder.  
6. The extension will now appear in your Chrome toolbar.  

## Usage  
1. Navigate to a LinkedIn post page.  
2. Select the text you want to format.  
3. Use the following keyboard shortcuts to apply text styling:  
   - `Ctrl+B` for bold  
   - `Ctrl+I` for italic  
   - `Ctrl+Q` for bullet list   
   - `Ctrl+M` for numbered list  



## Keyboard Shortcuts  
| Shortcut | Action          |  
|----------|-----------------|  
| `Ctrl+B` | Apply Bold       |  
| `Ctrl+I` | Apply Italic     |  
| `Ctrl+Q` | Apply  bullet list  |  
| `Ctrl+M` | Apply  numbered list  |  


## File Structure  
```plaintext
linkedin-editor/
│
|-- assets
│── icon-16.png   (16x16 icon for the extension)  
│── icon-48.png   (48x48 icon for the extension)  
│── icon-128.png  (128x128 icon for the extension)  
├── manifest.json      (Configuration file for the Chrome extension)  
├── contentScript.js   (Script to handle text styling on specific pages)  
├── index.html         (Popup UI for the extension)  
└── README.md          (Documentation for the repository)

```

## Developer
- **Ankit Singh Chauhan:** Visit [ankitsinghchauhan.in](https://ankitsinghchauhan.in) for all projects I have made. 
