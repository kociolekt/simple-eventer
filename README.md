# simple-eventer
> Simple events interface for es6/babel classes.

## installation
Install from npm:
```
$ npm install simple-eventer
```

## usage
Use it as base class for your module.

```js
import SimpleEventer from 'simple-eventer';

class Example extends SimpleEventer {
  constructor() {
    super();

    this.seconds = 0;

    setInterval(() => {
      this.seconds += 1;
      // Fire your event
      this.fire('onesecond', this.seconds);
    }, 1000);
  }
}
```

Bind events to your module.
```js
// Bind your event
(new Example()).on('onesecond', (event) => {
  console.log(`Type: ${event.type}, Target/Data: ${event.target}`);
});
// Type: onesecond, Target/Data: 1
// Type: onesecond, Target/Data: 2
// Type: onesecond, Target/Data: 3
```
