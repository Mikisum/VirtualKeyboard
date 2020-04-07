
const TEXTAREA = document.createElement('textarea');
TEXTAREA.id = 'textarea';
TEXTAREA.autofocus = true;
const KEYBOARD = document.createElement('div');
KEYBOARD.id = 'keyboard';
const BUTTON = document.createElement('button');
document.body.append(TEXTAREA);
document.body.append(KEYBOARD);
const HINT = document.createElement('div');
HINT.innerText = 'Shift + Alt - change language';
HINT.id = 'hint';
document.body.append(HINT);

class Button {
    constructor(htmlParent, keyCode, enLower, enUpper, ruLower, ruUpper) {
        this.enLower = enLower;
        this.enUpper = enUpper;
        this.ruLower = ruLower;
        this.ruUpper = ruUpper;

        this.htmlKey = document.createElement('div');
        this.htmlKey.className = 'k-key';
        this.htmlKey.setAttribute('data', keyCode);
        this.htmlKey.classList.add(keyCode);
        this.htmlKey.innerHTML = this.getLangChar(language, register);
        htmlParent.append(this.htmlKey);
        
        if (keyCode === 'Backspace'|| keyCode === 'Delete' || keyCode === 'Enter' || keyCode === 'ShiftRight' ) {
            let nextLine = document.createElement('div');
            nextLine.className = 'clearfix';
            htmlParent.append(nextLine);
        }

    }

    // getLanguage (key) {
    //     if (key === this.enLower || key === this.enUpper) return 'en';
    //     else return 'ru';
    // }

    getLangChar(lang, register) {
        if (lang == 'en') {
            return register === 'lower' ? this.enLower : this.enUpper;
        }
        else if (lang == 'ru') {
            return register === 'lower' ? this.ruLower : this.ruUpper;
        }     
    }

    getHtmlElement() {
        return this.htmlKey;
    }
 }

let language = localStorage.getItem('language') != null ? localStorage.getItem('language') : 'en';

function changeLanguage() {
    if (language === 'en') language = 'ru';
    else language = 'en';
    localStorage.setItem('language', language);
    Object.values(keyMap).forEach(button => {   
        button.getHtmlElement().innerHTML = button.getLangChar(language, register);
   });
}

function space() {
    TEXTAREA.value += ' ';
}

function enter() {
    TEXTAREA.value += '\r\n';
}

let register = 'lower';
function capsLock() {
    if (register === 'lower') register = 'upper';
    else register = 'lower';
    Object.values(keyMap).forEach(button => { 
       button.getHtmlElement().innerHTML = button.getLangChar(language, register);
    }); 
}

function shift(status) {
    if (status == register) return;
    register = status;
    Object.values(keyMap).forEach(button => {   
        button.getHtmlElement().innerHTML = button.getLangChar(language, register);
    });
}

document.addEventListener('keydown', (event) => {
    TEXTAREA.focus(); 
    if (keyMap[event.code] === undefined) return;
    keyMap[event.code].getHtmlElement().classList.add('active');
    if (event.shiftKey === true && event.altKey === true) changeLanguage();
    if (event.shiftKey === true) shift('upper');
    if (event.code === 'CapsLock') capsLock();
    if (keyMap[event.code].getLangChar('en', 'lower') === 'Tab') {
        event.preventDefault();
        TEXTAREA.value += '    ';
    };
    if (event.code === 'Space') space();
    // if (keyMap[event.code].getLanguage(event.key) !== language) changeLanguage();

});

document.addEventListener('keyup', (event) => {
    keyMap[event.code].getHtmlElement().classList.remove('active');
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shift('lower');
});

function selectionDelete() {
    TEXTAREA.value = TEXTAREA.value.substring(0, -1);
}

let pressShift = false;
KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target.getAttribute('data') == null) return;
    keyMap[event.target.getAttribute('data')].getHtmlElement().classList.add('active');
    if (event.target.getAttribute('data') === 'CapsLock') capsLock();  
    else if (event.target.getAttribute('data') === 'Delete') selectionDelete();
    else if (event.target.getAttribute('data') === 'Space') space();
    else if (event.target.getAttribute('data') === 'Backspace') TEXTAREA.value = TEXTAREA.value.slice(0, -1);
    else if (event.target.getAttribute('data') === 'Enter') enter();
    else if (event.target.getAttribute('data') === 'ShiftLeft' || event.target.getAttribute('data') === 'ShiftRight') {
        shift('upper');
        pressShift = true;
    }
    else {
        TEXTAREA.value += event.target.outerText;
        if (pressShift === true){
            pressShift = false;
            shift('lower');
        }
    }
});

KEYBOARD.addEventListener('mouseup', (event) => {
    if (keyMap[event.target.getAttribute('data')] == null) return;
    event.preventDefault();
    keyMap[event.target.getAttribute('data')].getHtmlElement().classList.remove('active');
    TEXTAREA.focus();
});

// function addkey(keyCode, enLower, enUpper, ruLower, ruUpper) {
//     ketMap[keyCode] = new Button(KEYBOARD, keyCode, enLower, enUpper, ruLower, ruUpper)
// }

// addkey("Backquote", '`', '`', 'ё', 'Ё') 

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
    "KeyI" : new Button(KEYBOARD, "KeyI", 'i', 'I', 'ш', 'Ш'),
    "KeyO" : new Button(KEYBOARD, "KeyO", 'o', 'O', 'щ', 'Щ'),
    "KeyP" : new Button(KEYBOARD, "KeyP", 'p', 'P', 'з', 'З'),
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
    "AltLeft" : new Button(KEYBOARD, "AltLeft", 'Alt', 'Alt', 'Alt', 'Alt'),
    "Space" : new Button(KEYBOARD, "Space", 'Space', 'Space', 'Space', 'Space'),
    "AltRight" : new Button(KEYBOARD, "AltRight", 'Alt', 'Alt', 'Alt', 'Alt'),
    
    "ArrowLeft" : new Button(KEYBOARD, "ArrowLeft", '&larr;', '&larr;', '&larr;', '&larr;'),
    "ArrowDown" : new Button(KEYBOARD, "ArrowDown", '&darr;', '&darr;', '&darr;', '&darr;'),
    "ArrowRight" : new Button(KEYBOARD, "ArrowRight", '&rarr;', '&rarr;', '&rarr;','&rarr;'),
    "ControlRight" : new Button(KEYBOARD, "ControlRight", 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl')
};

