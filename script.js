
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
  constructor({ htmlParent, keyCode, enLower, enUpper, ruLower, ruUpper }) {
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
  Backquote: new Button({ htmlParent: KEYBOARD, keyCode: 'Backquote', enLower: '`', enUpper: '`', ruLower: 'ё', ruUpper: 'Ё' }),
  Digit1: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit1', enLower: '1', enUpper: '!', ruLower: '1', ruUpper: '!' }),
  Digit2: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit2', enLower: '2', enUpper: '@', ruLower: '2', ruUpper: '\'' }),
  Digit3: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit3', enLower: '3', enUpper: '#', ruLower: '3', ruUpper: '№' }),
  Digit4: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit4', enLower: '4', enUpper: '$', ruLower: '4', ruUpper: ';' }),
  Digit5: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit5', enLower: '5', enUpper: '%', ruLower: '5', ruUpper: '%' }),
  Digit6: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit6', enLower: '6', enUpper: '^', ruLower: '6', ruUpper: ':' }),
  Digit7: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit7', enLower: '7', enUpper: '&', ruLower: '7', ruUpper: '?' }),
  Digit8: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit8', enLower: '8', enUpper: '*', ruLower: '8', ruUpper: '*' }),
  Digit9: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit9', enLower: '9', enUpper: '(', ruLower: '9', ruUpper: '(' }),
  Digit0: new Button({ htmlParent: KEYBOARD, keyCode: 'Digit0', enLower: '0', enUpper: ')', ruLower: '0', ruUpper: ')' }),
  Minus: new Button({ htmlParent: KEYBOARD, keyCode: 'Minus', enLower: '-', enUpper: '_', ruLower: '-', ruUpper: '_' }),
  Equal: new Button({ htmlParent: KEYBOARD, keyCode: 'Equal', enLower: '=', enUpper: '+', ruLower: '=', ruUpper: '+' }),
  Backspace: new Button({ htmlParent: KEYBOARD, keyCode: 'Backspace', enLower: 'Backspace', enUpper: 'Backspace', ruLower: 'Backspace', ruUpper: 'Backspace' }),
  // row 2
  Tab: new Button({ htmlParent: KEYBOARD, keyCode: 'Tab', enLower: 'Tab', enUpper: 'Tab', ruLower: 'Tab', ruUpper: 'Tab' }),
  KeyQ: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyQ', enLower: 'q', enUpper: 'Q', ruLower: 'й', ruUpper: 'Й' }),
  KeyW: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyW', enLower: 'w', enUpper: 'W', ruLower: 'ц', ruUpper: 'Ц' }),
  KeyE: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyE', enLower: 'e', enUpper: 'E', ruLower: 'у', ruUpper: 'У' }),
  KeyR: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyR', enLower: 'r', enUpper: 'R', ruLower: 'к', ruUpper: 'К' }),
  KeyT: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyT', enLower: 't', enUpper: 'T', ruLower: 'е', ruUpper: 'Е' }),
  KeyY: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyY', enLower: 'y', enUpper: 'Y', ruLower: 'н', ruUpper: 'Н' }),
  KeyU: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyU', enLower: 'u', enUpper: 'U', ruLower: 'г', ruUpper: 'Г' }),
  KeyI: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyI', enLower: 'i', enUpper: 'I', ruLower: 'ш', ruUpper: 'Ш' }),
  KeyO: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyO', enLower: 'o', enUpper: 'O', ruLower: 'щ', ruUpper: 'Щ' }),
  KeyP: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyP', enLower: 'p', enUpper: 'P', ruLower: 'з', ruUpper: 'З' }),
  BracketLeft: new Button({ htmlParent: KEYBOARD, keyCode: 'BracketLeft', enLower: '[', enUpper: '{', ruLower: 'х', ruUpper: 'Х' }),
  BracketRight: new Button({ htmlParent: KEYBOARD, keyCode: 'BracketRight', enLower: ']', enUpper: '}', ruLower: 'ъ', ruUpper: 'Ъ' }),
  Delete: new Button({ htmlParent: KEYBOARD, keyCode: 'Delete', enLower: 'Delete', enUpper: 'Delete', ruLower: 'Delete', ruUpper: 'Delete' }),
  // row 3
  CapsLock: new Button({ htmlParent: KEYBOARD, keyCode: 'CapsLock', enLower: 'CapsLock', enUpper: 'CapsLock', ruLower: 'CapsLock', ruUpper: 'CapsLock' }),
  KeyA: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyA', enLower: 'a', enUpper: 'A', ruLower: 'ф', ruUpper: 'Ф' }),
  KeyS: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyS', enLower: 's', enUpper: 'S', ruLower: 'ы', ruUpper: 'Ы' }),
  KeyD: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyD', enLower: 'd', enUpper: 'D', ruLower: 'в', ruUpper: 'В' }),
  KeyF: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyF', enLower: 'f', enUpper: 'F', ruLower: 'а', ruUpper: 'А' }),
  KeyG: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyG', enLower: 'g', enUpper: 'G', ruLower: 'п', ruUpper: 'П' }),
  KeyH: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyH', enLower: 'h', enUpper: 'H', ruLower: 'р', ruUpper: 'Р' }),
  KeyJ: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyJ', enLower: 'j', enUpper: 'J', ruLower: 'о', ruUpper: 'О' }),
  KeyK: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyK', enLower: 'k', enUpper: 'K', ruLower: 'л', ruUpper: 'Л' }),
  KeyL: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyL', enLower: 'l', enUpper: 'L', ruLower: 'д', ruUpper: 'Д' }),
  Semicolon: new Button({ htmlParent: KEYBOARD, keyCode: 'Semicolon', enLower: ';', enUpper: ':', ruLower: 'ж', ruUpper: 'Ж' }),
  Quote: new Button({ htmlParent: KEYBOARD, keyCode: 'Quote', enLower: '\'', enUpper: '"', ruLower: 'э', ruUpper: 'Э' }),
  Enter: new Button({ htmlParent: KEYBOARD, keyCode: 'Enter', enLower: 'Enter', enUpper: 'Enter', ruLower: 'Enter', ruUpper: 'Enter' }),
  // row 4
  ShiftLeft: new Button({ htmlParent: KEYBOARD, keyCode: 'ShiftLeft', enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  KeyZ: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyZ', enLower: 'z', enUpper: 'Z', ruLower: 'я', ruUpper: 'Я' }),
  KeyX: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyX', enLower: 'x', enUpper: 'X', ruLower: 'ч', ruUpper: 'Ч' }),
  KeyC: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyC', enLower: 'c', enUpper: 'C', ruLower: 'с', ruUpper: 'С' }),
  KeyV: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyV', enLower: 'v', enUpper: 'V', ruLower: 'м', ruUpper: 'М' }),
  KeyB: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyB', enLower: 'b', enUpper: 'B', ruLower: 'и', ruUpper: 'И' }),
  KeyN: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyN', enLower: 'n', enUpper: 'N', ruLower: 'т', ruUpper: 'Т' }),
  KeyM: new Button({ htmlParent: KEYBOARD, keyCode: 'KeyM', enLower: 'm', enUpper: 'M', ruLower: 'ь', ruUpper: 'Ь' }),
  Comma: new Button({ htmlParent: KEYBOARD, keyCode: 'Comma', enLower: ',', enUpper: '<', ruLower: 'б', ruUpper: 'Б' }),
  Period: new Button({ htmlParent: KEYBOARD, keyCode: 'Period', enLower: '.', enUpper: '>', ruLower: 'ю', ruUpper: 'Ю' }),
  Slash: new Button({ htmlParent: KEYBOARD, keyCode: 'Slash', enLower: '/', enUpper: '?', ruLower: '.', ruUpper: ',' }),
  ArrowUp: new Button({ htmlParent: KEYBOARD, keyCode: 'ArrowUp', enLower: '↑', enUpper: '↑', ruLower: '↑', ruUpper: '↑' }),
  ShiftRight: new Button({ htmlParent: KEYBOARD, keyCode: 'ShiftRight', enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  // row 4
  ControlLeft: new Button({ htmlParent: KEYBOARD, keyCode: 'ControlLeft', enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
  AltLeft: new Button({ htmlParent: KEYBOARD, keyCode: 'AltLeft', enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  Space: new Button({ htmlParent: KEYBOARD, keyCode: 'Space', enLower: 'Space', enUpper: 'Space', ruLower: 'Space', ruUpper: 'Space' }),
  AltRight: new Button({ htmlParent: KEYBOARD, keyCode: 'AltRight', enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  ArrowLeft: new Button({ htmlParent: KEYBOARD, keyCode: 'ArrowLeft', enLower: '←', enUpper: '←', ruLower: '←', ruUpper: '←' }),
  ArrowDown: new Button({ htmlParent: KEYBOARD, keyCode: 'ArrowDown', enLower: '↓', enUpper: '↓', ruLower: '↓', ruUpper: '↓' }),
  ArrowRight: new Button({ htmlParent: KEYBOARD, keyCode: 'ArrowRight', enLower: '→', enUpper: '→', ruLower: '→', ruUpper: '→' }),
  ControlRight: new Button({ htmlParent: KEYBOARD, keyCode: 'ControlRight', enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
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
