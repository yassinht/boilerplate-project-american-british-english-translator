'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;     
      
      // handle empty text
      if (!/[a-z]/i.test(text)) {
        return res.json({ error: 'No text to translate' });
      }
      
      // handle required fields
      if (!text || !locale) {
        return res.json({ error: 'Required field(s) missing' });
      }    
      
      // handle invalid locale value
      if (!['american-to-british', 'british-to-american'].includes(locale)) {
        return res.json({ error: 'Invalid value for locale field' });
      }

      // translation
      const translation = translator.translation(text, locale);

      res.json({ text: text, translation: translation });
    });
};