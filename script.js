
function createtextArea() {
  const textArea = document.createElement('textarea');
  textArea.id = 'textarea';
  textArea.autofocus = true;
  return textArea;
}

function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  return keyboard;
}

function createHint() {
  const HINT = document.createElement('div');
  HINT.innerText = 'Shift + Alt - change language\n Created under Windows';
}

const textArea = createtextArea();
const keyboard = createKeyboard();
const HINT = createHint();

document.body.append(textArea);
document.body.append(keyboard);
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
  Backquote: new Button({ htmlParent: keyboard, keyCode: 'Backquote', enLower: '`', enUpper: '`', ruLower: 'ё', ruUpper: 'Ё' }),
  Digit1: new Button({ htmlParent: keyboard, keyCode: 'Digit1', enLower: '1', enUpper: '!', ruLower: '1', ruUpper: '!' }),
  Digit2: new Button({ htmlParent: keyboard, keyCode: 'Digit2', enLower: '2', enUpper: '@', ruLower: '2', ruUpper: '\'' }),
  Digit3: new Button({ htmlParent: keyboard, keyCode: 'Digit3', enLower: '3', enUpper: '#', ruLower: '3', ruUpper: '№' }),
  Digit4: new Button({ htmlParent: keyboard, keyCode: 'Digit4', enLower: '4', enUpper: '$', ruLower: '4', ruUpper: ';' }),
  Digit5: new Button({ htmlParent: keyboard, keyCode: 'Digit5', enLower: '5', enUpper: '%', ruLower: '5', ruUpper: '%' }),
  Digit6: new Button({ htmlParent: keyboard, keyCode: 'Digit6', enLower: '6', enUpper: '^', ruLower: '6', ruUpper: ':' }),
  Digit7: new Button({ htmlParent: keyboard, keyCode: 'Digit7', enLower: '7', enUpper: '&', ruLower: '7', ruUpper: '?' }),
  Digit8: new Button({ htmlParent: keyboard, keyCode: 'Digit8', enLower: '8', enUpper: '*', ruLower: '8', ruUpper: '*' }),
  Digit9: new Button({ htmlParent: keyboard, keyCode: 'Digit9', enLower: '9', enUpper: '(', ruLower: '9', ruUpper: '(' }),
  Digit0: new Button({ htmlParent: keyboard, keyCode: 'Digit0', enLower: '0', enUpper: ')', ruLower: '0', ruUpper: ')' }),
  Minus: new Button({ htmlParent: keyboard, keyCode: 'Minus', enLower: '-', enUpper: '_', ruLower: '-', ruUpper: '_' }),
  Equal: new Button({ htmlParent: keyboard, keyCode: 'Equal', enLower: '=', enUpper: '+', ruLower: '=', ruUpper: '+' }),
  Backspace: new Button({ htmlParent: keyboard, keyCode: 'Backspace', enLower: 'Backspace', enUpper: 'Backspace', ruLower: 'Backspace', ruUpper: 'Backspace' }),
  // row 2
  Tab: new Button({ htmlParent: keyboard, keyCode: 'Tab', enLower: 'Tab', enUpper: 'Tab', ruLower: 'Tab', ruUpper: 'Tab' }),
  KeyQ: new Button({ htmlParent: keyboard, keyCode: 'KeyQ', enLower: 'q', enUpper: 'Q', ruLower: 'й', ruUpper: 'Й' }),
  KeyW: new Button({ htmlParent: keyboard, keyCode: 'KeyW', enLower: 'w', enUpper: 'W', ruLower: 'ц', ruUpper: 'Ц' }),
  KeyE: new Button({ htmlParent: keyboard, keyCode: 'KeyE', enLower: 'e', enUpper: 'E', ruLower: 'у', ruUpper: 'У' }),
  KeyR: new Button({ htmlParent: keyboard, keyCode: 'KeyR', enLower: 'r', enUpper: 'R', ruLower: 'к', ruUpper: 'К' }),
  KeyT: new Button({ htmlParent: keyboard, keyCode: 'KeyT', enLower: 't', enUpper: 'T', ruLower: 'е', ruUpper: 'Е' }),
  KeyY: new Button({ htmlParent: keyboard, keyCode: 'KeyY', enLower: 'y', enUpper: 'Y', ruLower: 'н', ruUpper: 'Н' }),
  KeyU: new Button({ htmlParent: keyboard, keyCode: 'KeyU', enLower: 'u', enUpper: 'U', ruLower: 'г', ruUpper: 'Г' }),
  KeyI: new Button({ htmlParent: keyboard, keyCode: 'KeyI', enLower: 'i', enUpper: 'I', ruLower: 'ш', ruUpper: 'Ш' }),
  KeyO: new Button({ htmlParent: keyboard, keyCode: 'KeyO', enLower: 'o', enUpper: 'O', ruLower: 'щ', ruUpper: 'Щ' }),
  KeyP: new Button({ htmlParent: keyboard, keyCode: 'KeyP', enLower: 'p', enUpper: 'P', ruLower: 'з', ruUpper: 'З' }),
  BracketLeft: new Button({ htmlParent: keyboard, keyCode: 'BracketLeft', enLower: '[', enUpper: '{', ruLower: 'х', ruUpper: 'Х' }),
  BracketRight: new Button({ htmlParent: keyboard, keyCode: 'BracketRight', enLower: ']', enUpper: '}', ruLower: 'ъ', ruUpper: 'Ъ' }),
  Delete: new Button({ htmlParent: keyboard, keyCode: 'Delete', enLower: 'Delete', enUpper: 'Delete', ruLower: 'Delete', ruUpper: 'Delete' }),
  // row 3
  CapsLock: new Button({ htmlParent: keyboard, keyCode: 'CapsLock', enLower: 'CapsLock', enUpper: 'CapsLock', ruLower: 'CapsLock', ruUpper: 'CapsLock' }),
  KeyA: new Button({ htmlParent: keyboard, keyCode: 'KeyA', enLower: 'a', enUpper: 'A', ruLower: 'ф', ruUpper: 'Ф' }),
  KeyS: new Button({ htmlParent: keyboard, keyCode: 'KeyS', enLower: 's', enUpper: 'S', ruLower: 'ы', ruUpper: 'Ы' }),
  KeyD: new Button({ htmlParent: keyboard, keyCode: 'KeyD', enLower: 'd', enUpper: 'D', ruLower: 'в', ruUpper: 'В' }),
  KeyF: new Button({ htmlParent: keyboard, keyCode: 'KeyF', enLower: 'f', enUpper: 'F', ruLower: 'а', ruUpper: 'А' }),
  KeyG: new Button({ htmlParent: keyboard, keyCode: 'KeyG', enLower: 'g', enUpper: 'G', ruLower: 'п', ruUpper: 'П' }),
  KeyH: new Button({ htmlParent: keyboard, keyCode: 'KeyH', enLower: 'h', enUpper: 'H', ruLower: 'р', ruUpper: 'Р' }),
  KeyJ: new Button({ htmlParent: keyboard, keyCode: 'KeyJ', enLower: 'j', enUpper: 'J', ruLower: 'о', ruUpper: 'О' }),
  KeyK: new Button({ htmlParent: keyboard, keyCode: 'KeyK', enLower: 'k', enUpper: 'K', ruLower: 'л', ruUpper: 'Л' }),
  KeyL: new Button({ htmlParent: keyboard, keyCode: 'KeyL', enLower: 'l', enUpper: 'L', ruLower: 'д', ruUpper: 'Д' }),
  Semicolon: new Button({ htmlParent: keyboard, keyCode: 'Semicolon', enLower: ';', enUpper: ':', ruLower: 'ж', ruUpper: 'Ж' }),
  Quote: new Button({ htmlParent: keyboard, keyCode: 'Quote', enLower: '\'', enUpper: '"', ruLower: 'э', ruUpper: 'Э' }),
  Enter: new Button({ htmlParent: keyboard, keyCode: 'Enter', enLower: 'Enter', enUpper: 'Enter', ruLower: 'Enter', ruUpper: 'Enter' }),
  // row 4
  ShiftLeft: new Button({ htmlParent: keyboard, keyCode: 'ShiftLeft', enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  KeyZ: new Button({ htmlParent: keyboard, keyCode: 'KeyZ', enLower: 'z', enUpper: 'Z', ruLower: 'я', ruUpper: 'Я' }),
  KeyX: new Button({ htmlParent: keyboard, keyCode: 'KeyX', enLower: 'x', enUpper: 'X', ruLower: 'ч', ruUpper: 'Ч' }),
  KeyC: new Button({ htmlParent: keyboard, keyCode: 'KeyC', enLower: 'c', enUpper: 'C', ruLower: 'с', ruUpper: 'С' }),
  KeyV: new Button({ htmlParent: keyboard, keyCode: 'KeyV', enLower: 'v', enUpper: 'V', ruLower: 'м', ruUpper: 'М' }),
  KeyB: new Button({ htmlParent: keyboard, keyCode: 'KeyB', enLower: 'b', enUpper: 'B', ruLower: 'и', ruUpper: 'И' }),
  KeyN: new Button({ htmlParent: keyboard, keyCode: 'KeyN', enLower: 'n', enUpper: 'N', ruLower: 'т', ruUpper: 'Т' }),
  KeyM: new Button({ htmlParent: keyboard, keyCode: 'KeyM', enLower: 'm', enUpper: 'M', ruLower: 'ь', ruUpper: 'Ь' }),
  Comma: new Button({ htmlParent: keyboard, keyCode: 'Comma', enLower: ',', enUpper: '<', ruLower: 'б', ruUpper: 'Б' }),
  Period: new Button({ htmlParent: keyboard, keyCode: 'Period', enLower: '.', enUpper: '>', ruLower: 'ю', ruUpper: 'Ю' }),
  Slash: new Button({ htmlParent: keyboard, keyCode: 'Slash', enLower: '/', enUpper: '?', ruLower: '.', ruUpper: ',' }),
  ArrowUp: new Button({ htmlParent: keyboard, keyCode: 'ArrowUp', enLower: '↑', enUpper: '↑', ruLower: '↑', ruUpper: '↑' }),
  ShiftRight: new Button({ htmlParent: keyboard, keyCode: 'ShiftRight', enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  // row 4
  ControlLeft: new Button({ htmlParent: keyboard, keyCode: 'ControlLeft', enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
  AltLeft: new Button({ htmlParent: keyboard, keyCode: 'AltLeft', enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  Space: new Button({ htmlParent: keyboard, keyCode: 'Space', enLower: 'Space', enUpper: 'Space', ruLower: 'Space', ruUpper: 'Space' }),
  AltRight: new Button({ htmlParent: keyboard, keyCode: 'AltRight', enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  ArrowLeft: new Button({ htmlParent: keyboard, keyCode: 'ArrowLeft', enLower: '←', enUpper: '←', ruLower: '←', ruUpper: '←' }),
  ArrowDown: new Button({ htmlParent: keyboard, keyCode: 'ArrowDown', enLower: '↓', enUpper: '↓', ruLower: '↓', ruUpper: '↓' }),
  ArrowRight: new Button({ htmlParent: keyboard, keyCode: 'ArrowRight', enLower: '→', enUpper: '→', ruLower: '→', ruUpper: '→' }),
  ControlRight: new Button({ htmlParent: keyboard, keyCode: 'ControlRight', enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
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
  textArea.value += '\t';
}

function selectionDelete() {
  const start = textArea.selectionStart;
  let end = textArea.selectionEnd;
  if (start === end) end += 1;
  textArea.value = textArea.value.substring(0, start) + textArea.value.substring(end);
  textArea.selectionStart = start;
  textArea.selectionEnd = start;
}

function backspace() {
  let start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  if (start === end) start -= 1;
  textArea.value = textArea.value.substring(0, start) + textArea.value.substring(end);
  textArea.selectionStart = start;
  textArea.selectionEnd = start;
}

function space() {
  textArea.value += ' ';
}

function enter() {
  textArea.value += '\r\n';
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
  textArea.focus();
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
  else textArea.value += key;
}

function buttonHandlerUp(keyCode) {
  textArea.focus();
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

keyboard.addEventListener('mousedown', (event) => {
  buttonHandlerDown(event.target.getAttribute('data'), event.target.innerText);
});

keyboard.addEventListener('mouseup', (event) => {
  buttonHandlerUp(event.target.getAttribute('data'));
});
