import languages from '../languages.js';

// Valid operations
languages.includes('javascript');
languages.indexOf('python');

const language: string = languages[0];

// @ts-expect-error The array is readonly.
languages.push('new-language');

// @ts-expect-error Numbers are not strings.
const invalidLanguage: number = languages[0];

// @ts-expect-error The argument must be a string.
languages.includes(123);