# uNumber

## Unsigned integers (numbers) in JavaScript

Providing more type safety to JavaScript

### Functions

The package contains several useful functions:

- `uNumber`: Used for testing to make sure any number is unsigned
- `uNumber8`: Used for testing to make sure any 8-bit number is unsigned
- `uNumber16`: Used for testing to make sure any 16-bit number is unsigned
- `uNumber32`: Used for testing to make sure any 32-bit number is unsigned
- `uNumber53`: Used for testing to make sure any 53-bit number is unsigned

### Syntax

One of the above functions can easily be called with the following:

`uNumber(x)`

The functions also provide a way to return the original value if that is desirable:

`uNumber(x, true)`

### Examples/Usage

```js
for (let i = 100; i > 1; i--) {
  uNumber(i) // Make sure the value of `i` is unsigned
  
  console.log(i)
}
```

```js
const x = 2**16

uNumber8(x) // Will throw an error because `2^16` is larger than 8-bits

```
