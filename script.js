
const TEXTAREA = document.createElement('textarea');
TEXTAREA.id = 'textarea';
const KEYBOARD = document.createElement('div');
KEYBOARD.id = 'keyboard';
const BUTTON = document.createElement('button');
document.body.append(TEXTAREA);
document.body.append(KEYBOARD);

class Button {
    constructor(htmlParent, keyCode, enLower, enUpper, ruLower, ruUpper) {
        this.enLower = enLower;
        this.enUpper = enUpper;

        this.htmlKey = document.createElement('div');
        this.htmlKey.className = 'k-key';
        this.htmlKey.setAttribute('data', keyCode);
        this.htmlKey.innerHTML = this.getChar('en', 'lower');
        htmlParent.append(this.htmlKey);
        
        if (keyCode === 'Backspace'|| keyCode === 'Delete' || keyCode === 'Enter' || keyCode === 'ShiftRight' ) {
            let nextLine = document.createElement('div');
            nextLine.className = 'clearfix';
            htmlParent.append(nextLine);
        }
    }

    getChar(lang, Register) {
        if (lang == 'en') {
            return Register === 'lower' ? this.enLower : this.enUpper;
        }
        else if (lang == 'ru') {
            return Register === 'upper' ? this.ruUpper :this.ruLower;
        }
           
    }

    getHtmlElement() {
        return this.htmlKey;
    }
 }

document.addEventListener('keydown', (event) => {
    TEXTAREA.focus(); 
    keyMap[event.code].getHtmlElement().classList.add('active');
    keyMap[event.code].getChar('en', 'lower');
    if (keyMap[event.code].getChar('en', 'lower') === 'Tab') {
        event.preventDefault();
        TEXTAREA.value += '    ';
    };
});

document.addEventListener('keyup', (event) => {
    keyMap[event.code].getHtmlElement().classList.remove('active');
});

function selectionDelete() {
   
}

KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target.getAttribute('data') == null) return;
    
    keyMap[event.target.getAttribute('data')].getHtmlElement().classList.add('active');
    
    if (event.target.getAttribute('data') === 'Delete') ;
    if (event.target.getAttribute('data') === 'Space') TEXTAREA.value += ' ';
    else TEXTAREA.value += event.target.outerText; 
   
});

KEYBOARD.addEventListener('mouseup', (event) => {
    if (keyMap[event.target.getAttribute('data')] == null) return;
    event.preventDefault();
    keyMap[event.target.getAttribute('data')].getHtmlElement().classList.remove('active');
});

const keyMap = {
    "Backquote" : new Button(KEYBOARD, "Backquote", '`', '`', 'ё', 'Ё'),
    "Digit1" : new Button(KEYBOARD, "Digit1", '1', '!', '1', '!'),
    "Digit2" : new Button(KEYBOARD, "Digit2", '2', '@', '2', '"'),
    "Digit3" : new Button(KEYBOARD, "Digit3", '3', '#', '3', '№'),
    "Digit4" : new Button(KEYBOARD, "Digit4", '4', '$', '4', ';'),
    "Digit5" : new Button(KEYBOARD, "Digit5", '5', '%', '5', '%'),
    "Digit6" : new Button(KEYBOARD, "Digit6", '6', '^', '6', ':'),
    "Digit7" : new Button(KEYBOARD, "Digit7", '7', '&', '7', '?'),
    "Digit8" : new Button(KEYBOARD, "Digit8", '8', '*', '8', '*'),
    "Digit9" : new Button(KEYBOARD, "Digit9", '9', '(', '9', '('),
    "Digit0" : new Button(KEYBOARD, "Digit0", '0', ')', '0', ')'),
    "Minus" : new Button(KEYBOARD, "Minus", '-', '_', '-', '_'),
    "Equal" : new Button(KEYBOARD, "Equal", '=', '+', '=', '+'), 
    "Backspace" : new Button(KEYBOARD, "Backspace", 'Backspace', 'Backspace', 'Backspace', 'Backspace'),
    //row 2
    "Tab" : new Button(KEYBOARD, "Tab", 'Tab', 'Tab', 'Tab', 'Tab'),
    "KeyQ" : new Button(KEYBOARD, "KeyQ", 'q', 'Q', 'й', 'Й'),
    "KeyW" : new Button(KEYBOARD, "KeyW", 'w', 'W', 'ц', 'Ц'),
    "KeyE" : new Button(KEYBOARD, "KeyE", 'e', 'E', 'у', 'У'),
    "KeyR" : new Button(KEYBOARD, "KeyR", 'r', 'R', 'к', 'К'),
    "KeyT" : new Button(KEYBOARD, "KeyT", 't', 'T', 'е', 'Е'),
    "KeyY" : new Button(KEYBOARD, "KeyY", 'y', 'Y', 'н', 'Н'),
    "KeyU" : new Button(KEYBOARD, "KeyU", 'u', 'U', 'г', 'Г'),
    "KeyI" : new Button(KEYBOARD, "KeyU", 'i', 'I', 'ш', 'Ш'),
    "KeyO" : new Button(KEYBOARD, "KeyU", 'o', 'O', 'щ', 'Щ'),
    "KeyP" : new Button(KEYBOARD, "KeyU", 'p', 'P', 'з', 'З'),
    "BracketLeft" : new Button(KEYBOARD, "BracketLeft", '[', '{', 'х', 'Х'),
    "BracketRight" : new Button(KEYBOARD, "BracketRight", ']', '}', 'ъ', 'Ъ'),
    "Delete" : new Button(KEYBOARD, "Delete", 'Delete', 'Delete', 'Delete', 'Delete'),
    //row 3
    "CapsLock" : new Button(KEYBOARD, "CapsLock", 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'),
    "KeyA" : new Button(KEYBOARD, "KeyA", 'a', 'A', 'ф', 'Ф'),
    "KeyS" : new Button(KEYBOARD, "KeyS", 's', 'S', 'ы', 'Ы'),
    "KeyD" : new Button(KEYBOARD, "KeyD", 'd', 'D', 'в', 'В'),
    "KeyF" : new Button(KEYBOARD, "KeyF", 'f', 'F', 'а', 'А'),
    "KeyG" : new Button(KEYBOARD, "KeyG", 'g', 'G', 'п', 'П'),
    "KeyH" : new Button(KEYBOARD, "KeyH", 'h', 'H', 'р', 'Р'),
    "KeyJ" : new Button(KEYBOARD, "KeyJ", 'j', 'J', 'о', 'О'),
    "KeyK" : new Button(KEYBOARD, "KeyK", 'k', 'K', 'л', 'Л'),
    "KeyL" : new Button(KEYBOARD, "KeyL", 'l', 'L', 'д', 'Д'),
    "Semicolon" : new Button(KEYBOARD, "Semicolon", ';', ':', 'ж', 'Ж'),
    "Quote" : new Button(KEYBOARD, "Quote", "'", '"', 'э', 'Э'),
    "Enter" : new Button(KEYBOARD, "Enter", 'Enter', 'Enter', 'Enter', 'Enter'),
    //row 4
    "ShiftLeft" : new Button(KEYBOARD, "ShiftLeft", 'Shift', 'Shift', 'Shift', 'Shift'),
    "KeyZ" : new Button(KEYBOARD, "KeyZ", 'z', 'Z', 'я', 'Я'),
    "KeyX" : new Button(KEYBOARD, "KeyX", 'x', 'X', 'ч', 'Ч'),
    "KeyC" : new Button(KEYBOARD, "KeyC", 'c', 'C', 'с', 'С'),
    "KeyV" : new Button(KEYBOARD, "KeyV", 'v', 'V', 'м', 'М'),
    "KeyB" : new Button(KEYBOARD, "KeyB", 'b', 'B', 'и', 'И'),
    "KeyN" : new Button(KEYBOARD, "KeyN", 'n', 'N', 'т', 'Т'),
    "KeyM" : new Button(KEYBOARD, "KeyM", 'm', 'M', 'ь', 'Ь'),
    "Comma" : new Button(KEYBOARD, "Comma", ',', '<', 'б','Б'),
    "Period" : new Button(KEYBOARD, "Period", '.', ">", 'ю', 'Ю'),
    "Slash" : new Button(KEYBOARD, "Slash", '/', '?', '.', ','),
    "ArrowUp" : new Button(KEYBOARD, "ArrowUp", '&uarr;', '&uarr;', '&uarr;', '&uarr;'),
    "ShiftRight" : new Button(KEYBOARD, "ShiftRight", 'Shift', 'Shift', 'Shift', 'Shift'),
    //row 4
    "ControlLeft" : new Button(KEYBOARD, "ControlLeft", 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
    "MetaLeft" : new Button(KEYBOARD, "MetaLeft", 'Fn', 'Fn', 'Fn', 'Fn'),
    "AltLeft" : new Button(KEYBOARD, "AltLeft", 'Alt', 'Alt', 'Alt', 'Alt'),
    "Space" : new Button(KEYBOARD, "Space", 'Space', 'Space', 'Space', 'Space'),
    "AltRight" : new Button(KEYBOARD, "AltRight", 'Alt', 'Alt', 'Alt', 'Alt'),
    "ControlRight" : new Button(KEYBOARD, "ControlRight", 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
    "ArrowLeft" : new Button(KEYBOARD, "ArrowLeft", '&larr;', '&larr;', '&larr;', '&larr;'),
    "ArrowDown" : new Button(KEYBOARD, "ArrowDown", '&darr;', '&darr;', '&darr;', '&darr;'),
    "ArrowRight" : new Button(KEYBOARD, "ArrowRight", '&rarr;', '&rarr;', '&rarr;','&rarr;')
};

