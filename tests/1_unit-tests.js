const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const spo = '<span class="highlight">';
const spc = '</span>';

suite('Unit Tests', () => {

  test('Translate Mangoes are my favorite fruit. to British English', function() {
    assert.equal(translator.translation('Mangoes are my favorite fruit.', 'american-to-british'), `Mangoes are my ${spo}favourite${spc} fruit.`);
  });

  test('Translate I ate yogurt for breakfast. to British English', function() {
    assert.equal(translator.translation('I ate yogurt for breakfast.', 'american-to-british'), `I ate ${spo}yoghurt${spc} for breakfast.`);
  });

  test("Translate We had a party at my friend's condo. to British English", function() {
    assert.equal(translator.translation("We had a party at my friend's condo.", 'american-to-british'), `We had a party at my friend's ${spo}flat${spc}.`);
  });

  test("Translate Can you toss this in the trashcan for me? to British English", function() {
    assert.equal(translator.translation("Can you toss this in the trashcan for me?", 'american-to-british'), `Can you toss this in the ${spo}bin${spc} for me?`);
  });

  test("Translate The parking lot was full. to British English", function() {
    assert.equal(translator.translation("The parking lot was full.", 'american-to-british'), `The ${spo}car park${spc} was full.`);
  });

  test("Translate Like a high tech Rube Goldberg machine. to British English", function() {
    assert.equal(translator.translation("Like a high tech Rube Goldberg machine.", 'american-to-british'), `Like a high tech ${spo}Heath Robinson device${spc}.`);
  });

  test("Translate To play hooky means to skip class or work. to British English", function() {
    assert.equal(translator.translation("To play hooky means to skip class or work.", 'american-to-british'), `To ${spo}bunk off${spc} means to skip class or work.`);
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", function() {
    assert.equal(translator.translation("No Mr. Bond, I expect you to die.", 'american-to-british'), `No ${spo}Mr${spc} Bond, I expect you to die.`);
  });

  test("Translate Dr. Grosh will see you now. to British English", function() {
    assert.equal(translator.translation("Dr. Grosh will see you now.", 'american-to-british'), `${spo}Dr${spc} Grosh will see you now.`);
  });

  test("Translate Lunch is at 12:15 today. to British English", function() {
    assert.equal(translator.translation("Lunch is at 12:15 today.", 'american-to-british'), `Lunch is at ${spo}12.15${spc} today.`);
  });

  test("Translate We watched the footie match for a while. to American English", function() {
    assert.equal(translator.translation("We watched the footie match for a while.", 'british-to-american'), `We watched the ${spo}soccer${spc} match for a while.`);
  });

  test("Translate Paracetamol takes up to an hour to work. to American English", function() {
    assert.equal(translator.translation("Paracetamol takes up to an hour to work.", 'british-to-american'), `${spo}Tylenol${spc} takes up to an hour to work.`);
  });

  test("Translate First, caramelise the onions. to American English", function() {
    assert.equal(translator.translation("First, caramelise the onions.", 'british-to-american'), `First, ${spo}caramelize${spc} the onions.`);
  });

  test("Translate I spent the bank holiday at the funfair. to American English", function() {
    assert.equal(translator.translation("I spent the bank holiday at the funfair.", 'british-to-american'), `I spent the ${spo}public holiday${spc} at the ${spo}carnival${spc}.`);
  });

  test("Translate I had a bicky then went to the chippy. to American English", function() {
    assert.equal(translator.translation("I had a bicky then went to the chippy.", 'british-to-american'), `I had a ${spo}cookie${spc} then went to the ${spo}fish-and-chip shop${spc}.`);
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", function() {
    assert.equal(translator.translation("I've just got bits and bobs in my bum bag.", 'british-to-american'), `I've just got ${spo}odds and ends${spc} in my ${spo}fanny pack${spc}.`);
  });

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function() {
    assert.equal(translator.translation("The car boot sale at Boxted Airfield was called off.", 'british-to-american'), `The ${spo}swap meet${spc} at Boxted Airfield was called off.`);
  });

  test("Translate Have you met Mrs Kalyani? to American English", function() {
    assert.equal(translator.translation("Have you met Mrs Kalyani?", 'british-to-american'), `Have you met ${spo}Mrs.${spc} Kalyani?`);
  });

  test("Translate Prof Joyner of King's College, London. to American English", function() {
    assert.equal(translator.translation("Prof Joyner of King's College, London.", 'british-to-american'), `${spo}Prof.${spc} Joyner of King's College, London.`);
  });

  test("Translate Tea time is usually around 4 or 4.30. to American English", function() {
    assert.equal(translator.translation("Tea time is usually around 4 or 4.30.", 'british-to-american'), `Tea time is usually around 4 or ${spo}4:30${spc}.`);
  });

  test('Highlight translation in Mangoes are my favorite fruit.', function() {
    assert.equal(translator.translation('Mangoes are my favorite fruit.', 'american-to-british'), `Mangoes are my ${spo}favourite${spc} fruit.`);
  });

  test('Highlight translation in I ate yogurt for breakfast.', function() {
    assert.equal(translator.translation('I ate yogurt for breakfast.', 'american-to-british'), `I ate ${spo}yoghurt${spc} for breakfast.`);
  });

  test("Highlight translation in We watched the footie match for a while.", function() {
    assert.equal(translator.translation("We watched the footie match for a while.", 'british-to-american'), `We watched the ${spo}soccer${spc} match for a while.`);
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", function() {
    assert.equal(translator.translation("Paracetamol takes up to an hour to work.", 'british-to-american'), `${spo}Tylenol${spc} takes up to an hour to work.`);
  });
});