
const italicMap = {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖',
    'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠',
    't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
    'A': '𝒜', 'B': '𝒝', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ',
    'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮',
    'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
    '!': '‼', '"': '“', '#': '＃', '$': '＄', '%': '％', '&': '＆', "'": '＇', '(': '（', ')': '）', '*': '＊',
    '+': '＋', ',': '，', '-': '－', '.': '．', '/': '／', ':': '：', ';': '；', '<': '＜', '=': '＝', '>': '＞',
    '?': '？', '@': '＠', '[': '［', '\\': '＼', ']': '］', '^': '＾', '_': '＿', '`': '｀', '{': '｛', '|': '｜',
    '}': '｝', '~': '～', '€': '€', '£': '£', '¥': '¥', '¢': '¢', '©': '©', '®': '®', '™': '™'
};

const underlineMap = {
    'a': '𝑎̲', 'b': '𝑏̲', 'c': '𝑐̲', 'd': '𝑑̲', 'e': '𝑒̲', 'f': '𝑓̲', 'g': '𝑔̲', 'h': 'ℎ̲', 'i': '𝑖̲',
    'j': '𝐽̲', 'k': '𝑘̲', 'l': '𝑙̲', 'm': '𝑚̲', 'n': '𝑛̲', 'o': '𝑜̲', 'p': '𝑝̲', 'q': '𝑞̲', 'r': '𝑟̲', 's': '𝑠̲',
    't': '𝑡̲', 'u': '𝑢̲', 'v': '𝑣̲', 'w': '𝑤̲', 'x': '𝑥̲', 'y': '𝑦̲', 'z': '𝑧̲',
    'A': '𝐴̲', 'B': '𝐵̲', 'C': '𝐶̲', 'D': '𝐷̲', 'E': '𝐸̲', 'F': '𝐹̲', 'G': '𝐺̲', 'H': '𝐻̲', 'I': '𝐼̲',
    'J': '𝐽̲', 'K': '𝐾̲', 'L': '𝐿̲', 'M': '𝑀̲', 'N': '𝑁̲', 'O': '𝑂̲', 'P': '𝑃̲', 'Q': '𝑄̲', 'R': '𝑅̲', 'S': '𝑆̲',
    'T': '𝑇̲', 'U': '𝑈̲', 'V': '𝑉̲', 'W': '𝑊̲', 'X': '𝑋̲', 'Y': '𝑌̲', 'Z': '𝑍̲',
    '0': '𝟎̲', '1': '𝟏̲', '2': '𝟐̲', '3': '𝟑̲', '4': '𝟒̲', '5': '𝟓̲', '6': '𝟔̲', '7': '𝟕̲', '8': '𝟖̲', '9': '𝟗̲',
    '!': '‼̲', '@': '@̲', '#': '#̲', '$': '$̲', '%': '%̲', '^': '^̲', '&': '&̲', '*': '*̲', '(': '(̲', ')': ')̲',
    '-': '-̲', '=': '=̲', '+': '+̲', '[': '[̲', ']': ']̲', '{': '{̲', '}': '}̲', '\\': '\\̲', '|': '|̲', ';': ';̲',
    ':': ':̲', '"': '"̲', '\'': '\'̲', ',': ',̲', '.': '.̲', '/': '/̲', '<': '<̲', '>': '>̲'
};

const boldMap = {
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶',
    'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀',
    't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜',
    'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦',
    'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵',
    '!': '!', '"': '"', '#': '#', '$': '$', '%': '%', '&': '&', "'": "'", '(': '(', ')': ')', '*': '*',
    '+': '+', ',': ',', '-': '-', '.': '.', '/': '/', ':': ':', ';': ';', '<': '<', '=': '=', '>': '>',
    '?': '?', '@': '@', '[': '[', '\\': '\\', ']': ']', '^': '^', '_': '_', '`': '`', '{': '{', '|': '|',
    '}': '}', '~': '~', '€': '€', '£': '£', '¥': '¥', '¢': '¢', '©': '©', '®': '®', '™': '™'
};




function mapToBoldUnicode(text) {
    return text.split('').map(char => boldMap[char] || char).join('');
}

function mapToItalicUnicode(text) {
    return text.split('').map(char => italicMap[char] || char).join('');
}


function mapToUnderlineUnicode(text) {
    return text.split('').map(char => underlineMap[char] || char).join('');
}

function applyBulletList() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    const items = selectedText.split("\n").map(item => item.trim()).filter(item => item !== "");

    const bulletList = items.map(item => `• ${item}`).join("\n");

    range.deleteContents();
    range.insertNode(document.createTextNode(bulletList));

}

function applyNumberList() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    const items = selectedText.split("\n").map(item => item.trim()).filter(item => item !== "");

    const bulletList = items.map((item, index) => `${index + 1}. ${item}`).join("\n");

    range.deleteContents();
    range.insertNode(document.createTextNode(bulletList));

}


function applyBold() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        return; 
    }
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    const boldText = mapToBoldUnicode(selectedText);

    // todo :: Delete the selected text
    range.deleteContents();

    // todo :: Insert the bold-styled text
    const newNode = document.createTextNode(boldText);
    range.insertNode(newNode);



    // todo :: cursor moved to the end
    const newRange = document.createRange();
    newRange.setStart(newNode, newNode.length);
    newRange.setEnd(newNode, newNode.length);

    // todo :: clear the current selection
    selection.removeAllRanges();
    selection.addRange(newRange);
}


function applyItalic() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        return; 
    }
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    const italicText = mapToItalicUnicode(selectedText);

    // todo :: Delete the selected text
    range.deleteContents();

    // todo :: Insert the italic-styled text
    const newNode = document.createTextNode(italicText);
    range.insertNode(newNode);

    // todo :: cursor moved to the end
    const newRange = document.createRange();
    newRange.setStart(newNode, newNode.length);
    newRange.setEnd(newNode, newNode.length);

    // todo :: clear the current selection
    selection.removeAllRanges();
    selection.addRange(newRange);
}


function applyUnderline() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    const underlineText = mapToUnderlineUnicode(selectedText);

    // todo :: Delete the selected text
    range.deleteContents();

    // todo :: Insert the italic-styled text
    const newNode = document.createTextNode(underlineText);
    range.insertNode(newNode);

    // todo :: cursor moved to the end
    const newRange = document.createRange();
    newRange.setStart(newNode, newNode.length);
    newRange.setEnd(newNode, newNode.length);

    // todo :: clear the current selection
    selection.removeAllRanges();
    selection.addRange(newRange);
}



document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') {
        applyBold();
    }
    if (event.ctrlKey && event.key === 'i') {
        applyItalic();
    }
    if (event.ctrlKey && event.key === 'y') {
        applyBulletList();
    }
    if (event.ctrlKey && event.key === 'm') {
        applyNumberList();
    }

    // if (event.altKey && event.key === 'u') {
    //     applyUnderline();
    // }
});
