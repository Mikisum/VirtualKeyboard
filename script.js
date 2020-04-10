
const TEXTAREA = document.createElement('textarea');
TEXTAREA.id = 'textarea';
TEXTAREA.autofocus = true;
const KEYBOARD = document.createElement('div');
KEYBOARD.id = 'keyboard';
const HINT = document.createElement('div');
HINT.innerText = 'Shift + Alt - change language\n Created under Windows';
document.body.append(TEXTAREA);
document.body.append(KEYBOARD);
document.body.append(HINT);
let language = sessionStorage.getItem('language') != null ? sessionStorage.getItem('language') : 'en';
let register = 'lower';

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

    if (keyCode === 'Backspace' || keyCode === 'Delete' || keyCode === 'Enter' || keyCode === 'ShiftRight') {
      const nextLine = document.createElement('div');
      nextLine.className = 'clearfix';
      htmlParent.append(nextLine);
    }
  }

  getLangChar(lang, reg) {
    if (lang === 'en') {
      return reg === 'lower' ? this.enLower : this.enUpper;
    }
    return reg === 'lower' ? this.ruLower : this.ruUpper;
  }

  getHtmlElement() {
    return this.htmlKey;
  }
}

const keyMap = {
  Backquote: new Button(KEYBOARD, 'Backquote', '`', '`', 'ё', 'Ё'),
  Digit1: new Button(KEYBOARD, 'Digit1', '1', '!', '1', '!'),
  Digit2: new Button(KEYBOARD, 'Digit2', '2', '@', '2', '\''),
  Digit3: new Button(KEYBOARD, 'Digit3', '3', '#', '3', '№'),
  Digit4: new Button(KEYBOARD, 'Digit4', '4', '$', '4', ';'),
  Digit5: new Button(KEYBOARD, 'Digit5', '5', '%', '5', '%'),
  Digit6: new Button(KEYBOARD, 'Digit6', '6', '^', '6', ':'),
  Digit7: new Button(KEYBOARD, 'Digit7', '7', '&', '7', '?'),
  Digit8: new Button(KEYBOARD, 'Digit8', '8', '*', '8', '*'),
  Digit9: new Button(KEYBOARD, 'Digit9', '9', '(', '9', '('),
  Digit0: new Button(KEYBOARD, 'Digit0', '0', ')', '0', ')'),
  Minus: new Button(KEYBOARD, 'Minus', '-', '_', '-', '_'),
  Equal: new Button(KEYBOARD, 'Equal', '=', '+', '=', '+'),
  Backspace: new Button(KEYBOARD, 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'),
  // row 2
  Tab: new Button(KEYBOARD, 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
  KeyQ: new Button(KEYBOARD, 'KeyQ', 'q', 'Q', 'й', 'Й'),
  KeyW: new Button(KEYBOARD, 'KeyW', 'w', 'W', 'ц', 'Ц'),
  KeyE: new Button(KEYBOARD, 'KeyE', 'e', 'E', 'у', 'У'),
  KeyR: new Button(KEYBOARD, 'KeyR', 'r', 'R', 'к', 'К'),
  KeyT: new Button(KEYBOARD, 'KeyT', 't', 'T', 'е', 'Е'),
  KeyY: new Button(KEYBOARD, 'KeyY', 'y', 'Y', 'н', 'Н'),
  KeyU: new Button(KEYBOARD, 'KeyU', 'u', 'U', 'г', 'Г'),
  KeyI: new Button(KEYBOARD, 'KeyI', 'i', 'I', 'ш', 'Ш'),
  KeyO: new Button(KEYBOARD, 'KeyO', 'o', 'O', 'щ', 'Щ'),
  KeyP: new Button(KEYBOARD, 'KeyP', 'p', 'P', 'з', 'З'),
  BracketLeft: new Button(KEYBOARD, 'BracketLeft', '[', '{', 'х', 'Х'),
  BracketRight: new Button(KEYBOARD, 'BracketRight', ']', '}', 'ъ', 'Ъ'),
  Delete: new Button(KEYBOARD, 'Delete', 'Delete', 'Delete', 'Delete', 'Delete'),
  // row 3
  CapsLock: new Button(KEYBOARD, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'),
  KeyA: new Button(KEYBOARD, 'KeyA', 'a', 'A', 'ф', 'Ф'),
  KeyS: new Button(KEYBOARD, 'KeyS', 's', 'S', 'ы', 'Ы'),
  KeyD: new Button(KEYBOARD, 'KeyD', 'd', 'D', 'в', 'В'),
  KeyF: new Button(KEYBOARD, 'KeyF', 'f', 'F', 'а', 'А'),
  KeyG: new Button(KEYBOARD, 'KeyG', 'g', 'G', 'п', 'П'),
  KeyH: new Button(KEYBOARD, 'KeyH', 'h', 'H', 'р', 'Р'),
  KeyJ: new Button(KEYBOARD, 'KeyJ', 'j', 'J', 'о', 'О'),
  KeyK: new Button(KEYBOARD, 'KeyK', 'k', 'K', 'л', 'Л'),
  KeyL: new Button(KEYBOARD, 'KeyL', 'l', 'L', 'д', 'Д'),
  Semicolon: new Button(KEYBOARD, 'Semicolon', ';', ':', 'ж', 'Ж'),
  Quote: new Button(KEYBOARD, 'Quote', '\'', '"', 'э', 'Э'),
  Enter: new Button(KEYBOARD, 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
  // row 4
  ShiftLeft: new Button(KEYBOARD, 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'),
  KeyZ: new Button(KEYBOARD, 'KeyZ', 'z', 'Z', 'я', 'Я'),
  KeyX: new Button(KEYBOARD, 'KeyX', 'x', 'X', 'ч', 'Ч'),
  KeyC: new Button(KEYBOARD, 'KeyC', 'c', 'C', 'с', 'С'),
  KeyV: new Button(KEYBOARD, 'KeyV', 'v', 'V', 'м', 'М'),
  KeyB: new Button(KEYBOARD, 'KeyB', 'b', 'B', 'и', 'И'),
  KeyN: new Button(KEYBOARD, 'KeyN', 'n', 'N', 'т', 'Т'),
  KeyM: new Button(KEYBOARD, 'KeyM', 'm', 'M', 'ь', 'Ь'),
  Comma: new Button(KEYBOARD, 'Comma', ',', '<', 'б', 'Б'),
  Period: new Button(KEYBOARD, 'Period', '.', '>', 'ю', 'Ю'),
  Slash: new Button(KEYBOARD, 'Slash', '/', '?', '.', ','),
  ArrowUp: new Button(KEYBOARD, 'ArrowUp', '↑', '↑', '↑', '↑'),
  ShiftRight: new Button(KEYBOARD, 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'),
  // row 4
  ControlLeft: new Button(KEYBOARD, 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
  AltLeft: new Button(KEYBOARD, 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'),
  Space: new Button(KEYBOARD, 'Space', 'Space', 'Space', 'Space', 'Space'),
  AltRight: new Button(KEYBOARD, 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'),
  ArrowLeft: new Button(KEYBOARD, 'ArrowLeft', '←', '←', '←', '←'),
  ArrowDown: new Button(KEYBOARD, 'ArrowDown', '↓', '↓', '↓', '↓'),
  ArrowRight: new Button(KEYBOARD, 'ArrowRight', '→', '→', '→', '→'),
  ControlRight: new Button(KEYBOARD, 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
};

function changeLanguage() {
  if (language === 'en') language = 'ru';
  else language = 'en';
  sessionStorage.setItem('language', language);
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, register);
  });
}

function shiftDown() {
  let shiftRegister;
  if (register === 'lower') shiftRegister = 'upper';
  else shiftRegister = 'lower';
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, shiftRegister);
  });
}

function shiftUp() {
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, register);
  });
}

function tab() {
  TEXTAREA.value += '\t';
}

function selectionDelete() {
  const start = TEXTAREA.selectionStart;
  let end = TEXTAREA.selectionEnd;
  if (start === end) end += 1;
  TEXTAREA.value = TEXTAREA.value.substring(0, start) + TEXTAREA.value.substring(end);
  TEXTAREA.selectionStart = start;
  TEXTAREA.selectionEnd = start;
}

function backspace() {
  let start = TEXTAREA.selectionStart;
  const end = TEXTAREA.selectionEnd;
  if (start === end) start -= 1;
  TEXTAREA.value = TEXTAREA.value.substring(0, start) + TEXTAREA.value.substring(end);
  TEXTAREA.selectionStart = start;
  TEXTAREA.selectionEnd = start;
}

function space() {
  TEXTAREA.value += ' ';
}

function enter() {
  TEXTAREA.value += '\r\n';
}

function capsLock() {
  if (register === 'lower') register = 'upper';
  else {
    register = 'lower';
    keyMap.CapsLock.getHtmlElement().classList.remove('active');
  }
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, register);
  });
}

function buttonHandlerDown(keyCode, key) {
  TEXTAREA.focus();
  if (keyCode === null || keyCode === undefined) return;
  keyMap[keyCode].getHtmlElement().classList.add('active');

  if (key === 'ArrowUp' || key === 'ArrowRight' || key === 'ArrowDown' || key === 'ArrowLeft') {
    keyMap[keyCode].getLangChar(language, register);
  }
  if (keyCode === 'AltRight' || keyCode === 'AltLeft');
  else if (keyCode === 'ControlRight' || keyCode === 'ControlLeft');
  else if (keyCode === 'CapsLock') capsLock();
  else if (keyCode === 'Delete') selectionDelete();
  else if (keyCode === 'Space') space();
  else if (keyCode === 'Backspace') backspace();
  else if (keyCode === 'Enter') enter();
  else if (keyCode === 'Tab') tab();
  else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') shiftDown();
  else TEXTAREA.value += key;
}

function buttonHandlerUp(keyCode) {
  TEXTAREA.focus();
  if (keyCode === null || keyCode === undefined) return;
  if (keyCode === 'CapsLock') return;
  keyMap[keyCode].getHtmlElement().classList.remove('active');
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') shiftUp();
}

document.addEventListener('keydown', (event) => {
  if (keyMap[event.code] === undefined) return;
  event.preventDefault();
  if (event.shiftKey === true && event.altKey === true) changeLanguage();
  buttonHandlerDown(event.code, event.key);
});

document.addEventListener('keyup', (event) => {
  if (keyMap[event.code] === undefined) return;
  event.preventDefault();
  buttonHandlerUp(event.code);
});

KEYBOARD.addEventListener('mousedown', (event) => {
  buttonHandlerDown(event.target.getAttribute('data'), event.target.innerText);
});

KEYBOARD.addEventListener('mouseup', (event) => {
  buttonHandlerUp(event.target.getAttribute('data'));
});
