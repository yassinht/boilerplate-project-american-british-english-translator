const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translation(text, locale) {
    const americanHour = /([0-9]{1,2})(\:)([0-9]{2})/g;
    const britishHour = /([0-9]{1,2})(\.)([0-9]{2})/g;
    let translatedText = text.slice();
    let amWord;
    let btWord;
    let amSpellingWord;
    let btSpellingWord;
    let amTitle;
    let btTitle;
    
    // american-only translation
    for (let i in  americanOnly) {
      if (locale === 'american-to-british') {
        amWord = new RegExp(`${i}[ .]`, 'gi');
        if (amWord.test(translatedText)) {
          translatedText = translatedText.replace(new RegExp(`${i}`, 'gi'), `<span class="highlight">${americanOnly[i]}</span>`);
        }
      }
    }

    // british-only translation
    for (let j in  britishOnly) {
      if (locale === 'british-to-american') {
        btWord = new RegExp(`${j}[ .]`, 'gi');
        if (btWord.test(translatedText)) {
          translatedText = translatedText.replace(new RegExp(`${j}`, 'gi'), `<span class="highlight">${britishOnly[j]}</span>`);
        }
      }
    }

    // spelling handle
    for (let k in americanToBritishSpelling) {
      if (locale === 'american-to-british') {
        amSpellingWord = new RegExp(`${k}[ .]`, 'gi');
        if (amSpellingWord.test(translatedText)) {
          translatedText = translatedText.replace(new RegExp(`${k}`, 'gi'), `<span class="highlight">${americanToBritishSpelling[k]}</span>`);
        }
      }
      if (locale === 'british-to-american') {
        btSpellingWord = new RegExp(`${americanToBritishSpelling[k]}[ .]`, 'gi');
        if (btSpellingWord.test(translatedText)) {
          translatedText = translatedText.replace(new RegExp(`${americanToBritishSpelling[k]}`, 'gi'), `<span class="highlight">${k}</span>`);
        }
      }
    }
    
    // manage titles
    for (let l in americanToBritishTitles) {
      if (locale === 'american-to-british') {
        amTitle = new RegExp(`${americanToBritishTitles[l]}\. `, 'gi');
        if (amTitle.test(translatedText)) {
          translatedText = translatedText.replace(amTitle, `<span class="highlight">${americanToBritishTitles[l].charAt(0).toUpperCase() + americanToBritishTitles[l].slice(1)}</span> `);
        }
      }
      
      if (locale === 'british-to-american') {
        btTitle = new RegExp(`${americanToBritishTitles[l]} `, 'gi');
        if (btTitle.test(translatedText)) {
          translatedText = translatedText.replace(btTitle, `<span class="highlight">${l.charAt(0).toUpperCase() + l.slice(1)}</span> `);
        }
      }
    }

    // handle differents hour formats
    if (locale === 'american-to-british' && americanHour.test(translatedText)) {
      translatedText = translatedText.replace(americanHour, '<span class="highlight">$1.$3</span>');
    }
    if (locale === 'british-to-american' && britishHour.test(translatedText)) {
      translatedText = translatedText.replace(britishHour, '<span class="highlight">$1:$3</span>');
    }

    if (text === translatedText) {
      translatedText = 'Everything looks good to me!';
    }

    return translatedText;
  }
}

module.exports = Translator;