# @codewarstools/codewars-languages

A list of programming language identifiers used by the [Codewars API](https://dev.codewars.com/).

## Installation

```bash
npm install @codewarstools/codewars-languages
```

## Usage

```js
import languages from '@codewarstools/codewars-languages';

console.log(languages);

// Output: ['agda', 'bf', 'c', 'cfml', 'clojure', ...]

```

## Example

Check whether a language identifier is included in the list:

```js
import languages from '@codewarstools/codewars-languages';

const language = 'javascript';

if (languages.includes(language)) {
  // Output: javascript is included in the list.
  console.log(`${language} is included in the list.`);
}
```

## TypeScript Support

This package includes TypeScript declarations (`languages.d.ts`) for type checking and editor support.

The exported array is typed as `readonly string[]` (editors such as VS Code can also infer this type from JavaScript thanks to `Object.freeze()`).


## Repository

[CodewarsTools/codewars-languages](https://github.com/CodewarsTools/codewars-languages)

## License

[MIT](LICENSE)
