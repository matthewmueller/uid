
# uid

  Generate unique ids of any length.
  
  Internally this implementation uses `Math.random()` to remain small, fast and dependency free. However, `Math.random()` is not actually all that random so if you need a better random number generator, I recommend [uid2](https://github.com/coreh/uid2).

## Installation

### In the browser, using component:

    $ component install matthewmueller/uid

### Using node.js:

    $ npm install uid

## Examples

```js
 uid(10) => "hbswt489ts"
 uid() => "rhvtfnt" Defaults to 7
```

## License

  MIT
