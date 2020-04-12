
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
  return HINT;
}

const textArea = createtextArea();
const keyboard = createKeyboard();
const HINT = createHint();

document.body.append(textArea);
document.body.append(keyboard);
document.body.append(HINT);

const LANGUAGES = {
  en: 'en',
  ru: 'ru',
};

const letterCases = {
  lower: 'lower',
  upper: 'upper',
};

let language = sessionStorage.getItem('language') != null ? sessionStorage.getItem('language') : LANGUAGES.en;
let letterCase = letterCases.lower;

const KEY_CODES = {
  Backquote: 'Backquote',
  Digit1: 'Digit1',
  Digit2: 'Digit2',
  Digit3: 'Digit3',
  Digit4: 'Digit4',
  Digit5: 'Digit5',
  Digit6: 'Digit6',
  Digit7: 'Digit7',
  Digit8: 'Digit8',
  Digit9: 'Digit9',
  Digit0: 'Digit0',
  Minus: 'Minus',
  Equal: 'Equal',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'KeyQ',
  KeyW: 'KeyW',
  KeyR: 'KeyR',
  KeyT: 'KeyT',
  KeyY: 'KeyY',
  KeyU: 'KeyU',
  KeyO: 'KeyO',
  KeyP: 'KeyP',
  BracketLeft: 'BracketLeft',
  BracketRight: 'BracketRight',
  Delete: 'Delete',
  CapsLock: 'CapsLock',
  KeyA: 'KeyA',
  KeyS: 'KeyS',
  KeyD: 'KeyD',
  KeyF: 'KeyF',
  KeyG: 'KeyG',
  KeyH: 'KeyH',
  KeyJ: 'KeyJ',
  KeyK: 'KeyK',
  KeyL: 'KeyL',
  Semicolon: 'Semicolon',
  Quote: 'Quote',
  Enter: 'Enter',
  ShiftLeft: 'ShiftLeft',
  KeyZ: 'KeyZ',
  KeyX: 'KeyX',
  KeyC: 'KeyC',
  KeyV: 'KeyV',
  KeyB: 'KeyB',
  KeyN: 'KeyN',
  KeyM: 'KeyM',
  Comma: 'Comma',
  Period: 'Period',
  Slash: 'Slash',
  ArrowUp: 'ArrowUp',
  ShiftRight: 'ShiftRight',
  ControlLeft: 'ControlLeft',
  AltLeft: 'AltLeft',
  Space: 'Space',
  AltRight: 'AltRight',
  ArrowLeft: 'ArrowLeft',
  ArrowDown: 'ArrowDown',
  ArrowRight: 'ArrowRight',
  ControlRight: 'ControlRight',
};

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
    this.htmlKey.innerHTML = this.getLangChar(language, letterCase);
    htmlParent.append(this.htmlKey);

    if (keyCode === KEY_CODES.Backspace || keyCode === KEY_CODES.Delete
       || keyCode === KEY_CODES.Enter || keyCode === KEY_CODES.ShiftRight) {
      const nextLine = document.createElement('div');
      nextLine.className = 'clearfix';
      htmlParent.append(nextLine);
    }
  }

  getLangChar(lang, reg) {
    if (lang === LANGUAGES.en) {
      return reg === letterCases.lower ? this.enLower : this.enUpper;
    }
    return reg === letterCases.lower ? this.ruLower : this.ruUpper;
  }

  getHtmlElement() {
    return this.htmlKey;
  }
}

const keyMap = {
  Backquote: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Backquote, enLower: '`', enUpper: '`', ruLower: 'ё', ruUpper: 'Ё' }),
  Digit1: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit1, enLower: '1', enUpper: '!', ruLower: '1', ruUpper: '!' }),
  Digit2: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit2, enLower: '2', enUpper: '@', ruLower: '2', ruUpper: '\'' }),
  Digit3: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit3, enLower: '3', enUpper: '#', ruLower: '3', ruUpper: '№' }),
  Digit4: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit4, enLower: '4', enUpper: '$', ruLower: '4', ruUpper: ';' }),
  Digit5: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit5, enLower: '5', enUpper: '%', ruLower: '5', ruUpper: '%' }),
  Digit6: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit6, enLower: '6', enUpper: '^', ruLower: '6', ruUpper: ':' }),
  Digit7: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit7, enLower: '7', enUpper: '&', ruLower: '7', ruUpper: '?' }),
  Digit8: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit8, enLower: '8', enUpper: '*', ruLower: '8', ruUpper: '*' }),
  Digit9: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit9, enLower: '9', enUpper: '(', ruLower: '9', ruUpper: '(' }),
  Digit0: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Digit0, enLower: '0', enUpper: ')', ruLower: '0', ruUpper: ')' }),
  Minus: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Minus, enLower: '-', enUpper: '_', ruLower: '-', ruUpper: '_' }),
  Equal: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Equal, enLower: '=', enUpper: '+', ruLower: '=', ruUpper: '+' }),
  Backspace: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Backspace, enLower: 'Backspace', enUpper: 'Backspace', ruLower: 'Backspace', ruUpper: 'Backspace' }),
  // row 2
  Tab: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Tab, enLower: 'Tab', enUpper: 'Tab', ruLower: 'Tab', ruUpper: 'Tab' }),
  KeyQ: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyQ, enLower: 'q', enUpper: 'Q', ruLower: 'й', ruUpper: 'Й' }),
  KeyW: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyW, enLower: 'w', enUpper: 'W', ruLower: 'ц', ruUpper: 'Ц' }),
  KeyE: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyE, enLower: 'e', enUpper: 'E', ruLower: 'у', ruUpper: 'У' }),
  KeyR: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyR, enLower: 'r', enUpper: 'R', ruLower: 'к', ruUpper: 'К' }),
  KeyT: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyT, enLower: 't', enUpper: 'T', ruLower: 'е', ruUpper: 'Е' }),
  KeyY: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyY, enLower: 'y', enUpper: 'Y', ruLower: 'н', ruUpper: 'Н' }),
  KeyU: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyU, enLower: 'u', enUpper: 'U', ruLower: 'г', ruUpper: 'Г' }),
  KeyI: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyI, enLower: 'i', enUpper: 'I', ruLower: 'ш', ruUpper: 'Ш' }),
  KeyO: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyO, enLower: 'o', enUpper: 'O', ruLower: 'щ', ruUpper: 'Щ' }),
  KeyP: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyP, enLower: 'p', enUpper: 'P', ruLower: 'з', ruUpper: 'З' }),
  BracketLeft: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.BracketLeft, enLower: '[', enUpper: '{', ruLower: 'х', ruUpper: 'Х' }),
  BracketRight: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.BracketRight, enLower: ']', enUpper: '}', ruLower: 'ъ', ruUpper: 'Ъ' }),
  Delete: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Delete, enLower: 'Delete', enUpper: 'Delete', ruLower: 'Delete', ruUpper: 'Delete' }),
  // row 3
  CapsLock: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.CapsLock, enLower: 'CapsLock', enUpper: 'CapsLock', ruLower: 'CapsLock', ruUpper: 'CapsLock' }),
  KeyA: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyA, enLower: 'a', enUpper: 'A', ruLower: 'ф', ruUpper: 'Ф' }),
  KeyS: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyS, enLower: 's', enUpper: 'S', ruLower: 'ы', ruUpper: 'Ы' }),
  KeyD: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyD, enLower: 'd', enUpper: 'D', ruLower: 'в', ruUpper: 'В' }),
  KeyF: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyF, enLower: 'f', enUpper: 'F', ruLower: 'а', ruUpper: 'А' }),
  KeyG: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyG, enLower: 'g', enUpper: 'G', ruLower: 'п', ruUpper: 'П' }),
  KeyH: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyH, enLower: 'h', enUpper: 'H', ruLower: 'р', ruUpper: 'Р' }),
  KeyJ: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyJ, enLower: 'j', enUpper: 'J', ruLower: 'о', ruUpper: 'О' }),
  KeyK: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyK, enLower: 'k', enUpper: 'K', ruLower: 'л', ruUpper: 'Л' }),
  KeyL: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyL, enLower: 'l', enUpper: 'L', ruLower: 'д', ruUpper: 'Д' }),
  Semicolon: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Semicolon, enLower: ';', enUpper: ':', ruLower: 'ж', ruUpper: 'Ж' }),
  Quote: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Quote, enLower: '\'', enUpper: '"', ruLower: 'э', ruUpper: 'Э' }),
  Enter: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Enter, enLower: 'Enter', enUpper: 'Enter', ruLower: 'Enter', ruUpper: 'Enter' }),
  // row 4
  ShiftLeft: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ShiftLeft, enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  KeyZ: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyZ, enLower: 'z', enUpper: 'Z', ruLower: 'я', ruUpper: 'Я' }),
  KeyX: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyX, enLower: 'x', enUpper: 'X', ruLower: 'ч', ruUpper: 'Ч' }),
  KeyC: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyC, enLower: 'c', enUpper: 'C', ruLower: 'с', ruUpper: 'С' }),
  KeyV: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyV, enLower: 'v', enUpper: 'V', ruLower: 'м', ruUpper: 'М' }),
  KeyB: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyB, enLower: 'b', enUpper: 'B', ruLower: 'и', ruUpper: 'И' }),
  KeyN: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyN, enLower: 'n', enUpper: 'N', ruLower: 'т', ruUpper: 'Т' }),
  KeyM: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.KeyM, enLower: 'm', enUpper: 'M', ruLower: 'ь', ruUpper: 'Ь' }),
  Comma: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Comma, enLower: ',', enUpper: '<', ruLower: 'б', ruUpper: 'Б' }),
  Period: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Period, enLower: '.', enUpper: '>', ruLower: 'ю', ruUpper: 'Ю' }),
  Slash: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Slash, enLower: '/', enUpper: '?', ruLower: '.', ruUpper: ',' }),
  ArrowUp: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ArrowUp, enLower: '↑', enUpper: '↑', ruLower: '↑', ruUpper: '↑' }),
  ShiftRight: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ShiftRight, enLower: 'Shift', enUpper: 'Shift', ruLower: 'Shift', ruUpper: 'Shift' }),
  // row 4
  ControlLeft: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ControlLeft, enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
  AltLeft: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.AltLeft, enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  Space: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.Space, enLower: 'Space', enUpper: 'Space', ruLower: 'Space', ruUpper: 'Space' }),
  AltRight: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.AltRight, enLower: 'Alt', enUpper: 'Alt', ruLower: 'Alt', ruUpper: 'Alt' }),
  ArrowLeft: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ArrowLeft, enLower: '←', enUpper: '←', ruLower: '←', ruUpper: '←' }),
  ArrowDown: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ArrowDown, enLower: '↓', enUpper: '↓', ruLower: '↓', ruUpper: '↓' }),
  ArrowRight: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ArrowRight, enLower: '→', enUpper: '→', ruLower: '→', ruUpper: '→' }),
  ControlRight: new Button({ htmlParent: keyboard, keyCode: KEY_CODES.ControlRight, enLower: 'Ctrl', enUpper: 'Ctrl', ruLower: 'Ctrl', ruUpper: 'Ctrl' }),
};

function changeLanguage() {
  if (language === LANGUAGES.en) {
    language = LANGUAGES.ru;
  } else {
    language = LANGUAGES.en;
  }

  sessionStorage.setItem('language', language);
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, letterCase);
  });
}

function shiftDown() {
  let shiftRegister;
  if (letterCase === letterCases.lower) shiftRegister = letterCases.upper;
  else shiftRegister = letterCases.lower;
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, shiftRegister);
  });
}

function shiftUp() {
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, letterCase);
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
  if (letterCase === letterCases.lower) letterCase = letterCases.upper;
  else {
    letterCase = letterCases.lower;
    keyMap.CapsLock.getHtmlElement().classList.remove('active');
  }
  Object.values(keyMap).forEach((button) => {
    button.getHtmlElement().innerHTML = button.getLangChar(language, letterCase);
  });
}

function buttonHandlerDown(keyCode) {
  textArea.focus();
  if (keyCode === null || keyCode === undefined) return;
  keyMap[keyCode].getHtmlElement().classList.add('active');
  if (keyCode === KEY_CODES.AltRight || keyCode === KEY_CODES.AltLeft);
  else if (keyCode === KEY_CODES.ControlRight || keyCode === KEY_CODES.ControlLeft);
  else if (keyCode === KEY_CODES.CapsLock) capsLock();
  else if (keyCode === KEY_CODES.Delete) selectionDelete();
  else if (keyCode === KEY_CODES.Space) space();
  else if (keyCode === KEY_CODES.Backspace) backspace();
  else if (keyCode === KEY_CODES.Enter) enter();
  else if (keyCode === KEY_CODES.Tab) tab();
  else if (keyCode === KEY_CODES.ShiftLeft || keyCode === KEY_CODES.ShiftRight) shiftDown();
  else textArea.value += keyMap[keyCode].getHtmlElement().innerHTML;
}

function buttonHandlerUp(keyCode) {
  textArea.focus();
  if (keyCode === null || keyCode === undefined) return;
  if (keyCode === KEY_CODES.CapsLock) return;
  keyMap[keyCode].getHtmlElement().classList.remove('active');
  if (keyCode === KEY_CODES.ShiftLeft || keyCode === KEY_CODES.ShiftRight) shiftUp();
}

document.addEventListener('keydown', (event) => {
  if (keyMap[event.code] === undefined) return;
  event.preventDefault();
  if (event.shiftKey === true && event.altKey === true) changeLanguage();
  buttonHandlerDown(event.code);
});

document.addEventListener('keyup', (event) => {
  if (keyMap[event.code] === undefined) return;
  event.preventDefault();
  buttonHandlerUp(event.code);
});

keyboard.addEventListener('mousedown', (event) => {
  buttonHandlerDown(event.target.getAttribute('data'));
});

keyboard.addEventListener('mouseup', (event) => {
  buttonHandlerUp(event.target.getAttribute('data'));
});
