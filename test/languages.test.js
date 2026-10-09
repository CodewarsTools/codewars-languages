import test from 'node:test';
import assert from 'node:assert/strict';

import languages from '../languages.js';

test('languages is an array', () => {
  assert.ok(Array.isArray(languages));
});

test('languages is frozen', () => {
  assert.ok(Object.isFrozen(languages));
});

test('all language identifiers are strings', () => {
  assert.ok(languages.every((language) => typeof language === 'string'));
});

test('language identifiers are unique', () => {
  assert.equal(new Set(languages).size, languages.length);
});

test('languages includes expected identifiers', () => {
  assert.ok(languages.includes('javascript'));
  assert.ok(languages.includes('python'));
  assert.ok(languages.includes('ruby'));
});

test('cannot add language identifiers', () => {
  assert.throws(() => {
    languages.push('newlanguage');
  }, TypeError);
});

test('cannot remove language identifiers', () => {
  assert.throws(() => {
    languages.pop();
  }, TypeError);
});

test('cannot modify language identifiers', () => {
  assert.throws(() => {
    languages[0] = 'newlanguage';
  }, TypeError);
});

test('cannot delete language identifiers', () => {
  assert.throws(() => {
    delete languages[0];
  }, TypeError);
});