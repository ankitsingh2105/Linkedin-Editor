chat

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

console.log("LinkedIn Editor Loaded");

const underlineMap = {
    'a': 'a\u0332', 'b': 'b\u0332', 'c': 'c\u0332', 'd': 'd\u0332', 'e': 'e\u0332', 'f': 'f\u0332', 'g': 'g\u0332', 'h': 'h\u0332', 'i': 'i\u0332',
    'j': 'j\u0332', 'k': 'k\u0332', 'l': 'l\u0332', 'm': 'm\u0332', 'n': 'n\u0332', 'o': 'o\u0332', 'p': 'p\u0332', 'q': 'q\u0332', 'r': 'r\u0332', 's': 's\u0332',
    't': 't\u0332', 'u': 'u\u0332', 'v': 'v\u0332', 'w': 'w\u0332', 'x': 'x\u0332', 'y': 'y\u0332', 'z': 'z\u0332',
    'A': 'A\u0332', 'B': 'B\u0332', 'C': 'C\u0332', 'D': 'D\u0332', 'E': 'E\u0332', 'F': 'F\u0332', 'G': 'G\u0332', 'H': 'H\u0332', 'I': 'I\u0332',
    'J': 'J\u0332', 'K': 'K\u0332', 'L': 'L\u0332', 'M': 'M\u0332', 'N': 'N\u0332', 'O': 'O\u0332', 'P': 'P\u0332', 'Q': 'Q\u0332', 'R': 'R\u0332', 'S': 'S\u0332',
    'T': 'T\u0332', 'U': 'U\u0332', 'V': 'V\u0332', 'W': 'W\u0332', 'X': 'X\u0332', 'Y': 'Y\u0332', 'Z': 'Z\u0332',
    '0': '0\u0332', '1': '1\u0332', '2': '2\u0332', '3': '3\u0332', '4': '4\u0332', '5': '5\u0332', '6': '6\u0332', '7': '7\u0332', '8': '8\u0332', '9': '9\u0332',
    '!': '!̲', '@': '@̲', '#': '#̲', '$': '$̲', '%': '%̲', '^': '^̲', '&': '&̲', '*': '*̲', '(': '(̲', ')': ')̲',
    '-': '-̲', '=': '=̲', '+': '+̲', '[': '[̲', ']': ']̲', '{': '{̲', '}': '}̲', '\\': '\\̲', '|': '|̲', ';': ';̲',
    ':': ':̲', '"': '"̲', '\'': '\'̲', ',': ',̲', '.': '.̲', '/': '/̲', '<': '<̲', '>': '>̲'
};



function mapToBoldUnicode(text) {
    return text.split('').map(char => boldMap[char] || char).join('');
}

function mapToItalicUnicode(text) {
    return text.split('').map(char => italicMap[char] || char).join('');
}

function applyBulletList(text) {
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

    const bulletList = items.map((item, index) => `${index+1}. ${item}`).join("\n");

    range.deleteContents();
    range.insertNode(document.createTextNode(bulletList));

}


function applyBold() {
    const selection = window.getSelection();
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
    const italicText = underlineMap(selectedText);

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

// https://www.linkedin.com/in/ankitchauhan21/overlay/create-post/


document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') {
        console.log("Ctrl + B");
        applyBold();
    }
    if (event.ctrlKey && event.key === 'i') {
        console.log("Ctrl + i");
        applyItalic();
    }
    if (event.ctrlKey && event.key === 'y') {
        console.log("Ctrl + y");
        applyBulletList();
    }

    if (event.ctrlKey && event.key === 'm') {
        console.log("Ctrl + m");
        applyNumberList();
    }

    if (event.altKey && event.key === 'u') {
        console.log("Ctrl + u");
        applyUnderline();
    }
});
